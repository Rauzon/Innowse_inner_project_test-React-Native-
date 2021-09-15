export type NewType = {
  id: string;
  icon: string;
  title: string;
  date: string;
  headers: string[];
  content: Array<{subtitle?: string; text?: string}>;
  preContent?: string;
};

export interface INewsState {
  news: NewType[];
}
