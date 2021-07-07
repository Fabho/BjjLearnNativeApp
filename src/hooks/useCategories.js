import { useEffect,  useState } from "react";
import client from '../api/client';

export default () => {
  const [categories, setCategories] = useState(null);
  const [errorMessageCat, setErrorMessageCat] = useState('');

  const getCategories = async () => {
    try {
      const response = await client.get('/categories');
      setCategories(response.data);
      console.log("cat hook good")
    } catch(err) {
      console.log("cat hook bad")
      console.log(err.message)
      setErrorMessageCat('useCategories Something went wrong ')
    }
  }

  useEffect(() => {
    getCategories()
  }, []);

  return [getCategories, categories, errorMessageCat];
}