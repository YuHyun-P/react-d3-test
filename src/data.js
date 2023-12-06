const initialData = [
  {
    id: "bcc85c07b7ab84e5a90f6a0ea4dbdc925fca946c",
    parentId:
      "ecd20b79b81e1a8ee6aa8c9439f6671fa0cadab6 53fed6b571f4fccdcaa32dcda2bd30c7cb05076f",
    message: "호호호Merge branch 'main' into branch2",
    refs: "HEAD -> branch2",
  },
  {
    id: "ecd20b79b81e1a8ee6aa8c9439f6671fa0cadab6",
    parentId: "17a8952f5a8576bd3cf1ae2197ca9868ac3eee36",
    message: "2",
    refs: "",
  },
  {
    id: "af03bfdccbda496fb9e596fa5ba26e02b04a62fc",
    parentId:
      "4adfb8e3c5ec301691c00f9edc415cadfa3eb1ac 53fed6b571f4fccdcaa32dcda2bd30c7cb05076f",
    message: "하하하",
    refs: "branch1",
  },
  {
    id: "53fed6b571f4fccdcaa32dcda2bd30c7cb05076f",
    parentId: "17a8952f5a8576bd3cf1ae2197ca9868ac3eee36",
    message: "config:~~",
    refs: "main",
  },
  {
    id: "4adfb8e3c5ec301691c00f9edc415cadfa3eb1ac",
    parentId: "17a8952f5a8576bd3cf1ae2197ca9868ac3eee36",
    message: "1과 2의 가운데",
    refs: "",
  },
  {
    id: "17a8952f5a8576bd3cf1ae2197ca9868ac3eee36",
    parentId: "",
    message: "initial commit",
    refs: "",
  },
];

const mockData = [
  {
    id: "4402a0857d0d8744b628497629fdab0321409b0b",
    parentId: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    message: "브랜치 성공",
  },
  {
    id: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "test",
  },
  {
    id: "75c4aca42bfedcb90bcd9f65be28bd9e013ad971",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "config: gitignore에 zero-install 추가",
  },
  {
    id: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    parentId: "",
    message: "config: 기본 개발 환경 세팅",
  },
];

const newMockData = [
  {
    id: "4402a0857d0d8744b628497629fdab0321409b0b",
    parentId: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    message: "브랜치 성공",
  },
  {
    id: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "test",
  },
  {
    id: "75c4aca42bfedcb90bcd9f65be28bd9e013ad971",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "config: gitignore에 zero-install 추가",
  },
  {
    id: "33333",
    parentId: "44444",
    message: "추가1",
  },
  {
    id: "44444",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "추가2",
  },
  {
    id: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    parentId: "",
    message: "config: 기본 개발 환경 세팅",
  },
];

const deletedData = [
  {
    id: "4402a0857d0d8744b628497629fdab0321409b0b",
    parentId: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    message: "브랜치 성공",
  },
  {
    id: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "test",
  },
  {
    id: "75c4aca42bfedcb90bcd9f65be28bd9e013ad971",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "config: gitignore에 zero-install 추가",
  },
  {
    id: "44444",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "추가2",
  },
  {
    id: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    parentId: "",
    message: "config: 기본 개발 환경 세팅",
  },
];

export { initialData, mockData, newMockData, deletedData };
