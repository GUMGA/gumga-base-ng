/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Base.$inject = ['$http', '$q'];
function Base($http, $q) {
  var defaultParams = {};
  this.get = get;
  this.getById = getById;
  this.getNew = getNew;
  this.deleteAll = deleteAll;
  this.save = save;
  this.update = update;
  this.del = del;
  this.postImage = postImage;
  this.deleteImage = deleteImage;

  function get(url, params) {
    if (!params) {
      params = defaultParams;
    }
    return $http.get(url, params);
  }

  function getById(url, id) {
    return $http.get(url + '/' + id);
  }

  function getNew(url) {
    return $http.get(url + '/new');
  }

  function deleteAll(url, entities) {
    var promises = entities.map(function (entity) {
      return del(url, entity);
    });
    return $q.all(promises);
  }

  function save(url, entity) {
    return $http.post(url, entity);
  }

  function update(url, entity) {
    return $http.put(url + '/' + entity.id, entity);
  }

  function del(url, entity) {
    return $http.delete(url + '/' + entity.id);
  }

  function postImage(url, attribute, model) {
    var fd = new FormData();
    fd.append(attribute, model);
    return $http.post(url + '/' + attribute + '/', fd, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    });
  }

  function deleteImage(url, attribute, value) {
    return $http.delete(url + '/' + attribute + '/' + value, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    });
  }
}
angular.module('gumga.base', []).service('GumgaBase', Base);

/***/ })
/******/ ]);