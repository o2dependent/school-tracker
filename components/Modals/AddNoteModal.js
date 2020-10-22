import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import Modal from '../Styled💅/ModalStyles';
import gql from 'graphql-tag';
import { Button, Form, TextInput } from '../Styled💅/InputStyles';

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
			<Form
				handleSubmit={() => {
					if (noteBody !== '') {
						addNote({
							variables: {
								note: {
									body: noteBody,
								},
							},
						});
						setNoteBody('');
						closeModal();
					}
				}}
			>
				<TextInput
					name='note'
					label={'Note body'}
					value={noteBody}
					onChange={(e) => setNoteBody(e.target.value)}
				/>
				<Button type='submit'>Submit</Button>
			</Form>
		</Modal>
	);
}
