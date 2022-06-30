import { createGlobalStyle } from 'styled-components';
const GloablStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;


    }
    body{
        background: ${({ theme }) => theme.colors.background};
        font-family: 'Roboto', sans-serif;
        color: #262626;
        height: 200vh;
    }
    p{
        line-height: 1.15;
    }
    li{
        list-style: none;
    }
`;
export default GloablStyles;
