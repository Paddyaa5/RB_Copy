import React from "react";
import Header from "../components/Products/Header";
import Video from "../components/Products/Video";
import Drinks from "../components/Products/Drinks";
import Functionality from "../components/Products/Functionality";
import Promos from "../components/Products/Promos";
import Sustain from "../components/Products/Sustain";

export default function Products() {
    return (
        <>
            <Header />
            <Video />
            <Drinks />
            <Functionality />
            <Promos />
            <Sustain />
        </>
    );
}
