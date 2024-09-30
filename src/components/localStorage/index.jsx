function SaveCart(key, value) {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

function LoadCart(key) {
  const jsonValue = localStorage.getItem(key);
  return JSON.parse(jsonValue);
}

export { SaveCart, LoadCart };
