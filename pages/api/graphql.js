// Imports
import { ApolloServer, gql } from 'apollo-server-micro';
import { notesMutations } from '../../api/notes/mutations';
import { notesResolvers } from '../../api/notes/resolvers';
import connectDb from '../../lib/mongoose';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import Notes from '../../api/notes/Notes.graphql';

// GraphQL type definitions

const fakeTypeDefs = gql`
	type Query {
		sayHello: String
	}
`;

const typeDefs = mergeTypeDefs([fakeTypeDefs, Notes]);

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
