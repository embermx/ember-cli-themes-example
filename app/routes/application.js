import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    controller.set('currentTheme', "default");
  },

  actions: {
    changeTheme(themeName) {
      this.controllerFor('application').set('currentTheme', themeName);
    }
  }

});
