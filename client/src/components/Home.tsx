import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/test')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to LessonScribe</h1>
      <p>{data}</p>
    </div>
  );
};

export default Home;
