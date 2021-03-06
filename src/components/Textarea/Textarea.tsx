import * as React from 'react';
import * as T from './Textarea.style';

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	id: string;
	placeholder?: string;
	value?: string;
	rows?: number;
	cols?: number;
	textLength?: number;
	wrap?: string;
	className?: string;
	required?: boolean;
	borderColor?: string;
	onChange?: () => void;
}

export const Textarea: React.FC<TextareaProps> = React.forwardRef<
	HTMLTextAreaElement,
	TextareaProps
>(({ rows, cols, borderColor, ...props }: TextareaProps, ref): JSX.Element => {
	const Element = T.PrimaryTextarea;
	return (
		<Element
			ref={ref}
			rows={rows}
			cols={cols}
			style={{ borderColor }}
			{...props}
		/>
	);
});

Textarea.displayName = 'Textarea';
Textarea.defaultProps = {
	name: 'Name des Textfeldes',
	id: 'Id des Textfeldes',
	placeholder: 'Hier könnte dein Inhalt stehen',
	rows: 4,
	cols: undefined,
	value: undefined,
	onChange: undefined,
	required: false,
};
