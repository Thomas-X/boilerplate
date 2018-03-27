require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    id: { type: String, required: true, unique: true },
    username: { type: String, maxLength: 255, required: true, unique: true },
    password: { type: String, maxLength: 255, required: true }
});

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', schema);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ip__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__factories_createAuthHandler__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_log__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socket__ = __webpack_require__(23);


var _templateObject = _taggedTemplateLiteral(['{bold On your network:}     {underline http://', ':{bold ', '}/}'], ['{bold On your network:}     {underline http://', ':{bold ', '}/}']),
    _templateObject2 = _taggedTemplateLiteral(['Local:               {underline http://', ':{bold ', '}/}'], ['Local:               {underline http://', ':{bold ', '}/}']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












__webpack_require__(25).config();

var Server = function Server() {
    var _this = this;

    _classCallCheck(this, Server);

    this.onListen = function (err) {
        if (err) {
            Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["a" /* error */])('Unable to start server on port ' + _this.port, err);
            return;
        }

        if (process.env.__DEV__) {
            Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["c" /* warn */])('We\'re in development mode.');
        }

        Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["b" /* info */])('We\'re live.\r\n');
        Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["b" /* info */])(__WEBPACK_IMPORTED_MODULE_2_chalk___default()(_templateObject, __WEBPACK_IMPORTED_MODULE_5_ip___default.a.address('public'), _this.port.toString()));
        Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["b" /* info */])(__WEBPACK_IMPORTED_MODULE_2_chalk___default()(_templateObject2, __WEBPACK_IMPORTED_MODULE_5_ip___default.a.address('private'), _this.port.toString()));
    };

    this.connectToDb = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var db;
        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connect('mongodb://127.0.0.1/test', {
                            useMongoClient: true
                        });
                        __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.Promise = global.Promise;
                        db = __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connection;


                        db.on('error', function (err) {
                            console.log();
                            Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["a" /* error */])(err);
                            throw new Error(err);
                        });
                        db.once('open', function () {
                            Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["b" /* info */])('Successfully connected to database!');
                            console.log();
                            _this.start().catch(function (err) {
                                console.log();
                                Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["a" /* error */])(err);
                                throw new Error(err);
                            });
                        });
                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);
                        throw new Error(_context.t0);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[0, 8]]);
    }));
    this.start = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var http;
        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _this.app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
                        Object(__WEBPACK_IMPORTED_MODULE_8__factories_createAuthHandler__["b" /* default */])();
                        _this.setRoutes();
                        http = new __WEBPACK_IMPORTED_MODULE_4_http__["Server"](_this.app);

                        _this.socket = new __WEBPACK_IMPORTED_MODULE_10__socket__["a" /* default */](http);
                        _this.socket.bindSockets();
                        http.listen(_this.port, _this.onListen);

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    this.setRoutes = function () {
        _this.app.use('/', __WEBPACK_IMPORTED_MODULE_7__controllers_auth__["a" /* default */]);

        // routes from here on are authed(!)
        _this.app.use(__WEBPACK_IMPORTED_MODULE_8__factories_createAuthHandler__["a" /* authMiddleware */]);

        _this.app.use('/someAuthedRoute', function (req, res) {
            res.send('hi from authed route');
        });
    };

    this.app = __WEBPACK_IMPORTED_MODULE_3_express___default()();
    this.port = process.env.PORT || 3000;
    this.connectToDb().catch(function (err) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__services_log__["a" /* error */])(err);
    });
};

/* harmony default export */ __webpack_exports__["default"] = (new Server());

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_validator_check__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_validator_check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_is_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_models_User__ = __webpack_require__(4);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









var Auth = Object(__WEBPACK_IMPORTED_MODULE_2_express__["Router"])();

var validations = [Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["check"])('username').exists().isAlphanumeric(), // todo check existence of username in db
Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["check"])('password').exists().isLength({ min: 8 })];

Auth.post('/register', validations, function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
        var errors, _req$body, username, password, user, id, _user;

        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        errors = Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["validationResult"])(req);

                        if (errors.isEmpty()) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return', res.status(422).json({ errors: errors.mapped() }));

                    case 3:
                        _context.prev = 3;
                        _req$body = req.body, username = _req$body.username, password = _req$body.password;
                        _context.next = 7;
                        return __WEBPACK_IMPORTED_MODULE_7__global_models_User__["a" /* default */].find({ username: username })[0];

                    case 7:
                        user = _context.sent;

                        if (!__WEBPACK_IMPORTED_MODULE_4_is_js___default.a.set(user)) {
                            _context.next = 12;
                            break;
                        }

                        throw new Error('User already exists');

                    case 12:
                        if (__WEBPACK_IMPORTED_MODULE_4_is_js___default.a.set(user)) {
                            _context.next = 23;
                            break;
                        }

                        id = __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()();
                        _context.t0 = id;
                        _context.t1 = username;
                        _context.next = 18;
                        return Object(__WEBPACK_IMPORTED_MODULE_1_bcrypt__["hash"])(password, Number(process.env.salt));

                    case 18:
                        _context.t2 = _context.sent;
                        _user = {
                            id: _context.t0,
                            username: _context.t1,
                            password: _context.t2
                        };
                        _context.next = 22;
                        return __WEBPACK_IMPORTED_MODULE_7__global_models_User__["a" /* default */].create(_user);

                    case 22:
                        return _context.abrupt('return', res.json({
                            token: Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["sign"])({ sub: id }, process.env.secretKey)
                        }));

                    case 23:
                        _context.next = 28;
                        break;

                    case 25:
                        _context.prev = 25;
                        _context.t3 = _context['catch'](3);

                        next(_context.t3);

                    case 28:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[3, 25]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

