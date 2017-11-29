import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  page: 'string',
  title: {
    value: 'broncochat',
    serialize: false
  }
});

route('/{page}', { page: 'home' });

export default AppViewModel;
