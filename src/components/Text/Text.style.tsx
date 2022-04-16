import styled from '@emotion/styled';
import '@fontsource/quicksand';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/700.css';

const DefaultTextStyle = styled('p')`
	font-family: 'Quicksand', 'sans-serif';
	font-size: 0.875rem;
	line-height: 1;
`;

export const LightText = styled(DefaultTextStyle)`
	font-weight: 100;
`;

export const RegularText = styled(DefaultTextStyle)`
	font-weight: 400;
`;

export const BoldText = styled(DefaultTextStyle)`
	font-weight: 700;
`;
