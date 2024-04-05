
document.addEventListener("DOMContentLoaded", function() {
  const goalInput = document.getElementById("goalInput");
  const goalList = document.getElementById("goalList");

  goalInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const goalText = goalInput.value.trim();
      if (goalText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = goalText;
        goalList.appendChild(listItem);
        goalInput.value = "";
      }
    }
  });
});

goalInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const goalText = goalInput.value.trim();
    if (goalText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = goalText;
      listItem.classList.add("list-group-item");
      listItem.addEventListener("click", function() {
        goalList.removeChild(listItem);
      });
      goalList.appendChild(listItem);
      goalInput.value = "";
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const progressForm = document.getElementById("progressForm");
  const workoutInput = document.getElementById("workout");

  progressForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const workoutTime = parseInt(workoutInput.value);

    if (workoutTime > 60) {
      alert("Excellent! Keep up the big progress!");
    } else if (workoutTime < 15) {
      alert("You need to do more. Keep pushing!");
    } else {
      alert("Nice job! Keep working!");
    }
    workoutInput.value = "";
    progressForm.submit();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.querySelector("#uniqueEmail");
  const passwordInput = document.querySelector("#keyPassword");
  const loginForm = document.getElementById("form"); 

  function showNotification(message) {
    const notificationContainer = document.getElementById("notification-container");
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    notificationContainer.appendChild(notification);
    setTimeout(() => {
      notification.remove(); 
    }, 3000);
  }

  function validateEmail(email) {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    const domain = email.substring(atIndex + 1, dotIndex);
    return email.length >= 8 && /[A-Z]/.test(email) && /\d/.test(email) && atIndex !== -1 && dotIndex !== -1 && dotIndex > atIndex + 1 && domain.length >= 3;
  }

  function validatePassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    if (!validateEmail(emailValue)) {
      showNotification('Email is invalid. Make sure it contains at least 8 characters, one capital letter, one number, one "@" symbol, one "." after "@" and at least 3 characters after "@"');
      return;
    }
    if (!validatePassword(passwordValue)) {
      showNotification('Password is invalid. Make sure it contains at least 8 characters, one capital letter, one number, and one special character.');
      return;
    }
    console.log('Login successful!');
  });
});
const loginHeader = document.querySelector('.log > h1');
loginHeader .style.color = "crimson";
loginHeader .style.fontFamily = "Arial"; 
const headerTitle = document.querySelector('.display-2 > h1');
headerTitle.style.color = "crimson";
headerTitle.style.fontFamily = "Arial"; 

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.style.color = 'crimson';
});


function handleFormSubmit(event) {
  event.preventDefault();
  const weightInput = document.getElementById('weight');
  const workoutInput = document.getElementById('workout');
  const goalList = document.getElementById('goalList');
  const template = document.getElementById('goalListItemTemplate');
  const listItem = template.content.cloneNode(true);
  listItem.querySelector('li').textContent = `Weight: ${weightInput.value} lbs, Workout Time: ${workoutInput.value} mins`;
  goalList.appendChild(listItem);
  event.target.reset();
}
document.addEventListener("DOMContentLoaded", function() {
  const progressForm = document.getElementById('progressForm');
  progressForm.addEventListener('submit', handleFormSubmit);
});


const buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      navLink.classList.add('active');
      if (navLink.classList.contains('active')) {
        navLink.style.color = 'yellow'; 
      } else {
        navLink.style.color = ''; 
      }
    });
  });
});
