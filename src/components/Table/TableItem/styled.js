import styled from "styled-components";

const TableRow = styled.tr`
    border: 1px solid #e1cfff;
    width: 100%;
    :hover td {
        background: #eee3ff;
        border: 1px 0 solid #e1cfff;
        font-weight: 600 !important;
        font-size: 13px;
        line-height: 19px;
        color: #4005a0;
    }
`;
const TableData = styled.td`
    text-decoration: none;
    text-align: left;
    padding: 0px 20px;
    height: 60px;
    background: #ffffff;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    width: 20%;
    text-decoration: none;
    color: #333333;
    :first-child {
        width: 54px;
    }
    a {
        text-decoration: none;
        color: #333333;
    }
`;

export { TableRow, TableData };
