import { callApi, removeElementClass, addElementClass } from "../../utils/helpers.js";
import { textAPI, typingBoxCls, setCurrentTextData } from "../../config.js";
import { offlineText } from "../../data/offlineText.js";
import { typingBox } from "../../utils/domElements.js";
import {
  displayTypingBoxUI,
  outputTextInUI,
  setLoaderAndButtonInUI,
  activeTextTypingInUI,
} from "./ui.js";

const displayTextData = (textData) => {
  setCurrentTextData(textData);
  addElementClass(typingBox, [typingBoxCls.layoutTopCenter]);
  removeElementClass(typingBox, [typingBoxCls.layoutCenter]);
  outputTextInUI(textData.join(" "));
  activeTextTypingInUI();
  setLoaderAndButtonInUI({ isLoaderVisible: false, isButtonDisabled: false });
};

const fetchTextData = async () => {
  displayTypingBoxUI();
  const { loading, data: textData, error } = await callApi(textAPI);
  if (error && !loading) displayTextData(offlineText);
  if (textData && !loading) displayTextData(textData);
};

export { fetchTextData, displayTextData };
