/* tslint:disable */
import { injectGlobal } from 'styled-components';
import { BREAKPOINTS, NAVBAR_HEIGHT } from '../constants/constants';

export default () => {
    injectGlobal`

    body {
        margin: 0 !important;
        font-family: 'Roboto', sans-serif;
        padding: 56px 0 0 0;
    }
    
    @media (min-width: 600px) {
     body {
        padding-top: 64px;
     }
    }
    
    :root {
    --blue: #007bff;
--indigo: #6610f2;
--purple: #6f42c1;
--pink: #e83e8c;
--red: #dc3545;
--orange: #fd7e14;
--yellow: #ffc107;
--green: #28a745;
--teal: #20c997;
--cyan: #17a2b8;
--white: #fff;
--gray: #6c757d;
--gray-dark: #343a40;
--primary: #007bff;
--secondary: #6c757d;
--success: #28a745;
--info: #17a2b8;
--warning: #ffc107;
--danger: #dc3545;
--light: #f8f9fa;
--dark: #343a40;
    }
    
    .marginTopMd {
        @media (max-width: ${BREAKPOINTS.md}) {
            margin-top: 1rem;
        }
    }
`;
}