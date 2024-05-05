import { IData } from '../interface/dataInterface';

export const transformDataResponse = (data: IData[]) => {
  return data.filter((item) => {
    return item.компания && item['Потенциал роста'];
  });
};
