(function () {
  const card = document.getElementById("card");
  if (!card) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let bounds;
  const maxTilt = 6;

  function onMove(e) {
    if (!bounds) bounds = card.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const px = (x / bounds.width - 0.5) * 2;
    const py = (y / bounds.height - 0.5) * 2;
    card.style.transform =
      "rotateY(" + px * maxTilt + "deg) rotateX(" + -py * maxTilt + "deg)";
  }

  function reset() {
    bounds = null;
    card.style.transform = "";
  }

  card.addEventListener("mousemove", onMove);
  card.addEventListener("mouseleave", reset);
})();
