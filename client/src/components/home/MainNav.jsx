import {Button, Container, Form, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

const MainNav = () => {
    return (
        <>
            <Navbar className={styles.mainnav}>
                <Container>
                    <Navbar.Brand>#brand</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNav;