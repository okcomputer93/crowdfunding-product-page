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

	button {
		border: none;
		font-family: inherit;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}

	.text-primary--light {
		font-size: 1.6rem;
    	font-weight: 400;
    	line-height: 2;
    	color: var(--dark-gray);
	}

	.text-primary--normal {
		font-size: 1.6rem;
    	font-weight: 500;
    	line-height: 2;
    	color: var(--dark-gray);
	}

	.text-secondary--normal {
		font-size: 1.5rem;
    	font-weight: 500;
    	line-height: 2;	
	}

	.text-tertiary--light {
		font-size: 1.45rem;
    	font-weight: 400;
    	color: var(--dark-gray);
    	line-height: 1;
	}

	.title-primary {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--black);
	}

	.title-secondary {
		font-size: 2rem;
		font-weight: 700;
		color: var(--black);
	}

	.title-tertiary {
		font-size: 1.7rem;
		font-weight: 700;
		color: var(--black);
    	line-height: 1;
	}

`;

export default GlobalStyle;
