import React from 'react'
import styles from './Users.module.css'
import usersPhoto from "./../../images/usersPhoto.png";
import Pagination from '../Pagination/Pagination';
import { NavLink } from 'react-router-dom';


const Users = (props) => {

  return (
    <div className={styles.usersContainer}>
      <Pagination
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        portionSize={props.portionSize}
        pageSize={props.pageSize}
        totalItemsCount={props.totalItemsCount}
      />

      {props.users.map(u => <div key={u.id} className={styles.userData}>
        <div className={styles.photo}>
          <NavLink to={'/profile'}>
            <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={styles.userPhoto} />
          </NavLink>
        </div>
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