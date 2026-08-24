keyboard$.subscribe((key) => {
  // Do nothing when "search" active
  if (key.mode === "search") return;

  switch (key.type) {
    case "ArrowLeft":
      const prev = document.querySelector("link[rel=prev]");
      if (typeof prev !== "undefined" && prev !== null)
        location.href = prev.href;
      break;
    case "ArrowRight":
      const next = document.querySelector("link[rel=next]");
      if (typeof next !== "undefined" && next !== null)
        location.href = next.href;
      break;
  }
});

(() => {
  const docsNotice = localStorage.getItem("docs-notice");
  if (docsNotice === "hide") return;

  const modalWrapper = (() => {
    const div = document.createElement("div");
    div.classList.add("modal-wrapper");
    document.body.appendChild(div);
    return div;
  })();

  const modal = (() => {
    const div = document.createElement("div");
    div.classList.add("modal");
    modalWrapper.appendChild(div);
    return div;
  })();

  const button = (() => {
    const translations = {
      "en": {
        wip: "This documentation is a work in progress. Information may be out of date or inaccurate.",
        close: "Close"
      },
      "zh-TW": {
        wip: "本文件目前仍在撰寫與完善中。部分資訊可能已過時或不準確。",
        close: "關閉"
      }
    };
    const lang = document.documentElement.lang || "en";
    const t = translations[lang] || translations.en;

    const p = document.createElement("p");
    p.innerHTML = t.wip;
    modal.appendChild(p);

    const button = document.createElement("button");
    button.innerHTML = t.close;
    modal.appendChild(button);
    return button;
  })();

  button.addEventListener("click", () => {
    modalWrapper.remove();
    localStorage.setItem("docs-notice", "hide");
  });
})();
