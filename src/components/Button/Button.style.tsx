import styled from '@emotion/styled';

const DefaultButtonStyle = styled('button')`
	transition: all 0.3s linear;
	font-weight: 400;
	line-height: 1;
	cursor: pointer;
	border-radius: 0.25rem;
	border: solid 2px #d96c75;
	padding: 0.25rem;
	width: auto;

	@media (min-width: 800px) {
		padding: 0.5rem;
	}
`;

export const SigninBtn = styled(DefaultButtonStyle)`
	color: #f2ead0;
	background-color: #d96c75;

	:hover {
		background-color: #260101;
		border: solid 2px #260101;
	}
`;

export const ActionBtn = styled(DefaultButtonStyle)`
	border: solid 2px #f2ead0;
	color: #d96c75;
	background-color: #f2ead0;

	:hover {
		border: solid 2px #260101;
		color: #f2ead0;
		background-color: #260101;
	}
`;

export const FilterBtn = styled(DefaultButtonStyle)`
	border-radius: 25px;
	background-color: transparent;
	color: #d96c75;
	text-transform: uppercase;
	align-self: center;

	:hover {
		background-color: #d96c75;
		color: #f2ead0;
		border: solid 2px #d96c75;
	}
`;
