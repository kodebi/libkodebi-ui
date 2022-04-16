import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import '@fontsource/quicksand/400.css';

export const WrappedLink = styled(NavLink)`
	display: inline-block;
	padding: 0.25rem;
	transition: all 0.2s ease-in-out;
	color: #d96c75;
	text-decoration: none;
	cursor: pointer;
	font-size: 0.875rem;
	font-family: 'Quicksand', 'sans-serif';
`;

export const MenuLink = styled(WrappedLink)`
	color: #242121;

	&:hover {
		color: #d96c75;
	}
`;

export const FooterLink = styled(WrappedLink)`
	color: #242121;

	&:hover {
		color: rgb(247, 247, 247);
	}
`;
