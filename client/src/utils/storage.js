export const getFromStorage = key => {
  return localStorage.getItem(key);
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeFromStorage = key => {
  localStorage.removeItem(key);
};
