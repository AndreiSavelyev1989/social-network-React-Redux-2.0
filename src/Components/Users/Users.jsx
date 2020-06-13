import React from 'react'
import styles from './Users.module.css'
import usersPhoto from "./../../images/usersPhoto.png";
import * as axios from 'axios'

const Users = (props) => {

  if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      })
  }

  return (

    <div>
      {props.users.map(u => <div key={u.id} className={styles.userData}>
        <div className={styles.photo}><img src={u.photos.small != null ? u.photos.small : usersPhoto} className={styles.userPhoto} /></div>
        <div className={styles.button}>
          {u.followed
            ? <button onClick={() => { props.unFollow(u.id) }}>UnFollow</button>
            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
        </div>
        <div className={styles.name}>Name: {u.name}</div>
        <div className={styles.status}>Status: {u.status}</div>
        <div className={styles.country}>Country: 'There must be country name'</div>
        <div className={styles.city}>City: 'There must be city name'</div>
      </div>
      )}
    </div>
  )
}
export default Users;