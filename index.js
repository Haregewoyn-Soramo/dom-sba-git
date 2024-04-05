
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

    // Clear input field after submission
    workoutInput.value = "";
    progressForm.submit();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.querySelector("#uniqueEmail");
  const passwordInput = document.querySelector("#keyPassword");
  const loginForm = document.getElementById("form"); // Assuming your form has id="form"

  // Function to show notification
  function showNotification(message) {
    const notificationContainer = document.getElementById("notification-container");
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    notificationContainer.appendChild(notification);
    setTimeout(() => {
      notification.remove(); // Remove notification after 3 seconds
    }, 3000);
  }

  // Function to validate email
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