import styled from 'styled-components';

export const Container = styled.div`
    heigth:100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    place-content: center;
`;

export const Background = styled.div`
    flex: 1;
    img{height:100vh}
`;