const textAPI = "https://random-word-api.herokuapp.com/word?number=42";

const endTimeMessage =
  "Time's up! Your session has ended. Click 'Restart' to load new text or press 'Esc' to retry with the same text. Your progress and results have been saved.";

const endWordMessage =
  "You have completed the text! Click 'Restart' to load new text or press 'Esc' to reset and try again with the same text. Your progress and results have been saved.";

const characterStatusCls = {
  correct: "g-correct-character",
  incorrect: "g-incorrect-character",
  active: "g-active-character",
};

const typingBoxCls = {
  layoutTopCenter: "layout-top-center",
  layoutCenter: "layout-center",
};

const tableRowCls = {
  firstCol: "table-column-first",
  ht: "table-hide-column-tablet",
  col: "table-column",
  lastCol: "table-column-last",
  hm: "table-hide-column-mobile ",
};

const typingGuideCls = {
  sectionContainer: "info-container-card",
  titleContainer: "info-container-card-title",
  fontTitle: "font-montserrat-16-bold",
  descriptionContainer: "info-container-card-description",
  fontDescription: "font-montserrat-16-regular",
};

const performanceStatusCls = {
  even: "g-performance-even",
  better: "g-performance-better",
  worse: "g-performance-worse",
};

const typingStatsStorageKey = "typingStats";

const circularProgressBarProgress = "--progress";

let currentTextData = [];
const setCurrentTextData = (textData) => {
  currentTextData = textData;
};

const timer = {
  timerStarted: false,
  secondLeft: 60,
  totalSeconds: 60,
  countdown: 0,
  reset() {
    this.timerStarted = false;
    this.secondLeft = 60;
    this.totalSeconds = 60;
  },
};

const tapingStats = {
  correctWords: 0,
  typedWordsCount: 0,
  charsCount: 0,
  mistakesCount: 0,
  wpm: 0,
  accuracy: 0,
  timeStamp: "",
  reset() {
    this.correctWords = 0;
    this.typedWordsCount = 0;
    this.charsCount = 0;
    this.mistakesCount = 0;
    this.wpm = 0;
    this.accuracy = 0;
    this.timeStamp = "";
  },
};

const typingValidationState = {
  characterActive: "",
  characterSecondActive: "",
  mistakesCount: 0,
  correctWordsCount: 0,
  typedWordsCount: 0,
  reset() {
    this.characterActive = "";
    this.characterSecondActive = "";
    this.mistakesCount = 0;
    this.correctWordsCount = 0;
    this.typedWordsCount = 0;
  },
};

export {
  textAPI,
  characterStatusCls,
  performanceStatusCls,
  typingStatsStorageKey,
  circularProgressBarProgress,
  timer,
  tapingStats,
  typingBoxCls,
  tableRowCls,
  typingGuideCls,
  currentTextData,
  setCurrentTextData,
  endTimeMessage,
  endWordMessage,
  typingValidationState,
};
