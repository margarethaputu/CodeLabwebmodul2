document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;

    if (nama.trim() === "" || email.trim() === "" || alamat.trim() === "") {
      alert("Anda harus mengisi data dengan lengkap.");
    } else {
      alert("Pendaftaran berhasil!");
      form.reset();
    }
  });
});
