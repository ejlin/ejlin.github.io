function go_to(url)
{
  window.location.href = url;
}

function download(file)
{

  window.location = file;
}

function documentOnLoad() {

}

function displaySlide(tab) {
  var slideBox = document.getElementById("body-inner-box-folder-body");
  const slides = document.getElementsByClassName("slide");
  const tabs = document.getElementsByClassName("tabs");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.opacity = "0.7";
  }

  switch(tab) {
    case "About Me":
      document.getElementById("about-me-tab").style.opacity = "1.0";
      document.getElementById("about-me-slide").style.display = "block";
      break;
    case "Work Experience":
      document.getElementById("work-experience-tab").style.opacity = "1.0";
      document.getElementById("work-experience-slide").style.display = "block";
      break;
    case "Projects":
      document.getElementById("projects-tab").style.opacity = "1.0";
      document.getElementById("projects-slide").style.display = "block";
      break;
    case "Resume":
      document.getElementById("resume-tab").style.opacity = "1.0";
      document.getElementById("resume-slide").style.display = "block";
      break;
    default:
      console.log("Err");
  }
}
