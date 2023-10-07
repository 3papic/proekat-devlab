import axios from '../api/axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom'; // Uvoz navigate funkcije
const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });

        navigate('/user-profile');
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
