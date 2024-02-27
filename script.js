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
menuNavbar.forEach((menu)=>{
//create element
    const menuItem = document.createElement('a');
    menuItem.textContent = menu.text;
    menuItem.href = menu.href;
    navbar.appendChild(menuItem);
});

// select element using querySelector
const bar = document.querySelector('div');
// using innerHTML
divbar.innerHTML = '<h1>WOW Beauty</h1>';
divbar.style.color ='white'
  

