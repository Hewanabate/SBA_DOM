// nav data structure

var menuNavbar = [
  { text: 'Home', href: '/Home' },
  { text: 'Shop', href: '/Shop' },
  { text: 'About', href: '/About' },
  { text: 'FAQ', href: '/FAQ' },
];

// select element by ID
const menuBar = document.getElementById('navbar');

// iterate over a collection of elements
menuNavbar.forEach((menu) => {
  //create element
  const menuItem = document.createElement('a');
  menuItem.textContent = menu.text;
  menuItem.href = menu.href;
  //append child
  menuBar.appendChild(menuItem);
});

// select element using querySelector
const divbar = document.querySelector('div');

// using innerHTML
divbar.innerHTML = '<h1><i>WOW Beauty</i></h1>';
divbar.style.color = 'white';

const para = document.getElementById('app');
para.innerHTML =
  '<p><i>1234 DownTown</i></p><p><i>Dallas, TX 73475</i></p><p><i>Tel: 460-987-6789</i></p><p><i>wowbeauty@.co</i></p><br><p><i><u>Open Hours</u></i></p><p><i>Monday - Friday 9am-6pm | Saturday 9am - 4pm</i></p>';
para.style.color = 'white';

// use lastElementChild
const town = document.getElementById('app');
town.lastElementChild.style.color = 'gold';

// addEventlistener on submit
const myForm = document.querySelector('form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // alert the user
  alert(`You submitted: 
  ${myForm.querySelector('input').value}`);
  //reset the form
  myForm.reset();
    
});

const form = document.querySelector('form');
const email = form.elements['email'];
const password = form.elements['password'];

form.addEventListener('submit', validate);

// The validation function.

function validate(event) {
  // validate email
  const emailVal = validateEmail();
  if (emailVal === false) {
    event.returnValue = false;
    return false;
  }
  //validate password
  const passwordVal = validatePassword();
  if (passwordVal === false) {
    event.returnValue = false;
    return false;
  }

  return true;
}
  
//Select and cache the all of the <a> elements inside of menuNavbar

 const menuItem1 = navbar.querySelectorAll('a');

navbar.addEventListener('click', function (event) {
  event.preventDefault();

  if (!event.target.matches('a')) {
    return;
  }

  console.log(event.target.textContent);

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
  } else {
    //The event listener should remove the active class from each other <a> element in navMenubar - whether the active class exists or not.
    menuItem1.forEach(function (link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }
});

 //function to interact with the user when click "vist us"
function myFunction(){
  const vist= document.getElementById('vist').innerHTML='Thank you for visting us';
 }
