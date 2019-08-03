var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 初体验 */
var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      // JSX
      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ liked: true });
          } },
        'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);

/* 计时器 */

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this3 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this3.state = { date: new Date() };
    return _this3;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      this.timerID = setInterval(function () {
        return _this4.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        React.createElement(
          'h2',
          null,
          'It is ',
          this.state.date.toLocaleTimeString(),
          '.'
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById('times'));

/* 开关按钮 */

var Toggle = function (_React$Component3) {
  _inherits(Toggle, _React$Component3);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this5 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this5.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    _this5.handleClick = _this5.handleClick.bind(_this5);
    return _this5;
  }

  _createClass(Toggle, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (state) {
        return {
          isToggleOn: !state.isToggleOn
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.handleClick },
        this.state.isToggleOn ? 'ON' : 'OFF'
      );
    }
  }]);

  return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('toggle'));

/* 登录注销 */

var LoginControl = function (_React$Component4) {
  _inherits(LoginControl, _React$Component4);

  function LoginControl(props) {
    _classCallCheck(this, LoginControl);

    var _this6 = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

    _this6.handleLoginClick = _this6.handleLoginClick.bind(_this6);
    _this6.handleLogoutClick = _this6.handleLogoutClick.bind(_this6);
    _this6.state = { isLoggedIn: false };
    return _this6;
  }

  _createClass(LoginControl, [{
    key: 'handleLoginClick',
    value: function handleLoginClick() {
      this.setState({ isLoggedIn: true });
    }
  }, {
    key: 'handleLogoutClick',
    value: function handleLogoutClick() {
      this.setState({ isLoggedIn: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      var button = void 0;

      {
        isLoggedIn ? button = React.createElement(LogoutButton, { onClick: this.handleLogoutClick }) : button = React.createElement(LoginButton, { onClick: this.handleLoginClick });
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
        button
      );
    }
  }]);

  return LoginControl;
}(React.Component);

function UserGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Welcome back!'
  );
}

function GuestGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Please sign up.'
  );
}

function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return React.createElement(UserGreeting, null);
  }
  return React.createElement(GuestGreeting, null);
}

function LoginButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Login'
  );
}

function LogoutButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Logout'
  );
}

ReactDOM.render(React.createElement(LoginControl, null), document.getElementById('login'));

/* 状态提升 */
var scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
  var input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  var output = convert(input);
  var rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return React.createElement(
      'p',
      null,
      'The water would boil.'
    );
  }
  return React.createElement(
    'p',
    null,
    'The water would not boil.'
  );
}

var TemperatureInput = function (_React$Component5) {
  _inherits(TemperatureInput, _React$Component5);

  function TemperatureInput(props) {
    _classCallCheck(this, TemperatureInput);

    var _this7 = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

    _this7.handleChange = _this7.handleChange.bind(_this7);
    return _this7;
  }

  _createClass(TemperatureInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var temperature = this.props.temperature;
      var scale = this.props.scale;
      return React.createElement(
        'fieldset',
        null,
        React.createElement(
          'legend',
          null,
          'Enter temperature in ',
          scaleNames[scale],
          ':'
        ),
        React.createElement('input', { value: temperature,
          onChange: this.handleChange })
      );
    }
  }]);

  return TemperatureInput;
}(React.Component);

