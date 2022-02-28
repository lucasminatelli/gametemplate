export function gameOver()  {
  setTimeout(() => {
    alert("Game-over");
  });
  window.location.reload();
};

export function gameWin() {
    setTimeout(() => {
        alert("Win");
      });
      window.location.reload();
}
