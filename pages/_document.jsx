import Document, {Html, Head, Main, NextScript} from "next/document";
import config from "config/config.json";

class MyDocument extends Document {
    render() {
        return (
            <Html lang={config.locale}>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="description"
                          content="Open Source Node.js Cross Platform Desktop Automation. Control the mouse, keyboard, and read the screen."/>
                    <script defer data-domain="nutjs.dev" src="https://plausible.io/js/plausible.js"/>
                </Head>
                <body className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
