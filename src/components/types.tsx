export interface Sticky {
  id: number;
  position: { top: string; left: string };
  color: string;
  isList: boolean;
  text: string;
  list: { itemId: number; text: string }[];
}
