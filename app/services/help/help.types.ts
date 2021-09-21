export type FaqType = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content?: Array<{id: string; subtitle: string; text: string}>;
  headers?: string[];
  precontent?: string;
  videoId?: string;
};

export interface IHelpState {
  faq: {
    faqData: FaqType[];
  };
}
