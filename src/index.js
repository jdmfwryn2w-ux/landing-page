import "./styles.css";

const printButton = document.querySelector("[data-print-certificate]");
if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
