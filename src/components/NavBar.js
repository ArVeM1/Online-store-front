import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavbarComp = observer(() => {
    const {user} = useContext(Context)
    let navigate = useNavigate();

    const logOut=()=>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white", textDecoration: 'none'}} to={SHOP_ROUTE}>Shop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-light"}
                            onClick={()=> navigate(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            style={{marginLeft: "20px"}}
                            onClick={()=> logOut()}
                        >
                            Выйти</Button>
                    </Nav> :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>}
            </Container>
        </Navbar>
    )
});

export default NavbarComp;