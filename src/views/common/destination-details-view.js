import View from '../view';
import {html} from '../../utils';

export default class DestinationDetailsView extends View {
  constructor() {
    super();

    this.classList.add('event__section', 'event__section--offers');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    `;
  }
}

customElements.define(String(DestinationDetailsView), DestinationDetailsView);
