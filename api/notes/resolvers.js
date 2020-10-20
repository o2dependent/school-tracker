// Notes resolvers
import Notes from './notes';

export const notesResolvers = {
	Query: {
		async notes() {
			try {
				const notes = await Notes.find();
				return notes;
			} catch (e) {
				console.log(e);
			}
		},
	},
};
