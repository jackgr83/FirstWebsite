//reference dom elements
var domElements = {
  "oads": document.getElementById('oads'),
  "project": document.getElementsByClassName('projects'),
  "main": document.getElementById('main'),
  "subheader": document.getElementById('subheader'),
  "lynchburg": document.getElementById('lynchburg'),
  "CBF": document.getElementById('CBF')
}

// setup button handlers
for (var i = 0; i < domElements.project.length; i++) {
  domElements.project[i].addEventListener("click", toggleMenu);
}
domElements.oads.addEventListener("click", writeOADsHTML);
domElements.CBF.addEventListener("click", embedCBF);

//
//supporting functions
//

function toggleMenu() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }

};

function writeOADsHTML() {
  domElements.main.innerHTML = "<p><h3>OADs Portal</h3><p>Click the button below to be directed to the OADs portal.</p><button type='button' name='OADs'>OADS Portal</button>"
  if (domElements.subheader.innerHTML.indexOf("Home") == -1 ) {
    domElements.subheader.innerHTML = "<a href='index.html'>Home</a> |" + subheader.innerHTML;
  } else {}

};

function embedCBF () {
  domElements.main.innerHTML += '<embed src="images/CBF.pdf" type="application/pdf" width="100%" height="600px" />'
}
