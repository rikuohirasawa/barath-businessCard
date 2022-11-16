import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --light-purple: #edeefd;
        --black: #19242A;
        --soft-white: #f7f7f7;
        --dark-orange: #d4710f;
    }

    body, 
    html {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        box-sizing: border-box;
        background: var(--black);
        color: var(--soft-white);
        font-weight: 300;
    }
    `