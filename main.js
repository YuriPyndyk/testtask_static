var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _fixedhourlycostpaidservice = __webpack_require__(1);
	
	var _fixedhourlycostpaidservice2 = _interopRequireDefault(_fixedhourlycostpaidservice);
	
	var _fixedmonthlycostpaidservice = __webpack_require__(3);
	
	var _fixedmonthlycostpaidservice2 = _interopRequireDefault(_fixedmonthlycostpaidservice);
	
	var _database = __webpack_require__(4);
	
	var _database2 = _interopRequireDefault(_database);
	
	var _table = __webpack_require__(5);
	
	var _table2 = _interopRequireDefault(_table);
	
	__webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var table1 = document.getElementById("table1");
	var table2 = document.getElementById("table2");
	var table3 = document.getElementById("table3");
	var table4 = document.getElementById("table4");
	var db = new _database2.default();
	db.dataBase = [];
	
	var table = new _table2.default();
	table.tableHeaderParagraph1 = ['экземпляр класса', 'идиндификатор', 'имя сервиса', 'затраты'];
	table.tableHeaderParagraph2 = ['имя сервиса'];
	table.tableHeaderParagraph3 = ['идиндификатор'];
	
	var tableRowHeaderParagraph1 = document.createElement('div');
	tableRowHeaderParagraph1.className = 'table__row';
	var tableRowHeaderParagraph2 = document.createElement('div');
	tableRowHeaderParagraph2.className = 'table__row';
	var tableRowHeaderParagraph3 = document.createElement('div');
	tableRowHeaderParagraph3.className = 'table__row';
	var tableRowHeaderParagraph4 = document.createElement('div');
	tableRowHeaderParagraph4.className = 'table__row';
	
	db.dataBase.push(new _fixedhourlycostpaidservice2.default('service1', 'Google BOrkut', 11));
	db.dataBase.push(new _fixedhourlycostpaidservice2.default('service2', 'Google Voice', 11));
	db.dataBase.push(new _fixedmonthlycostpaidservice2.default('service5', 'YouTube', 8064));
	db.dataBase.push(new _fixedhourlycostpaidservice2.default('service3', 'Mandrill', 12));
	db.dataBase.push(new _fixedhourlycostpaidservice2.default('service4', 'Google cFinance', 11));
	db.dataBase.push(new _fixedmonthlycostpaidservice2.default('service7', 'Google Boilding Maker', 7920));
	db.dataBase.push(new _fixedmonthlycostpaidservice2.default('service6', 'LinkedIn', 6863));
	
	db.sortAverageMonthlyCosts(db.dataBase);
	
	table1.appendChild(tableRowHeaderParagraph1);
	table2.appendChild(tableRowHeaderParagraph2);
	table3.appendChild(tableRowHeaderParagraph3);
	table4.appendChild(tableRowHeaderParagraph4);
	
	table.addTableHeader(table.tableHeaderParagraph1, tableRowHeaderParagraph1);
	table.addTableHeader(table.tableHeaderParagraph2, tableRowHeaderParagraph2);
	table.addTableHeader(table.tableHeaderParagraph3, tableRowHeaderParagraph3);
	table.addTableHeader(table.tableHeaderParagraph2, tableRowHeaderParagraph4);
	
	table.addTableContent(db.dataBase, table, table1);
	
	db.sortValueFirstFive(db.dataBase, table, table2);
	db.sortValueLastThree(db.dataBase, table, table3);
	db.compareService(db.dataBase, table4);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _paidservice = __webpack_require__(2);
	
	var _paidservice2 = _interopRequireDefault(_paidservice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FixedHourlyCostPaidService = function (_PaidService) {
	    _inherits(FixedHourlyCostPaidService, _PaidService);
	
	    function FixedHourlyCostPaidService() {
	        _classCallCheck(this, FixedHourlyCostPaidService);
	
	        return _possibleConstructorReturn(this, (FixedHourlyCostPaidService.__proto__ || Object.getPrototypeOf(FixedHourlyCostPaidService)).apply(this, arguments));
	    }
	
	    _createClass(FixedHourlyCostPaidService, [{
	        key: 'calculateAverageMonthlyCosts',
	        value: function calculateAverageMonthlyCosts() {
	            return 30 * 24 * this.costs;
	        }
	    }]);
	
	    return FixedHourlyCostPaidService;
	}(_paidservice2.default);
	
	exports.default = FixedHourlyCostPaidService;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PaidService = function PaidService(id, name, costs) {
	    _classCallCheck(this, PaidService);
	
	    this.id = id;
	    this.name = name;
	    this.costs = costs;
	};
	
	exports.default = PaidService;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _paidservice = __webpack_require__(2);
	
	var _paidservice2 = _interopRequireDefault(_paidservice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FixedMonthlyCostPaidService = function (_PaidService) {
	    _inherits(FixedMonthlyCostPaidService, _PaidService);
	
	    function FixedMonthlyCostPaidService() {
	        _classCallCheck(this, FixedMonthlyCostPaidService);
	
	        return _possibleConstructorReturn(this, (FixedMonthlyCostPaidService.__proto__ || Object.getPrototypeOf(FixedMonthlyCostPaidService)).apply(this, arguments));
	    }
	
	    _createClass(FixedMonthlyCostPaidService, [{
	        key: 'calculateAverageMonthlyCosts',
	        value: function calculateAverageMonthlyCosts() {
	            return this.costs;
	        }
	    }]);
	
	    return FixedMonthlyCostPaidService;
	}(_paidservice2.default);
	
	exports.default = FixedMonthlyCostPaidService;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _table = __webpack_require__(5);
	
	var _table2 = _interopRequireDefault(_table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DataBase = function (_Table) {
	    _inherits(DataBase, _Table);
	
	    function DataBase() {
	        _classCallCheck(this, DataBase);
	
	        return _possibleConstructorReturn(this, (DataBase.__proto__ || Object.getPrototypeOf(DataBase)).apply(this, arguments));
	    }
	
	    _createClass(DataBase, [{
	        key: 'sortAverageMonthlyCosts',
	        value: function sortAverageMonthlyCosts(sortArray) {
	            sortArray.sort(function (a, b) {
	                if (a.calculateAverageMonthlyCosts() > b.calculateAverageMonthlyCosts()) {
	                    return -1;
	                } else if (a.calculateAverageMonthlyCosts() !== b.calculateAverageMonthlyCosts()) {
	                    return 1;
	                } else {
	                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
	                        return -1;
	                    } else {
	                        return 1;
	                    }
	                }
	            });
	        }
	    }]);
	
	    return DataBase;
	}(_table2.default);
	
	exports.default = DataBase;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Table = function () {
	    function Table() {
	        _classCallCheck(this, Table);
	    }
	
	    _createClass(Table, [{
	        key: 'addTableHeader',
	        value: function addTableHeader(elem, rowElem) {
	            elem.forEach(function (item) {
	                var tableCell = document.createElement('div');
	                var h2 = document.createElement('h2');
	                tableCell.className = 'table__cell';
	                h2.innerHTML = item;
	                tableCell.appendChild(h2);
	                rowElem.appendChild(tableCell);
	            });
	        }
	    }, {
	        key: 'createTableCell',
	        value: function createTableCell(elem, elem2) {
	            var tableCell = document.createElement('div');
	            var span = document.createElement('span');
	            tableCell.className = 'table__cell';
	            span.innerHTML = elem2;
	            tableCell.appendChild(span);
	            elem.appendChild(tableCell);
	            return elem;
	        }
	    }, {
	        key: 'addTableContent',
	        value: function addTableContent(db, elemTable, mainTable) {
	            db.forEach(function (item) {
	                var tableRow = document.createElement('div');
	                tableRow.className = "table__row";
	                elemTable.createTableCell(tableRow, item.constructor.name);
	                for (var key in item) {
	                    if (key == "costs") {
	                        elemTable.createTableCell(tableRow, item.calculateAverageMonthlyCosts());
	                    } else {
	                        elemTable.createTableCell(tableRow, item[key]);
	                    }
	                }
	                mainTable.appendChild(tableRow);
	            });
	        }
	    }, {
	        key: 'sortValueFirstFive',
	        value: function sortValueFirstFive(db, elemTable, mainTable) {
	            var sortValueFirstFive = db.slice(0, 5);
	            sortValueFirstFive.forEach(function (item) {
	                var tableRow = document.createElement('div');
	                tableRow.className = "table__row";
	                elemTable.createTableCell(tableRow, item.name);
	                mainTable.appendChild(tableRow);
	            });
	        }
	    }, {
	        key: 'sortValueLastThree',
	        value: function sortValueLastThree(db, elemTable, mainTable) {
	            var sortValueFirstFive = db.slice(-3);
	            sortValueFirstFive.forEach(function (item) {
	                var tableRow = document.createElement('div');
	                tableRow.className = "table__row";
	                elemTable.createTableCell(tableRow, item.id);
	                mainTable.appendChild(tableRow);
	            });
	        }
	    }, {
	        key: 'compareService',
	        value: function compareService(db, table) {
	            var div = document.createElement('div');
	            var ul = document.createElement('ul');
	            ul.className = 'name-list';
	            var array = [];
	            for (var i = 0; i < db.length; i++) {
	                var j = i + 1;
	                var k = i - 1;
	                if (j < db.length) {
	                    if (db[i].calculateAverageMonthlyCosts() === db[j].calculateAverageMonthlyCosts() && k >= 0 && db[i].calculateAverageMonthlyCosts() !== db[k].calculateAverageMonthlyCosts()) {
	                        array.push("<li>" + db[i].name + " /");
	                    } else if (db[i].calculateAverageMonthlyCosts() === db[j].calculateAverageMonthlyCosts()) {
	                        array.push(db[i].name + " /");
	                    } else if (db[i].calculateAverageMonthlyCosts() !== db[j].calculateAverageMonthlyCosts() && k >= 0 && db[i].calculateAverageMonthlyCosts() === db[k].calculateAverageMonthlyCosts()) {
	                        array.push(db[i].name + "</li>");
	                    } else {
	                        array.push("<li>" + db[i].name + "</li>");
	                    }
	                } else {
	                    array.push("<li>" + db[i].name + "</li>");
	                }
	            }
	            ul.innerHTML = array.join(" ");
	            div.appendChild(ul);
	            table.appendChild(div);
	        }
	    }]);
	
	    return Table;
	}();
	
	exports.default = Table;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map