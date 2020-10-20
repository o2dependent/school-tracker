import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import DailyNotes from '../components/DailyNotes';

const HELLO_QUERY = gql`
	query HelloQuery {
		sayHello
	}
`;

function Home() {
	const { data, loading, error } = useQuery(HELLO_QUERY);
	if (loading) return <div />;

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>{data.sayHello}</h1>
				<DailyNotes />
			</main>
		</div>
	);
}
export default withApollo(Home);
