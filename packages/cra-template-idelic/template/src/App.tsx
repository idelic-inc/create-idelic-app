/** @jsx jsx */
import {css, jsx, keyframes, ThemeProvider} from '@emotion/react';
import {FC, useState} from 'react';

import {composeTheme} from './GlobalTheme';

import logo from './logo.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const logoStyle = css({
  animation: `${logoSpin} 20s linear infinite`,
  height: '40vmin',
  marginTop: '5%',
  pointerEvents: 'none'
});

const codeBlockStyle = css({
  backgroundColor: '#9baee140',
  fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
});

let GlobalTheme = composeTheme(false);

const App: FC = () => {
  const [selectedTheme, setTheme] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const appStyle = css({
    animation: triggered ? `${GlobalTheme.animations.switchMode} 1s ease forwards` : 'none',
    backgroundColor: `${GlobalTheme.colors.backgroundColor}`,
    color: `${GlobalTheme.colors.color}`,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    justifyXontent: 'center',
    minHeight: '100vh'
  });

  const toggleTheme = (): void => {
    GlobalTheme = composeTheme(!GlobalTheme.darkMode);
    setTheme(!selectedTheme);
    !triggered && setTriggered(true);
  }

  return (
    <ThemeProvider theme={GlobalTheme}>
      <div css={appStyle} onClick={toggleTheme}>
          <img css={logoStyle} src={logo} alt='logo' />
          <p>
            Edit <code css={codeBlockStyle}>src/App.tsx</code> and save to reload.
          </p>
      </div>
    </ThemeProvider>
  );
}

export default App;