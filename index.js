document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("uniqueEmail");
  const emailErrorMessage = document.createElement('div');
  emailErrorMessage.classList.add('text-danger');
  emailInput.parentNode.insertBefore(emailErrorMessage, emailInput.nextSibling);

  emailInput.addEventListener('input', function () {
    const emailValue = emailInput.value;
    let missingRequirements = [];

    // Check for at least one capital letter
    if (!/[A-Z]/.test(emailValue)) {
      missingRequirements.push('at least one capital letter');
    }

    // Check for at least one @ character
    if (emailValue.indexOf('@') === -1) {
      missingRequirements.push('at least one @ character');
    }

    // Check for at least one number
    if (!/\d/.test(emailValue)) {
      missingRequirements.push('at least one number');
    }

    // Check for at least one . character and at least 3 characters after it
    const dotPos = emailValue.lastIndexOf('.');
    if (dotPos === -1 || emailValue.length - dotPos < 4) {
      missingRequirements.push('at least one dot(.) character');
    }

    // Update error message
    if (missingRequirements.length > 0) {
      emailErrorMessage.textContent = 'The email must contain ' + missingRequirements.join(', ') + '.';
    } else {
      emailErrorMessage.textContent = '';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("keyPassword");
  const passwordErrorMessage = document.createElement('div');
  passwordErrorMessage.classList.add('text-danger');
  passwordInput.parentNode.insertBefore(passwordErrorMessage, passwordInput.nextSibling);

  passwordInput.addEventListener('input', function () {
    const passwordValue = passwordInput.value;
    let missingRequirements = [];

    // Check for at least one capital letter
    if (!/[A-Z]/.test(passwordValue)) {
      missingRequirements.push('at least one capital letter');
    }

    // Check for at least one number
    if (!/\d/.test(passwordValue)) {
      missingRequirements.push('at least one number');
    }

    // Check for at least one special character
    if (!/[^A-Za-z0-9]/.test(passwordValue)) {
      missingRequirements.push('at least one special character');
    }

    // Check for uniqueness
    if (passwordValue.length !== new Set(passwordValue).size) {
      missingRequirements.push('unique characters');
    }

    // Update error message
    if (missingRequirements.length > 0) {
      passwordErrorMessage.textContent = 'The password must contain' + missingRequirements.join(', ') + '.';
    } else {
      passwordErrorMessage.textContent = '';
    }
  });
});


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

