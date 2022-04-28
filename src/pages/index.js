import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from "../components/HomepageHeader";
import HomepageFeatures from '../components/HomepageFeatures';
import Terminal from "../components/Terminal";
import HeroSection from "../components/HeroSection";

const features = [
    {
        title: 'Easy to Install',
        Svg: require('../../static/img/easy_install.svg').default,
        description: (
            <>
                nut.js was developed with a focus on ease of installation. Everything is at your fingertips, just
                an <code>npm install</code> away!
            </>
        ),
    },
    {
        title: 'Easy to Use',
        Svg: require('../../static/img/easy_use.svg').default,
        description: (
            <>
                An API which is loved by users for its ease of use and expressiveness let's you automate in a breeze!
            </>
        ),
    },
    {
        title: 'Three platforms, single codebase',
        Svg: require('../../static/img/multi_platform.svg').default,
        description: (
            <>
                nut.js is focused on cross-platform compatibility and equally supports macOS, Linux and Windows.
            </>
        ),
    },
];

const benefits = [
    {
        title: 'Plugins',
        Svg: require('../../static/img/plugin.svg').default,
        description: (
            <>
                A flexible plugin system allows you to provide your own custom implementations to fit your needs!
            </>
        ),
    },
    {
        title: 'Future proof',
        Svg: require('../../static/img/clock.svg').default,
        description: (
            <>
                nut.js is compatible with current and future releases of Node.js or Electron.
            </>
        ),
    },
    {
        title: 'Community',
        Svg: require('../../static/img/chat.svg').default,
        description: (
            <>
                You're invited to join an active community that encourages participation and knowledge sharing!
            </>
        ),
    },
];

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
                <HomepageFeatures features={features}/>
                <HeroSection
                    heroText={"I just started sponsoring nut ❤️  It saves me so much time! Also love provided functionality for testing, you really thought of everything!"}/>
                <HomepageFeatures features={benefits}/>
            </main>
        </Layout>
    );
}
