function trim(str: string | undefined | null) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(/^\s+|\s+$/g, "");
}

export default trim;