Auth.post('/login', validations, function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res, next) {
        var errors, _req$body2, username, password, user;

        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        errors = Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["validationResult"])(req);

                        if (errors.isEmpty()) {
                            _context2.next = 3;
                            break;
                        }

                        return _context2.abrupt('return', res.status(422).json({ errors: errors.mapped() }));

                    case 3:
                        _context2.prev = 3;
                        _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
                        _context2.next = 7;
                        return __WEBPACK_IMPORTED_MODULE_7__global_models_User__["a" /* default */].find({ username: username });

                    case 7:
                        user = _context2.sent[0];

                        if (user) {
                            _context2.next = 10;
                            break;
                        }

                        throw new Error('User does not exist');

                    case 10:
                        _context2.next = 12;
                        return Object(__WEBPACK_IMPORTED_MODULE_1_bcrypt__["compare"])(password, user.password);

                    case 12:
                        if (_context2.sent) {
                            _context2.next = 14;
                            break;
                        }

                        throw new Error('Incorrect password');

                    case 14:
                        return _context2.abrupt('return', res.json({
                            token: Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["sign"])({ sub: user.id }, process.env.secretKey)
                        }));

                    case 17:
                        _context2.prev = 17;
                        _context2.t0 = _context2['catch'](3);

                        next(_context2.t0);

                    case 20:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this, [[3, 17]]);
    }));

    return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}());

/* harmony default export */ __webpack_exports__["a"] = (Auth);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-validator/check");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("is-js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authMiddleware; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_jwt__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_passport_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_models_User__ = __webpack_require__(4);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["b"] = (function () {
    var options = {
        jwtFromRequest: __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromExtractors([__WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromAuthHeaderAsBearerToken(), __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromUrlQueryParameter('auth')]),
        secretOrKey: process.env.secretKey
    };

    __WEBPACK_IMPORTED_MODULE_1_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["Strategy"](options, function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(jwtPayload, done) {
            var user;
            return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_nodejs_login_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3__global_models_User__["a" /* default */].find({ id: jwtPayload.sub })[0];

                        case 2:
                            user = _context.sent;

                            if (!user) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt('return', done(null, user));

                        case 7:
                            return _context.abrupt('return', done(null, false));

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }()));
});

var authMiddleware = __WEBPACK_IMPORTED_MODULE_1_passport___default.a.authenticate('jwt', { session: false });

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warn; });
/* unused harmony export debug */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stack_trace__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stack_trace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stack_trace__);
var _templateObject = _taggedTemplateLiteral(['{bold.cyan INFO}'], ['{bold.cyan INFO}']),
    _templateObject2 = _taggedTemplateLiteral(['{bold.red ERR!}'], ['{bold.red ERR!}']),
    _templateObject3 = _taggedTemplateLiteral(['{bold.yellow WARN}'], ['{bold.yellow WARN}']),
    _templateObject4 = _taggedTemplateLiteral(['{bold.magenta VERB} ', ''], ['{bold.magenta VERB} ', '']),
    _templateObject5 = _taggedTemplateLiteral(['{bgBlack.white  ', ' }'], ['{bgBlack.white  ', ' }']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var log = function log() {
    for (var _len = arguments.length, misc = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        misc[_key - 2] = arguments[_key];
    }

    var _console;

    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';
    var message = arguments[1];

    if (type === 'debug' && process.env.DEBUG !== 'true') {
        return;
    }
    var content = [];
    switch (type) {
        case 'log':
            content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject)];
            break;
        case 'error':
            content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject2)];
            break;
        case 'warn':
            content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject3)];
            break;
        case 'debug':
            {
                var trace = Object(__WEBPACK_IMPORTED_MODULE_1_stack_trace__["get"])();
                var funcName = trace[2].getFunctionName();
                content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject4, funcName ? __WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject5, funcName.substr(0, 15)) : '')];
                break;
            }
        default:
            throw new Error('Invalid log type: ' + type);
    }

    content = [].concat(_toConsumableArray(content), [message], misc);

    (_console = console)[type === 'debug' ? 'log' : type].apply(_console, _toConsumableArray(content));
};

var info = function info(message) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
    }

    return log.apply(undefined, ['log', message].concat(rest));
};
var error = function error(message) {
    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
    }

    return log.apply(undefined, ['error', message].concat(rest));
};
var warn = function warn(message) {
    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
    }

    return log.apply(undefined, ['warn', message].concat(rest));
};
var debug = function debug(message) {
    for (var _len5 = arguments.length, rest = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
    }

    return log.apply(undefined, ['debug', message].concat(rest));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("stack-trace");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Socket = function () {
    function Socket(http) {
        _classCallCheck(this, Socket);

        this.io = __WEBPACK_IMPORTED_MODULE_0_socket_io___default()(http);
    }

    _createClass(Socket, [{
        key: 'bindSockets',
        value: function bindSockets() {
            // bind sockets here
            // samples
            // this.io.emit('bla', {bla: 'bla' });
            // this.io.on('bla', (data) => { info(data) });
        }
    }]);

    return Socket;
}();

/* harmony default export */ __webpack_exports__["a"] = (Socket);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map