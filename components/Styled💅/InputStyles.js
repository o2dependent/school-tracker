import styles from '../../styles/styles';

const { default: styled } = require('styled-components');

// Text Input

const TextInputStyles = styled.input`
	width: 100%;
	background: #fefefe;
	border: none;
	padding: 0.25rem 0.15rem;
	${styles.borderRadius(1)}
	outline: none;
	margin-bottom: 0.5rem;

	&:focus {
		border: none;
	}
`;

export function TextInput({ value, onChange, label }) {
	return (
		<label>
			{label}
			<TextInputStyles type='text' value={value} onChange={onChange} />
		</label>
	);
}

// Text Area

const TextAreaStyles = styled.textarea``;

export function TextArea({ value, handler }) {
	return <TextAreaStyles value={value} onChange={handler} />;
}

// Form

const FormStyles = styled.form`
	height: 100%;
	width: 80%;
	display: flex;
	flex-direction: column;
`;

export function Form({ children, handleSubmit }) {
	return (
		<FormStyles
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			{children}
		</FormStyles>
	);
}

// Button styles

const GlobalButtonStyles = `
	outline: none;
	border: none;
	width: fit-content;
	padding: 0.5rem 1.5rem;
	margin: 0 auto;
	margin-top: 0.5rem;
	background: #95D3BE;
	color: #FEFEFE;
	${styles.borderRadius(1)}
`;

export const Button = styled.button`
	${GlobalButtonStyles}
`;
