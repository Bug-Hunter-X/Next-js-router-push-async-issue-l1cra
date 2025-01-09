```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/some-page');
    router.events.on('routeChangeComplete', () => {
      console.log('Route changed');
    });
  };

  return (
    <button onClick={handleClick}>Go to Some Page</button>
  );
}

export default MyComponent;```