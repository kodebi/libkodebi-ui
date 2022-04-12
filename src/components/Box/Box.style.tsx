import styled from '@emotion/styled';

export const FlexBox = styled('div')`
	display: flex;
	padding: 0.5rem;

	@media (min-width: 700px) {
		padding: 1rem;
	} ;
`;

export const FlexCenter = styled(FlexBox)`
	justify-content: center;
	align-items: center;
`;

export const FlexSpaceBetween = styled(FlexBox)`
	justify-content: space-between;
`;

export const FlexCol = styled(FlexBox)`
	flex-direction: column;
`;

export const FlexColStart = styled(FlexCol)`
	align-items: flex-start;
`;

export const FlexAlignStart = styled(FlexBox)`
	align-items: flex-start;
`;

export const FlexAlignEnd = styled(FlexBox)`
	align-items: flex-end;
`;
