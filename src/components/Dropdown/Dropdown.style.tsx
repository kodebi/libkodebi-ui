import styled from '@emotion/styled';
import { DefaultInputStyle } from '../Input/Input.style';

const DefaultSelectStyle = DefaultInputStyle.withComponent('select');

export const PrimarySelect = styled(DefaultSelectStyle)`
	border-color: #d96c75;
`;

export const FilterSelect = styled(DefaultSelectStyle)`
	border-radius: 25px;
	border: 2px solid #d96c75;
	box-shadow: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);
`;

export const DumbWrapper = styled('section')`
	display: block;
`;

export const withLabelAbove = styled('section')`
	margin: 0.125rem 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: auto;

	@media (min-width: 800px) {
		margin: 0.25rem 0.75rem;
	}
`;

export const withLabelLeft = styled('section')`
	margin: 0.125rem 0.5rem;
	display: flex;
	width: auto;

	@media (min-width: 800px) {
		margin: 0.25rem 0.75rem;
	}
`;
