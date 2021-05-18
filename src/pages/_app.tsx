//import '../styles/global.scss'

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyles from '../styles/global';

import Header from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/styles.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <GlobalStyles />
            <Header toggleTheme={toggleTheme} />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </ThemeProvider>
  );
}

export default MyApp
