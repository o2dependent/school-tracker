// Imports
import connectDb from '../../lib/mongoose';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import Notes from '../../api/notes/Notes.graphql';
import { ApolloServer, gql } from 'apollo-server-micro';
import { notesMutations } from '../../api/notes/mutations';
import { notesResolvers } from '../../api/notes/resolvers';
import Assignments from '../../api/assignments/Assignments.graphql';
import { assignmentsMutations } from '../../api/assignments/mutations';
import { assignmentsResolvers } from '../../api/assignments/resolvers';

// GraphQL type definitions

const fakeTypeDefs = gql`
	type Query {
		sayHello: String
	}
`;

const typeDefs = mergeTypeDefs([fakeTypeDefs, Notes, Assignments]);

// GraphQL resolvers

const fakeResolvers = {
	Query: {
		sayHello: () => {
			return 'Hello Hello!';
		},
	},
};

const resolvers = mergeResolvers([
	fakeResolvers,
	notesResolvers,
	notesMutations,
	assignmentsResolvers,
	assignmentsMutations,
]);

// Apollo server

const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Config

export const config = {
	api: {
		bodyParser: false,
	},
};

// GraphQl API route

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);
