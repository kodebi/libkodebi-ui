import { Global, css } from '@emotion/react';

const GlobalStyles = css`
	:root {
		--fnt-clr: #242121;
		--fnt-sz: 0.875rem;
		--bckgrnd-clr: rgb(247, 247, 247);
		--bckgrnd-clr-2: rgb(182, 182, 182);
		--brnd-clr: #d96c75;
		--sm-clr: #d9c6ba;
		--mn-shdw: 0 1px 5px rgba(0, 0, 0, 0.75);
		--bx-shdw: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);
		--frm-shdw: 0px 4px 18px 8px rgba(0, 0, 0, 0.3);
		--lttr-spcng: 0.1rem;
		--trnstn: all 0.2s ease-out;
		--nvbr-trns: 0.5s ease-in-out;
		--brdr-rds: 0.25rem;
		--brdr-rds-2: 0.75rem;
		--brdr-rds-3: 25px;
		--mx-wdth: 1140px;
		--bckgrnd-trnsprnt-1: rgba(248, 248, 248, 0.6);
		--bckgrnd-trnsprnt-2: rgba(248, 248, 248, 0.75);
	}
	*,
	&:before,
	&:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html {
		scroll-behavior: smooth;
		min-height: 100vh;
	}
	body {
		background-color: var(--bckgrnd-clr);
		color: var(--fnt-clr);
		font-size: var(--fnt-sz);
		line-height: 1.5;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
		font-size: var(--fnt-sz);
	}
	p {
		font-size: var(--fnt-sz);
		margin-bottom: 0.5rem;
	}
	button {
		font-size: var(---fnt-sz);
		&:focus {
			outline: none;
		}
	}
	@media (min-width: 800px) {
		a {
			font-size: 1rem;
		}
		p {
			font-size: 1rem;
		}
		button {
			font-size: 1rem;
		}
	}
`;

export const KodebiStyles = () => {
	return <Global styles={GlobalStyles} />;
};
