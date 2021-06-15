import { css } from 'styled-components';

import CommissionerBold from '../assets/fonts/Commissioner/CommissionerBold.ttf';
import CommissionerMedium from '../assets/fonts/Commissioner/CommissionerMedium.ttf';
import CommissionerRegular from '../assets/fonts/Commissioner/CommissionerRegular.ttf';

const commissionerNormalWeight = {
  400: [CommissionerRegular],
  500: [CommissionerMedium],
  700: [CommissionerBold],
};

const commissioner = {
  name: 'Commissioner',
  normal: commissionerNormalWeight,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const commissionerNormal = createFontFaces(commissioner);

const Fonts = css`
  ${commissionerNormal}
`;

export default Fonts;
