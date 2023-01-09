import { PointType } from '../enums';
import { pointTitleMap } from '../maps';
import Presenter from './presenter';

/**
 * @extends {Presenter<NewPointEditorView>}
 */
export default class NewPointEditorPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const pointTypeOptions =
      Object.entries(pointTitleMap).map(([value, title]) => ({title, value}));

    this.view.pointTypeView.setOptions(pointTypeOptions);
    this.view.pointTypeView.addEventListener('change', this.handlePointTypeViewChange.bind(this));


    const destinationOptions =
      this.destinationsModel.listAll().map((item) => ({title: '', value: item.name}));
    //
    this.view.destinationView.setOptions(destinationOptions);

    this.view.addEventListener('submit', this.handleViewSubmit.bind(this));
    this.view.addEventListener('reset', this.handleViewReset.bind(this));
    this.view.addEventListener('close', this.handleViewClose.bind(this));
  }

  /**
   * @param {PointAdapter} point
   */
  updateView(point) {
    const destination = this.destinationsModel.findById(point.destinationId);

    this.view.pointTypeView.setValue(point.type);
    this.view.destinationView.setLabel(pointTitleMap[point.type]);
    this.view.destinationView.setValue(destination.name);
    this.updateOffersView(point.offerIds);
  }

  /**
   * @param {string[]} offersIds
   */
  updateOffersView(offersIds = []) {
    const eventType = this.view.pointTypeView.getValue();

    const offers = this.offerGroupsModel.findById(eventType).items;

    // this.view.offersView.hidden = ???;
    this.view.offersView.setOptions(offers);
  }

  /**
   * @override
   */
  handleNavigation() {
    if (this.location.pathname === '/new') {
      const point = this.pointsModel.item();

      point.type = PointType.BUS;
      point.destinationId = this.destinationsModel.item(0).id;
      point.startDate = (new Date()).toJSON();
      point.endDate = (new Date()).toJSON();
      point.basePrice = 1;

      this.view.open();
      this.updateView(point);
    } else {
      this.view.close(false);
    }
  }

  /**
   * @param {SubmitEvent} event
   */
  handleViewSubmit(event) {
    event.preventDefault();
  }

  handleViewReset() {
    this.view.close();
  }

  handleViewClose() {
    this.navigate('/');
  }

  handlePointTypeViewChange() {
    const pointType = this.view.pointTypeView.getValue();

    this.view.destinationView.setLabel(pointTitleMap[pointType]);
    // Обновить список предложений
    this.updateOffersView();
  }
}
