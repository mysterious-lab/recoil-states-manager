"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _recoil = require("recoil");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RecoilStatesManager = /*#__PURE__*/function (_Array) {
  _inherits(RecoilStatesManager, _Array);

  var _super = _createSuper(RecoilStatesManager);

  function RecoilStatesManager() {
    _classCallCheck(this, RecoilStatesManager);

    return _super.apply(this, arguments);
  }

  _createClass(RecoilStatesManager, [{
    key: "Root",
    get: function get() {
      return _recoil.RecoilRoot;
    }
  }, {
    key: "Bridge",
    get: function get() {
      return (0, _recoil.useRecoilBridgeAcrossReactRoots_UNSTABLE)();
    }
  }, {
    key: "atom",
    value: function atom(options) {
      return (0, _recoil.atom)(options);
    }
  }, {
    key: "selector",
    value: function selector(options) {
      return (0, _recoil.selector)(options);
    }
  }, {
    key: "validate",
    value: function validate(value) {
      return _typeof(value) === 'object' && (0, _recoil.isRecoilValue)(value);
    }
  }, {
    key: "get",
    value: function get(key) {
      for (var i = 0, l = this.length; i < l; ++i) {
        if (this[i].key === key) {
          return this[i];
        }
      }

      return null;
    }
  }, {
    key: "has",
    value: function has(key) {
      for (var i = 0, l = this.length; i < l; ++i) {
        if (this[i].key === key) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      items = items.map(function (item) {
        return _this.validate(item) ? item : (0, _recoil.atom)(item);
      });
      this.push.apply(this, _toConsumableArray(items));
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      for (var n = 0, len = keys.length; n < len; ++n) {
        for (var i = 0, l = this.length; i < l; ++i) {
          if (this[i].key === keys[n]) {
            this.splice(i, 1);
            break;
          }
        }
      }

      return this;
    }
  }, {
    key: "watch",
    value: function watch(key, onChange) {
      var value = this.useValue(key);

      var _useState = (0, _react.useState)(value),
          _useState2 = _slicedToArray(_useState, 2),
          currentValue = _useState2[0],
          setCurrentValue = _useState2[1];

      (0, _react.useEffect)(function () {
        if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
          typeof onChange === 'function' && onChange(currentValue, value);
          setCurrentValue(value);
        }
      }, [value]);
    }
  }, {
    key: "use",
    value: function use(key) {
      return (0, _recoil.useRecoilState)(this.get(key));
    }
  }, {
    key: "useValue",
    value: function useValue(key) {
      return (0, _recoil.useRecoilValue)(this.get(key));
    }
  }, {
    key: "useUpdater",
    value: function useUpdater(key) {
      return (0, _recoil.useSetRecoilState)(this.get(key));
    }
  }, {
    key: "useSelector",
    value: function useSelector(key) {
      return (0, _recoil.useRecoilValue)(this.get(key));
    }
  }, {
    key: "useStateLoadable",
    value: function useStateLoadable(key) {
      return (0, _recoil.useRecoilStateLoadable)(this.get(key));
    }
  }, {
    key: "useValueLoadable",
    value: function useValueLoadable(key) {
      return (0, _recoil.useRecoilValueLoadable)(this.get(key));
    }
  }, {
    key: "useResetter",
    value: function useResetter(key) {
      return (0, _recoil.useResetRecoilState)(this.get(key));
    }
  }, {
    key: "useCallback",
    value: function useCallback(callback, dependencies) {
      return (0, _recoil.useRecoilCallback)(callback, dependencies);
    }
  }, {
    key: "useSnapshot",
    value: function useSnapshot() {
      return (0, _recoil.useRecoilSnapshot)();
    }
  }, {
    key: "useGotoSnapshot",
    value: function useGotoSnapshot() {
      return (0, _recoil.useGotoRecoilSnapshot)();
    }
  }]);

  return RecoilStatesManager;
}( /*#__PURE__*/_wrapNativeSuper(Array));

exports["default"] = RecoilStatesManager;