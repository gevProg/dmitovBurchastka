import { Router, Request, Response } from "express";
import { z } from "zod";
import { Callback } from "../models";
import { sendNotification } from "../services/notification";

const router = Router();

// Validation schema
const callbackSchema = z.object({
    name: z.string().min(2).max(100),
    phone: z.string().regex(/^[\d\s\+\-\(\)]+$/),
});

// Create callback request
router.post("/", async (req: Request, res: Response) => {
    try {
        const validatedData = callbackSchema.parse(req.body);

        const callback = new Callback(validatedData);
        await callback.save();

        // Send notification
        await sendNotification("callback", {
            name: validatedData.name,
            phone: validatedData.phone,
        });

        res.status(201).json({
            success: true,
            message: "Callback request created",
            data: { id: callback._id },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                error: "Validation error",
                details: error.errors,
            });
        }

        console.error("Create callback error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Get all callbacks (admin)
router.get("/", async (req: Request, res: Response) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const query: Record<string, unknown> = {};
        if (status) query.status = status;

        const callbacks = await Callback.find(query)
            .sort({ createdAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Callback.countDocuments(query);

        res.json({
            success: true,
            data: callbacks,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Get callbacks error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Update callback status (admin)
router.patch("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status, notes } = req.body;

        const callback = await Callback.findByIdAndUpdate(
            id,
            { status, notes },
            { new: true },
        );

        if (!callback) {
            return res.status(404).json({
                success: false,
                error: "Callback not found",
            });
        }

        res.json({
            success: true,
            data: callback,
        });
    } catch (error) {
        console.error("Update callback error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

export default router;
