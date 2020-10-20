import React from 'react';
import { useRouter } from 'next/router';

export default function subject_name() {
	const router = useRouter();
	const { subject_name } = router.query;

	return (
		<div>
			<h1>{subject_name}</h1>
		</div>
	);
}
