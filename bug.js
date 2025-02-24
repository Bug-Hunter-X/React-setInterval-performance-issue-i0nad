```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The second argument is the delay in milliseconds
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```