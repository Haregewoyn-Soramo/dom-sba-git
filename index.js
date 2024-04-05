const emailInput = document.getElementById("uniqueEmail")
emailInput.addEventListener('click', function() {
   emailInput.addEventListener('input', function () {
    const emailValue = emailInput.value;
    let missingRequirements = [];
    const dotPos = emailValue.lastIndexOf('.');
if (!/[A-Z]/.test(emailValue)) {
  missingRequirements.push('at least one capital letter');
}
else if (emailValue.indexOf('@') === -1) {
  missingRequirements.push('at least one @ character');
}
else if (!/\d/.test(emailValue)) {
  missingRequirements.push('at least one number');
}
else if (dotPos === -1 || emailValue.length - dotPos < 4) {
  missingRequirements.push('at least one dot(.) character');
}
else if (missingRequirements.length > 0) {
  emailErrorMessage.textContent = 'The email must contain ' + missingRequirements.join(', ') + '.';
} else {
  emailErrorMessage.textContent = '';
  missingRequirements = '';
}
    emailInput.focus()
});
emailInput.addEventListener('focus', function () {
emailErrorMessage.textContent = '';
emailInput.focus()
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

