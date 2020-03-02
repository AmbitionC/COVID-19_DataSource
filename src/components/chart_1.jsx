import G2 from '@antv/g2';

export function config() {
  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
  // Step 1: 创建 Chart 对象
  const chart = new G2.Chart({
    container: 'c1', // 指定图表容器 ID
    width: 600, // 指定图表宽度
    height: 300, // 指定图表高度
  });
  // Step 2: 载入数据源
  chart.source(data);
  // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
  chart
    .interval()
    .position('genre*sold')
    .color('genre');
  // Step 4: 渲染图表
  chart.render();
}

// import { Chart } from '@antv/g2';

// export function config() {
//   const data = [
//     { type: '未知', value: 654, percent: 0.02 },
//     { type: '17 岁以下', value: 654, percent: 0.02 },
//     { type: '18-24 岁', value: 4400, percent: 0.2 },
//     { type: '25-29 岁', value: 5300, percent: 0.24 },
//     { type: '30-39 岁', value: 6200, percent: 0.28 },
//     { type: '40-49 岁', value: 3300, percent: 0.14 },
//     { type: '50 岁以上', value: 1500, percent: 0.06 },
//   ];
  
//   const chart = new Chart({
//     container: 'container',
//     autoFit: true,
//     height: 500,
//     padding: [50, 20, 50, 20],
//   });
//   chart.data(data);
//   chart.scale('value', {
//     alias: '销售额(万)',
//   });
  
//   chart.axis('type', {
//     tickLine: {
//       alignTick: false,
//     },
//   });
//   chart.axis('value', false);
  
//   chart.tooltip({
//     showMarkers: false,
//   });
//   chart.interval().position('type*value');
//   chart.interaction('element-active');
  
//   // 添加文本标注
//   data.forEach((item) => {
//     chart
//       .annotation()
//       .text({
//         position: [item.type, item.value],
//         content: item.value,
//         style: {
//           textAlign: 'center',
//         },
//         offsetY: -30,
//       })
//       .text({
//         position: [item.type, item.value],
//         content: (item.percent * 100).toFixed(0) + '%',
//         style: {
//           textAlign: 'center',
//         },
//         offsetY: -12,
//       });
//   });
//   chart.render();
// }