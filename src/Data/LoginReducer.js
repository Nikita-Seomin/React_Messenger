let SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setLoginUserData = (userID, email, login) => ({type: SET_USER_DATA, data: {userID, email, login}});



export default authReducer;