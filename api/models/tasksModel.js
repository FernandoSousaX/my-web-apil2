'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var tasksSchema = new Schema({}, { strict: false });

 module.exports = mongoose.model('tasks', tasksSchema); 