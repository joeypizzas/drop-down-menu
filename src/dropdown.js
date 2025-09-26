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
    const dropdownList = parent.closest(".dropdown-list");
    const dropdownChildren = dropdownList.querySelectorAll(".dropdown-child");
    parent.addEventListener("mouseover", () => {
      dropdownChildren.forEach((child) => {
        child.classList.add("shown");
      });
    });
    dropdownList.addEventListener("mouseout", () => {
      // start here
      dropdownChildren.forEach((child) => {
        child.classList.remove("shown");
      });
    });
  });
}
