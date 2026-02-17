import mongoose, { Document, Schema } from "mongoose";

export interface IReview extends Document {
    name: string;
    rating: number;
    text: string;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const reviewSchema = new Schema<IReview>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        text: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000,
        },
        isApproved: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

// Index for queries
reviewSchema.index({ isApproved: 1, createdAt: -1 });

export const Review = mongoose.model<IReview>("Review", reviewSchema);
