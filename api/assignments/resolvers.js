import Assignments from './assignments';

export const assignmentsResolvers = {
	Query: {
		async assignments() {
			try {
				const assignments = await Assignments.find();
				return assignments;
			} catch (e) {
				console.log(e);
			}
		},
	},
};
