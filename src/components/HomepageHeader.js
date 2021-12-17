import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/core/lib/client/exports/Link";
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
    return (
        <header className={clsx('hero hero--dark', styles.homePageHeader)}>
            <div className="container">
                <div className={styles.buttons}>
                    <h3>nut.js 2.0.0-RC1 has been released!</h3>
                    <h4>Give it a thorough test and feel free to report any issues to help honing the stable release!</h4>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Quickstart 🚀
                    </Link>
                </div>
            </div>
        </header>
    );
}