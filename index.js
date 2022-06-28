function removeDuplicates(data) {
  const uniqIds = data.reduce((ids, el) => ids.add(el.name), new Set());
  const uniqElements = data.filter((el) => uniqIds.delete(el.name));
  return uniqElements;
}

module.exports = removeDuplicates;
