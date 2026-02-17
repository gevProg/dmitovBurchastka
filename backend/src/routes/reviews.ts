import { Router, Request, Response } from "express";
import { z } from "zod";
import { Review } from "../models";
import { sendNotification } from "../services/notification";

const router = Router();

// Validation schema
const reviewSchema = z.object({
    name: z.string().min(2).max(100),
    rating: z.number().min(1).max(5),
    text: z.string().min(10).max(2000),
});

// Get approved reviews (public)
router.get("/", async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 20 } = req.query;

        const reviews = await Review.find({ isApproved: true })
            .sort({ createdAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Review.countDocuments({ isApproved: true });

        res.json({
            success: true,
            data: reviews,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Get reviews error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Create review
router.post("/", async (req: Request, res: Response) => {
    try {
        const validatedData = reviewSchema.parse(req.body);

        const review = new Review({
            ...validatedData,
            isApproved: false, // Needs moderation
        });
        await review.save();

        // Send notification
        await sendNotification("review", {
            name: validatedData.name,
            rating: validatedData.rating,
            text: validatedData.text,
        });

        res.status(201).json({
            success: true,
            message: "Review submitted for moderation",
            data: { id: review._id },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                error: "Validation error",
                details: error.errors,
            });
        }

        console.error("Create review error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Get all reviews including pending (admin)
router.get("/admin", async (req: Request, res: Response) => {
    try {
        const { isApproved, page = 1, limit = 20 } = req.query;

        const query: Record<string, unknown> = {};
        if (isApproved !== undefined) {
            query.isApproved = isApproved === "true";
        }

        const reviews = await Review.find(query)
            .sort({ createdAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Review.countDocuments(query);

        res.json({
            success: true,
            data: reviews,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Get admin reviews error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Approve/reject review (admin)
router.patch("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isApproved } = req.body;

        const review = await Review.findByIdAndUpdate(
            id,
            { isApproved },
            { new: true },
        );

        if (!review) {
            return res.status(404).json({
                success: false,
                error: "Review not found",
            });
        }

        res.json({
            success: true,
            data: review,
        });
    } catch (error) {
        console.error("Update review error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// Delete review (admin)
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const review = await Review.findByIdAndDelete(id);

        if (!review) {
            return res.status(404).json({
                success: false,
                error: "Review not found",
            });
        }

        res.json({
            success: true,
            message: "Review deleted",
        });
    } catch (error) {
        console.error("Delete review error:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

export default router;
