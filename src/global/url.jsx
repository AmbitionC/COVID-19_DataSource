import Axios from 'axios';
import { preprocess } from '../data_process/pre_process.jsx';

export const urlMap = {
  // 全国实时统计数据
  overallCurrent: 'https://lab.isaaclin.cn/nCoV/api/overall',
  overallHistory: 'https://lab.isaaclin.cn/nCoV/api/overall?latest=0',
  areaCurrent: 'https://lab.isaaclin.cn/nCoV/api/area',
  areaHistory: 'https://lab.isaaclin.cn/nCoV/api/area?latest=0&province=湖北省'
}

export async function requestAPI() {
  const res = await Axios.get(urlMap.areaHistory);
  const results = res.data.results;
  const processedData = preprocess('overall_province', results);
  // console.log('processedData', processedData(results))
  return processedData(results);

}