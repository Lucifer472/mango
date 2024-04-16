export const handleKeyDown = (event: any) => {
  // Allow: backspace, delete, tab, escape, enter
  if (
    [8, 46, 9, 27, 13].includes(event.keyCode) ||
    // Allow: Ctrl+A, Command+A
    (event.keyCode === 65 &&
      (event.ctrlKey === true || event.metaKey === true)) ||
    // Allow: Ctrl+C, Command+C
    (event.keyCode === 67 &&
      (event.ctrlKey === true || event.metaKey === true)) ||
    // Allow: Ctrl+V, Command+V
    (event.keyCode === 86 &&
      (event.ctrlKey === true || event.metaKey === true)) ||
    // Allow: Ctrl+X, Command+X
    (event.keyCode === 88 && (event.ctrlKey === true || event.metaKey === true))
  ) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if (
    (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
    (event.keyCode < 96 || event.keyCode > 105)
  ) {
    event.preventDefault();
  }
};
