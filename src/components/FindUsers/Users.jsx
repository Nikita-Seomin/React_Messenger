import React from 'react';
import classes from './Users.module.css';
import userDefaultPhoto from '../../Images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let stringCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let numberPagesMass = [];
    for (let i = 1; i <= stringCount; ++i) {
        numberPagesMass.push(i)
    }
    return <div>
        <div>
            {numberPagesMass.map(p => {
                return <span className={props.currentPage === p && classes.usedPage}
                             onClick={() => {
                                 props.onClickPageButton(p)
                             }}>{p}
                    </span>
            })}
        </div>
        {
            props.users.map(u => <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} className={classes.photo}/>
                </NavLink>
                <div>
                    {u.followed ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "0016d438-ecd4-4d6b-b1f9-9e0efdefa66b"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                })
                        }}>UNFOLLOW</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "0016d438-ecd4-4d6b-b1f9-9e0efdefa66b"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                })
                        }}>FOLLOW</button>}
                </div>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {"u.location.cityName"}
                </div>
                <div>
                    {"u.location.country"}
                </div>
            </div>)
        }
    </div>
}

export default Users;