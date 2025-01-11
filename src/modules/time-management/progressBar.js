import { progressBorder } from "../../utils/domElements.js";
import { timer, circularProgressBarProgress } from "../../config.js";

const resetTimerProgressBar = () => {
  progressBorder.style.setProperty(circularProgressBarProgress, 100);
};

const updateTimerProgressBar = () => {
  const progressPercentage = (timer.secondLeft / timer.totalSeconds) * 100;
  progressBorder.style.setProperty(circularProgressBarProgress, progressPercentage);
};

export { updateTimerProgressBar, resetTimerProgressBar };
