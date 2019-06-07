export function actionFactory(type) {
  return payload => ({
    type,
    payload,
  });
}
