import NewFiltersForms from './view/list-filter.js';
import NewSortingForm from './view/list-sort.js';
import { render } from './render.js';


const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');

const siteListFilterElement = headerElement.querySelector('.trip-controls__filters');
const siteSortingElement = mainElement.querySelector('.trip-events');

render(new NewFiltersForms(), siteListFilterElement);
render(new NewSortingForm(), siteSortingElement);
