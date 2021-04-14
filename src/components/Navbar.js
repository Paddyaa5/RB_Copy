import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.header`
    position: fixed;
    z-index: 5;
    width: 100%;
    min-height: 68px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    .navbar-left-section {
        position: absolute;
        left: 25px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 500px) {
            left: 10px;
        }
        .menu-circle {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 36px;
            width: 36px;
            border-radius: 50%;
            background-color: #00162b12;
            cursor: pointer;
        }
        .logo {
            max-height: 36px;
            padding: 0 20px;
            @media screen and (max-width: 500px) {
                max-height: 30px;
                padding: 0 10px;
            }
            @media screen and (max-width: 320px) {
                max-height: 24px;
                padding: 0 5px;
            }
        }
    }
    .navbar-list-menu {
        display: flex;
        justify-content: center;
        width: 40%;
        @media screen and (max-width: 1000px) {
            display: none;
        }
        li {
            margin: 0 5px;
            list-style: none;
            padding: 10px 15px;
            border-radius: 22px;
            transition: all 0.25s;
            :hover {
                background-color: #e5e7e9;
            }
            a {
                text-decoration: none;
                color: #000000;
                letter-spacing: 1px;
            }
        }
        .active {
            padding: 2px;
            border-bottom: 2px solid #f30b47;
        }
    }
    .navbar-right-section {
        display: flex;
        position: absolute;
        right: 25px;
        color: #000000;
        font-size: 20px;
        @media screen and (max-width: 500px) {
            right: 10px;
        }
        i {
            cursor: pointer;
            height: 45px;
            width: 45px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            :hover {
                background-color: #e5e7e9;
            }
            @media screen and (max-width: 500px) {
                height: 35px;
                width: 35px;
            }
        }
        .added-margin {
            margin: 0 20px;
            @media screen and (max-width: 500px) {
                margin: 0;
            }
        }
    }
`;

const Navbar = () => {
    return (
        <StyledNav>
            <div className="navbar-left-section">
                <div className="menu-circle">
                    <i className="fas fa-th"></i>
                </div>
                <Link exact to="/">
                    <img
                        className="logo menu-hover"
                        src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg"
                        alt="red-bull-logo"
                    />
                </Link>
            </div>
            <ul className="navbar-list-menu">
                <li>
                    <NavLink activeClassName="active" exact to="/discover">
                        TV
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/events">
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/athletes">
                        Athletes
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/">
                        Products
                    </NavLink>
                </li>
            </ul>
            <div className="navbar-right-section">
                <i className="far fa-user added-margin menu-hover"></i>
                <i className="fas fa-search menu-hover"></i>
            </div>
        </StyledNav>
    );
};

export default Navbar;
