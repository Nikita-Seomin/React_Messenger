import React from "react";
import Preloading from "../../../Common/Preloading";


let ProfileAva = (props) => {
    if (!props.profile){
        return <Preloading />
    }

    return (
        <div>
            <div>
                < img src='https://img1.liveinternet.ru/images/attach/c/4/82/584/82584967_3749748_326441.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}

export default ProfileAva;