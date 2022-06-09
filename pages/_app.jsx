import {HistoryContextProvider} from 'components/store/history-context'
import {SideBarContextProvider} from 'components/store/sidebar-context'
import {ThemeContextProvider} from 'components/store/theme-context'
import 'tailwindcss/tailwind.css'
import 'styles/print.css'
import 'styles/app.css'
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return (
    <ThemeContextProvider>
        <Head>
            <title>nutjs.dev - Open Source Node.js Cross Platform Desktop Automation</title>
        </Head>
        <HistoryContextProvider>
            <SideBarContextProvider>
                <Component {...pageProps} />
            </SideBarContextProvider>
        </HistoryContextProvider>
    </ThemeContextProvider>
)
}
