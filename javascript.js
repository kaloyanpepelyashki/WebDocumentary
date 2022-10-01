let path = document.getElementById("sofa_path");
let pathLenght = path.getTotalLength();

path.style.strokeDasharray = pathLenght + " " + pathLenght;

path.style.strokeDashoffset = pathLenght;

window.addEventListener("scroll", () => {
  // What % down is it?
  var scrollPercentage =
    (document.documentElement.scrollTop - document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLenght * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLenght - drawLength;
});

// <----- |FLASH LIGHT EFFECT | ----->

//<--- | ADDRESES THE FLASHLIGHT FUNCTION |

function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.body.style.setProperty("--cursorX", x + "px");
  document.body.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

//<--- | REMOVES THE FLASHLIGHT FUNCTION ON CLICK |

document.getElementById("switch-click").addEventListener("click", () => {
  console.log("root");
  const root = document.body;
  const dark = document.getElementById("dark");
  root.classList.remove(
    "root"
  ); /* <---- | REMOVES THE CLASS WITH THE STYLING THAT MAKES THE FLASHLIGHT EFFECT POSSIBLE | */
  dark.classList.remove(
    "dissap"
  ); /* <---- | THIS MAKES THE WHOLE CONTENT APPEAR ON THE PAGE | */
  document.getElementById("switch-click").src = "img/switch-on.svg";
});

var a = document.getElementsByTagName("svg")[0];
a.addEventListener(
  "load",
  function () {
    console.log(a);

    var els = document.querySelectorAll("#switch-click");
    for (var i = 0, length = els.length; i < length; i++) {
      els[i].addEventListener(
        "click",
        function () {
          console.log("clicked");
        },
        false
      );
    }
  },
  false
);

//<-----  | MAKING THE BUTTONS ROTATE | ----->

function clickFunction() {
  var element = document.getElementById("button1");
  element.classList.add("rotate_me");
}

//<----- | TEXT ANIMATION | ----->

//<----- | VIDEO | ----->

var ourVideo = document.getElementById("video");

ourVideo.autoplay = false;
ourVideo.load();

function playPause() {
  if (ourVideo.paused) {
    ourVideo.play();
    document.getElementById("pause").src = "img/pause.svg";
  } else {
    ourVideo.pause();
    document.getElementById("pause").src = "img/play.svg";
  }
}

function enableMute() {
  if (ourVideo.muted === false) {
    ourVideo.muted = true;
    document.getElementById("volume").src = "img/volume-off.svg";
  } else {
    ourVideo.muted = false;
    document.getElementById("volume").src = "img/volume-on.svg";
  }
}
