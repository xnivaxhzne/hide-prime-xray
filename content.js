let hideXrayQuickViewExecuted = false;

function hideXrayQuickView() {
  if (!hideXrayQuickViewExecuted) {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    document.head.appendChild(styleElement);

    const styleSheet = styleElement.sheet;
    const rule = ".xrayQuickView { visibility: hidden !important; }";

    styleSheet.insertRule(rule, styleSheet.cssRules.length);

    hideXrayQuickViewExecuted = true;
  }
}

function observeDOM() {
  const targetNode = document.body;

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        const xrayQuickViewEl = document.querySelector(".xrayQuickView");
        if (xrayQuickViewEl) {
          hideXrayQuickView();
          observer.disconnect();
        }
      }
    });
  });

  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", afterLoaded);
} else {
  afterLoaded();
}

function afterLoaded() {
  observeDOM();
}
