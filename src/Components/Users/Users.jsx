import React from 'react'
import styles from './Users.module.css'
import usersPhoto from "./../../images/usersPhoto.png";
import Pagination from '../Pagination/Pagination';


const Users = (props) => {

    //   const totalPages = Math.ceil(props.totalItemsCount / props.pageSize)

    // const pages = [];
    // for (let i = 1; i <= totalPages; i++) {
    //   pages.push(i)
    // }

    return (
          <div className={styles.usersContainer}>
              {/* {pages.map(p => {
                return <span className={`${props.currentPage === p && styles.currentPage} ${styles.pages}`}
                onClick = {() => props.onPageChanged(p)}>{p}</span>
              })} */}
            <Pagination 
            currentPage = {props.currentPage}
            onPageChanged = {props.onPageChanged}
            portionSize = {props.portionSize}
            pageSize = {props.pageSize}
            totalItemsCount = {props.totalItemsCount}
            />

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