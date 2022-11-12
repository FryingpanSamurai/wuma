import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.leftcol}>
                    <p>Active Users</p>
                </div>
                <div className={styles.rightcol}></div>
            </div>
        </>
    )
}

export default Home;