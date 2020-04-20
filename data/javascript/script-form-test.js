var SubMess = document.getElementById("submit-message");

function TestFunctionShow()
  {
    SubMess.classList.remove("submit-message-not-displayed");
    SubMess.innerHTML = "Message after submitting the form. <span style='color: green; font-weight: bold;'>Success!</span> or <span style='color: red; font-weight: bold;'>Error!</span>";
    
    alert("Submit button was clicked");
  }