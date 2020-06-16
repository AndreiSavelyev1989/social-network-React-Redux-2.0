import React from 'react'
import preloader from '../../images/preloader.svg'
import styles from './Preloader.module.css'

const Preloader = () => {
    return <div className={styles.preloaderSVG}>
        <img src={preloader}/>
    </div>
}

export default Preloader;