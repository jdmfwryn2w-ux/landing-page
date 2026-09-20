export function bindPrintButton() {
  const button = document.querySelector("[data-print-certificate]");
  if (!button) return;

  button.addEventListener("click", () => {
    window.print();
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindPrintButton);
  } else {
    bindPrintButton();
  }
}
