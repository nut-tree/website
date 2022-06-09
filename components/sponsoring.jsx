import {Blockquote, CustomLink} from "./mdx-components";

export default function Sponsoring() {
    return (
        <section className="flex flex-col items-center gap-8 y-20 2xl:py-40 bg-gray-400 overflow-hidden">
            <div className="container p-4 lg:p-8 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap items-center -mx-5">
                        <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
                            <div className="max-w-md">
                                <span className="text-lg font-bold text-white">How it works</span>
                                <h2 className="mt-12 mb-10 text-6xl font-bold font-heading">Sponsoring</h2>
                                <p className="mb-16 text-xl text-gray-300">Sustainable open source software</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-5">
                            <ul>
                                <li className="flex pb-10 mb-8 border-b border-gray-50">
                                    <div className="mr-8">
                                        <span
                                            className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">1</span>
                                    </div>
                                    <div className="max-w-xs">
                                        <h3 className="mb-6 text-lg font-bold font-heading">Start sponsoring</h3>
                                        <p className="text-lg">Either via <CustomLink href="https://github.com/sponsors/s1hofmann" aria-label="Sponsor Simon Hofmann on GitHub">GitHub Sponsors</CustomLink> or <CustomLink href="https://www.patreon.com/s1hofmann" aria-label={"Sponsor Simon Hofmann on Patreon"}>Patreon</CustomLink></p>
                                    </div>
                                </li>
                                <li className="flex pb-10 mb-8 border-b border-gray-50">
                                    <div className="mr-8">
                                        <span
                                            className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">2</span>
                                    </div>
                                    <div className="max-w-xs">
                                        <h3 className="mb-6 text-lg font-bold font-heading">Get in touch</h3>
                                        <p className="text-lg">Reach out to <CustomLink href="mailto:kontakt@s1h.org?subject=nut.js sponsor access">kontakt@s1h.org</CustomLink> with your npm user account
                                            and the sponsoring confirmation</p>
                                    </div>
                                </li>
                                <li className="flex pb-10 border-b border-gray-50">
                                    <div className="mr-8">
                                        <span
                                            className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">3</span>
                                    </div>
                                    <div className="max-w-xs">
                                        <h3 className="mb-6 text-lg font-bold font-heading">Get access</h3>
                                        <p className="text-lg">Once I reviewed your data I'll send you an invite to
                                            private packages</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex w-3/4 lg:w-1/2 items-center justify-center hint warn">
                <span className="text-lg">For one-off inquiries, I'm also open for bug bounties. Feel free to <CustomLink href="mailto:kontakt@s1h.org?subject=Bug bounty">drop me a message with details.</CustomLink></span>
            </div>
            <Blockquote />
        </section>
    );
}