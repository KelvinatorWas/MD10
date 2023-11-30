/* eslint-disable no-alert */
import $ from 'jquery';
import axios from 'axios';
import { validateFormInput } from './utils/validateFormInputs/validateFormInputs';

// console.log('Body jQuery node:', $('body'));
// console.log('Body javascript node:', document.querySelector('body'));

type User = {
  id?: number;
  name:string;
  email:string;
  password:string;
}

const pushData = (data:User) => {
  try {
    axios.post<User>('http://localhost:3004/users', data).then(() => {
      console.log('User Added');
    });
  } catch (error) {
    console.log('Error', error);
  }
};

const lookUpEmail = async (email:string) => {
  try {
    const result = await axios.get<User[]>(`http://localhost:3004/users?q=${email}`);
    return result.data.length > 0;
  } catch (error) {
    console.log('Error:', error);
  }
  return false;
};

$(() => {
  $('#log-in').on('submit', async (event) => {
    event.preventDefault();

    const [em, na, pas, rpas] = [$('#email').val(), $('#name').val(), $('#password').val(), $('#repassword').val()] as string[];
    const isValid = validateFormInput(em, na, pas, rpas);

    if (isValid) {
      const isEmailAlreadyUsed = await lookUpEmail(em);

      if (!isEmailAlreadyUsed) {
        pushData({ name: na, email: em, password: pas });
      } else {
        alert('Email is already being used');
      }
    }
  });
});
