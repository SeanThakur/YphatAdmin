/* eslint-disable */ 
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import routes from 'src/routes';
import { useSelector} from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.auth);

  const routing = useRoutes(routes(auth?.isAuth));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
