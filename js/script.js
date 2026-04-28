// Portfolio JavaScript - Manas

var projects = [
  { id:1, title:"Portfolio Website",  desc:"Responsive portfolio built with HTML5, CSS3, Flexbox and JS.",  tags:["HTML5","CSS3","JS"],        live:"#", repo:"#" },
  { id:2, title:"Flexbox Gallery",    desc:"Photo gallery with responsive Flexbox grid and hover effects.", tags:["CSS3","Flexbox"],            live:"#", repo:"#" },
  { id:3, title:"Contact Form",       desc:"Interactive contact form with real-time JS validation.",        tags:["HTML5","JavaScript"],        live:"#", repo:"#" },
  { id:4, title:"Multi-Page Site",    desc:"Multi-page website with shared navbar and consistent layout.",  tags:["HTML5","CSS3","Responsive"],  live:"#", repo:"#" }
];

function renderProjects() {
  var container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = projects.map(function(p) {
    var tagsHtml = p.tags.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join("");
    return '<div class="card">'
      + '<img class="card-image" src="https://via.placeholder.com/320x190?text=' + encodeURIComponent(p.title) + '" alt="' + p.title + '">'
      + '<div class="card-body">'
      + '<h3 class="card-title">' + p.title + '</h3>'
      + '<p class="card-text">' + p.desc + '</p>'
      + '<div class="card-tags">' + tagsHtml + '</div>'
      + '</div>'
      + '<div class="card-footer">'
      + '<a href="' + p.live + '" class="btn-card btn-primary">Live Demo</a>'
      + '<a href="' + p.repo + '" class="btn-card btn-outline">GitHub</a>'
      + '</div>'
      + '</div>';
  }).join("");
}

window.addEventListener("scroll", function() {
  var nb = document.querySelector(".navbar");
  if (nb) { nb.style.boxShadow = window.scrollY > 40 ? "0 4px 20px rgba(0,0,0,.4)" : "none"; }
});

function validateForm(e) {
  e.preventDefault();
  var name    = document.getElementById("name")    ? document.getElementById("name").value.trim()    : "";
  var email   = document.getElementById("email")   ? document.getElementById("email").value.trim()   : "";
  var message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";
  var emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name.length < 2)      { alert("Enter a valid name (min 2 chars)."); return; }
  if (!emailRx.test(email)) { alert("Enter a valid email address."); return; }
  if (message.length < 10)  { alert("Message must be at least 10 characters."); return; }
  alert("Message sent! I will get back to you soon.");
  e.target.reset();
}

document.addEventListener("DOMContentLoaded", function() {
  renderProjects();
  var form = document.getElementById("contact-form");
  if (form) { form.addEventListener("submit", validateForm); }
  console.log("Portfolio by Manas - Loaded OK");
});