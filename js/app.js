//reference dom elements
var domElements = {
  "oads": document.getElementById('oads'),
  "project": document.getElementsByClassName('projects'),
  "main": document.getElementById('main'),
  "subheader": document.getElementById('subheader'),
  "lynchburg": document.getElementById('lynchburg'),
  "CBF": document.getElementById('CBF'),
  "caret": document.getElementsByTagName('i')
}

// setup button handlers
for (var i = 0; i < domElements.project.length; i++) {
  domElements.project[i].addEventListener("click", toggleMenu);
}
domElements.oads.addEventListener("click", writeOADs);
domElements.CBF.addEventListener("click", writeCBF);
domElements.lynchburg.addEventListener("click", writeLynchburg)

//
//supporting functions
//
function writeHomeBtn() {
  if (domElements.subheader.innerHTML.indexOf("Home") == -1 ) {
    domElements.subheader.innerHTML = "<a href='index.html' id='homeBtn'>Home</a> |" + subheader.innerHTML;
  } else {}
}

function toggleMenu() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
    var caret = this.firstChild.className = "fa fa-caret-right";
  } else {
    content.style.display = "block";
    var caret = this.firstChild.className = "fa fa-caret-down";
  }


};

function writeOADs() {
  domElements.main.innerHTML = "<p><h3>OADs Portal</h3><p>I am currently in the process of building a customized search data portal for NOAA's National Centers for Environmental Information. Check back for a link to the portal in the near future!</p>"
  writeHomeBtn();
};

function writeCBF() {
  domElements.main.innerHTML = '<p><h3>Chesapeake Bay Foundation</h3><p>As part of my internship with the Chesapeake Bay Foundation, I utilized GIS technologies and data analysis techniques to assess tree canopy cover in the City of Hopewell. My assessment below allowed CBF to achieve $200,000 of grant funding to plant trees in Hopewell, Virginia. <p><embed src="images/CBF.pdf" type="application/pdf" width="100%" height="600px" />'
  writeHomeBtn();
};

function writeLynchburg() {
  domElements.main.innerHTML = "<p><h3>City of Lynchburg</h3><p>While interning with the City of Lynchburg's GIS Office within the city's IT Department, I organized the city's stormwater and public works databases among other things. Check out everything else I did during my internship by clicking the link below<p>"
  domElements.main.innerHTML += "<a href='https://arcg.is/1uD5Pu' target='_blank'>StoryMap</a>"
  writeHomeBtn();
}
