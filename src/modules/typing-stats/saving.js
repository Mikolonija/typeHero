import { updateTimestamp } from "./update.js";
import { addTypingStatsRowInUi } from "./ui.js";
import { tapingStats, typingStatsStorageKey } from "../../config.js";
import { getDataFromLocalStorage } from "../../utils/helpers.js";

const updateTypingStatsInLocalStorage = (existingStats) => {
  localStorage.setItem(typingStatsStorageKey, JSON.stringify(existingStats));
};

const addTypingStats = (existingStats, newStats) => {
  existingStats.push(newStats);
};

const savingTypingStats = () => {
  updateTimestamp();
  const existingTypingStats = getDataFromLocalStorage(typingStatsStorageKey);
  addTypingStats(existingTypingStats, tapingStats);
  updateTypingStatsInLocalStorage(existingTypingStats);
  addTypingStatsRowInUi(existingTypingStats);
};

export { savingTypingStats };
