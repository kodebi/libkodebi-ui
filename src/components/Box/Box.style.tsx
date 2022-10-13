import styled from '@emotion/styled';

export const FlexBox = styled('div')`
	display: flex;
	padding: 0.25rem;

	@media (min-width: 800px) {
		padding: 0.75rem;
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

export const ShelfFlex = styled('section')`
	display: flex;
	flex-flow: column;
	align-items: center;

	@media (min-width: 800px) {
		flex-flow: row;
		justify-content: space-around;
	}
`;
