import styles from "./SplashPage.module.css";
import "./SplashPage.module.css";
import { IconContext } from "react-icons/lib";
import { GiRocketThruster } from "react-icons/gi"
import { FaRegCopyright} from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const SplashPage = () => {

    useEffect(() => {
    }, []);

    const year = new Date().getFullYear();
    
    return (
        <>
            <div className={styles.main}>
                <IconContext.Provider value={{color: "red", size: "8em"}}>
                    <GiRocketThruster />
                </IconContext.Provider>
                <p>put 'em on blast</p>
                <Button variant="success">Take-off</Button>
            </div>
            <div className={styles.footer}>
                <FaRegCopyright />{year} arb1z webpages
            </div>
        </>
    )
}

export default SplashPage;