import styles from "./FeedContainer.module.css";
import Blast from "./Blast";

const FeedContainer = (props) => {
    return (
        <>
            {props.blasts.map((blast) => (
                <Blast 
                    key={blast._id}
                    user={blast.username}
                    userid={blast.uid}
                    date={blast.date}
                    message={blast.message}
                />
            ))}
        </>
    )
}

export default FeedContainer;