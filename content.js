const hideXrayQuickView = () => {
  const xRayQuickViewEls = document.querySelectorAll(".xrayQuickView");
  xRayQuickViewEls.forEach((xRayQuickViewEl) => {
    if (xRayQuickViewEl.style.display !== "none") {
      xRayQuickViewEl.style.display = "none";
    }
  });

  const overlayContainerFirstDivChildEls = document.querySelectorAll(
    '[class*="-overlays-container"] > div'
  );

  overlayContainerFirstDivChildEls.forEach(
    (overlayContainerFirstDivChildEl) => {
      if (overlayContainerFirstDivChildEl.style.background !== "none") {
        overlayContainerFirstDivChildEl.style.background = "none";
      }
    }
  );

  const captionsOverlayEls = document.querySelectorAll(
    '[class*="-captions-overlay"]'
  );

  captionsOverlayEls.forEach((captionsOverlayEl) => {
    if (captionsOverlayEl.style.opacity !== "1") {
      captionsOverlayEl.style.opacity = "1";
    }
  });
};

const observer = new MutationObserver(hideXrayQuickView);

window.onload = function () {
  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
};
