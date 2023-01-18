import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { Wrapper, GenderSelect } from "./styled";

const Filters = ({
    genders,
    searchValue,
    onHandleSearch,
    selectedGender,
    onHadnleSelect,
}) => {
    return (
        <Wrapper>
            <TextField
                value={searchValue}
                label="Search"
                onChange={onHandleSearch}
                variant="outlined"
            />
            <GenderSelect>
                <InputLabel id="genders">Gender</InputLabel>
                <Select
                    fullWidth
                    labelId="genders"
                    id="genders"
                    value={selectedGender}
                    onChange={onHadnleSelect}
                >
                    {genders.map((item) => (
                        <MenuItem value={item} key={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </GenderSelect>
        </Wrapper>
    );
};
export default Filters;
