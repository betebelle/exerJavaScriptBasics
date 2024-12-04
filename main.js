// let, const
// String, Numbers, Boolean, null, undefined
// Concatenation
// Template String
// Arrays variables that hold multiple values

/* multi 
line 
comment */

// For
// While
// forEach, map, filter

// Constructor function
// Instantiate object
// Class

// Single element
// Multiple element

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') { 
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000); 
    } else { 
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
      userList.appendChild(li);

      // Clear Fields
      nameInput.value = '';
      emailInput.value = '';
    }
}