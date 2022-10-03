import * as React from "react";
import { SearchParamSelect } from "./SearchParamSelect";
import { SearchParamTimeRange } from "./SearchParamTimeRange";

export enum ParamType {
  TIME_RANGE,
  SELECT,
}

export interface ParamOption {
  value: string;
  label: React.ReactNode;
}

interface Props {
  name: string;
  title: React.ReactNode;
  type: ParamType;
  value: any;
  options?: ParamOption[];
  onClickExtraButton?: (params: Record<string, any>) => void;
}

export type SearchParamComponentProp<R> = {
  [key in ParamType]: R;
};

export type SearchParamComponent = React.FC<Props>;

const SearchParamComponents: SearchParamComponentProp<SearchParamComponent> = {
  [ParamType.TIME_RANGE]: SearchParamTimeRange,
  [ParamType.SELECT]: SearchParamSelect,
};

const SearchParam: SearchParamComponent = (props) => {
  const Comp = SearchParamComponents[props.type];
  return <Comp {...props} />;
};

export { SearchParam };
