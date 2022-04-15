import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Link, LinkProps } from 'react-router-dom';
import { IconWrapper, IconProps } from '../IconWrapper';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	links?: [];
	icons?: [];
}

export interface SpecialLinkProps extends LinkProps {
	key?: number;
	url: string;
	text?: string;
}

export const Footer: React.FC<FooterProps> = React.forwardRef<
	HTMLDivElement,
	FooterProps
>(({ links, icons }): JSX.Element => {
	return (
		<Box
			variant="center"
			height="6rem"
			padding="1rem"
			position="relative"
			backgroundColor="#D9C6BA"
		>
			<Box variant="flex-space-between" width="100%" maxWidth="1260px">
				<Box variant="flex-col-start">
					<Text>© 2022 Kodebi. All rights reserved</Text>
					<Box variant="flex-align-start" width="100%">
						{links?.map((link: SpecialLinkProps) => {
							return (
								<Link to={link.url} key={link.key}>
									{link.text}
								</Link>
							);
						})}
					</Box>
				</Box>
				<Box variant="flex-align-end">
					{icons?.map((link: IconProps) => {
						return (
							<IconWrapper url={link.url} key={link.key}>
								{link.icon}
							</IconWrapper>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
});
