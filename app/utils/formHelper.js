export function mapPropsToFields(propsKey, form) {
  return ({ [propsKey]: data = {} }) =>
    Object.keys(data).reduce((values, key) => {
      const memo = values;
      const field = {};

      if (typeof data[key] === 'boolean') {
        field.checked = data[key];
      } else {
        field.value = data[key];
      }

      memo[key] = form.createFormField(field);

      return memo;
    }, {});
}
