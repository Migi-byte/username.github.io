// chat.js – nur für das kleine Hilfe-Popup

function initChatHelperPopover() {
  const popover = document.getElementById("chat-helper-popover");
  const closeBtn = document.querySelector(".chat-helper-popover-close");

  if (popover && closeBtn) {
    closeBtn.addEventListener("click", () => {
      popover.style.display = "none";
    });
  } else {
    console.warn("Popover oder Close-Button nicht gefunden");
  }
}

// Sicherstellen, dass das auch läuft – egal, wo das Script eingebunden ist
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatHelperPopover);
} else {
  initChatHelperPopover();
}
