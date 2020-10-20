import React from 'react';
import { useRouter } from 'next/router';

export default function assignment_id() {
	const router = useRouter();
	const { assignment_id, subject_name } = router.query;

	return (
		<div>
			<h1>{subject_name}</h1>
			<h1>{assignment_id}</h1>
		</div>
	);
}
