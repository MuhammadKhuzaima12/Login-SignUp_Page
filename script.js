
const signin_link = document.getElementById("signin_link");
const signup_link = document.getElementById("signup_link");
const signin = document.getElementById("sign_in_id");
const signup = document.getElementById("sign_up_id");

function change_sign(event) {
  const targeted_id = event.currentTarget.id;
  if (targeted_id == "signin_link") {
      signin.style.display = "flex";
      signup.style.display = "none";
    } 
    else {
    signin.style.display = "none";
    signup.style.display = "flex";
  }
}

