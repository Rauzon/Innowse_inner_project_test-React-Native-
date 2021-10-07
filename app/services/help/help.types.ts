export type HelpContentType = {
  id: string;
  subtitle: string;
  text: string;
};

export type FaqType = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: HelpContentType[];
  headers: string[];
  precontent?: string;
  videoId: string;
};

export interface IHelpState {
  faq: {
    faqData: FaqType[];
  };
}
