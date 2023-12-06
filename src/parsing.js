import { initialData } from "./data.js";

function parseParentId(parentId) {
  if (!parentId) {
    return [];
  }
  const parentIdArray = parentId.split(" ");
  if (parentIdArray.length === 1) {
    return parentIdArray[0];
  }
  return parentIdArray;
}

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

console.log("parsedData : ", parsedData);
console.log("additionalLinks : ", additionalLinks);
