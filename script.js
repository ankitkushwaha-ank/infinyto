let count = 1;
const counterDiv = document.getElementById("counter");

setInterval(() => {
  const line = document.createElement("div");
  line.className = "line";
  line.textContent = count++;
  counterDiv.appendChild(line);
}, 20);
