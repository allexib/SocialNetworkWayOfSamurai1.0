import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_uWpeaS6wOoCym0mv8IUPjvLWD_XxMoq0Q&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;