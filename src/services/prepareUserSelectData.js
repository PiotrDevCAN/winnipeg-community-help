export const prepareUserSelectData = (options) => {
  return options.map(item => {
    let value = parseInt(item.id);
    let label = item.first_name + ' ' + item.last_name;
    return { ...item, value, label };
  });
};
