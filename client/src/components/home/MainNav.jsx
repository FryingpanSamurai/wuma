import {Button, Container, Form, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

const MainNav = () => {
    return (
        <>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand>#brand</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="search"
                            aria-label="search"
                            className={styles.searchbtn}
                        />
                        <Button variant="outline-warning">find</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNav;