import {keyframes} from '@emotion/react';

export const composeTheme = (useDarkMode: boolean): any => {
  return {
    colors: {
      backgroundColor: `${useDarkMode ? '#282c34' : '#e8e8e8'}`,
      color: `${useDarkMode ? '#e8e8e8' : '#282c34'}`,
      idelicBlue: '#007aff'
    },
    darkMode: useDarkMode,
    animations: {
      switchMode: keyframes`
        0% {
          background-color: ${useDarkMode ? '#e8e8e8' : '#282c34'};
          color: ${useDarkMode ? '#282c34' : '#e8e8e8'};
        }
        100% {
          background-color: ${useDarkMode ? '#282c34' : '#e8e8e8'};
          color: ${useDarkMode ? '#e8e8e8' : '#282c34'};
        }`
    }
  }
}