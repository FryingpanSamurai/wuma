import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import FeedContainer from "../components/home/FeedContainer";
import styles from "./Home.module.css";

const Home = () => {
    const [blasts, setBlasts] = useState([]);
    let isMounted = useRef(false);

    // callback will be used later for search
    const fetchBlasts = useCallback(async () => {
            if (isMounted.current) 
            {
                try {
                    let url = 'http://localhost:8000/blasts'
                    const res = await fetch(url);

                    if (!res.ok) {
                        throw new Error("Something went terribly wrong");
                    }

                    const data = await res.json();
                    setBlasts(data.map(blast => blast)); 
                } catch(ex) {
                    console.log(`ERROR: ${ex.message}`)
                }
            }
    }, []);

    useEffect(() => {
        isMounted.current = true;
        fetchBlasts();
        // garbage collection, unmount
        return () => {
            isMounted.current = false;
        }
    }, []);
    return (
        <>
            <div className={styles.main}>
                <Form.Control 
                    className={styles.mysearch} 
                    size="lg" 
                    type="text" 
                    placeholder="target" />
                <FeedContainer blasts={blasts} />
            </div>
        </>
    )
}

export default Home;