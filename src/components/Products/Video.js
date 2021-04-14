import React from "react";
import styled from "styled-components";

const StyledVideoSection = styled.section`
    width: 100%;
    height: 56.25vw;
    display: flex;
    padding: 0 10vw;
    justify-content: center;
    @media screen and (max-width: 1000px) {
        padding: 0;
    }
    .youtube-player {
        width: 100%;
        height: 100%;
    }
`;

const Video = () => {
    return (
        <StyledVideoSection>
            <iframe
                className="youtube-player"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CYBdsXbY9Bk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </StyledVideoSection>
    );
};

export default Video;
