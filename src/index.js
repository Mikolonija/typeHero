import { updateCopyrightYear } from "./modules/copyright.js";
import { typingText, restartBtn, text } from "./utils/domElements.js";
import {
  updateTyping,
  checkTypingCompletionStatus,
} from "./modules/typing-management/update.js";
import {
  fetchTextData,
  displayTextData,
} from "./modules/text-management/fetchTextData.js";
import { resetTimer, startTimer } from "./modules/time-management/timer.js";
import { resetTapingStats } from "./modules/typing-stats/update.js";
import { resetTypingStatsInUi, checkTypingStats } from "./modules/typing-stats/ui.js";
import { currentTextData, timer } from "./config.js";
import { setTextOpacityInUI } from "./modules/text-management/ui.js";

restartBtn.addEventListener("click", () => {
  resetPage();
});

typingText.addEventListener("input", () => {
  if (timer.secondLeft > 0) {
    startTimer();
    updateTyping();
  }
  checkTypingCompletionStatus();
});

document.addEventListener("keydown", (e) => {
  typingText.focus();
  if (["Shift", "ArrowLeft", "ArrowRight"].includes(e.key)) e.preventDefault();
  else if (e.ctrlKey || e.metaKey) e.preventDefault();
  else if (["Enter"].includes(e.key) && !restartBtn.disabled) resetPage();
  else if (["Escape"].includes(e.key)) resetCurrentTextData();
});

text.addEventListener("click", () => {
  typingText.focus();
});

const resetCurrentTextData = () => {
  setTextOpacityInUI(1);
  displayTextData(currentTextData);
  resetTimer();
  resetStats();
};

const resetPage = () => {
  setTextOpacityInUI(1);
  resetTimer();
  resetStats();
  fetchTextData();
};

const resetStats = () => {
  resetTapingStats();
  resetTypingStatsInUi();
};

document.addEventListener("DOMContentLoaded", () => {
  initializePage();
});

const initializePage = () => {
  updateCopyrightYear();
  fetchTextData();
  checkTypingStats();
};
