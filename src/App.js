import React from "react";

import Filters from "./components/Filters";
import Table from "./components/Table";
import { Wrapper, ScrollSection } from "./styles/global";
import { searchStatus } from "./helpers";

const users = require("./user_data_1000.json");
const defaultGender = "All";

class App extends React.Component {
    state = {
        loading: false,
        numShow: 100,
        usersList: users.sort((a, b) => (a.first_name > b.first_name ? 1 : -1)),
        genders: [defaultGender, ...new Set(users.map((item) => item.gender))],
        searchValue: "",
        selectedGender: defaultGender,
    };
    onScroll = (e) => {
        if (
            e.target.offsetHeight + e.target.scrollTop >=
                e.target.scrollHeight &&
            !this.state.loading
        ) {
            this.setState({ loading: true });
            setTimeout(
                () =>
                    this.setState(({ numShow, usersList }) => ({
                        loading: false,
                        numShow: Math.min(numShow + 100, usersList.length),
                    })),
                3000,
            );
        }
    };
    onHandleSearch = ({ target: { value } }) => {
        this.setState(({ selectedGender }) => ({
            searchValue: value,
            usersList: users.filter((item) => {
                return searchStatus(item, value, selectedGender, defaultGender);
            }),
        }));
    };
    onHandleSelect = ({ target: { value } }) => {
        console.log(value);
        this.setState(({ searchValue }) => ({
            selectedGender: value,
            usersList: users.filter((item) => {
                return searchStatus(item, searchValue, value, defaultGender);
            }),
        }));
    };
    render() {
        const {
            usersList,
            numShow,
            loading,
            genders,
            searchValue,
            selectedGender,
        } = this.state;
        return (
            <Wrapper>
                <Filters
                    genders={genders}
                    searchValue={searchValue}
                    selectedGender={selectedGender}
                    onHandleSearch={this.onHandleSearch}
                    onHadnleSelect={this.onHandleSelect}
                />
                <ScrollSection onScroll={this.onScroll}>
                    <Table
                        users={usersList}
                        numShow={numShow}
                        loading={loading}
                    />
                </ScrollSection>
            </Wrapper>
        );
    }
}

export default App;
