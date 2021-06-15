import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
	${fonts};
	${variables};

	*,
	*::before,
	*::after {
		padding: 0;
    	margin: 0;
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.3%;
	}

	body {
		font-family: var(--font-primary);
		font-weight: 400;	
		line-height: 1.6;
	}

`;

export default GlobalStyle;
