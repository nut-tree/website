import React from "react";

export default function Footer() {
    return (
        <section className="py-20 2xl:py-40">
            <div className="container mx-auto px-4 mb-12 md:mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <ul className="mb-12 md:mb-20 flex flex-wrap items-center justify-center space-x-6 md:justify-between text-lg">
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="/">Home</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="/#features">Features</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="/intro">Docs</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="/blog">Blog</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="https://github.com/nut-tree/nut.js">GitHub</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="https://nut-tree.github.io/apidoc/index.html">API Docs</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="https://discord.gg/U5csuM4Esp">Discord</a></li>
                        <li className="mb-4 md:mb-0"><a className="font-bold hover:underline" href="mailto:kontakt@s1h.org?subject=nut.js contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-lg pt-12 px-4 border-t border-gray-100">© {new Date().getFullYear()}</p>
        </section>
    );
}