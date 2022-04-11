import * as React from 'react';
import * as t from './Text.style';

export type TextWeight = undefined | 'light' | 'regular' | 'bold';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	weight?: TextWeight;
	content?: string | number;
	className?: string;
}

const getTextWeight = (type: TextWeight) => {
	switch (type) {
		case 'light':
			return t.LightText;
		case 'regular':
			return t.RegularText;
		case 'bold':
			return t.BoldText;
		default:
			return t.RegularText;
	}
};

export const Text: React.FC<TextProps> = React.forwardRef<
	HTMLParagraphElement,
	TextProps
>(({ content, weight, ...props }: TextProps): JSX.Element => {
	const Element = getTextWeight(weight);
	return <Element {...props}>{content}</Element>;
});

Text.displayName = 'Text';
Text.defaultProps = {
	content: 'Das ist ein Beispieltext...',
	weight: 'regular',
	className: undefined,
};
