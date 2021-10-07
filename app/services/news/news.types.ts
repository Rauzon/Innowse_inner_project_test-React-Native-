export type NewContentItemType = {
  subtitle?: string;
  text?: string;
};

export type NewType = {
  id: string;
  icon: string;
  title: string;
  date: string;
  headers: string[];
  content: NewContentItemType[];
  preContent?: string;
};

export interface INewsState {
  news: NewType[];
}
