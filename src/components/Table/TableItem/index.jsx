import { TableRow, TableData } from "./styled";

const TableItem = ({
    id,
    first_name,
    last_name,
    email,
    ip_address,
    gender,
}) => {
    return (
        <TableRow>
            <TableData>
                <input type="checkbox" id={id} />
            </TableData>
            <TableData>{first_name}</TableData>
            <TableData>{last_name}</TableData>
            <TableData>
                <a href={`mailto:${email}`}>{email}</a>
            </TableData>
            <TableData>{ip_address}</TableData>
            <TableData>{gender}</TableData>
        </TableRow>
    );
};
export default TableItem;
