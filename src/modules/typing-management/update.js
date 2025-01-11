import { resetFirstCharacterStyles } from "./resetFirstCharacter.js";
import { validateText } from "./validation.js";
import { text, typingText } from "../../utils/domElements.js";
import { updateTypingStats } from "../typing-stats/update.js";
import { endTimer } from "../time-management/timer.js";
import { endWordMessage } from "../../config.js";

const updateCharacter = (
  typedTextLength,
  displayedText,
  characterActive,
  characterSecondActive
) => {
  if (typedTextLength > 0) {
    const oldText = displayedText.slice(typedTextLength + 1);
    text.innerHTML = characterActive + characterSecondActive + oldText;
  } else {
    resetFirstCharacterStyles();
  }
};

const updateTyping = () => {
  const typedText = typingText.value;
  const displayedText = text.textContent;
  const typingState = validateText(typedText, displayedText);
  updateCharacter(
    typedText.length,
    displayedText,
    typingState.characterActive,
    typingState.characterSecondActive
  );
  updateTypingStats(
    typingState.correctWordsCount,
    typingState.mistakesCount,
    typingState.typedWordsCount
  );
};

const checkTypingCompletionStatus = () => {
  if (typingText.value.length === text.textContent.length) {
    updateTyping();
    setTimeout(() => {
      endTimer(endWordMessage);
    }, 10);
  }
};

export { updateTyping, checkTypingCompletionStatus };
