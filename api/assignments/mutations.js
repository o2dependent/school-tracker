import Assignments from './assignments';

export const assignmentsMutations = {
	Mutation: {
		async addAssignment(_, { assignment }) {
			try {
				console.log('ASSIGNMENT MUTATION');
				const newAssignment = Assignments.create({
					...assignment,
				});
				return newAssignment;
			} catch (e) {
				console.log(e);
			}
		},
	},
};
