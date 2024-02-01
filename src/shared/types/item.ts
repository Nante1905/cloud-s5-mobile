
export interface Item {
    id: number;
    name: string;
    logo?: string;
  }
  

  export function transformObjectToItem(obj: any, idColumn: string, nameColumn: string): Item {
    return {
        id: obj[idColumn],
        name: obj[nameColumn]
    };
}

export function transformListToItemList(list: any[], idColumn: string, nameColumn: string): Item[] {
    return list.map(obj => transformObjectToItem(obj, idColumn, nameColumn));
}