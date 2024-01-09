import { useContext } from 'react';
import { AuthContext } from '../pages/useContext/store';

const useAuth = () => useContext(AuthContext);

export default useAuth;
