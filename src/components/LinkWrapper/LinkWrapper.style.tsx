import styled from '@emotion/styled';

export const WrappedLink = styled('div')`
	display: inline-block;
	transition: all 0.2s ease-in-out;
	color: #d96c75;
	text-decoration: none;
	cursor: pointer;
	font-size: 0.875rem;
	margin-right: 0.25rem;

	@media (min-width: 800px) {
		margin-right: 0.75rem;
	} ;
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
