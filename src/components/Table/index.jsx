import CircularProgress from "@mui/material/CircularProgress";
import * as Styled from "./styled";
import TableItem from "./TableItem";

const Table = ({ users, numShow, loading }) => {
    return (
        <Styled.Table>
            <Styled.TableHead>
                <tr>
                    <Styled.TableTitle>
                        <input type="checkbox" />
                    </Styled.TableTitle>
                    <Styled.TableTitle>Name</Styled.TableTitle>
                    <Styled.TableTitle>Last name</Styled.TableTitle>
                    <Styled.TableTitle>Email</Styled.TableTitle>
                    <Styled.TableTitle>IP adress</Styled.TableTitle>
                    <Styled.TableTitle>Gender</Styled.TableTitle>
                </tr>
            </Styled.TableHead>
            <tbody>
                {users.slice(0, numShow).map((item) => (
                    <TableItem {...item} key={item.id} />
                ))}
                {loading ? (
                    <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                            <CircularProgress />
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </Styled.Table>
    );
};
export default Table;
