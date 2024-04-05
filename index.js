  const emailInput = document.getElementById("uniqueEmail");
  const passwordInput = document.getElementById("keyPassword");
  emailInput.addEventListener('input', function () {
    const emailValue = emailInput.value;
    if (!/[A-Z]/.test(emailValue)) {
      alert('Email must contain at least one capital letter');
      return;
    }
    if (!/\d/.test(emailValue)) {
      alert('Email must contain at least one number');
      return;
    }

    if (emailValue.indexOf('@') === -1) {
      alert('Email must contain at least one @ character');
      return;
    }
    const atIndex = emailValue.indexOf('@');
    const dotIndex = emailValue.lastIndexOf('.');
    const domain = emailValue.substring(atIndex + 1, dotIndex);
    if (domain.length < 2) {
      alert('Email domain should be at least 2 characters long');
      return;
    }
    if (emailValue.length < 8 || emailValue.length > 15) {
      alert('Email length should be between 8 and 15 characters');
      return;
    }
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

