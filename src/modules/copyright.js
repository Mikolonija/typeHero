import { copyrightElement } from "../utils/domElements.js";

const setCopyrightYear = (year) => {
  if (copyrightElement) copyrightElement.textContent = year;
};

const updateCopyrightYear = () => {
  const currentYear = new Date().getFullYear();
  setCopyrightYear(currentYear);
};

export { updateCopyrightYear };
