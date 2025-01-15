import color from '@/config/Color.js';

export default {
  // 禁将
  jj: [
    {
      id: 'f97fba23-a2c8-4ef0-81fe-e492fd816421',
      title: '通用禁将',
      values: ['谋黄盖'],
    },
    {
      id: 'e459f191-87e6-41b2-a48e-264368880bb9',
      title: '地主禁将',
      values: [],
    },
    {
      id: '98f313eb-d4ac-4681-b340-1e8b9d162cfe',
      title: '农民禁将',
      values: ['起孙坚', '合赵云'],
    },
  ],
  // 替换武将
  thwj: [
    {
      id: '8542c3a0-1e95-48fd-8f6e-1e71671142d2',
      name: '谋诸葛亮',
      btnColor: color.shu,
      images: ['/doudizhu/新UI.SHU004.忠武侯.诸葛亮.png'],
    },
    {
      id: '5670891f-e8f6-429a-a22c-65276b2705f2',
      name: '神鲁素',
      btnColor: color.wu,
      images: ['/doudizhu/新UI.LE017.兴吴之邓禹.鲁肃.png'],
    },
    // {
    //   id: '503e1399-029f-46a8-b97a-e2bd7384486a',
    //   name: '神司马懿',
    //   btnColor: color.wei,
    //   images: ['/doudizhu/新UI.LE008.鉴往知来.司马懿.png'],
    // },
    {
      id: 'a5c6a5df-58ca-49e1-a322-d02416477735',
      name: '谋陆逊',
      btnColor: color.wu,
      images: ['/doudizhu/新UI.MG.WU007.儒生雄才.陆逊.png'],
    },
    {
      id: '7412c065-8c40-427d-9136-658ed124be30',
      name: '起曹操',
      btnColor: color.qun,
      images: ['/doudizhu/梦UI.QUN180.汉征西将军.曹操.png'],
    },
    {
      id: 'aeaa501d-332f-4a8a-acad-8dc170d76c0c',
      name: '合诸葛亮',
      btnColor: color.shu,
      images: ['/doudizhu/梦UI.SHU004.炎汉忠魂.诸葛亮.png'],
    },
  ],
};
