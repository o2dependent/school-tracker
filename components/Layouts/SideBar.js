import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../../styles/styles';

export default function SideBar() {
	const [isStudentSelectOpen, setIsStudentSelectOpen] = useState(false);

	return (
		<>
			<SideBarContainer>
				<CircleIconButton></CircleIconButton>
				<CircleIconButton></CircleIconButton>
				<CircleIconButton></CircleIconButton>
				<CircleUserButton
					onClick={() => setIsStudentSelectOpen(!isStudentSelectOpen)}
				></CircleUserButton>
			</SideBarContainer>
			<StudentSelect
				initial={{ x: '-150%' }}
				animate={{ x: isStudentSelectOpen ? 0 : '-150%' }}
				transition={{ type: 'spring', bounce: 0.02 }}
			>
				{Array(5)
					.fill()
					.map((x) => (
						<CircleStudentSelectButton></CircleStudentSelectButton>
					))}
			</StudentSelect>
		</>
	);
}

const SideBarContainer = styled.nav`
	position: sticky;
	top: 0;
	width: 72px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0.25rem;
	background: #1b1a27;
	z-index: 2;
`;

const CircleIconButton = styled.div`
	margin: 0 auto;
	top: 0;
	margin-bottom: 1rem;
	width: 48px;
	height: 48px;
	border-radius: 30px;
	background: #3d5d70;
	opacity: 0.8;
	transition: border-radius 350ms, opacity 100ms;
	&:hover {
		opacity: 1;
		${styles.borderRadius(2)}
	}
`;

const CircleUserButton = styled(CircleIconButton)`
	margin-top: auto;
	background: #2d3a4c;
	${styles.borderRadius(2)}
`;

const CircleStudentSelectButton = styled(CircleIconButton)`
	margin: 0 6px;
`;

const StudentSelect = styled(motion.div)`
	display: flex;
	position: fixed;
	bottom: calc(1rem - 3px);
	left: 75px;
	height: 60px;
	width: fit-content;
	padding: 6px 3px;
	background: #4f8490;
	${styles.borderRadius(1)}
`;
