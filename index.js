// Cache at least one element using selectElementById.
const uniqueEmailInput = document.getElementById('uniqueEmail');
// Cache at least one element using querySelector or querySelectorAll.
const accordionButton = document.querySelector('.accordion-button');
//Use the parent-child-sibling relationship to navigate between elements at least once 
const uniqueEmailInputParent = uniqueEmailInput.parentNode;
const form = document.querySelector('form');
const purpose = document.querySelector('purpose');
// Do something with each list ite
const listItems = document.querySelectorAll('ul.list-group li');
listItems.forEach(item => {
  console.log(item.textContent);
});

  purpose.addEventListener("click", function() {
    const newGoal = newGoalInput.value.trim();
    if (newGoal) {
      const goalItem = document.createElement("div");
      goalItem.innerHTML = `
        <label>
          <input type="checkbox" name="goal" value="${newGoal}">
          ${newGoal}
        </label>
      `;
      goalList.appendChild(goalItem);
      newGoalInput.value = ""; // Clear the input field
    }
  });
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.getElementById("top-menu");
  
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (let l of menuLinks) {
    const newEl = document.createElement("a");
    newEl.setAttribute("href", l.href);
    newEl.textContent = l.text;
    topMenuEl.appendChild(newEl);
  }
  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "100%";
  
  let topMenuLinks = topMenuEl.getElementsByTagName("a");
  
  topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.nodeName !== "A") {
      return;
    }
    console.log(event.target.textContent);
    event.target.classList.toggle("active");
  
    Array.from(topMenuLinks).forEach(link => {
      if (link !== event.target) {
        link.classList.remove("active");
      }
    });
  
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);
    if (clickedLink && clickedLink.subLinks) {
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
    buildSubmenu(clickedLink.subLinks);
  });
  
  function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = "";
    if (!subLinks) return;
    subLinks.forEach(link => {
      const newEl = document.createElement("a");
      newEl.setAttribute("href", link.href);
      newEl.textContent = link.text;
      subMenuEl.appendChild(newEl);
    });
  }
  
  subMenuEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.nodeName !== "A") {
      return;
    }
    console.log(event.target.textContent);
    subMenuEl.style.top = "0";
    Array.from(topMenuLinks).forEach(link => {
      link.classList.remove("active");
    });
    mainEl.innerHTML = "<h1>" + event.target.textContent + "</h1>";
  });