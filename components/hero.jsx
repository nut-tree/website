import React from "react";

export default function Hero({ctaText, ctaLink}) {
    return (
        <section className="relative py-20 2xl:py-40 bg-gray-500 overflow-hidden">
            <img className="hidden xl:block opacity-50 absolute top-0 right-0 h-128 w-128 -mt-52 -mr-96"
                 src="/assets/circle.svg" alt=""/>
            <img className="hidden lg:block opacity-60 absolute bottom-0 left-0 h-128 w-128 -mb-52"
                 src="/assets/full-circle.svg" alt=""/>
            {/*<img className="block absolute opacity-50 bottom-0 left-0 h-128 w-128 -mb-96 -ml-24"*/}
            {/*     src="/assets/circle.svg" alt=""/>*/}
            <div className="container px-3 mx-auto">
                <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
                    <span className="text-lg text-blue-400 font-bold"></span>
                    <h2 className="my-10 text-5xl lg:text-6xl font-bold font-heading text-white underline"><a href="https://nutjs.dev">nutjs.dev</a></h2>
                    <img className="h-32 w-32 lg:h-64 lg:w-64"
                         src="/icon.svg" alt="nut.js logo"/>
                    <div className="max-w-md mx-auto">
                        <p className="mb-20 text-lg text-gray-200">Node.js Desktop Automation</p>
                        <a className="inline-block py-5 px-12 text-white font-bold border border-gray-300 hover:border-gray-200 hover:bg-gray-400 rounded-full"
                           href={ctaLink}>{ctaText}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}