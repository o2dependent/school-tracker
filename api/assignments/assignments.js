// Assignment database schemas

import mongoose, { Schema } from 'mongoose';

export const AssignmentsSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	grade: {
		type: Number,
		required: false,
	},
	completed: {
		type: Boolean,
		required: true,
	},
	/* Create date type before using
    dueDate: {
        type: Date,
        required: true,
    }
    */
});

export default mongoose.models.assignments ||
	mongoose.model('assignments', AssignmentsSchema);
