
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';
import { theme } from './theme/theme';

function App() {
  return (
    <div className='App'>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}>

          </RouterProvider>
        </ThemeProvider>
          <CssBaseline />
    </div>
  );
}

export default App;
