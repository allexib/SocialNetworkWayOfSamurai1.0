import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://histrf.ru/uploads/media/person/0001/02/thumb_1769_person_big.jpeg',
                    followed: false,
                    message: 'Dmitry',
                    status: 'I am boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://histrf.ru/uploads/media/person/0001/02/thumb_1769_person_big.jpeg',
                    followed: true,
                    message: 'Vasa',
                    status: 'I am digiy',
                    location: {city: 'Chehen', country: 'Uzbek'}
                },
                {
                    id: 3,
                    photoUrl: 'https://histrf.ru/uploads/media/person/0001/02/thumb_1769_person_big.jpeg',
                    followed: false,
                    message: 'Ola',
                    status: 'I am runner',
                    location: {city: 'Pekin', country: 'China'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.message}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;