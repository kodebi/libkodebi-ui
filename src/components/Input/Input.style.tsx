import styled from '@emotion/styled';

export const DefaultInputStyle = styled('input')`
	padding: 0.25rem;
	border: 1px solid #5f5f5f;
	border-radius: 0.25rem;
	resize: none;
	font-size: 0.75rem;
	box-sizing: border-box;
	width: 100%;

	&:focus {
		outline: none;
	}

	@media (min-width: 800px) {
		padding: 0.5rem;
		font-size: 0.875rem;
	}
`;

export const PrimaryInput = styled(DefaultInputStyle)`
	border-color: #d96c75;
`;

export const SecondaryInput = styled(DefaultInputStyle)`
	border-color: rgb(182, 182, 182);
`;

export const SearchInput = styled(DefaultInputStyle)`
	padding: 0.5rem;
	border-radius: 15px;
	border: 1px solid #d96c75;
	box-shadow: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);

	@media (min-width: 800px) {
		width: 40vw;
		padding: 0.75rem;
	}
`;

export const Textarea = PrimaryInput.withComponent('textarea');

export const StyledLabel = styled('label')`
	display: inline-flex;
	padding: 0.25rem;
	font-size: 0.875rem;
	text-align: left;
	align-items: center;
	cursor: default;
	margin-right: 0.5rem;
`;

export const DumbWrapper = styled('div')`
	margin: 0.125rem 0.5rem;
	display: flex;
	width: auto;

	@media (min-width: 800px) {
		margin: 0.25rem 0.75rem;
	}
`;

export const WrapLabelAbove = styled('div')`
	margin: 0.125rem 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: auto;

	@media (min-width: 800px) {
		margin: 0.25rem 0.75rem;
	}
`;
