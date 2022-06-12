import React from "react";

import Item from "./item";
import {CustomLink} from "../mdx-components";

const faqItems = [
    {
        question: <span id="faq-sponsor-benefits">What's the benefit of sponsoring?</span>,
        answer: <div>
            <p>nut.js is an open source project, so development and maintenance happens in my free time.</p>
            <p>Sponsoring development will give you access to private packages and ensures continuous maintenance.</p>
            <p>Additionally, it allows me to pay for hardware to support additional platforms/architectures or features!
                The ultimate goal would be to work full-time on nut.js.
            </p>
            <p><b>Conclusion:</b> If nut.js is beneficial for you or your company, you should consider sponsoring the project!</p>
        </div>
    },
    {
        question: <span id="faq-private-packages">What private packages are available at the moment?</span>,
        answer: (
            <div>
                <p>At the moment private packages include:</p>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                    <li>An improved image matching plugin that supports Apple Silicon chips, works across all current
                        and future node/Electron versions and provides multi-image matching
                    </li>
                    <li>An OCR plugin (currently in beta)</li>
                </ul>
            </div>)
    },
    {
        question: <span id="faq-consulting">Are you available for consulting?</span>,
        answer: <div>
            <p>Yes! If you are stuck with something and want me to help you out, feel free to reach out to me at <CustomLink
                href="mailto:kontakt@s1h.org?subject=Consulting request">kontakt@s1h.org</CustomLink></p>
        </div>
    },
    {
        question: <span>I'm desperately trying to solve a problem, could you please help me out for free?</span>,
        answer: <div id="faq-free-work">
            <p>No, sorry! I'm already providing nut.js for free, which takes up quite a lot of my time.</p>
            <p>If you want me to help you fix a problem, please refer to <a className="underline"
                                                                            href="#faq-consulting">#3</a>.</p>
        </div>
    },
]

export default function FAQ() {
    return (
        <section className="relative py-20 2xl:py-40 ">
            <img className="hidden lg:block absolute opacity-30 bottom-0 left-1/2 h-128 w-128 -mb-128 -ml-24 -z-10"
                 src="/assets/circle.svg" alt=""/>
            <img className="hidden transform rotate-180 lg:block opacity-60 absolute top-0 right-0 h-128 w-128 -z-10"
                 src="/assets/full-circle.svg" alt=""/>
            <div className="container px-4 mx-auto">
                <div className="mb-8 text-center">
                    <span className="text-lg font-bold text-blue-500">Hey! Have any questions?</span>
                    <div className="block lg:hidden pt-3 text-7xl font-bold font-heading">FAQ</div>
                    <div className="hidden lg:block pt-3">
                        <span className="mt-8 mb-20 text-7xl font-bold font-heading">F</span>
                        <span className="mt-8 mb-20 text-5xl font-bold font-heading">requently</span>
                        <span className="mt-8 mb-20 text-7xl font-bold font-heading">A</span>
                        <span className="mt-8 mb-20 text-5xl font-bold font-heading">sked</span>
                        <span className="mt-8 mb-20 text-7xl font-bold font-heading">Q</span>
                        <span className="mt-8 mb-20 text-5xl font-bold font-heading">uestions</span>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto pt-20 border-t border-gray-50">
                <ul>
                    {faqItems.map((item, idx) => <Item key={idx} idx={idx + 1} title={item.question}
                                                       content={item.answer}/>)}
                </ul>
            </div>
        </section>);
}