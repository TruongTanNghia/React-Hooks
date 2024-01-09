import NavlinkActive from '../../routers/navlinkActive';

import './navbar.css';
const NavBar = () => {
  return (
    <>
      <ul className="display">
      <li className="thefirst">
        <NavlinkActive to="/useState">UseState</NavlinkActive>
      </li>
      <li className="thefirst">
        <NavlinkActive to="/useEffect">UseEffect</NavlinkActive>
      </li>
      <li className="thefirst">
        <NavlinkActive to="/useContext">UseContext</NavlinkActive>
      </li>
      <li className="thefirst">
        <NavlinkActive to="/useCallback">UseCallback</NavlinkActive>
      </li>
      <li className="thefirst">
        <NavlinkActive to="/useRef">UseRef</NavlinkActive>
      </li>
      <li className="thefirst">
        <NavlinkActive to="/useReducer">UseReducer</NavlinkActive>
      </li>
      </ul>
    </>
  );
};

export default NavBar;
