'use strict';
var app=angular.module("starter.filter",[]);
app.filter("substring",function(){
    return function(str){
        if(str.length>=40){
            return str.substr(0,40)+"...";
        }
        return str;
    }
});