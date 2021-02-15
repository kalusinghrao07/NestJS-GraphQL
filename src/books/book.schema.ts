
import * as mongoose from 'mongoose';
const schema = mongoose.Schema;

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    authors: [{ type: schema.Types.ObjectId, ref: 'Author'}]
});