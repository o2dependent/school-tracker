import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import Modal from './Styled💅/ModalStyles';
import gql from 'graphql-tag';

const ADD_ASSIGNMENT = gql`
	mutation addAssignment($assignment: AssignmentInput) {
		addAssignment(assignment: $assignment) {
			_id
			body
			title
			completed
		}
	}
`;

export default function AddNoteModal({ isNoteModalOpen, setIsNoteModalOpen }) {
	const [noteBody, setNoteBody] = useState('');

	const [addAssignment] = useMutation(ADD_ASSIGNMENT, {
		refetchQueries: ['getAssignments'],
	});

	const closeModal = () => {
		setIsNoteModalOpen(false);
	};

	return (
		<Modal isModalOpen={isNoteModalOpen} closeModal={closeModal}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addNote({
						variables: {
							note: {
								body: noteBody,
							},
						},
					});
					setNoteBody('');
					closeModal();
				}}
			>
				<input
					type='text'
					name='note'
					value={noteBody}
					onChange={(e) => setNoteBody(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</Modal>
	);
}
