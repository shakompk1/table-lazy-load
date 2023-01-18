export const searchStatus = (item, value, selectedGender, defaultGender) => {
    return (
        (item.first_name.indexOf(value) >= 0 ||
            item.last_name.indexOf(value) >= 0 ||
            item.email.indexOf(value) >= 0 ||
            item.ip_address.indexOf(value) >= 0 ||
            item.email.indexOf(value) >= 0 ||
            !value) &&
        (item.gender === selectedGender || selectedGender === defaultGender)
    );
};
