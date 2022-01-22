export enum HoodieRegions {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
}

export interface IColorItem {
  id: string;
  in_stock: boolean;
  hex: string;
  name: string;
}

export interface IFirestoreDataState {
  resources: {
    colors: {
      items: IColorItem[];
    };
  };
}

export type TColorState = {
  [key in HoodieRegions]?: IColorItem["hex"];
};
