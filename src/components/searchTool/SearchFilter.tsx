import * as React from "react";
import SearchFilterSelect from "./SearchFilterSelect";
import SearchFilterTimeRange from "./SearchFilterTimeRange";
import { FilterOption } from "./SearchTool";

export enum FilterType {
  TIME_RANGE,
  SELECT,
}

interface Props {
  title: React.ReactNode;
  icon?: React.ReactNode;
  type: FilterType;
  value: any;
  options?: FilterOption[];
}

export type SearchFilterComponentProp<R> = {
  [key in FilterType]: R;
};

export type SearchFilterComponent = React.FC<Props>;

const SearchFilterComponents: SearchFilterComponentProp<SearchFilterComponent> = {
  [FilterType.TIME_RANGE]: SearchFilterTimeRange,
  [FilterType.SELECT]: SearchFilterSelect,
};

const SearchFilter: SearchFilterComponent = (props) => {
  const Comp = SearchFilterComponents[props.type];
  return <Comp {...props} />;
};

export { SearchFilter };
