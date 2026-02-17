import { Router, Request, Response } from "express";
import { z } from "zod";
import { Contact } from "../models";
import { sendNotification } from "../services/notification";

const router = Router();

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2).max(100),
    phone: z.string().regex(/^[\d\s\+\-\(\)]+$/),
    message: z.string().min(10).max(5000),
});

// Create contact message
router.post("/", async (req: Request, res: Response) => {
    try {
        const validatedData = contactSchema.parse(req.body);

        const contact = new Contact(validatedData);
        await contact.save();

        // Send notification
        await sendNotification("contact", {
            name: validatedData.name,
            phone: validatedData.phone,
            message: validatedData.message,
        });

        res.status(201).json({
            success: true,
            message: "Contact message created",
            data: { id: contact._id },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                error: "Validation error",
                details: error.errors,
            });
        }

        console.error("Create contact error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Get all contacts (admin)
router.get("/", async (req: Request, res: Response) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const query: Record<string, unknown> = {};
        if (status) query.status = status;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Contact.countDocuments(query);

        res.json({
            success: true,
            data: contacts,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Get contacts error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Update contact status (admin)
router.patch("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            id,
            { status },
            { new: true },
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                error: "Contact not found",
            });
        }

        res.json({
            success: true,
            data: contact,
        });
    } catch (error) {
        console.error("Update contact error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

export default router;
