export default function orderByProps(obj, arrOrderForProps) {
  if (arrOrderForProps) {
    for (let i = 0; i < arrOrderForProps.length; i += 1) {
      if (!obj[arrOrderForProps[i]]) {
        throw new Error(`Сортировка не возможна, свойство ${arrOrderForProps[i]} не существует!`);
      }
    }
  }

  const arrKeys = Object.entries(obj);
  const arrObjProps = [];

  for (let i = 0; i < arrKeys.length; i += 1) {
    const objWithProp = { key: arrKeys[i][0], value: arrKeys[i][1] };
    arrObjProps.push(objWithProp);
  }
  arrObjProps.sort((a, b) => {
    const keyA = a.key.toLowerCase();
    const keyB = b.key.toLowerCase();
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
  });

  if (arrOrderForProps) {
    const count = arrOrderForProps.length;
    for (let i = 0; i < count; i += 1) {
      const ind = arrObjProps.findIndex((el) => el.key === arrOrderForProps[count - 1 - i]);

      arrObjProps.splice(0, 0, arrObjProps.splice(ind, 1)[0]);
    }
  }

  return arrObjProps;
}
