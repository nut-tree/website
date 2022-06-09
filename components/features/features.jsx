import React from "react";
import Feature from "./feature";
import Cursor from "../icons/cursor";
import Text from "../icons/text";
import Clipboard from "../icons/clipboard";
import Window from "../icons/window";
import Eye from "../icons/eye";
import Desktop from "../icons/desktop";

const features = [
    {
        icon: <Cursor/>,
        title: "Automate mouse movement",
        content: "nut.js gives you full control over your mouse. Move, click or drag your cursor where you need it!",
        color: "bg-blue-300"
    },
    {
        icon: <Text/>,
        title: "Automate keyboard input",
        content: "Press (and hold) single keys or type pages of text, nut.js handles both!",
        color: "bg-green-300"
    },
    {
        icon: <Clipboard/>,
        title: "Copy & Paste",
        content: "nut.js gives you access to your system clipboard. Copy and paste text as you go!",
        color: "bg-red-300"
    },
    {
        icon: <Window/>,
        title: "Window Info",
        content: "Retrieve infos about open windows to improve your tests or workflows",
        color: "bg-indigo-300"
    },
    {
        icon: <Eye/>,
        title: "Image support",
        content: "nut.js provides plug-ins to perform on-screen image search, the key component for visual testing or image-based automation!",
        color: "bg-yellow-300"
    },
    {
        icon: <Desktop/>,
        title: "Cross-platform",
        content: "nut.js works on all major operating systems. Windows, macOS and Linux!",
        color: "bg-emerald-500"
    },
];

export default function Features() {
    return (
        <section id="features" className="pattern py-20 2xl:py-40">
            <img className="block absolute opacity-30 bottom-0 left-0 h-128 w-128 -mb-96 -ml-24 -z-10"
                 src="/assets/circle.svg" alt=""/>
            <div className="container px-4 mx-auto">
                <div className="grid mx-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-8 gap-4 lg:gap-16">
                    {features.map(feature => {
                        return <Feature key={feature.title} icon={feature.icon} content={feature.content}
                                        title={feature.title} color={feature.color}/>
                    })}
                </div>
            </div>
        </section>
    );
}