"use client";

import React from 'react'
import styles from "./comments.module.css";
import Link from 'next/link';
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";


const fetcher = async (url) => {
    const res = await fetch(url);
  
    const data = await res.json();
  
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
  
    return data;
  };
  
const Comments = ({postSlug}) => {

    const {status} = useSession();
    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
      );
    const [desc, setDesc] = useState("");
    const handleSubmit = async () => {
        await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
      };
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Comments
            </h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, sed ipsa quam maiores illum unde atque nemo nostrum temporibus voluptate ut ipsam soluta, dolorem impedit eaque ad? Eum, aliquid dolor.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, sed ipsa quam maiores illum unde atque nemo nostrum temporibus voluptate ut ipsam soluta, dolorem impedit eaque ad? Eum, aliquid dolor.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, sed ipsa quam maiores illum unde atque nemo nostrum temporibus voluptate ut ipsam soluta, dolorem impedit eaque ad? Eum, aliquid dolor.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, sed ipsa quam maiores illum unde atque nemo nostrum temporibus voluptate ut ipsam soluta, dolorem impedit eaque ad? Eum, aliquid dolor.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Comments;
