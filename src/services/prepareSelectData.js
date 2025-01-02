export const prepareSelectData = (options) => {
  return options.map(item => {
    let value = item.id;
    return { ...item, value };
  });
};
