import styled from '@emotion/styled';

export const StyledLabel = styled('label')`
	display: inline-flex;
	padding: 0.25rem;
	font-size: 0.875rem;
	text-align: left;
	align-items: center;
	cursor: default;
	margin-right: 0.25rem;
`;

export const WrapLabelLeft = styled('div')`
	margin: 0.5rem 0;
	display: flex;
	justify-content: space-around;
	width: auto;
`;

export const WrapLabelAbove = styled('div')`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: auto;
`;
