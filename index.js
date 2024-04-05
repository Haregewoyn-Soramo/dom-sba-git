


 // Accessing parent element
 const form = document.getElementById('form');

 // Accessing first child of the parent
 const email = form.element('uniqueEmail')

 // Accessing last child of the parent
 const password = form.element('keyPassword')

  const ul = document.querySelector('.list-group-item');
//  Element to cache //
const progress=document.getElementById('progressForm')

//1. Create at least one element using createElement.
const newprogress = document.createElement('li');
// Set the text content of the new li element
newprogress.textContent = 'marathon';
// Append the new li element to the parent list
progress.appendChild(newprogress);


// 3. Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
const template = document.createElement('template');
template.innerHTML = '<p>This is templated content</p>';
const clonedTemplate = template.content.cloneNode(true);

// 4. Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
const elementToModify = document.querySelector('.some-element');
elementToModify.textContent = 'New content';

// 5. Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
const elementToStyle = document.querySelector('.some-element');
elementToStyle.style.color = 'red';

 // Get the collection of list items
 const listItems = document.querySelectorAll('#list li');

 // Iterate over the collection of list items
 listItems.forEach((item, index) => {
     // Task: Update the text content of each list item
     item.textContent = `New Item ${index + 1}`;

// 6. Modify at least one attribute of an element in response to user interaction.
const elementToModifyAttribute = document.querySelector('.some-element');
elementToModifyAttribute.setAttribute('data-custom-attribute', 'new value');

// 7. Register at least two different event listeners and create the associated event handler functions.
document.getElementById('button1').addEventListener('click', eventHandlerFunction1);
document.getElementById('button2').addEventListener('mouseover', eventHandlerFunction2);

function eventHandlerFunction1() {
  console.log('Button 1 clicked');
}

function eventHandlerFunction2() {
  console.log('Mouse over button 2');
}

// 8. Use at least two Browser Object Model (BOM) properties or methods.
console.log(window.innerWidth);
console.log(document.URL);

// 9. Include at least one form and/or input with HTML attribute validation.
  //  <input type="email" required>

// 10. Include at least one form and/or input with DOM event-based validation.
const inputElement = document.getElementById('inputElement');
inputElement.addEventListener('input', function() {
  if (inputElement.value.length < 5) {
    inputElement.setCustomValidity('Input must be at least 5 characters long');
  } else {
    inputElement.setCustomValidity('');
  }
});