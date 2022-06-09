import { HistoryContextProvider } from 'components/store/history-context'
import { SideBarContextProvider } from 'components/store/sidebar-context'
import { ThemeContextProvider } from 'components/store/theme-context'
import 'tailwindcss/tailwind.css'
import 'styles/print.css'
import 'styles/app.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <HistoryContextProvider>
        <SideBarContextProvider>
          <Component {...pageProps} />
        </SideBarContextProvider>
      </HistoryContextProvider>
    </ThemeContextProvider>
  )
}
