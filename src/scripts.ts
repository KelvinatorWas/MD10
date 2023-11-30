/* eslint-disable no-undef */
/* eslint-disable no-alert */
import $ from 'jquery';
import axios from 'axios';
import Toastify from 'toastify-js';
import { validateFormInput } from './utils/validateFormInputs/validateFormInputs';

// console.log('Body jQuery node:', $('body'));
// console.log('Body javascript node:', document.querySelector('body'));

const sectionContainer = $('section');

type User = {
  id?: number;
  name:string;
  email:string;
  password:string;
}

const createElement = (type = 'div', className = '', id = '') => {
  const element = $(`<${type}>`);
  if (className.length) element.addClass(className);
  if (id.length) element.attr('id', id);

  return element;
};

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

const createInput = (parent: JQuery<HTMLElement>, text: string, type = '', name = '', ph = '') => {
  const bsRow = createElement('div', 'row');
  const inputLabel = createElement('label', 'custom-label').attr('for', name).text(text);
  const bsColumn = createElement('div', 'col-12');

  const inputArea = createElement('input', 'custom-input-box', name);
  inputArea.attr('type', type);
  inputArea.attr('name', name);
  inputArea.attr('placeholder', ph);
  inputArea.attr('required');

  bsColumn.append(inputArea);
  bsRow.append(inputLabel);
  bsRow.append(bsColumn);

  parent.append(bsRow);
};

const generateForm = () => {
  const createRegBtn = (parent: JQuery<HTMLElement>) => {
    const bsRow = createElement('div', 'row');
    const bsColumn = createElement('div', 'col-12');
    const inputButton = createElement('input', 'btn-input').attr('type', 'submit');
    inputButton.attr('value', 'Register');

    bsColumn.append(inputButton);
    bsRow.append(bsColumn);
    parent.append(bsRow);
  };

  const createAllInputs = (parent: JQuery<HTMLElement>) => {
    const inputFrame = createElement('div', 'input-f');

    createInput(inputFrame, 'Email', 'text', 'email', 'example@prov.com');
    createInput(inputFrame, 'Name', 'text', 'name', 'John Doe');
    createInput(inputFrame, 'Password', 'password', 'password', '••••••••');
    createInput(inputFrame, 'Re-enter Password', 'password', 'repassword', '••••••••');

    parent.append(inputFrame);
  };

  const inputDiv = createElement('div', 'input-frame');
  const formContiner = createElement('form', undefined, 'register');
  const container = createElement('div', 'container');

  // input frame, where it contains input Elements;
  createAllInputs(container);

  // button
  createRegBtn(container);

  formContiner.append(container);
  inputDiv.append(formContiner);
  sectionContainer.append(inputDiv);
};

generateForm();

$(() => {
  $('#register').on('submit', async (event) => {
    event.preventDefault();

    const [em, na, pas, rpas] = [$('#email').val(), $('#name').val(), $('#password').val(), $('#repassword').val()] as string[];
    const isValid = validateFormInput(em, na, pas, rpas);

    if (isValid) {
      const isEmailAlreadyUsed = await lookUpEmail(em);

      if (!isEmailAlreadyUsed) {
        Toastify({
          text: `${na} Registered`,
          duration: 3000,
          backgroundColor: 'green',
        }).showToast();

        pushData({ name: na, email: em, password: pas });

        $('#email').val('');
        $('#name').val('');
        $('#password').val('');
        $('#repassword').val('');
      } else {
        Toastify({
          text: 'Email is already taken!',
          duration: 3000,
          backgroundColor: 'red',
        }).showToast();
      }
    }
  });
});
