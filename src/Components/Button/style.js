import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Button = styled.button`
    background-color: #BADC58;
    color: #FFF;
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 4px;
    cursor:pointer;
    ${customMedia.lessThan("mobile")`
        padding: 12px 18px;
    `};
`;