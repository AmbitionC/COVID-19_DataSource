export function preprocess(type, originData) {
  if (!type || !originData) {
    return null;
  }

  const functionMap = {
    'overall_china': overall_china,
    'overall_province': overall_province,
  }

  if (functionMap[type]) {
    return functionMap[type];
  }

  function overall_china(originData) {
    let dataSource = [];
    const len = originData.length;
    originData.forEach((item, index) => {
      const dataItem = {
        'time': len - index,
        'value': item.confirmedCount,
      };
      dataSource.unshift(dataItem);
    });
    return dataSource
  };

  function overall_province(originData) {
    let dataSource = [];
    const len = originData.length;
    for (let i = 0; i < 10; i ++) {
      originData.forEach((item, index) => {
        if (item !== null && item.cities !== null && item.cities[i]) {
          const dataItem = {
            'time': len - index,
            'cityName': item.cities[i].cityName,
            'currentCount': item.cities[i].curedCount,
          };
          dataSource.unshift(dataItem)
        }
      });
    }
    console.log('dataSource', dataSource);
    return dataSource
  }
}
