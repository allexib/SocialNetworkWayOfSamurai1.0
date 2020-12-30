import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
                {/*<img*/}
                    {/*src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_uWpeaS6wOoCym0mv8IUPjvLWD_XxMoq0Q&usqp=CAU'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"test niggg"}/>
            </div>

        </div>
    )
}

export default ProfileInfo;