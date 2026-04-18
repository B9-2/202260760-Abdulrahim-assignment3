// Load saved theme
if (localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  document.getElementById("themeToggle").textContent =  "Light mode";
}

// Dark/Light mode toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "Dark mode";
    localStorage.setItem("theme", "light");
  }
});

// Search project inputs
const searchInput = document.getElementById("projectSearch");
const projectlist = document.querySelectorAll("#projects ol li");
const emptyMessage = document.getElementById("emptyMessage");

searchInput.addEventListener("input", () => {

  const searchValue = searchInput.value.toLowerCase();
  let visible = false;

  projectlist.forEach((item) => {

    const text = item.textContent.toLowerCase();

    if(text.includes(searchValue)) {
      item.style.display = "list-item";
      visible = true;
    }
    else {
      item.style.display = "none";
    }

  });

  if(!visible) {
    emptyMessage.style.display = "block";
  }
  else {
    emptyMessage.style.display = "none";
  }
})

// Contact form validation
const contactForm = document.getElementById("contactForm");
const myName = document.getElementById("myName");
const myEmail = document.getElementById("myEmail");
const myMessage = document.getElementById("myMessage");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  if (myName.value.trim() === "" || myEmail.value.trim() === "" || myMessage.value.trim() === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully.";
  formMessage.style.color = "green";

  contactForm.reset();
})