document.getElementById("signup").addEventListener("click", function () {
  let userName = document.getElementById("username").value;
  let userEmail = document.getElementById("useremail").value;
  let userPass = document.getElementById("userpass").value;

  if (userName && userEmail && userPass) {
    let userDetails = { name: userName, email: userEmail, password: userPass };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    window.location.assign = "login.html";
  } else {
    alert("please enter all the details");
  }
});
