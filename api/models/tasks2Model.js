'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var tasks2Schema = new Schema({}, { strict: false });

 module.exports = mongoose.model('tasks2', tasks2Schema); 