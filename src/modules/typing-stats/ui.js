import {
  typingStatsRow,
  typingStatsTable,
  mistakesText,
  charsText,
  wpmText,
  accuracyText,
} from "../../utils/domElements.js";
import { tableRowCls, typingStatsStorageKey } from "../../config.js";
import { updatePerformance } from "./update.js";
import { getDataFromLocalStorage } from "../../utils/helpers.js";

const resetTypingStatsInUi = () => {
  setTypingStatsInUI(charsText, 0);
  setTypingStatsInUI(mistakesText, 0);
  setTypingStatsInUI(wpmText, 0);
  setTypingStatsInUI(accuracyText, 0);
};

const setTypingStatsTableVisibility = (display) => {
  typingStatsTable.style.display = display;
};

const addTypingStatsRowInUi = (stats) => {
  setTypingStatsTableVisibility("block");
  typingStatsRow.innerHTML = "";
  stats.forEach((stat, index) => {
    const previousStat = stats[index - 1];
    const performance = index > 0 ? updatePerformance(previousStat, stat) : "-";
    const row = `
    <tr>
      <td class="${tableRowCls.firstCol}">${stat.timeStamp}</td>
      <td class="${tableRowCls.ht} ${tableRowCls.col}">${stat.charsCount || 0}</td>
      <td class="${tableRowCls.ht} ${tableRowCls.col}">${stat.mistakesCount || 0}</td>
      <td class="${tableRowCls.hm} ${tableRowCls.col}">${stat.wpm || 0}</td>
      <td class="${tableRowCls.ht} ${tableRowCls.col}">${stat.accuracy || 0}%</td>
      <td class="${tableRowCls.lastCol}">${performance}</td>
    </tr>`;
    typingStatsRow.insertAdjacentHTML("afterbegin", row);
  });
};

const checkTypingStats = () => {
  const existingTypingStats = getDataFromLocalStorage(typingStatsStorageKey);
  if (existingTypingStats.length === 0) {
    setTypingStatsTableVisibility("none");
  } else {
    addTypingStatsRowInUi(existingTypingStats);
  }
};

const setTypingStatsInUI = (element, count) => {
  if (element) element.textContent = count;
  else console.warn("Element not found", element);
};

export {
  resetTypingStatsInUi,
  addTypingStatsRowInUi,
  checkTypingStats,
  setTypingStatsInUI,
};
