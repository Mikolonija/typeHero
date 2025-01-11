import { secondText } from "../../utils/domElements.js";
import { timer, endTimeMessage } from "../../config.js";
import { resetTimerProgressBar, updateTimerProgressBar } from "./progressBar.js";
import { updateWpm } from "../typing-stats/update.js";
import { savingTypingStats } from "../typing-stats/saving.js";
import { setTextOpacityInUI } from "../text-management/ui.js";

const resetTimer = () => {
  timer.reset();
  showSecondsInUI(timer.secondLeft);
  clearInterval(timer.countdown);
  resetTimerProgressBar();
};

const endTimer = (message) => {
  setTextOpacityInUI(0.5);
  savingTypingStats();
  alert(message);
  clearInterval(timer.countdown);
};

const showSecondsInUI = (seconds) => {
  secondText.textContent = seconds;
};

const runTimer = () => {
  showSecondsInUI(timer.secondLeft);
  timer.countdown = setInterval(() => {
    timer.secondLeft--;
    updateTimerProgressBar();
    if (timer.secondLeft < 0) {
      endTimer(endTimeMessage);
    } else {
      showSecondsInUI(timer.secondLeft);
      updateWpm();
    }
  }, 1000);
};

const startTimer = () => {
  if (timer.timerStarted) return;
  else {
    timer.timerStarted = true;
    runTimer();
  }
};

export { startTimer, resetTimer, endTimer };
