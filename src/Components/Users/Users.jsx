import React from 'react'
import styles from './Users.module.css'
import usersPhoto from "./../../images/usersPhoto.png";

const Users = (props) => {

    if (props.users.length === 0){
        {props.setUsers(
            [
                {
                  id: 1,
                  followed: true,
                  status: 'I am a good man',
                  photoUrl: usersPhoto,
                  fullName: "Andrei",
                  location: { country: "Belarus", city: "Mogilev" },
                },
                {
                  id: 2,
                  followed: false,
                  status: 'I am a good man too',
                  photoUrl: usersPhoto,
                  fullName: "Victor",
                  location: { country: "USA", city: "New-York" },
                },
                {
                  id: 3,
                  followed: true,
                  status: 'I am a good man too',
                  photoUrl: usersPhoto,
                  fullName: "Alex",
                  location: { country: "Ukraine", city: "Kiev" },
                },
              ]
        )}
    }

    return (

        <div>
            {props.users.map(u => <div key={u.id} className={styles.userData}>
                <div className={styles.photo}><img src={u.photoUrl} className={styles.userPhoto}  /></div>
                <div className={styles.button}>
                    {u.followed
                        ? <button  onClick={() => { props.unFollow(u.id)} }>UnFollow</button>
                        : <button  onClick={() => { props.follow(u.id)} }>Follow</button>}
                </div>
                <div className={styles.fullName}>FullName: {u.fullName}</div>
                <div className={styles.status}>Status: {u.status}</div>
                <div className={styles.country}>Country: {u.location.country}</div>
                <div className={styles.city}>City: {u.location.city}</div>
            </div>
            )}
        </div>
    )
}
export default Users;