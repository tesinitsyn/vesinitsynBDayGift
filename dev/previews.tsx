import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import Navbar from "@/components/navbar";
import RootLayout from "@/app/layout";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import Home from "@/app/page";

interface ComponentPreviewsProps {
    children: React.ReactNode
}

const ComponentPreviews = ({children}: ComponentPreviewsProps) => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/RootLayout">
                <RootLayout children={children}/>
            </ComponentPreview>
            <ComponentPreview path="/HeroSection">
                <HeroSection/>
            </ComponentPreview>
            <ComponentPreview path="/AboutSection">
                <AboutSection/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;