const azUpper = (text) => {
  return text
    .replace(/i/g, 'İ')
    .replace(/ı/g, 'I')
    .toUpperCase();
};

export default azUpper
