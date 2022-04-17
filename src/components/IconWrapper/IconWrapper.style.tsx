import styled from '@emotion/styled';
import { FlexBox } from '../Box/Box.style';

const IconLinkStyle = FlexBox.withComponent('a');

export const IcoWrap = styled(IconLinkStyle)`
	justify-content: center;
	align-items: center;
	margin: 0.25rem;
	cursor: pointer;
	text-decoration: none;
	color: #242121;
	font-size: 1.5rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: rgb(247, 247, 247);
	}
`;
