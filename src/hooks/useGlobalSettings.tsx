import { useState } from 'react';

export default function useGlobalSettings() {
  const [globals, setGlobals] = useState({
    accentColor: '',
    globalTitle: '',
    logo: '',
  });

  const updateGlobals = (newGlobals: any) => {
    setGlobals(newGlobals);
  };

  return { globals, updateGlobals };
}
