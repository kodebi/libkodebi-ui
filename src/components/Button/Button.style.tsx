import styled from '@emotion/styled';

const DefaultButtonStyle = styled('button')`
	transition: all 0.3s linear;
	font-weight: 400;
	line-height: 1;
	cursor: pointer;
	border-radius: 0.25rem;
	border: solid 2px #d96c75;
	padding: 0.25rem;
	width: 100%;

	@media (min-width: 800px) {
		padding: 0.5rem;
	}
`;

export const SigninBtn = styled(DefaultButtonStyle)`
	color: rgb(247, 247, 247);
	background-color: #d96c75;

	:hover {
		background-color: rgb(182, 182, 182);
		border: solid 2px rgb(182, 182, 182);
	}
`;

export const ActionBtn = styled(DefaultButtonStyle)`
	border: solid 2px rgb(247, 247, 247);
	color: #d96c75;
	background-color: rgb(247, 247, 247);

	:hover {
		border: solid 2px rgb(182, 182, 182);
		color: rgb(247, 247, 247);
		background-color: rgb(182, 182, 182);
	}
`;

export const FilterBtn = styled(DefaultButtonStyle)`
	border-radius: 25px;
	background-color: transparent;
	color: #d96c75;
	text-transform: uppercase;
	align-self: center;
	width: auto;

	:hover {
		background-color: #d96c75;
		color: rgb(247, 247, 247);
		border: solid 2px #d96c75;
	}
`;
