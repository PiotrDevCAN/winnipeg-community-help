export const prepareSelectData = (options) => {
  return options.map(item => {
    let value = parseInt(item.id);
    return { ...item, value };
  });
};
