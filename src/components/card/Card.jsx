import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Card = ({key}) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.23 -</span>
                    <span className={styles.category}> CULTURE</span>

                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in ullam ipsum, adipisci suscipit nulla repellendus soluta doloremque facere recusandae perferendis. Ullam molestias fuga totam maxime? Dolor saepe totam sit.</p>
                <Link href="/" className={styles.link}> Read More</Link>
            </div>
        </div>
    )
}

export default Card
