import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
    }
    html, body, #root {
        height: 100vh;
        width: 100vw;
        font-family: 'Inter', sans-serif;
        font-family: 'DM Serif Display', serif;
    }
    :root {
            --fonte-primaria: 'Inter', sans-serif;  
            --fonte-secundaria: 'DM Serif Display', serif;
            --cor-primaria: #0062E3;
            --cor-secundaria: #FFF;
            --cor-terciaria: #FF4791;
    }
`;
