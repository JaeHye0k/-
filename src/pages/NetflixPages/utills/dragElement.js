function dragElement(el) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  el.onmousedown = dragMouseDown;
  el.addEventListener("touchstart", dragMouseDown);

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.type === "touchstart") {
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      // { passive: false } 안하면 경고 뜸
      document.addEventListener("touchmove", elementDrag, { passive: false });
      document.addEventListener("touchend", closeDragElement, {
        passive: false,
      });
    } else {
      // 유저가 해당 엘리먼트를 클릭한 곳의 좌표
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.type === "touchmove") {
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      // 이동한 마우스 좌표 구하기
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
    }
    // 엘리먼트를 이동한 위치로 옮기기
    el.style.top = el.offsetTop - pos2 + "px";
    el.style.left = el.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.removeEventListener("touchmove", elementDrag);
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export default dragElement;
