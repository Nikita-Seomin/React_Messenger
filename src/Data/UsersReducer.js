let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET-USERS'
let SET_USERS_COUNT = 'SET-USERS-COUNT';
let SET_CLICK_PAGE_BUTTON = 'SET-CLICK-BUTTON-PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CLICK_PAGE_BUTTON:
            return {
                ...state,
                currentPage: action.newNumberPage,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}


export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (newNumberPage) => ({type: SET_CLICK_PAGE_BUTTON, newNumberPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersReducer;