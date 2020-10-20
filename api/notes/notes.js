// Database collections

import mongoose, { Schema } from 'mongoose';

export const NotesSchema = new Schema({
	body: {
		type: String,
		required: true,
	},
});

export default mongoose.models.notes || mongoose.model('notes', NotesSchema);
