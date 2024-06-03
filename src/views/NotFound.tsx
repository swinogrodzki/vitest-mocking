import { useNavigate } from 'react-router-dom';
import { HOME_URI } from '../routes/router.tsx';

const NOT_FOUND_MESSAGE = `Page doesn't exist`;

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>
                { NOT_FOUND_MESSAGE }
            </p>
            <button
                onClick={() => navigate(HOME_URI)}
            >
                Home
            </button>
        </div>
    );
};

export default NotFound;

export {
    NOT_FOUND_MESSAGE,
};