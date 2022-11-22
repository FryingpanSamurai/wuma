import MainBanner from '../components/home/MainBanner';
import MainNav from '../components/home/MainNav';
import styles from "./PageLayout.module.css";

const PageLayout = (props) => {
    return (
        <>
            {/** Component for main-banner */}
            <MainNav />
            {/** Component for navigation bar */}
            {/** Component for page content */}
            {props.children}
        </>
    )
}

export default PageLayout;