import styled from '@emotion/styled';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/700.css';

const DefaultTextStyle = styled('p')`
	font-family: 'Quicksand', 'sans-serif';
	font-size: 0.875rem;
	line-height: 1;
	padding: 0.25rem;
`;

export const RegularText = styled(DefaultTextStyle)`
	font-weight: 400;
`;

export const BoldText = styled(DefaultTextStyle)`
	font-weight: 700;
`;
