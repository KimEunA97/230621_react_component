import { useEffect, useState } from 'react';
import './App.css';
import PhotoList from './photo_list';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(result => setPhotos(result))
      .catch((error: object) => console.log('error', error))
  }, [])
  return (
    <PhotoList photos={photos} />
  );
}

export default App;