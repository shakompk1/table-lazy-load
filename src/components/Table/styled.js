import styled from "styled-components";

const Table = styled.table`
    position: relative;
    border-collapse: collapse;
    width: 100%;
`;
const TableHead = styled.thead`
    position: sticky;
    top: 0;
    height: 40px;
`;
const TableTitle = styled.th`
    padding: 0px 20px;
    text-align: left;
    height: 40px;
    background: #f5f5f5;
    border: 1px 0 solid #000000;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
`;

export { Table, TableHead, TableTitle };
