export const numericValidation = {
  required: true,
  pattern: /^-?\d*\.?\d*$/
}

export const getText = (elem) => {
  if (elem.tagName === "INPUT" && elem.type === "text") {
    return elem.value.substring(elem.selectionStart,
      elem.selectionEnd);
  }
  return null;
}
