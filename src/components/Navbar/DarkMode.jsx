import React, { useEffect, useState } from 'react';
import lightModeButton from '../../assets/website/light-mode-button.png';
import DarkModeButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; // access to html

  //adding theme to local storage and html element
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('light');
      element.classList.remove('dark');
    }
  });

  return (
    <div>
      <img
        src={theme === 'light' ? lightModeButton : DarkModeButton}
        alt='lightModeButton'
        className='w-12 cursor-pointer'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};

export default DarkMode;
