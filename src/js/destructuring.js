export default function showOptionsAttacks(obj) {
  if ('special' in obj) {
    const attacks = [];
    for (let i = 0; i < obj.special.length; i += 1) {
      const {
        name, id, icon, description = 'Описание недоступно',
      } = obj.special[i];
      attacks.push({
        name, id, icon, description,
      });
    }
    return attacks;
  }
  throw new Error('Нет доступных вариантов спец.атак для этого персонажа');
}
