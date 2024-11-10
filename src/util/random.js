import seedrandom from 'seedrandom';

export default (items, count, model) => {
  if (!model) {
    model = 'unique';
  }
  // 使用当前时间戳作为随机数生成器的种子
  const rng = seedrandom(Date.now().toString());
  let tempItems = [...items];
  const result = [];
  for (let i = 0; i < count; i++) {
    if (model === 'unique' && tempItems.length > 0) {
      // 如果不允许重复，则从剩余项中选择
      const randomIndex = Math.floor(rng() * tempItems.length);
      result.push(tempItems[randomIndex]);
      tempItems.splice(randomIndex, 1); // 删除已选中的项以避免重复
    } else {
      // 允许重复，直接从原数组中随机选择
      const randomIndex = Math.floor(rng() * items.length);
      result.push(items[randomIndex]);
    }
  }

  return result;
};
