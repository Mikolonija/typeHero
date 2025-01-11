import { tapingStats, timer, performanceStatusCls } from "../../config.js";
import { formatDateToString } from "../../utils/helpers.js";
import { setTypingStatsInUI } from "./ui.js";
import {
  mistakesText,
  charsText,
  wpmText,
  accuracyText,
  typingText,
} from "../../utils/domElements.js";

const resetTapingStats = () => {
  tapingStats.reset();
};

const updateTimestamp = () => {
  tapingStats.timeStamp = formatDateToString(new Date());
};

const updatePerformance = (previousStat, currentStat) => {
  const wpmDifference = currentStat.wpm - previousStat.wpm;
  if (wpmDifference === 0) {
    return `<span class='${performanceStatusCls.even}'>Even 🟨</span>`;
  } else if (wpmDifference < 0) {
    return `<span class='${performanceStatusCls.worse}'>Worse ${Math.abs(
      wpmDifference
    )} WPM 🟥</span>`;
  } else {
    return `<span class='${performanceStatusCls.better}'>Better ${wpmDifference} WPM 🟩</span>`;
  }
};

const updateAccuracy = () => {
  if (tapingStats.typedWordsCount > 0) {
    tapingStats.accuracy = (
      (tapingStats.correctWords / tapingStats.typedWordsCount) *
      100
    ).toFixed(0);
  } else {
    tapingStats.accuracy = 0;
  }
  setTypingStatsInUI(accuracyText, tapingStats.accuracy);
};

const updateWpm = () => {
  const elapsedTime = timer.totalSeconds - timer.secondLeft;
  const elapsedTimeInMinutes = elapsedTime / 60;
  if (elapsedTimeInMinutes > 0) {
    tapingStats.wpm = (tapingStats.correctWords / elapsedTimeInMinutes).toFixed(0);
  } else {
    tapingStats.wpm = 0;
  }
  setTypingStatsInUI(wpmText, tapingStats.wpm);
};

const updateCharactersCount = () => {
  tapingStats.charsCount = typingText.value.length;
  setTypingStatsInUI(charsText, typingText.value.length);
};

const updateMistakeCount = (count) => {
  tapingStats.mistakesCount = count;
  setTypingStatsInUI(mistakesText, count);
};

const updateTypedWordsCount = (count) => {
  tapingStats.typedWordsCount = count;
};

const updateCorrectWordsCount = (count) => {
  tapingStats.correctWords = count;
};

const updateTypingStats = (correctWordsCount, mistakesCount, typedWordsCount) => {
  updateCorrectWordsCount(correctWordsCount);
  updateTypedWordsCount(typedWordsCount);
  updateMistakeCount(mistakesCount);
  updateCharactersCount();
  updateWpm();
  updateAccuracy();
};

export {
  updateTimestamp,
  resetTapingStats,
  updatePerformance,
  updateWpm,
  updateTypingStats,
};
