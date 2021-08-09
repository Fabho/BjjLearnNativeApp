import { useEffect,  useState } from "react";
import client from '../api/client';

export default () => {
  const [techniques, setTechniques] = useState(null);
  const [errorTechniques, setErrorTechniques] = useState('');

  const getTechniques = async (categoryId) => {
    try {
      const response = await client.get(`/techniquedetail/${categoryId}/categoryId`);
      setTechniques(response.data);
      console.log("techniques hook good")
    } catch(err) {
      console.log("techniques hook bad")
      console.log(err.message)
      setErrorTechniques('useTechniques Something went wrong ')
    }
  }

  //useEffect(() => {
  //  getCategories()
  //}, []);

  return [getTechniques, techniques, errorTechniques];
}