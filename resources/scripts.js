let Title;
let Description;
let VideoUrl;

function ShowModal(buttonclicked) {
  GetData(buttonclicked.id);

  Swal.fire({
    title: `<h2>Project Demo: ${Title}</>`,
    html: `
        <p>${Description == undefined ? "" : Description}</p>
        <div class="project-modal-container">
        <span class="project-modal-container-iframe-loader"></span>
        <iframe id="project-modal-container-iframe" width="420" height="315"
        src="${VideoUrl}">
        </iframe>
        </div>
      `,
    showCloseButton: true,
    confirmButtonText: `
      Close
    `,
    focusConfirm: false,
  });
}

function GetData(buttonId) {
  switch (buttonId) {
    case "button-project-onlinedice":
      Title = "Online Dice";
      VideoUrl = "https://www.youtube.com/embed/VK2kjvcI6n0?autoplay=0&mute=0";
      break;
    case "button-project-ledCube":
      Title = "LED Cube";
      VideoUrl = "https://www.youtube.com/embed/HsLrH-nLg5Y?autoplay=0&mute=0";
      break;
    case "button-project-LeigthLive":
      Title = "Leigth Live";
      VideoUrl = "https://www.youtube.com/embed/XP0uQcrqBQM?autoplay=0&mute=0";
      break;
    case "button-project-RogerCodes":
      Title = "RogerCodes Blog";
      VideoUrl = "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0&mute=0";
      break;
    case "button-project-ControlPracticas":
      Title = "Control Practicas";
      VideoUrl = "https://www.youtube.com/embed/5gTn-QREIqA?autoplay=0&mute=0";
      break;
    default:
      break;
  }
}
