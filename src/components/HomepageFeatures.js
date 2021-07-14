import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
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
                An API which is loved by users for it's ease of use and expressiveness let's you automate in a breeze!
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

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
