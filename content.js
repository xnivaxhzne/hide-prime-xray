const hideXrayQuickView = () => {
  const xRayQuickViewEl = document.querySelector(".xrayQuickView");
  if (xRayQuickViewEl) {
    xRayQuickViewEl.style.display = "none";
  }

  const overlayContainerFirstDivChildEl = document.querySelector(
    '[class*="-overlays-container"] > div'
  );

  if (overlayContainerFirstDivChildEl) {
    overlayContainerFirstDivChildEl.style.background = "none";
  }

  const captionsOverlayEl = document.querySelector(
    '[class*="-captions-overlay"]'
  );

  if (captionsOverlayEl) {
    captionsOverlayEl.style.opacity = "1";
  }
};

window.onload = hideXrayQuickView;

const observer = new MutationObserver(hideXrayQuickView);
observer.observe(document.body, { childList: true, subtree: true });
