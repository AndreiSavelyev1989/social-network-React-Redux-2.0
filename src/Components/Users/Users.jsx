import React from 'react'
import styles from './Users.module.css'
import usersPhoto from "./../../images/usersPhoto.png";
import Pagination from '../Pagination/Pagination';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';


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
          <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.large != null ? u.photos.large : usersPhoto} className={styles.userPhoto} />
          </NavLink>
        </div>
        <div className={styles.button}>
          {u.followed
            ? <button onClick={() => {
              usersAPI.unFollow(u.id).then(data => {
                if (data.resultCode === 0) {
                  props.unFollow(u.id)
                }
              })
            }}>UnFollow</button>
            : <button onClick={() => {
              usersAPI.follow(u.id).then(data => {
                if (data.resultCode === 0) {
                  props.follow(u.id)
                }
              })
            }}>Follow</button>}
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