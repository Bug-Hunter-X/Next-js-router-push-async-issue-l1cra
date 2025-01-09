```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/some-page');
    // Some other code that depends on the route change
    console.log('Route changed');
  };

  return (
    <button onClick={handleClick}>Go to Some Page</button>
  );
}

export default MyComponent;```