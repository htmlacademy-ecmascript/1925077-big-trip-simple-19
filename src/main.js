import NewFiltersForms from './view/list-filter.js';
import NewSortingForm from './view/list-sort.js';
import NewEmptyEventsList from './view/empty-events-list.js';
import NewEventItem from './view/event-item.js';
import { render } from './render.js';


const siteListFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsLikeMainElement = document.querySelector('.trip-events');

render(new NewFiltersForms(), siteListFilterElement);
render(new NewSortingForm(), tripEventsLikeMainElement);
render(new NewEmptyEventsList(), tripEventsLikeMainElement);

const emptyEventsListElement = tripEventsLikeMainElement.querySelector('.trip-events__list');

for (let i = 0; i < 3; i++) {
  render(new NewEventItem(), emptyEventsListElement);
}
