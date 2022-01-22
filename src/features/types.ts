export enum ViewsEnum {
  Template,
  Form,
  Congrats,
}

export enum HoodieRegionsEnum {
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
  [key in HoodieRegionsEnum]?: IColorItem["hex"];
};

export interface IClient {
  name: string;
  phone: string;
  notes?: string;
}
