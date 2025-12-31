// Register
function registerUser() {
  const email = document.getElementById("regEmail").value;
  const phone = document.getElementById("regPhone").value;
  const password = document.getElementById("regPassword").value;

  if (!email || !phone || !password) {
    alert("Fadlan buuxi dhammaan xogta");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    alert("User hore ayuu u diiwaangashan yahay");
    return;
  }

  users.push({ email, phone, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Register guul leh");
  window.location.href = "login.html";
}

// Login
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Account ma jiro ama password waa qalad");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  alert("Login guul leh");
  // Tallaabada xigta: Home page
  // window.location.href = "index.html";
}
