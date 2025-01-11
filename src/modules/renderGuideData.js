import { guideContainer } from "../utils/domElements.js";
import { addElementClass } from "../utils/helpers.js";
import { typingGuideCls } from "../config.js";

const createDescription = (descriptionText) => {
  const description = document.createElement("p");
  addElementClass(description, [
    typingGuideCls.descriptionContainer,
    typingGuideCls.fontDescription,
  ]);
  description.textContent = descriptionText;
  return description;
};

const createTitle = (titleText) => {
  const title = document.createElement("h1");
  addElementClass(title, [typingGuideCls.titleContainer, typingGuideCls.fontTitle]);
  title.textContent = titleText;
  return title;
};

const createSection = () => {
  const section = document.createElement("section");
  addElementClass(section, [typingGuideCls.sectionContainer]);
  return section;
};

const renderGuideData = (typingGuide) => {
  typingGuide.forEach((guideItem) => {
    const section = createSection();
    const title = createTitle(guideItem.title);
    const description = createDescription(guideItem.description);
    section.appendChild(title);
    section.appendChild(description);
    guideContainer.appendChild(section);
  });
};

export { renderGuideData };
