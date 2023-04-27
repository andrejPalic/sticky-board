export interface Sticky {
  id: number;
  color: string;
  isList: boolean;
  text: string;
  list: { id: number; text: string }[];
}
