export type NewType = {
  id: string;
  icon: string;
  title: string;
  date: string;
  headers: string[];
  content: string;
};

export interface INewsState {
  news: NewType[];
}
