import { FaBrain, FaUnlockAlt, FaQuestion } from 'react-icons/fa';
import { Card } from '../Card/Card';
import { CardHeader } from '../Card/CardHeader';
import { Logo } from '../Logo';

export const LandingPage: React.FC = () => {
  return (
    <div className="px-6">
      <div className="py-6 flex justify-between items-center">
        <Logo />
        <a href="/dashboard" className="bg-blue-500 text-white py-2 px-6 rounded">
          Log In
        </a>
      </div>
      <div className="grid bg-gray-50 rounded p-6 gap-6">
        <Card>
          <CardHeader>
            <h1 className="text-2xl text-center">The Most Insecure!</h1>
          </CardHeader>
          <div className="flex flex-col items-center">
            <FaUnlockAlt size={90} className="my-8" />
            <p>The most insecure password manager in the world! Anyone can see everything whenever they want!</p>
          </div>
        </Card>
        <Card>
          <CardHeader>
            <h1 className="text-2xl text-center">Never Forget Your Password Again!</h1>
          </CardHeader>
          <div className="flex flex-col items-center">
            <FaBrain size={90} className="my-8" />
            <p>Losepass keeps track of all your users important data. Best part is you never have to worry about losing access because theres no security!</p>
          </div>
        </Card>
        <Card>
          <CardHeader>
            <h1 className="text-2xl text-center">Full of Surprises!</h1>
          </CardHeader>
          <div className="flex flex-col items-center">
            <FaQuestion size={90} className="my-8" />
            <p>Keeps you on your toes with the element of surprise! Nothing that you saw the last time will be there again. Surprise!</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
