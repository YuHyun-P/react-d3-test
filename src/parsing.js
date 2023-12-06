export function parsingMultipleParents(initialData) {
  let additionalLinks = [];
  const parsedData = initialData.map((data) => {
    const [first, ...rest] = data.parentId.split(" ");
    rest.forEach((v, idx) => {
      additionalLinks.push({ id: data.id, parentId: v, message: data.message });
    });

    return {
      ...data,
      parentId: first,
    };
  });

  return { parsedData, additionalLinks };
}
