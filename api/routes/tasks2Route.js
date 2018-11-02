'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/tasks2Controller');

	 app.route('/api/tasks2')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/tasks2/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};