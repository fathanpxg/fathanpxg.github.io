const scriptURL = "https://script.google.com/macros/s/AKfycbxxpxHuGAwdkzWdtjfxcrwDanX_HlZn2PsvjO7NX1KUHBySDW75COItLpnjlySGasCY/exec";

function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!role || !username || !password) {
    alert("Harap isi semua kolom");
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ role, username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        if (response.role === "admin") {
          window.location.href = "dashboard-admin.html";
        } else if (response.role === "karyawan") {
          window.location.href = "dashboard-karyawan.html";
        } else if (response.role === "pembukuan") {
          window.location.href = "dashboard-pembukuan.html";
        }
      } else {
        alert("Username atau password salah");
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("Gagal menghubungi server");
    });
}
