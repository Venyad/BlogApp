import Link from 'next/link';
import React from 'react'
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  //temporary
  const status = "notauthenticated"
  return <>
  {status==="notauthenticated" ? (

    <Link href="/login">Login</Link>
  ) : (
  <><Link href="/write">Write</Link>
      <span className={styles.link}>Logout</span></>) 
  }
  </>
}

export default AuthLinks;
