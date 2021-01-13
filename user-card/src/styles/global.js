import { createGlobalStyle } from 'styled-components';






const GlobalStyle = createGlobalStyle`

 .app {

     display: flex;
     flex-flow: column;
     justify-content: center;
     align-items: center;

     .main {
        background-color: salmon;
    }



     div:last-child {

     }




 }

 
 .app>div:first-child {
        margin: 5% 0;
        border: 1px solid black;
     }
`
export default GlobalStyle