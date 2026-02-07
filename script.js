const theme_button = document.getElementById("theme_btn");

theme_button.addEventListener("click", switch_function);

function switch_function() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    theme_button.textContent = "Light";
  } else {
    theme_button.textContent = "Dark";
  }
}
