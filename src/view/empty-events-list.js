import { createElement } from '../render.js';

function createEmptyEventsListTemplate() {
  return `<ul class="trip-events__list">
          </ul>`;
}

export default class NewEmptyEventsList {
  getTemplate() {
    return createEmptyEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
