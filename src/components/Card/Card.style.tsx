import styled from '@emotion/styled';
import { FlexCol } from '../Box/Box.style';

export const DefaultCard = styled(FlexCol)`
	width: auto;
	height: auto;
	margin: 0.75rem;
	padding: 0.25rem;

	@media (max-width: 600px) {
		margin: 0.25rem;
	}
`;

export const CardWBorders = styled(DefaultCard)`
	border: 1px solid rgb(182, 182, 182);
	border-radius: 12px;
	box-shadow: 3px 12px 20px rgba(97, 100, 91, 0.2);
`;
