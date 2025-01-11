import { characterStatusCls } from "../../config.js";
import { removeElementClass } from "../../utils/helpers.js";

const removeCharacterClasses = (classNames) => {
  const elements = document.querySelectorAll(
    classNames.map((className) => `.${className}`).join(", ")
  );
  elements.forEach((span) => {
    removeElementClass(span, classNames);
  });
};

const removeActiveCharacterElement = (className) => {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((span) => {
    const text = span.textContent;
    span.replaceWith(text);
  });
};

const resetFirstCharacterStyles = () => {
  removeActiveCharacterElement(characterStatusCls.active);
  removeCharacterClasses([characterStatusCls.incorrect, characterStatusCls.correct]);
};

export { resetFirstCharacterStyles };
