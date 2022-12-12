import Adapter from './adapter';

export default class PointAdapter extends Adapter {
  /**
   * @param {Partial<Point>} data
   */
  constructor(data = {}) {
    super();

    this.basePrice = data.base_price;
    this.startDate = data.date_from;
    this.startEnd = data.date_to;
    this.destinationId = String(data.destination);
    this.id = data.id;
    this.offersIds = data.offers?.map(String);
    this.type = data.type;
  }

  // /**
  //  * @override
  //  * @return {Partial<Point>}
  //  */
  // toJSON() {
  //   return {}:
  // }
}
