import React from "react";
import styled from "styled-components";

const StyledPromoSection = styled.section`
    width: 100%;
    background-color: #efefef;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 650px) {
        padding: 20px;
    }
    .promo {
        height: 650px;
        width: 100%;
        border-radius: 20px;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        overflow: hidden;
        grid-template-areas: "TEXT IMG";
        margin-bottom: 100px;
        @media screen and (max-width: 1000px) {
            height: 700px;
            width: 100%;
            max-width: 600px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
                "TEXT"
                "IMG";
        }
        .text-section {
            grid-area: TEXT;
            position: relative;
            width: 100%;
            z-index: 1;
            padding: 120px 40px 100px 120px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h6 {
                font-size: 16px;
            }
            h1 {
                font-size: 65px;
                line-height: 80px;
            }
            p {
                font-weight: 300;
                letter-spacing: 1px;
                font-size: 18px;
                line-height: 28px;
            }
            button {
                width: 40%;
                background-color: transparent;
                border: 1.5px solid white;
                height: 50px;
                color: white;
                border-radius: 8px;
                font-weight: 700;
                font-size: 14px;
                :hover {
                    background-color: #f30b47;
                    border: none;
                    transition: 0.3s;
                }
            }
            @media screen and (max-width: 1000px) {
                padding: 50px;
                text-align: center;
                align-items: center;
                h6 {
                    font-size: 14px;
                }
                h1 {
                    font-size: 45px;
                    line-height: 55px;
                }
                p {
                    font-size: 13px;
                }
            }
            @media screen and (max-width: 650px) {
                padding: 30px;
                text-align: center;
                align-items: center;
                h6 {
                    font-size: 13px;
                }
                h1 {
                    font-size: 34px;
                    line-height: 40px;
                }
                p {
                    font-size: 12px;
                }
            }
        }
        .img-section {
            grid-area: IMG;
            overflow: hidden;
            display: flex;
            justify-content: center;
            @media screen and (max-width: 1000px) {
                align-items: center;
            }
            img {
                position: relative;
                z-index: 3;
                width: 50%;
                transform: translateY(150px);
                object-fit: contain;
                @media screen and (max-width: 1000px) {
                    width: 25%;
                    transform: translateY(100px);
                }
                @media screen and (max-width: 650px) {
                    width: 40%;
                    transform: translateY(80px);
                }
            }
        }
    }
    .promo-one {
        background-color: #28a64b;
        position: relative;
        color: #ffffff;
        @media screen and (max-width: 1000px) {
            .img-section {
                background-image: url("https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/1g6rqEe9jEd7lPLkfhLZP2/e1ac7117788a14e4ada02c7da7c93020/dotComAsset_Background_v02_1440x584-6-.png?w=1440&fm=webp&q=90");
                background-repeat: no-repeat;
                background-size: cover;
                background-position-x: -120px;
                width: 100%;
            }
        }
        .background-img {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/1g6rqEe9jEd7lPLkfhLZP2/e1ac7117788a14e4ada02c7da7c93020/dotComAsset_Background_v02_1440x584-6-.png?w=1440&fm=webp&q=90");
            background-size: cover;
            @media screen and (max-width: 1000px) {
                display: none;
            }
        }
    }
    .promo-two {
        background-color: #e7374c;
        position: relative;
        color: #ffffff;
    }
    .promo-three {
        background-color: #ffffff;
        position: relative;
        color: #000000;
        .promo-logo {
            width: 200px;
        }
        .text-section .promo-three-btn {
            border: 1.5px solid #c2c2c2;
            color: #000000;
            :hover {
                color: white;
            }
        }
        .img-section-organics {
            position: relative;
            grid-area: IMG;
            overflow: hidden;
            width: 100%;
            display: flex;
            justify-content: center;
            img {
                position: relative;
                z-index: 3;
                width: 150%;
                object-fit: contain;
            }
        }
    }
`;

const Promos = () => {
    return (
        <StyledPromoSection>
            <div className="promo promo-one">
                <div className="background-img"></div>
                <div className="text-section">
                    <h6>SUMMER'S HERE.</h6>
                    <h1>
                        Red Bull<br></br>Summer Edition
                    </h1>
                    <p>
                        The Red Bull Summer Edition with the exotic taste of cactus fruit. Hold on
                        to summer.
                    </p>
                    <button>Learn more</button>
                </div>
                <div className="img-section">
                    <img
                        src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/1HAu6uJtMIzXGEdlhfogxN/f3676e58271018eebc01f0c77fcb8b58/UK_RBSUM_250_Single_Unit_close_cold_ORIGINAL_DRES__1_.png?w=420&h=1086&fm=webp&fit=fill&q=90"
                        alt="summer-edition"
                    />
                </div>
            </div>
            <div className="promo promo-two">
                <div className="text-section">
                    <h6>HERE TO STAY.</h6>
                    <h1>
                        Red Bull<br></br>Red Edition
                    </h1>
                    <p>The Red Bull Red Edition with the fresh taste of watermelon.</p>
                    <button>Learn more</button>
                </div>
                <div className="img-section">
                    <img
                        src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/3TndGlvsXplDWkIJdu5SxF/da8c1bde3f810c98f91b9c7afd52cf93/UK_RBRE_250_Single_Unit_close_cold_ORIGINAL_LRES.png?w=420&h=1086&fm=webp&fit=fill&q=90"
                        alt="red-edition"
                    />
                </div>
            </div>
            <div className="promo promo-three">
                <div className="text-section">
                    <img
                        className="promo-logo"
                        src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/4MPjugUrA7UGSjmXHqfUin/8cb6bfbcc41714f3e052efe5976a01e6/Organics-Logo.svg?w=450&h=100&fit=pad&fm=png&q=90"
                        alt=""
                    />
                    <h6>INGREDIENTS FROM 100% NATURAL SOURCES</h6>
                    <p>
                        ORGANICS by Red Bull are made with ingredients from 100% natural sources and
                        bear the organic logo of the European Union.
                    </p>
                    <button className="promo-three-btn">Learn more</button>
                </div>
                <div className="img-section-organics">
                    <img
                        src="https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/3QH8y1Bb63gnwh3iRcQFdH/f7d55d64a149663dbf3ff608328c1d6e/gb-new-organics-range.png?w=1440&h=1216&fm=webp&fit=fill&q=90"
                        alt="organics"
                    />
                </div>
            </div>
        </StyledPromoSection>
    );
};

export default Promos;
