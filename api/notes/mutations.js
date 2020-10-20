// Notes mutations
import Notes from './notes';

export const notesMutations = {
	Mutation: {
		async addNote(_, { note }) {
			try {
				const newNote = Notes.create({
					...note,
				});
				return newNote;
			} catch (e) {
				console.log(e);
			}
		},
	},
};
