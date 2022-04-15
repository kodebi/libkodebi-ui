import styled from '@emotion/styled';
import { FlexBox } from '../Box/Box.style';

const IconLinkStyle = FlexBox.withComponent('a');

export const IcoWrap = styled(IconLinkStyle)`
	justify-content: center;
	align-items: center;
	margin: 0 0.25rem;
`;
