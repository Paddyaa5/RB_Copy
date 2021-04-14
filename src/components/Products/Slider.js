import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../../ProductData";
import Card from "./Card";

const StyledSlider = styled.section`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 700px;
    :hover .button-left,
    :hover .button-right {
        display: block;
        opacity: 1;
        transition: all 0.5s;
    }
    .button-left,
    .button-right {
        position: absolute;
        z-index: 5;
        height: 58px;
        width: 58px;
        border-radius: 50%;
        background-color: #f30b47;
        color: white;
        transition: all 0.5s;
        display: none;
        opacity: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .button-left {
        left: 25px;
        top: calc(50% - 25px);
    }
    .button-right {
        right: 25px;
        top: calc(50% - 25px);
    }
    .slider-section {
        position: absolute;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(7, 350px);
        grid-template-rows: 1fr;
        gap: 0px 25px;
        grid-template-areas: "one two three four five six seven";
        align-items: center;
        width: 2650px;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
    .grid1 {
        grid-area: one;
    }
    .grid2 {
        grid-area: two;
    }
    .grid3 {
        grid-area: three;
    }
    .grid4 {
        grid-area: four;
        height: 95%;
    }
    .grid5 {
        grid-area: five;
    }
    .grid6 {
        grid-area: six;
    }
    .grid7 {
        grid-area: seven;
    }
`;

const Slider = () => {
    const [drinks, setDrinks] = useState(data);

    const moveLeft = () => {
        const newState = drinks.map((item) => {
            console.log({ ...item });
            if (item.grid === 1) {
                return { ...item, grid: 7 };
            }
            return { ...item, grid: item.grid - 1 };
        });
        setDrinks(newState);
    };
    const moveRight = () => {
        const newState = drinks.map((item) => {
            console.log({ ...item });
            if (item.grid === 7) {
                return { ...item, grid: 1 };
            }
            return { ...item, grid: item.grid + 1 };
        });
        setDrinks(newState);
    };

    return (
        <StyledSlider>
            <button className="button-left" onClick={() => moveLeft()}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <button className="button-right" onClick={() => moveRight()}>
                <i className="fas fa-arrow-right"></i>
            </button>
            <div className="slider-section">
                {drinks.map((drink) => (
                    <Card drink={drink} key={drink.id} />
                ))}
            </div>
        </StyledSlider>
    );
};

export default Slider;
