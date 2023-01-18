import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const ScrollSection = styled.div`
    width: 1330px;
    height: 280px;
    overflow: scroll;
    background: #ffffff;
    box-shadow: 0px 45px 112px rgba(0, 0, 0, 0.06),
        0px 22.7812px 48.825px rgba(0, 0, 0, 0.0405),
        0px 9px 18.2px rgba(0, 0, 0, 0.03),
        0px 1.96875px 6.475px rgba(0, 0, 0, 0.0195);
    border-radius: 10px;
    ::-webkit-scrollbar {
        display: none;
    }
`;
