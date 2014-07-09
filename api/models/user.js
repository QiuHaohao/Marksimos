var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Q = require('q');

var userSchema = new Schema({
    email: String,
    phoneNum: String,
    country: String,
    state: String,
    city: String,
    activateToken: String,
    isActive: {type: Boolean, default: false},
    password: String
});

var User = mongoose.model("User", userSchema);

exports.register = function(user){
    var deferred = Q.defer();

    User.create(user, function(err){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(1);
        }
    })

    return deferred.promise;
}

exports.updateByEmail = function(email, user){
    var deferred = Q.defer();

    User.update({
        email: email
    }
    ,user
    , function(err, numAffected){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(numAffected);
        }
    });

    return deferred.promise; 
}

exports.findByEmail = function(email){
    var deferred = Q.defer();

    User.findOne({
        email: email
    }, 
    function(err, result){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(result);
        }
    })

    return deferred.promise;
}

exports.findByEmailAndToken = function(email, token){
    var deferred = Q.defer();

    User.findOne({
        email: email,
        activateToken: token
    }, 
    function(err, result){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(result);
        }
    })

    return deferred.promise;
}