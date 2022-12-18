import { FilterType, SortType } from './enums';


/**
 * @type {Record<string,FilterCallback<PointAdapter>>}
 */
export const filterCallbackMap = {
  [FilterType.EVERYTHING]: () => true,
  [FilterType.FUTURE]: (point) => true
};

/**
 * @type {Record<string,SortCallback<PointAdapter>>}
 */
export const sortCallbackMap = {
  [SortType.DAY]: () => 0,
  [SortType.EVENT]: () => 0,
  [SortType.TIME]: () => 0,
  [SortType.PRICE]: (point, nextPoint) => (point > nextPoint) ? 1 : -1,
  [SortType.OFFERS]: () => 0
};
