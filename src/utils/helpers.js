const callApi = async (url) => {
  let loading = true;
  let data = null;
  let error = null;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (err) {
    error = err.message;
    console.error("Error fetching data:", err);
  } finally {
    loading = false;
  }
  return { loading, data, error };
};

const formatDateToString = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
};

const addElementClass = (el, classNames) => {
  classNames.forEach((className) => {
    el.classList.add(className);
  });
};

const removeElementClass = (el, classNames) => {
  classNames.forEach((className) => {
    el.classList.remove(className);
  });
};

const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export {
  callApi,
  formatDateToString,
  addElementClass,
  removeElementClass,
  getDataFromLocalStorage,
};
