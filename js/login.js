function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "/LoginImg/eye-password-hide-svgrepo-com.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "/LoginImg/eye-close-up-svgrepo-com.svg";
  }
}


function toggleConfirmPasswordVisibility() {
  const passwordInput = document.getElementById("confirm-password");
  const eyeIcon = document.getElementById("eyeconfirm-icon");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "/LoginImg/eye-password-hide-svgrepo-com.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "/LoginImg/eye-close-up-svgrepo-com.svg";
  }
}
