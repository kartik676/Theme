const setDarkorLight = () => {
       if (window.matchMedia('(prefers-color-scheme: dark)')
              .matches) {
              document.body.classList.add("dark")
       }
       else {
              document.body.classList.add("light")
       }
};

setDarkorLight();

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
       if (document.body.classList.contains("dark")) {
              document.body.classList.remove("dark");
              document.body.classList.add("light");
       }
       else {
              document.body.classList.contains("light");
              document.body.classList.remove("light");
              document.body.classList.add("dark");
       }
});



window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
       setDarkorLight();
});