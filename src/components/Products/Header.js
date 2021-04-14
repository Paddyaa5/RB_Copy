import React from "react";
import styled from "styled-components";

const StyledHeader = styled.section`
    width: 100%;
    padding: 250px 12vw;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1000px) {
        min-height: 100vh;
        padding: 0 8vw;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column-reverse;
        justify-content: center;
        padding-top: 10vh;
    }
    img {
        width: 210px;
        margin-right: calc(50px + 5vw);
        @media screen and (max-width: 1000px) {
            width: 152px;
        }
        @media screen and (max-width: 500px) {
            width: 132px;
            margin-right: 0;
        }
    }
    h1 {
        font-size: 96px;
        padding-right: 50px;
        margin-bottom: 50px;
        letter-spacing: 3px;
        font-weight: 700;
        @media screen and (max-width: 1000px) {
            font-size: 68px;
            padding-right: 0px;
            letter-spacing: 2px;
        }
        @media screen and (max-width: 500px) {
            font-size: 50px;
            letter-spacing: 1px;
            text-align: center;
        }
        @media screen and (max-width: 320px) {
            font-size: 44px;
            letter-spacing: 1px;
        }
    }
    .buttons {
        display: flex;
        margin-bottom: 50px;
        @media screen and (max-width: 800px) {
            display: none;
        }
        button {
            margin-right: 25px;
            height: 50px;
            width: 200px;
            border-radius: 7px;
            border: none;
            outline: none;
            font-size: 16px;
            :hover {
                background-color: #f30b47;
                border: none;
                color: #ffffff;
            }
        }
        .button-pink {
            background-color: #db0840;
            color: #ffffff;
        }
        .button-clear {
            background-color: transparent;
            border: 2px solid lightgrey;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <img
                src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/4nRTH6xDBpZrCd8xFZUOIJ/84c0b8da776df8d080608c123e940657/UK_RBED_250_Single-Unit_close_cold_ORIGINAL_canwidth528px.png?w=420&h=1086&fm=webp&fit=fill&q=90"
                alt="red-bull-can"
            />
            <div className="header-text">
                <h1>
                    Gives you<br></br>Wiiings
                </h1>
                <div className="buttons">
                    <button className="button-pink">Products</button>
                    <button className="button-clear">Company</button>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
