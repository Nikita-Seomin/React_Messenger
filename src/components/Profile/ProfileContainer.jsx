import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../Data/ProfileReducer";
import Profile from "./Profile";
import {
    useLocation,
    useParams
} from "react-router-dom";

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data);
            })
    }

    render() {
        return <Profile profile={this.props.profile}
                        profilePage={this.props.profilePage}/>
    }

}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileComponent));
