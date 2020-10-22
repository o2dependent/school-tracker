import Head from 'next/head';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import DailyNotes from '../components/DailyNotes';
import Layout from '../components/Layouts/Layout';

function Home() {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main style={{ width: '100%', height: '100vh' }}>
				<h1>NAN</h1>
			</main>
		</Layout>
	);
}
export default withApollo(Home);
