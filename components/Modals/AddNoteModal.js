import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import Modal from '../Styled💅/ModalStyles';
import gql from 'graphql-tag';

const ADD_NOTE = gql`
	mutation addNote($note: NoteInput) {
		addNote(note: $note) {
			_id
			body
		}
	}
`;

export default function AddNoteModal({ isNoteModalOpen, setIsNoteModalOpen }) {
	const [noteBody, setNoteBody] = useState('');

	const [addNote] = useMutation(ADD_NOTE, { refetchQueries: ['getNotes'] });

	const closeModal = () => {
		setIsNoteModalOpen(false);
	};

	return (
		<Modal isModalOpen={isNoteModalOpen} closeModal={closeModal}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(noteBody);
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
