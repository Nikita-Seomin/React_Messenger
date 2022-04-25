import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    setTotalUsersCount,
    unfollow,
    setCurrentPage, toggleIsFetching
} from "../../Data/UsersReducer";
import Users from "./Users";
import axios from "axios";
import Preloading from "../../Common/Preloading";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onClickPageButton = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {

        return <>
            {this.props.isFetching && <Preloading />}
        <Users
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setUsers={this.props.setUsers}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setCurrentPage={this.props.setCurrentPage}

                      onClickPageButton={this.onClickPageButton}

                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      currentPage={this.props.currentPage}


        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching
})(UsersContainer);
