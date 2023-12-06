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

export { mockData, newMockData, deletedData };
