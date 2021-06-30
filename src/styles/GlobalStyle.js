import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import { bpLargest, bpLarge, bpMedium, bpSmall } from './breakpoints';

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
		font-size: 62.5%;

		@media only screen and (max-width: ${bpLargest}) {
			font-size: 56.25%;
		}

		@media only screen and (max-width: ${bpLarge}) {
			font-size: 50%;
		}

		@media only screen and (max-width: ${bpMedium}) {
			font-size: 43.75%;
		}

		@media only screen and (max-width: ${bpSmall}) {
			font-size: 37.5%;
		}

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

	input:focus,
	button:focus {
		outline: 2px dotted var(--dark-gray);
	}


	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
  		-webkit-appearance: none;
 		margin: 0;
	}

	input[type=number] {
  		-moz-appearance: textfield;
	}

	.text-primary--light {
		font-size: 1.6rem;
    	font-weight: 400;
    	line-height: 2;
    	color: var(--dark-gray);

		@media only screen and (max-width: ${bpSmall}) {
			font-size: 2.3rem;
		}
	}

	.text-primary--normal {
		font-size: 1.6rem;
    	font-weight: 500;
    	line-height: 2;
    	color: var(--dark-gray);

		@media only screen and (max-width: ${bpSmall}) {
			font-size: 2.3rem;
		}
	}

	.text-secondary--normal {
		font-size: 1.5rem;
    	font-weight: 500;
    	color: var(--dark-gray);
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

		@media only screen and (max-width: ${bpSmall}) {
			font-size: 3rem;
		}
	}

	.title-secondary {
		font-size: 2rem;
		font-weight: 700;
		color: var(--black);

		@media only screen and (max-width: ${bpSmall}) {
			font-size: 2.8rem;
		}
	}

	.title-tertiary {
		font-size: 1.7rem;
		font-weight: 700;
		color: var(--black);
    	line-height: 1;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

`;

export default GlobalStyle;
