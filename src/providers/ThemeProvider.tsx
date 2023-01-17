import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  accentColor: '',
  logo: '',
  updateAccentColor: (color: string) => {},
  updateLogo: (logo: string) => {},
});

export default function ThemeProvider({ children }: any) {
  const [accentColor, setAccentColor] = useState('');
  const [logo, setLogo] = useState('');

  const updateAccentColor = (color: string) => {
    setAccentColor(color);
  };

  const updateLogo = (logo: string) => {
    setLogo(logo);
  };

  useEffect(() => {
    setAccentColor('#ff0000');
    setLogo('https://via.placeholder.com/150');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        accentColor,
        logo,
        updateAccentColor,
        updateLogo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
