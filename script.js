// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
// function sendEmail() {
//   Email.send({
//     secureToken: "9e6fcf46-4a55-40bc-ba4c-f8b2de9557f5",
//     Host: "smtp.elasticemail.com",
//     Username: "maucuan429@gmail.com",
//     Password: "5665BC9091201161010B4F57436408663EF5",
//     To: "maucuan429@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Contact From Enquiry",
//     Body:
//       "Name: " +
//       document.getElementById("name").value +
//       "<br> Email: " +
//       document.getElementById("email").value +
//       "<br> Phone: " +
//       document.getElementById("email").value +
//       "<br> Message: " +
//       document.getElementById("email").value,
//   }).then((message) => alert("Message Sent Succesfully!"));
// }
