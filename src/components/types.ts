export interface Sticky {
  id: number;
  color: string;
  isList: boolean;
  text: string;
  list: { itemId: number; text: string }[];
}
