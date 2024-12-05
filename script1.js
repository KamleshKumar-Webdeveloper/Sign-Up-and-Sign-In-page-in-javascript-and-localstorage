document.getElementById("login").addEventListener("click", function () {
  let username = document.getElementById("useremail").value;
  let userPassword = document.getElementById("userpass").value;

  if (username && userPassword) {
    let localStorageData = localStorage.getItem("userDetails");

    if (localStorageData) {
      localStorageData = JSON.parse(localStorageData);

      if (
        username === localStorageData.email &&
        userPassword === localStorageData.password
      ) {
        window.location.assign = "home.html";
      } else {
        alert("username/password is incorrect");
      }
    } else {
      alert("please signup first, and login");
      window.location.assign = "index.html";
    }
  } else {
    alert("please enter all the details.");
  }
});
