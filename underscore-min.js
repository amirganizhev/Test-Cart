const { View, Application, CollectionView, ItemView } = Marionette;

const collection = new Backbone.Collection();

collection.reset([
  new Backbone.Model({title: 'парк ДГТУ'}), // надо добавить еще координаты в модель, чтоб по клику знать куда карту фокусировать
  new Backbone.Model({title: 'Общежитие ДГТУ'}),
  new Backbone.Model({title: 'Остановка гагарина'}),
  // и так далее
]);

// элемент сайдбара
const SidebarItem = View.extend({
  className: 'sidebar-item',
  // template: _.template('First region'),
  template(data) {
    return _.template(`${data.title}`);
  },
  events: {
    'click': 'onClick',
  },
  onClick() {
    // тут надо получить координаты места (example: this.model.get('coords')) и сдвинуть карту
    alert(this.model.get('title'))
  }
});

// сайдбар с объектами
const Sidebar = CollectionView.extend({
  tagName: 'div',
  className: 'sidebar',
  childView: SidebarItem, // элемент сайдбара(объект по которому кликать)
  template: _.template('<h1>Widgets</h1><ul class="sidebar"></ul>'), // в ul class="sidebar" запишутся наши объекты
  collection,
});

// старт приложения
const App = Application.extend({
  region: '#root-element',

  onStart() {
    this.showView(new Sidebar().render()); // в #root-element записать нашу вьюху(сайдбар с объектами)
  }
});

const app = new App();

app.start();
