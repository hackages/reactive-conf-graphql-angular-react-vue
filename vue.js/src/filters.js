import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "./constant";

export const date = function(value, format = DEFAULT_DATE_FORMAT) {
  if (!value) return "";
  return moment(value).format(format);
};
