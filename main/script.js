let msg = document.getElementById("msg");
let str = document.getElementById("strength");
let pass = document.getElementById("password");

pass.addEventListener("input", () => {
  const length = pass.value.length;

  if (length > 0) {
    msg.classList.remove("hidden");
    msg.classList.add("block");

    if (length < 4) {
      str.innerHTML = "weak.";
      pass.style.borderColor = "#ff5925";
      msg.style.color = "#ff5925";
    } else if (length < 8) {
      str.innerHTML = "medium.";
      pass.style.borderColor = "#fcc112";
      msg.style.color = "#fcc112";
    } else {
      str.innerHTML = "strong.";
      pass.style.borderColor = "#26d730";
      msg.style.color = "#26d730";
    }
  } else {
    msg.classList.add("hidden");
    msg.classList.remove("block");
    str.innerHTML = "";
    pass.style.borderColor = "#ccc";
  }
});
