var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	userName: { type: String, lowercase: true, unique: true },
	name: String,
	hash: String,
	salt: String,
	active: Boolean
});

userSchema.methods.isYounger = function() {
	return this.model('User').age < 50 ? true : false;
}

var User = mongoose.model('User', userSchema);

var arvind = new User({
	name : 'Arvind',
	age : 99,
	DOB : '01/01/1915',
	isAlive : true
});

arvind.save(function (err, data){
	if (err) console.log(err);
	else console.log('Saved :', data);
})

console.log('isYounger : ',arvind.isYounger());