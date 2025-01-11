import { characterStatusCls, typingValidationState } from "../../config.js";

const checkWord = (typedText, displayedText, wordStartIndex, spaceIndex) => {
  const typedWord = typedText.slice(wordStartIndex, spaceIndex).trim();
  const correctWord = displayedText.slice(wordStartIndex, spaceIndex).trim();
  const correctWordsCount = typedWord === correctWord ? 1 : 0;
  return {
    correctWordsCount,
    typedWordsCount: 1,
  };
};

const countMistake = (typedCharacter, currentCharacter) => {
  return typedCharacter === currentCharacter ? 0 : 1;
};

const addMarker = (secondCharacter) => {
  return secondCharacter === undefined
    ? `<span></span>`
    : `<span class="${characterStatusCls.active}">${secondCharacter}</span>`;
};

const addColor = (typedCharacter, currentCharacter) => {
  return typedCharacter === currentCharacter
    ? `<span class="${characterStatusCls.correct}">${currentCharacter}</span>`
    : `<span class="${characterStatusCls.incorrect}">${currentCharacter}</span>`;
};

const updateWordCount = (typedText, displayedText, wordStartIndex, spaceIndex) => {
  const { correctWordsCount, typedWordsCount } = checkWord(
    typedText,
    displayedText,
    wordStartIndex,
    spaceIndex
  );
  typingValidationState.correctWordsCount += correctWordsCount;
  typingValidationState.typedWordsCount += typedWordsCount;
};

const isEndOfWord = (character) => {
  return character.current === " " || character.second === undefined;
};

const updateCharacterStatus = (character) => {
  typingValidationState.characterActive += addColor(character.typed, character.current);
  typingValidationState.characterSecondActive = addMarker(character.second);
  typingValidationState.mistakesCount += countMistake(character.typed, character.current);
};

const validateText = (typedText, displayedText) => {
  typingValidationState.reset();
  let wordStartIndex = 0;
  for (let i = 0; i < typedText.length; i++) {
    const spaceIndex = i + 1;
    const character = {
      typed: typedText[i],
      current: displayedText[i],
      second: displayedText[i + 1],
    };
    updateCharacterStatus(character);
    if (isEndOfWord(character)) {
      updateWordCount(typedText, displayedText, wordStartIndex, spaceIndex);
      wordStartIndex = spaceIndex;
    }
  }
  return typingValidationState;
};

export { validateText };
