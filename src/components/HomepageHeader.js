import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/core/lib/client/exports/Link";
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
    return (
        <header className={clsx('hero hero--dark', styles.homePageHeader)}>
            <div className="container">
                <div className={styles.buttons}>
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