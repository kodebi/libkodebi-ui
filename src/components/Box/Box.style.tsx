import styled from '@emotion/styled';

export const FlexBox = styled('div')`
	display: flex;
	padding: 0.25rem;

	@media (min-width: 800px) {
		padding: 0.75rem;
	} ;
`;

export const Grid = styled('div')`
	display: grid;
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

export const FlexibleFlex = styled('section')`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;

	@media (min-width: 800px) {
		flex-flow: row wrap;
		justify-content: space-around;
	}
`;
export const Shelf = styled(FlexibleFlex)`
	padding: 0.75rem;
	width: 100%;
	gap: 1rem;

	@media (min-width: 800px) {
		gap: 1.5rem;
		padding: 1.25rem;
		justify-content: flex-start;
	}
`;

export const GridCenter = styled(Grid)`
	place-items: center;
`;
