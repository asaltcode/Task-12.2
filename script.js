const emoji = document.getElementById("allEmoji");
//It enables horizontal scrolling
const pointerScroll = (elem) => {
  let isDrag = false;
  const dragStart = () => (isDrag = true);
  const dragEnd = () => (isDrag = false);
  const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX);

  elem.addEventListener("pointerdown", dragStart);
  addEventListener("pointerup", dragEnd);
  addEventListener("pointermove", drag);
};

//getting all the data from the API
const respons = fetch("https://emojihub.yurace.pro/api/all");
respons
  .then((datas) => datas.json())
  .then((data) => {
    for (let i = 0; i < 200; i++) {
      //Creating a new element
      const emojiDiv = document.createElement("div");
      emojiDiv.classList = "emoji-box";
      emojiDiv.innerHTML = `<div class="emoji-pic">
      <div class="emoji">${data[i].htmlCode[0]}</div>
  </div>
  <div class="text-box">
      <h3 class="emoji-name">Name: ${data[i].name}</h3>
      <span class="category">Category: ${data[i].category}</span>
  </div>`;
      emoji.append(emojiDiv);
    }
    //Select all text boxes
    document.querySelectorAll(".text-box").forEach(pointerScroll);
  }).catch((err) => alert("Emojis not exist Reload the webpage"))