var Calculator = function (_React$Component6) {
  _inherits(Calculator, _React$Component6);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this8 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this8.handleCelsiusChange = _this8.handleCelsiusChange.bind(_this8);
    _this8.handleFahrenheitChange = _this8.handleFahrenheitChange.bind(_this8);
    _this8.state = { temperature: '', scale: 'c' };
    return _this8;
  }

  _createClass(Calculator, [{
    key: 'handleCelsiusChange',
    value: function handleCelsiusChange(temperature) {
      this.setState({ scale: 'c', temperature: temperature });
    }
  }, {
    key: 'handleFahrenheitChange',
    value: function handleFahrenheitChange(temperature) {
      this.setState({ scale: 'f', temperature: temperature });
    }
  }, {
    key: 'render',
    value: function render() {
      var scale = this.state.scale;
      var temperature = this.state.temperature;
      var celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      var fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

      return React.createElement(
        'div',
        null,
        React.createElement(TemperatureInput, {
          scale: 'c',
          temperature: celsius,
          onTemperatureChange: this.handleCelsiusChange }),
        React.createElement(TemperatureInput, {
          scale: 'f',
          temperature: fahrenheit,
          onTemperatureChange: this.handleFahrenheitChange }),
        React.createElement(BoilingVerdict, {
          celsius: parseFloat(celsius) })
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('temperature'));

/* REACT哲学 */

var ProductCategoryRow = function (_React$Component7) {
  _inherits(ProductCategoryRow, _React$Component7);

  function ProductCategoryRow() {
    _classCallCheck(this, ProductCategoryRow);

    return _possibleConstructorReturn(this, (ProductCategoryRow.__proto__ || Object.getPrototypeOf(ProductCategoryRow)).apply(this, arguments));
  }

  _createClass(ProductCategoryRow, [{
    key: 'render',
    value: function render() {
      var category = this.props.category;
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          { colSpan: '2' },
          category
        )
      );
    }
  }]);

  return ProductCategoryRow;
}(React.Component);

var ProductRow = function (_React$Component8) {
  _inherits(ProductRow, _React$Component8);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, (ProductRow.__proto__ || Object.getPrototypeOf(ProductRow)).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: 'render',
    value: function render() {
      var product = this.props.product;
      var name = product.stocked ? product.name : React.createElement(
        'span',
        { style: { color: 'red' } },
        product.name
      );

      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          name
        ),
        React.createElement(
          'td',
          null,
          product.price
        )
      );
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductTable = function (_React$Component9) {
  _inherits(ProductTable, _React$Component9);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: 'render',
    value: function render() {
      var filterText = this.props.filterText;
      var inStockOnly = this.props.inStockOnly;

      var rows = [];
      var lastCategory = null;

      this.props.products.forEach(function (product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(React.createElement(ProductCategoryRow, {
            category: product.category,
            key: product.category }));
        }
        rows.push(React.createElement(ProductRow, {
          product: product,
          key: product.name
        }));
        lastCategory = product.category;
      });

      return React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Name'
            ),
            React.createElement(
              'th',
              null,
              'Price'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          rows
        )
      );
    }
  }]);

  return ProductTable;
}(React.Component);

var SearchBar = function (_React$Component10) {
  _inherits(SearchBar, _React$Component10);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this12 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this12.handleFilterTextChange = _this12.handleFilterTextChange.bind(_this12);
    _this12.handleInStockChange = _this12.handleInStockChange.bind(_this12);
    return _this12;
  }

  _createClass(SearchBar, [{
    key: 'handleFilterTextChange',
    value: function handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: 'handleInStockChange',
    value: function handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        null,
        React.createElement('input', {
          type: 'text',
          placeholder: 'Search...',
          value: this.props.filterText,
          onChange: this.handleFilterTextChange
        }),
        React.createElement(
          'p',
          null,
          React.createElement('input', {
            type: 'checkbox',
            checked: this.props.inStockOnly,
            onChange: this.handleInStockChange
          }),
          ' ',
          'Only show products in stock'
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);

var FilterableProductTable = function (_React$Component11) {
  _inherits(FilterableProductTable, _React$Component11);

  function FilterableProductTable(props) {
    _classCallCheck(this, FilterableProductTable);

    var _this13 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));

    _this13.state = {
      filterText: '',
      inStockOnly: false
    };

    _this13.handleFilterTextChange = _this13.handleFilterTextChange.bind(_this13);
    _this13.handleInStockChange = _this13.handleInStockChange.bind(_this13);
    return _this13;
  }

  _createClass(FilterableProductTable, [{
    key: 'handleFilterTextChange',
    value: function handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  }, {
    key: 'handleInStockChange',
    value: function handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SearchBar, {
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly,
          onFilterTextChange: this.handleFilterTextChange,
          onInStockChange: this.handleInStockChange
        }),
        React.createElement(ProductTable, {
          products: this.props.products,
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly
        })
      );
    }
  }]);

  return FilterableProductTable;
}(React.Component);

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

ReactDOM.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.getElementById('container'));