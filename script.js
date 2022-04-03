window.onload = () => {
  document.addEventListener("keydown", handleKeydown);
}

handleKeydown = (e) => {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 38: // up arrow
      window.scrollTo(document.querySelector('.signup-body').scrollHeight, 0);
      break;
    case 40: // down arrow
      window.scrollTo(0, document.body.scrollHeight);
  }
}