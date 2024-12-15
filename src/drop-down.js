import "./drop-down.css";

export default function dropdown(button, list) {
  const hoverable = () => {
    if (!(button || list)) {
      return;
    }

    button.classList.add("drop-down-hover__button");
    list.classList.add("drop-down-hover__list");
  };

  const clickable = () => {
    if (!(button || list)) {
      return;
    }

    button.classList.add("drop-down-click__button");
    button.classList.add("button-hide");
    list.classList.add("drop-down-click__list");
    list.classList.add("list-hide");

    window.addEventListener("mousedown", (event) => checkClick(event.target));

    button.addEventListener("mouseup", toggleListVisibility);

    function showList() {
      if (!list.classList.contains("list-hide")) {
        return;
      }
      console.log("showing list");
      list.classList.remove("list-hide");
      list.classList.add("list-show");
      button.classList.remove("button-hide");
      button.classList.add("button-show");
    }

    function hideList() {
      console.log("hiding list");
      const openList = document.querySelector(".list-show");
      if (openList) {
        openList.classList.remove("list-show");
        openList.classList.add("list-hide");
      }
      const openButton = document.querySelector(".button-show");
      if (openButton) {
        openButton.classList.remove("button-show");
        openButton.classList.add("button-hide");
      }
    }

    function toggleListVisibility() {
      if (list.classList.contains("list-hide")) {
        hideList();
        showList();
      } else {
        hideList();
      }
    }

    function checkClick(target) {
      if (!target.closest(".drop-down-click__button")) {
        hideList();
      }
      if (target.classList.contains(".drop-down-click__button")) {
        console.log(`dropdown clicked`);
        hideList();
      }
    }
  };

  function addFunctionToListItem(behaviorFunction, listItemIndex) {
    if (!listItemIndex && listItemIndex !== 0) {
      return;
    }
    if (!behaviorFunction) {
      return;
    }
    const listItem = list.children.item(listItemIndex);
    if (!listItem) {
      return;
    }
    listItem.addEventListener("mouseup", behaviorFunction);
  }

  return { hoverable, clickable, addFunctionToListItem };
}
