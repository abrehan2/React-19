// IMPORTS -
import { createContext, useState, use } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Card = () => {
  // use Hook()
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div
      className={`p-4 rounded-md ${
        theme === 'light' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h1
        className={`my-4 text-xl ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}
      >
        Theme Card
      </h1>
      <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
       Hello!! use() hook
      </p>
      <button
        onClick={toggleTheme}
        className='bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4'
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

const UseContext = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export default UseContext