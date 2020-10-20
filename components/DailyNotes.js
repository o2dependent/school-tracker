import React, { useState } from 'react';
import AddNoteModal from './Modals/AddNoteModal';
import gql from 'graphql-tag';
import Note from './Note';
import { useQuery } from '@apollo/react-hooks';

const GET_NOTES = gql`
	query getNotes {
		notes {
			_id
			body
		}
	}
`;

export default function DailyNotes() {
	const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
	const { data, loading } = useQuery(GET_NOTES);
	let notes;
	if (!loading) notes = data.notes;

	console.log(notes);
	return (
		<section>
			<h1>Daily Notes</h1>
			<button onClick={() => setIsNoteModalOpen(true)}>Add Note</button>
			<AddNoteModal
				isNoteModalOpen={isNoteModalOpen}
				setIsNoteModalOpen={setIsNoteModalOpen}
			/>
			{!loading ? (
				typeof notes !== 'undefined' ? (
					notes.map((note, i) => (
						<Note key={note._id} body={note.body} />
					))
				) : (
					<h1>No notes found.</h1>
				)
			) : (
				<div />
			)}
		</section>
	);
}
