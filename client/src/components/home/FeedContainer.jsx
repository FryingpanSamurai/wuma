import styles from "./FeedContainer.module.css";
import Blast from "./Blast";

const FeedContainer = (props) => {
    console.log(props);
    return (
        <div className={styles.main}>
            {props.blasts.map((blast) => {
                <Blast 
                    key={blast._id}
                    id={blast._id}
                    user={blast.uid}
                    date={new Date(blast.date)}
                    message={blast.message}
                />
            })}
        </div>
    )
}

export default FeedContainer;