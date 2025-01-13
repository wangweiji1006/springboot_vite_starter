import "../css/style.css";

document.querySelector("#change-lang").addEventListener("change", function () {
  const lang = this.value;
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.location.href = url.toString();
});
