import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HomepageFeatures from '../components/HomepageFeatures';
import Terminal from "../components/Terminal";

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--dark', styles.heroBanner)}>
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

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="nut.js - node desktop automation">
            <Head>
                <script defer data-domain="nutjs.dev" src="https://plausible.io/js/plausible.js"/>
                <title>{`Hello from ${siteConfig.title}`}</title>
            </Head>
            <Terminal/>
            <main>
                <HomepageHeader/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
