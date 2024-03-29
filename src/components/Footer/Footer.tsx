import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { LinkWrapper } from '../LinkWrapper';
import { IconWrapper, IconProps } from '../IconWrapper';
import { KodebiFooter } from './Footer.style';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	element: React.ElementType;
	links?: Array<any>;
	icons?: Array<IconProps>;
	maxWidth?: string;
}

export const Footer: React.FC<FooterProps> = ({
	links,
	icons,
	maxWidth,
	element: LinkElement,
}): JSX.Element => {
	return (
		<KodebiFooter>
			<Box
				variant="center"
				height="6rem"
				padding="1rem"
				position="relative"
				backgroundColor="#D9C6BA"
			>
				<Box variant="flex-space-between" width="100%" maxWidth={maxWidth}>
					<Box variant="flex-col-start">
						<Text margin="0 0 0.5rem 0">
							© 2022 Kodebi. All rights reserved
						</Text>
						<Box
							variant="flex-align-start"
							width="100%"
							padding="0"
							margin="0.5rem 0 0 0"
						>
							{links?.map((link: any, index) => {
								return (
									<LinkElement to={link.to} key={index}>
										<LinkWrapper type="footer">{link.children}</LinkWrapper>
									</LinkElement>
								);
							})}
						</Box>
					</Box>
					<Box variant="flex-align-start">
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
		</KodebiFooter>
	);
};
