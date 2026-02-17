import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
    name: string;
    phone: string;
    message: string;
    status: "new" | "read" | "replied" | "closed";
    createdAt: Date;
    updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000,
        },
        status: {
            type: String,
            enum: ["new", "read", "replied", "closed"],
            default: "new",
        },
    },
    {
        timestamps: true,
    },
);

// Index for faster queries
contactSchema.index({ status: 1, createdAt: -1 });

export const Contact = mongoose.model<IContact>("Contact", contactSchema);
