type RuleDataType = {
  id: string;
  icon: string;
  title: string;
  content: string;
};

export type RulesType = {
  rulesData: RuleDataType[];
};

export interface IAuthState {
  rules: RulesType;
}
