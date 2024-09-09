import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> <b>Hey, Venya Durgam here ! </b>Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle} >Lorem ipsum dolr sit amet alim consector adoikmf elit</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reiciendis nisi. Illum corporis, consectetur, perferendis aut nihil deleniti, ipsa dolores similique voluptatum aspernatur mollitia recusandae obcaecati architecto asperiores ipsam itaque.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
