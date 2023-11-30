import axios from 'axios';

type User = {
  id?: number;
  name:string;
  email:string;
  password:string;
}

// eslint-disable-next-line import/prefer-default-export
export const fetchData = async (): Promise<User[]> => {
  const response = await axios.get<User[]>('http://localhost:3004/users');
  return response.data;
};
