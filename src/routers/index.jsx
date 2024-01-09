//* Import

import { useRoutes } from 'react-router-dom';
import OutletChild from './outletChild';
import CounterWithPrev from '../pages/useState';
import NavBar from '../layouts/navBar';
import HomePage from '../pages/homePage';
import LearnUseEffect from '../pages/useeffect';
import LearnUseContext from '../pages/useContext/useContext';
import LearnUseCallback from '../pages/useCallback/useCallback';
import LearnUseRef from '../pages/useRef';
import LearnUseReducer from '../pages/useReducer/exercise1';

const RouterPage = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: (
        <OutletChild>
          <NavBar />
        </OutletChild>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'useState',
          element: < CounterWithPrev />
        },
        {
          path: 'useEffect',
          element: < LearnUseEffect />
        },
        {
          path: 'useContext',
          element: < LearnUseContext />
        },
        {
          path: 'useCallback',
          element: <LearnUseCallback  />
        },
        {
          path: 'useRef',
          element: <LearnUseRef />
        },
       
        {
          path: 'useReducer',
          element: < LearnUseReducer />
        },
      ],
    },
    // {
    //   path: '/*',
    //   element: <NotfoundPage />,
    // },
  ]);
  return elements;
};

export default RouterPage;
