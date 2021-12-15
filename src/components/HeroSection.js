import clsx from "clsx";
import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection({heroText}) {
    return (
        <div className={clsx('hero', styles.heroBanner)}>
            <blockquote><i>"{heroText}"</i></blockquote>
        </div>
    );
}