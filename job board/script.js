const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Techify Pvt Ltd",
    location: "Bangalore",
    category: "IT",
    description: "Develop and maintain UI using React.js and TailwindCSS."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudBase Solutions",
    location: "Hyderabad",
    category: "IT",
    description: "Work with Node.js, Express, and MongoDB for backend APIs."
  },
  {
    id: 3,
    title: "HR Manager",
    company: "PeopleFirst Corp",
    location: "Delhi",
    category: "HR",
    description: "Manage employee relations, hiring and payroll systems."
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "DesignCraft",
    location: "Remote",
    category: "Design",
    description: "Create wireframes, prototypes, and design systems."
  }
];

const jobList = document.getElementById("job-list");
const searchInput = document.getElementById("search-input");
const resumeUploadBtn = document.getElementById("upload-resume-btn");
const fileInput = document.getElementById("resume-file");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const postJobBtn = document.getElementById("post-job-btn");
const jobForm = document.getElementById("job-form");
const dashboard = document.getElementById("dashboard");
const notification = document.getElementById("notification");

function displayJobs(jobArray) {
  jobList.innerHTML = "";
  if (jobArray.length === 0) {
    jobList.innerHTML = "<p>No jobs found.</p>";
    return;
  }

  jobArray.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job-card");
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Category:</strong> ${job.category}</p>
      <p>${job.description}</p>
      <button class="apply-btn" onclick="applyJob(${job.id})">Apply Now</button>
    `;
    jobList.appendChild(div);
  });
}
displayJobs(jobs);

searchInput.addEventListener("keyup", e => {
  const keyword = e.target.value.toLowerCase();
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(keyword) ||
    job.company.toLowerCase().includes(keyword) ||
    job.location.toLowerCase().includes(keyword)
  );
  displayJobs(filteredJobs);
});


resumeUploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file && file.type === "application/pdf") {
    showNotification(`✅ Resume "${file.name}" uploaded successfully!`);
  } else {
    showNotification("⚠️ Please upload a valid PDF file.");
  }
});

function applyJob(jobId) {
  const selectedJob = jobs.find(j => j.id === jobId);
  if (selectedJob) {
    showNotification(`✅ You applied for ${selectedJob.title} at ${selectedJob.company}!`);
  }
}

if (jobForm) {
  jobForm.addEventListener("submit", e => {
    e.preventDefault();
    const newJob = {
      id: jobs.length + 1,
      title: e.target.title.value,
      company: e.target.company.value,
      location: e.target.location.value,
      category: e.target.category.value,
      description: e.target.description.value
    };
    jobs.push(newJob);
    displayJobs(jobs);
    jobForm.reset();
    showNotification("✅ Job posted successfully!");
  });
};
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    showNotification("🔐 Logged in successfully!");
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    dashboard.style.display = "block";
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    showNotification("🚪 Logged out successfully!");
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    dashboard.style.display = "none";
  });
}


function showNotification(message) {
  notification.innerText = message;
  notification.classList.add("active");
  setTimeout(() => {
    notification.classList.remove("active");
  }, 3000);
}
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}