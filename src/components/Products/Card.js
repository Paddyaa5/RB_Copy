import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    transition: all 1s;
    height: 85%;
    width: 100%;
    margin: 0 25px;
    border-radius: 20px;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 500px) {
        box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.1);
    }
    .image-container {
        height: 65%;
        width: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        @media screen and (max-width: 500px) {
            height: 246px;
            width: 94.2px;
        }
    }
    .product-text {
        text-align: center;
        margin-top: 30px;
        line-height: 30px;
        @media screen and (max-width: 500px) {
            font-size: 16px;
            line-height: 20px;
            font-weight: 600;
        }
    }
`;

const Card = ({ drink }) => {
    return (
        <StyledCard
            className={`grid${drink.grid}`}
            style={{
                background: `linear-gradient(180deg, ${drink.backColor1}, ${drink.backColor2})`,
            }}
        >
            <div
                className="image-container"
                style={{ backgroundImage: `url(${drink.imgSrc})` }}
            ></div>
            <h2 className="product-text" style={{ color: `${drink.fontColor}` }}>
                Red Bull <br></br>
                {drink.name}
            </h2>
        </StyledCard>
    );
};

export default Card;
