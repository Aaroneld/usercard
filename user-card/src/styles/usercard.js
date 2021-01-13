import styled from 'styled-components';


export const Container = styled.div`

    h2, caption, address, a{
        text-align: center;
    }
    
 
    img {
        margin: 3.5%;
    }

    div {
        display: flex;
        align-items: center;
        flex-flow: column;

        * {
            margin: 2% 0;
        }

        caption {
            width: 75%;
        }
    }
`;

