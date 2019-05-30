'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultTitle;

        _classCallCheck(this, Task);

        this._title = title;
        this.done = false;
        console.log('Creating a task');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log(this.title + ' is done');
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        },
        set: function set(value) {
            this._title = value;
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Task';
        }
    }]);

    return Task;
}();

var Subtask = function (_Task) {
    _inherits(Subtask, _Task);

    //if there's no constructor, it inherits Parent's constructor
    function Subtask(title, parent) {
        _classCallCheck(this, Subtask);

        var _this = _possibleConstructorReturn(this, (Subtask.__proto__ || Object.getPrototypeOf(Subtask)).call(this, title));
        //if defined, super is required


        _this.parent = parent;
        console.log('Creating a subtask');
        return _this;
    }

    _createClass(Subtask, [{
        key: 'complete',
        value: function complete() {
            _get(Subtask.prototype.__proto__ || Object.getPrototypeOf(Subtask.prototype), 'complete', this).call(this);
            console.log('Subtask is done');
        }
    }]);

    return Subtask;
}(Task);

var task = new Task('Learn JavaScript');
var subtask = new Subtask('Learn ES6', task);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(subtask.getDefaultTitle);