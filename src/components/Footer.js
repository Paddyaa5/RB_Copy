import React from "react";
import styled from "styled-components";

const StyledFooter = styled.section`
    background-color: white;
    padding: 50px;
    color: #717174;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    .footer-grid {
        display: grid;
        grid-template-columns: 0.3fr 1.5fr;
        grid-template-rows: 1fr 1fr;
        gap: 20px 20px;
        grid-template-areas:
            "rb links"
            ". country";
        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 100px;
            gap: 0px 0px;
            grid-template-areas:
                "links"
                "country";
        }
        .rb {
            grid-area: rb;
            text-transform: uppercase;
            @media screen and (max-width: 1000px) {
                display: none;
            }
        }
        .links {
            grid-area: links;
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            text-transform: uppercase;
            @media screen and (max-width: 1000px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            p {
                margin: 10px;
            }
            .switch-display {
                display: none;
                @media screen and (max-width: 1000px) {
                    display: block;
                }
            }
        }
        .country {
            grid-area: country;
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: flex-end;
            align-items: center;
            @media screen and (max-width: 1000px) {
                justify-content: center;
            }
            .dropdown {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: auto;
                width: 300px;
                border-radius: 5px;
                border: 1px solid #717174;
                padding: 10px 15px;
                img {
                    height: 24px;
                    object-fit: contain;
                }
                p {
                    font-weight: 300;
                    font-size: 14px;
                    margin-right: 75px;
                    letter-spacing: 1px;
                }
                i {
                    font-size: 20px;
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-grid">
                <div className="rb">© 2021 Red Bull</div>
                <div className="links">
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>Products & Company</p>
                    <p>Imprint</p>
                    <p>Brand Protection</p>
                    <p>Media</p>
                    <p>Modern Slavery Statement</p>
                    <p>UK tax Strategy</p>
                    <p>Gender Pay Policy</p>
                    <p>contact us</p>
                    <p>shop</p>
                    <p>jobs</p>
                    <p>covid-19 certificate</p>
                    <p>cookie settings</p>
                    <p className="switch-display">© 2021 Red Bull</p>
                </div>
                <div className="country">
                    <div className="dropdown">
                        <img
                            src="https://resources.redbull.com/icons/flags/v2/GB@2x.png"
                            alt="uk"
                        />
                        <p>United Kingdom</p>
                        <i className="fas fa-sort-down"></i>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
