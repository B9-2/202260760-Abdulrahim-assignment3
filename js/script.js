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

// Sort projects
const sortProjects = document.getElementById("sortProjects");
const projectListElement = document.getElementById("projectList");

const originalProjects = Array.from(projectListElement.children);

sortProjects.addEventListener("change", () => {
  const projectsArray = Array.from(projectListElement.children);

  if (sortProjects.value === "az") {
    projectsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
  } else if (sortProjects.value === "za") {
    projectsArray.sort((a, b) => b.textContent.localeCompare(a.textContent));
  } else {
    projectListElement.innerHTML = "";
    originalProjects.forEach((item) => {
      projectListElement.appendChild(item);
    });
    return;
  }

  projectListElement.innerHTML = "";
  projectsArray.forEach((item) => {
    projectListElement.appendChild(item);
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const myName = document.getElementById("myName");
const myEmail = document.getElementById("myEmail");
const myMessage = document.getElementById("myMessage");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = myName.value.trim();
  const emailValue = myEmail.value.trim();
  const messageValue = myMessage.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  if (nameValue.length < 3) {
    formMessage.textContent = "Name must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }

  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (messageValue.length < 10) {
    formMessage.textContent = "Message must be at least 10 characters long.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully.";
  formMessage.style.color = "green";

  contactForm.reset();
});

// GitHub API integration
const loadReposBtn = document.getElementById("loadReposBtn");
const repoStatus = document.getElementById("repoStatus");
const repoList = document.getElementById("repoList");

loadReposBtn.addEventListener("click", async () => {
  repoStatus.textContent = "Loading repositories...";
  repoList.innerHTML = "";

  try {
    const response = await fetch("https://api.github.com/users/B9-2/repos");

    if (!response.ok) {
      throw new Error("Failed to fetch repositories.");
    }

    const repos = await response.json();

    if (repos.length === 0) {
      repoStatus.textContent = "No repositories found.";
      return;
    }

    repoStatus.textContent = "";

    const list = document.createElement("ul");

    repos.forEach((repo) => {
      const item = document.createElement("li");

      item.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>${repo.description ? repo.description : "No description available."}</p>
      `;

      list.appendChild(item);
    });

    repoList.appendChild(list);

  } catch (error) {
    repoStatus.textContent = "Could not load GitHub repositories. Please try again later.";
  }
});