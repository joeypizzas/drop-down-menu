// JS for dropdown menu

export function initDropdownListeners() {
  const root = document.documentElement;
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");
  dropdownItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor =
        getComputedStyle(root).getPropertyValue("--hover");
    });
    item.addEventListener("mouseout", () => {
      item.style.backgroundColor =
        getComputedStyle(root).getPropertyValue("--normal");
    });
  });
  dropdownParents.forEach((parent) => {
    parent.addEventListener("mouseover", () => {
      const dropdownContainer = parent.closest(".dropdown-container");
      const dropdownChildren =
        dropdownContainer.querySelectorAll(".dropdown-child");
    });
  });
}
