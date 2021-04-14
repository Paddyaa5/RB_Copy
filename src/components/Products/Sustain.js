import React from "react";
import styled from "styled-components";

const StyledSustainSection = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: #efefef;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .sustain-grid {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        grid-template-rows: 1fr;
        gap: 0px 20px;
        grid-template-areas: "vid text";
        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: 500px 1fr;
            gap: 0px 20px;
            grid-template-areas: "text" "vid";
        }
        .vid-section {
            grid-area: vid;
            background-color: white;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px;
            @media screen and (max-width: 1000px) {
                max-width: 600px;
                align-items: center;
                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
            }
            video {
                width: 100%;
                height: 100%;
                outline: none;
                max-height: 500px;
            }
        }
        .text-section {
            grid-area: text;
            padding: 50px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            @media screen and (max-width: 1000px) {
                max-width: 600px;
                background-color: white;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                align-items: center;
                text-align: center;
            }
            .sustain-title {
                text-transform: uppercase;
                font-size: 15px;
                letter-spacing: 1px;
                padding: 5px 0;
                border-bottom: 4px solid #db0840;
            }
            .sustain-headline {
                font-size: 50px;
                letter-spacing: 2px;
                @media screen and (max-width: 1000px) {
                    font-size: 38px;
                    letter-spacing: 1px;
                    padding: 0 100px;
                }
                @media screen and (max-width: 650px) {
                    font-size: 32px;
                    padding: 0 50px;
                    line-height: 40px;
                }
            }
            .sustain-text {
                font-size: 20px;
                color: #808080;
                font-weight: 300;
                line-height: 30px;
                @media screen and (max-width: 1000px) {
                    font-size: 15px;
                    padding: 0 70px;
                    line-height: 22px;
                }
                @media screen and (max-width: 650px) {
                    font-size: 14px;
                    padding: 0 50px;
                    line-height: 20px;
                }
            }
            .button-section {
                display: flex;
                .sustain-btn {
                    height: 50px;
                    width: 140px;
                    background: transparent;
                    border-radius: 5px;
                    border: 2px solid #db0840;
                    color: #db0840;
                    font-weight: 700;
                    margin-right: 20px;
                    font-size: 15px;
                    cursor: pointer;
                    transition: all 0.3s;
                    :hover {
                        background-color: #db0840;
                        color: white;
                    }
                }
                .sustain-quiz-btn {
                    width: 140px;
                    background: transparent;
                    font-size: 15px;
                    font-weight: 400;
                    color: #db0840;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                }
            }
        }
    }
`;

const Sustain = () => {
    return (
        <StyledSustainSection>
            <div className="sustain-grid">
                <div className="vid-section">
                    <video
                        src="https://www.redbull.com/energydrink/v1/resources/contentful/videos/lcr8qbvxj7mh/2eRmPXtIMjTnMsdHkCc034/068f5d97282841ec043ae35adcffe2dd/Recycling_Chess_Zebra_UFO_690x690_crf25.mp4"
                        autoPlay
                        preload="auto"
                        loop
                        muted
                        playsInline={true}
                    ></video>
                </div>
                <div className="text-section">
                    <h3 className="sustain-title">Sustainability</h3>
                    <h1 className="sustain-headline">A can has more than one life.</h1>
                    <p className="sustain-text">
                        At Red Bull, we recognise that we have a responsibility to the natural
                        environment. You can read more about our sustainable approach here:
                    </p>
                    <div className="button-section">
                        <button className="sustain-btn">Learn more</button>
                        <button className="sustain-quiz-btn">Take the quiz ></button>
                    </div>
                </div>
            </div>
        </StyledSustainSection>
    );
};

export default Sustain;
