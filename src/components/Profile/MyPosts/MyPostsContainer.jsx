import {newPostMessageActionCreator, onPostChangeActionCreator} from "../../../Data/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (newPostText) => {
            dispatch(onPostChangeActionCreator(newPostText));
        },
        addPost: () => {
            dispatch(newPostMessageActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;