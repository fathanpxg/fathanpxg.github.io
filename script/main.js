document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Cek role (admin atau karyawan)
    const idTokenResult = await user.getIdTokenResult();
    const role = idTokenResult.claims.role || "karyawan";

    if (role === "admin") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "input.html";
    }
  } catch (error) {
    document.getElementById("error").innerText = error.message;
  }
});