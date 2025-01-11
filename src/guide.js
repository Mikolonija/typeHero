import { updateCopyrightYear } from "./modules/copyright.js";
import { typingGuide } from "./data/typingGuide.js";
import { renderGuideData } from "./modules/renderGuideData.js";

document.addEventListener("DOMContentLoaded", () => {
  initializePage();
});

const initializePage = () => {
  updateCopyrightYear();
  renderGuideData(typingGuide);
};
