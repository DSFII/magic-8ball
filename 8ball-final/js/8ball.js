
function magicEightBall() {
  const textInput = document.getElementById("textInput");
  const display = document.getElementById("display");
  const images = [
        "../magic8ball_extra.png",
        "../magic8ball_1.png",
        "../magic8ball_2.png",
        "../magic8ball_3.png",
        "../magic8ball_4.png",
        "../magic8ball_5.png",
        "../magic8ball_6.png",
        "../magic8ball_7.png",
        "../magic8ball_8.png",
        "../magic8ball_9.png",
        "../magic8ball_10.png",
        "../magic8ball_11.png",
        "../magic8ball_12.png",
        "../magic8ball_13.png",
        "../magic8ball_14.png",
        "../magic8ball_15.png",
        "../magic8ball_16.png",
        "../magic8ball_17.png",
        "../magic8ball_18.png",
        "../magic8ball_19.png",
        "../magic8ball_20.png",
  ];

  let randomImage;
  let numberInput
  // Random 8ball image
  if (textInput.value) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage = images[randomIndex];
    if (!isNaN(textInput.value)) {
      numberInput = "that's not a fortune"
    }
  } else {
    randomImage = "../magic8ball_extra.png";
  }
  //Template Literal
  display.innerHTML = `<p>You Asked: ${textInput.value || "nothing"}</p> <img src="images/${randomImage}" alt="Random image">`;
}

//Runs code when submit button is hit
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  magicEightBall();
});