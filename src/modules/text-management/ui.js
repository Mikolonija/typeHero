import {
  textLoader,
  text,
  typingText,
  restartBtn,
  typingBox,
} from "../../utils/domElements.js";
import { removeElementClass, addElementClass } from "../../utils/helpers.js";
import { typingBoxCls } from "../../config.js";

const activeFirstCharacterInUI = (textData) => {
  if (textData.length === 0) return "";
  const firstCharacter = `<span>${textData[0]}</span>`;
  const oldText = textData.slice(1);
  return firstCharacter + oldText;
};

const outputTextInUI = (textData) => {
  const newText = activeFirstCharacterInUI(textData);
  text.innerHTML = newText;
  text.style.display = "block";
};

const activeTextTypingInUI = () => {
  typingText.value = "";
  typingText.maxLength = text.textContent.length;
  typingText.style.display = "block";
};

const setTextOpacityInUI = (opacity) => {
  text.style.opacity = opacity.toString();
};

const hideTextElementsInUI = () => {
  text.style.display = "none";
  typingText.style.display = "none";
};

const setLoaderAndButtonInUI = ({ isLoaderVisible, isButtonDisabled }) => {
  textLoader.style.display = isLoaderVisible ? "block" : "none";
  restartBtn.disabled = isButtonDisabled;
};

const displayTypingBoxUI = () => {
  addElementClass(typingBox, [typingBoxCls.layoutCenter]);
  removeElementClass(typingBox, [typingBoxCls.layoutTopCenter]);
  hideTextElementsInUI();
  setLoaderAndButtonInUI({ isLoaderVisible: true, isButtonDisabled: true });
};

export {
  outputTextInUI,
  activeTextTypingInUI,
  setTextOpacityInUI,
  hideTextElementsInUI,
  setLoaderAndButtonInUI,
  displayTypingBoxUI,
};
