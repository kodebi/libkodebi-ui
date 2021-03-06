import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { LinkWrapper, LinkWrapperProps } from '../LinkWrapper';
import { IconWrapper, IconProps } from '../IconWrapper';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	links?: Array<LinkWrapperProps>;
	icons?: Array<IconProps>;
}

export const Footer: React.FC<FooterProps> = ({
	links,
	icons,
}): JSX.Element => {
	return (
		<Box
			variant="center"
			height="6rem"
			padding="1rem"
			position="relative"
			backgroundColor="#D9C6BA"
		>
			<Box variant="flex-space-between" width="100%" maxWidth="1140px">
				<Box variant="flex-col-start">
					<Text>© 2022 Kodebi. All rights reserved</Text>
					<Box variant="flex-align-start" width="100%" padding="0">
						{links?.map((link: LinkWrapperProps, index) => {
							return (
								<LinkWrapper type="footer" to={link.to} key={index}>
									{link.children}
								</LinkWrapper>
							);
						})}
					</Box>
				</Box>
				<Box variant="flex-align-start" padding="0" margin="14px 0">
					{icons?.map((link: IconProps, index) => {
						return (
							<IconWrapper href={link.href} key={index}>
								{link.children}
							</IconWrapper>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};
