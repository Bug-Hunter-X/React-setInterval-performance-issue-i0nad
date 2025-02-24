```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCounter = () => {
      setCount(prevCount => prevCount + 1);
      setTimeout(updateCounter, 1000); // Update every 1 second
    };

    updateCounter();
    return () => clearTimeout(updateCounter);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```