function createElement(el, elClasses) {
  const element = document.createElement(el);
  elClasses.forEach((currentClass) => element.classList.add(currentClass));
  return element;
}

export { createElement };
