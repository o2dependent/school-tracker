import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import useLockScroll from '../../hooks🎣/useLockScroll';
import useOnClickOutside from '../../hooks🎣/useOnClickOutside';
import styles from '../../styles/styles';

const ModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: #000000;
`;

const ModalBody = styled(motion.div)`
	min-height: 15rem;
	min-width: 35rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	${styles.borderRadius(1)}
	padding: 1.5rem 1rem;
	padding-top: 0.5rem;
	z-index: 9999;
	// Colors to be determined by global style theme
	background: ${styles.modalCard.modalBody};
	color: ${styles.modalCard.color};
	// Internal element styles
`;

const ModalHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
	// Internal element styles
	& h3 {
		margin: 0;
		margin-left: auto;
	}
`;

const XButton = styled.div`
	margin-left: auto;
	background: none;
	position: relative;
	height: 1.5rem;
	width: 1.5rem;
	border: none;
	&::after {
		border-radius: 5px;
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: rotate(-45deg);
		height: 100%;
		width: 0.07rem;
		background: #fefefe;
	}
	&::before {
		border-radius: 5px;
		content: '';
		position: absolute;
		top: 0;
		right: 50%;
		transform: rotate(45deg);
		height: 100%;
		width: 0.07rem;
		background: #fefefe;
	}
`;

const ModalChildrenContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 1rem;
`;

const Modal = ({ isModalOpen, closeModal, children }) => {
	// Create a ref that is added to useOnClickOutside
	const ref = useRef();
	// Add ref and modal closing function to outside click hook
	useOnClickOutside(ref, closeModal);
	// Remove scroll
	useLockScroll(isModalOpen);

	return (
		<AnimatePresence>
			{isModalOpen ? (
				<>
					<ModalWrapper
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.1 }}
						exit={{
							opacity: 0,
							transition: { duration: 0.1 },
						}}
						transition={{
							duration: 0.2,
						}}
					/>
					{/* ref item */}
					<ModalBody
						ref={ref}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
						transition={{
							duration: 0.2,
						}}
					>
						<ModalHeader>
							<XButton onClick={closeModal} />
						</ModalHeader>
						<ModalChildrenContainer>
							{children}
						</ModalChildrenContainer>
					</ModalBody>
				</>
			) : null}
		</AnimatePresence>
	);
};

export default Modal;
