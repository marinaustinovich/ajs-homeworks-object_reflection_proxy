export default function orderByProps(obj, arrOrderForProps) {
  const arrObjProps = Object.entries(obj)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => a.key.localeCompare(b.key));

  if (arrOrderForProps) {
    for (const prop of arrOrderForProps.reverse()) {
      if (!obj[prop]) {
        throw new Error(`Сортировка не возможна, свойство ${prop} не существует!`);
      }

      const index = arrObjProps.findIndex((el) => el.key === prop);
      const [removed] = arrObjProps.splice(index, 1);
      arrObjProps.unshift(removed);
    }
  }

  console.log(arrObjProps);

  return arrObjProps;
}
