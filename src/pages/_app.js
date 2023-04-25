import { StateProvider } from '../components/StateContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    )
}
