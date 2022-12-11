import View from './view';
import {html} from '../utils';
import PointTypeView from './common/point-type-view';
import DestinationView from './common/destination-view';
import DateTimesView from './common/date-times-view';
import BasicPriceView from './common/basic-price-view';
import OffersTitleView from './common/offers-title-view';

export default class NewPointEditorView extends View {
  constructor() {
    super();

    this.classList.add('trip-events__item');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <${PointTypeView}></${PointTypeView}>
          <${DestinationView}></${DestinationView}>
          <${DateTimesView}></${DateTimesView}>
          <${BasicPriceView}></${BasicPriceView}>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">

          <${OffersTitleView}></${OffersTitleView}>

          <!-- OffersView, DestinationDetailsView
          <section class="event__section  event__section--offers">
          </section>
          -->

        </section>
      </form>
    `;
  }
}

customElements.define(String(NewPointEditorView), NewPointEditorView);
