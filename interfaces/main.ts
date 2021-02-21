export interface IPlayList {
  id: number;
  name: string;
  count: number;
  cards: ICard[];
}
export interface ICard {
  id: number;
  front: string;
  back: string;
  checked: boolean;
}
