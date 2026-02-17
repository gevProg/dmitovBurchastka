import mongoose, { Document, Schema } from "mongoose";

export interface ICallback extends Document {
    name: string;
    phone: string;
    status: "new" | "processing" | "completed" | "cancelled";
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

const callbackSchema = new Schema<ICallback>(
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
        status: {
            type: String,
            enum: ["new", "processing", "completed", "cancelled"],
            default: "new",
        },
        notes: {
            type: String,
            maxlength: 1000,
        },
    },
    {
        timestamps: true,
    },
);

// Index for faster queries
callbackSchema.index({ status: 1, createdAt: -1 });
callbackSchema.index({ phone: 1 });

export const Callback = mongoose.model<ICallback>("Callback", callbackSchema);
