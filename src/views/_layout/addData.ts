self.onmessage = async function () {
  const result = await addData(); // 执行计算
  self.postMessage(result); // 返回结果
};

let dataList: any = [];
const addData = () => {
  dataList = [];
  return new Promise((resolve) => {
    for (let index = 0; index < 20000; index++) {
      dataList.push(index);
    }
    // return dataList;
    resolve(dataList);
  });
};
