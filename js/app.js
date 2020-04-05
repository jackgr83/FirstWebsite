

var project = document.getElementsByClassName('projects');

for (var i = 0; i < project.length; i++) {
  project[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });
}
