import * as mongoose from 'mongoose';
const schema = mongoose.Schema;

export const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    books: [{ type: schema.Types.ObjectId, ref: 'Book'}]
});