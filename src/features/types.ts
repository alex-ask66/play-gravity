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
