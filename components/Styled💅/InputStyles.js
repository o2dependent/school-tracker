const { default: styled } = require('styled-components');

// Text Input

const TextInputStyles = styled.input``;

export function TextInput({ value, handler }) {
	return <TextInputStyles type='text' value={value} onChange={handler} />;
}

// Text Area

const TextAreaStyles = styled.textarea``;

export function TextArea({ value, handler }) {
	return <TextAreaStyles value={value} onChange={handler} />;
}
