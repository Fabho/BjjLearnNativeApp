import { useEffect,  useState } from "react";
import client from '../api/client';

export default () => {
  const [belts, setBelts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getBelts = async () => {
    try {
      const response = await client.get('/belts');
      setBelts(response.data);
      console.log("belt hook good")
    } catch(err) {
      
      console.log("belt hook bad")
      console.log(err.message)
      setErrorMessage('useBelts Something went wrong ')
    }
  }

  useEffect(() => {
    getBelts()
  }, []);

  return [getBelts, belts, errorMessage];
}