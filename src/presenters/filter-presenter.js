import {FilterType} from '../enums';
import {filterTitleMap, filterCallbackMap} from '../maps';
import {findKey} from '../utils';
import Presenter from './presenter';


/**
 * @extends {Presenter<FilterView>}
 */
export default class FilterPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const options = Object.entries(filterTitleMap).map(([value, title]) => ({title, value}));
    this.view.setOptions(options);
    this.updateViewValue();
    this.updateViewDisability();

    this.view.addEventListener('change', this.handleViewChange.bind(this));

    this.pointsModel.addEventListener('add', this.hadlePointsModelAdd.bind(this));
    this.pointsModel.addEventListener('delete', this.hadlePointsModelDelete.bind(this));
    this.pointsModel.addEventListener('update', this.hadlePointsModelUpdate.bind(this));
  }

  updateViewValue() {
    const filter = this.pointsModel.getFilter();
    const filterType = findKey(filterCallbackMap, filter);

    this.view.setValue(filterType);
  }

  updateViewDisability() {
    const filters = Object.values(filterCallbackMap);
    const flags = filters.map((filter) => !this.pointsModel.list(filter).length);

    this.view.setDisability(flags);
  }

  /**
   * @override
   */
  handleNavigation() {
    if (this.location.pathname === '/new') {
      this.pointsModel.setFilter(filterCallbackMap[FilterType.EVERYTHING]);
      this.updateViewValue();
    }
  }

  handleViewChange() {
    const filterType = this.view.getValue();

    this.navigate('/');
    this.pointsModel.setFilter(filterCallbackMap[filterType]);
  }

  hadlePointsModelAdd() {
    this.updateViewDisability();
  }

  hadlePointsModelDelete() {
    this.updateViewDisability();
  }

  hadlePointsModelUpdate() {
    this.updateViewDisability();
  }
}

