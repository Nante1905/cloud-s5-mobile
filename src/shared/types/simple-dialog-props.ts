import { Item } from "./item";

export interface SimpleDialogProps<T extends Item> {
    open: boolean;
    selectedValue: T | null;
    onClose: (value: T | null) => void;
    items: T[];
    title: string;
  }