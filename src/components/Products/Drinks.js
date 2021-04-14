import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const StyledDrinksSection = styled.section`
    background-color: #efefef;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top-padding {
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(238, 238, 238, 1) 100%);
        width: 100%;
        height: 100px;
    }
    .text-section {
        background-color: #efefef;
        width: 100vw;
        padding: 50px 20px 100px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 500px) {
            padding: 0px 20px 50px 20px;
        }
        h5 {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 15px;
            padding: 2px 0;
            border-bottom: 3px solid #f30b47;
            margin-bottom: 50px;
            @media screen and (max-width: 500px) {
                letter-spacing: 1px;
            }
        }
        h1 {
            font-size: calc(60px + 1vw);
            text-align: center;
            font-weight: 600;
            @media screen and (max-width: 500px) {
                font-size: calc(40px + 1vw);
            }
        }
    }
`;

const Drinks = () => {
    return (
        <StyledDrinksSection>
            <div className="top-padding"></div>
            <div className="text-section">
                <h5>red bull energy drink products</h5>
                <h1>Vitalizes Body and Mind. </h1>
            </div>
            <Slider />
        </StyledDrinksSection>
    );
};

export default Drinks;
