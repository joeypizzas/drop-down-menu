// JS for dropdown menu

export function initDropdownListeners() {
  const root = document.documentElement;
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const dropdownChildren = document.querySelectorAll(".dropdown-child");
  const dropdownLists = document.querySelectorAll(".dropdown-list");

  dropdownItems.forEach((item) => {
    // Hover effects for all items across menus
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor =
        getComputedStyle(root).getPropertyValue("--hover");
      item.style.color =
        getComputedStyle(root).getPropertyValue("--text-hover");
    });
    item.addEventListener("mouseout", () => {
      item.style.backgroundColor =
        getComputedStyle(root).getPropertyValue("--normal");
      item.style.color = getComputedStyle(root).getPropertyValue("--text");
    });
  });
  dropdownChildren.forEach((child) => {
    // Click effects for children across all menus
    child.addEventListener("mousedown", () => {
      child.style.backgroundColor =
        getComputedStyle(root).getPropertyValue("--click");
      child.style.color =
        getComputedStyle(root).getPropertyValue("--text-click");
    });
    child.addEventListener("mouseup", () => {
      child.style.backgroundColor =
        getComputedStyle(root).getPropertyValue("--hover");
      child.style.color =
        getComputedStyle(root).getPropertyValue("--text-hover");
    });
  });
  dropdownLists.forEach((list) => {
    const children = list.querySelectorAll(".dropdown-child");
    const parent = list.querySelector(".dropdown-parent");

    parent.addEventListener("mouseover", () => {
      // Show/hide children on specific menu when hover on parent
      children.forEach((child) => child.classList.add("shown"));
    });

    list.addEventListener("mouseleave", () => {
      children.forEach((child) => child.classList.remove("shown"));
    });
  });
}
