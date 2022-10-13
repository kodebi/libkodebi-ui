import styled from '@emotion/styled';
import { FlexCol } from '../Box/Box.style';

export const DefaultCard = styled(FlexCol)`
	width: auto;
	height: auto;
	padding: 0.75rem;
	margin: 0 0.5rem;

	@media (max-width: 600px) {
		padding: 1rem;
	}
`;

export const CardWBorders = styled(DefaultCard)`
	border: 1px solid rgb(182, 182, 182);
	border-radius: 12px;
`;

export const CardWithBorderAndLightShadow = styled(CardWBorders)`
	box-shadow: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);
`;

export const CardWithBorderAndBrightShadow = styled(CardWBorders)`
	box-shadow: 3px 12px 20px rgba(97, 100, 91, 0.2);
`;
