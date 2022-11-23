import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import {Card} from "react-bootstrap";
import styles from "./Blast.module.css";

const Blast = (props) => {
    let isMounted = useRef(false);
    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const fetchUsers = async () => {
        let url = 'http://localhost:8000/users/' + props.userid

        const res = await fetch(url);
        const data = await res.json();
        setUser(data[0].username);
        setAvatar(data[0].avatar)
    }
 
    useEffect(() => {
        fetchUsers();
    },[])

    return (
        <>
            <div className={styles.blastmain}>
                <section className={styles.avcontainer}>
                    <img className={styles.avatar} src={avatar}></img>
                </section>
                <div>
                    <section className={styles.username}>{user}</section>
                    <section className={styles.message}>{props.message}</section>                    
                </div>
            </div>
        </>
    )
}

export default Blast;