import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

export default function Layout({ children }) {
	return (
		<LayoutStyle>
			<SideBar />
			<LayoutChildrenWrapper>{children}</LayoutChildrenWrapper>
		</LayoutStyle>
	);
}

const LayoutStyle = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

const LayoutChildrenWrapper = styled.main`
	width: 100%;
	height: 100%;
	flex-grow: 1;
	background: #2f2d4a;
`;
