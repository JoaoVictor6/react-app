import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});


export const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, 300px);
    ${customMedia.lessThan("mobile")`
        padding: 12px 18px;
    `};
`;

export const Content = styled.div`
    padding: 5px 12px
    
`;