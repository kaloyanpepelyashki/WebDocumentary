let options = {
  root: null,
  rootMargin: "0px",
  thereshold: 0.6,
};

let observer = new IntersectionObserver(callBack, options);

observer.observe(document.getElementById("firstArticle"));

function callBack(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-right");
    }
  });
}
