import React from "react";
import styled from "styled-components";
import image from "../../Untitled 2.png";

const StyledFuncSection = styled.div`
    background-color: #efefef;
    padding: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
        padding: 100px 50px;
    }
    @media screen and (max-width: 650px) {
        padding: 100px 20px;
    }
    h1 {
        font-size: 60px;
        font-weight: 600;
        letter-spacing: 2px;
        margin-bottom: 30px;
        @media screen and (max-width: 1000px) {
            font-size: 40px;
            letter-spacing: 1.25px;
        }
        @media screen and (max-width: 650px) {
            font-size: 28px;
            letter-spacing: 0.5px;
        }
    }
    p {
        font-weight: 300;
        line-height: 34px;
        font-size: 20px;
        letter-spacing: 1px;
        text-align: center;
        color: grey;
        @media screen and (max-width: 1000px) {
            font-size: 18px;
            line-height: 30px;
        }
        @media screen and (max-width: 650px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    .card-section {
        width: 100%;
        min-height: 550px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .primary,
        .second,
        .third {
            position: absolute;
            height: 450px;
            width: 350px;
            background-color: #ffffff;
            box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            @media screen and (max-width: 650px) {
                height: 400px;
                width: 300px;
            }
        }
        .primary {
            z-index: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            padding: 20px;
            h6 {
                font-family: "Pathway Gothic One", sans-serif;
                font-size: 36px;
                text-transform: uppercase;
            }
            img {
                width: 80%;
                object-fit: cover;
            }
            p {
                font-size: 14px;
                line-height: 18px;
            }
            button {
                border-radius: 5px;
                font-family: "Pathway Gothic One", sans-serif;
                width: 90%;
                height: 40px;
                outline: none;
                background-color: #f30b47;
                border: none;
                color: #ffffff;
                font-size: 20px;
                letter-spacing: 1px;
            }
        }
        .second {
            z-index: 2;
            background-color: #f0f2f4;
            transform: scale(0.9) translateY(40px);
        }
        .third {
            z-index: 1;
            background-color: #f0f2f4;
            transform: scale(0.8) translateY(90px);
        }
    }
`;

const Functionality = () => {
    return (
        <StyledFuncSection>
            <h1>Functionality</h1>
            <p>
                Red Bull Energy Drink is a functional beverage giving you wings whenever you need
                them.
            </p>
            <div className="card-section">
                <div className="primary">
                    <h6>Aiming high this term?</h6>
                    <img src={image} alt="card" />
                    <p>
                        Uni life can be a handful – but with Red Bull giving you wings, you can stay
                        on top of it.
                    </p>
                    <button>Learn more</button>
                </div>
                <div className="second"></div>
                <div className="third"></div>
            </div>
        </StyledFuncSection>
    );
};

export default Functionality;
