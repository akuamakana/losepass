import { FaUnlockAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
      <FaUnlockAlt size={44} />
      <div className="pl-2 text-left">
        <h1 className="text-2xl font-bold">Losepass</h1>
        <p className="text-xs">The most insecure password manager.</p>
      </div>
    </div>
  );
};
