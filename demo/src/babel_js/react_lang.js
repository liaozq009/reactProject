var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

/** 搜索框 */

var SearchBox = function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox(props) {
    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));

    _this.handChangeInput = _this.handChangeInput.bind(_this);
    _this.handChangeStock = _this.handChangeStock.bind(_this);
    return _this;
  }

  _createClass(SearchBox, [{
    key: 'handChangeInput',
    value: function handChangeInput(e) {
      this.props.onChangeInput(e.target.value);
    }
  }, {
    key: 'handChangeStock',
    value: function handChangeStock(e) {
      this.props.onCheckStock(e.target.checked);
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
          value: this.props.fillText,
          onChange: this.handChangeInput
        }),
        React.createElement(
          'label',
          null,
          React.createElement('input', {
            type: 'checkbox',
            checked: this.props.fillStock,
            onChange: this.handChangeStock
          }),
          'Only show products in stock'
        )
      );
    }
  }]);

  return SearchBox;
}(React.Component);

/** 列表 */


var ListBox = function (_React$Component2) {
  _inherits(ListBox, _React$Component2);

  function ListBox() {
    _classCallCheck(this, ListBox);

    return _possibleConstructorReturn(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).apply(this, arguments));
  }

  _createClass(ListBox, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var rows = [];
      var lastCategory = null;

      this.props.products.forEach(function (product) {
        var name = product.stocked ? product.name : React.createElement(
          'span',
          { style: { color: 'red' } },
          'product.name'
        );

        // 模糊匹配
        if (product.name.indexOf(_this3.props.fillText) === -1) {
          return;
        }

        // 判断是否售罄
        if (_this3.props.fillStock && !product.stocked) {
          return;
        }

        if (product.category !== lastCategory) {
          rows.push(React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { colspan: '2' },
              product.category
            )
          ));
        }

        rows.push(React.createElement(
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
        ));

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

  return ListBox;
}(React.Component);

/* 最外层容器 */


var Container = function (_React$Component3) {
  _inherits(Container, _React$Component3);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this4 = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this4.state = { fillText: '', fillStock: false };
    _this4.changeInput = _this4.changeInput.bind(_this4);
    _this4.checkStock = _this4.checkStock.bind(_this4);
    return _this4;
  }

  _createClass(Container, [{
    key: 'changeInput',
    value: function changeInput(fillText) {
      this.setState({ fillText: fillText });
    }
  }, {
    key: 'checkStock',
    value: function checkStock(fillStock) {
      this.setState({ fillStock: fillStock });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SearchBox, {
          fillText: this.state.fillText,
          fillStock: this.state.fillStock,
          onChangeInput: this.changeInput,
          onCheckStock: this.checkStock
        }),
        React.createElement(ListBox, {
          products: this.props.products,
          fillText: this.state.fillText,
          fillStock: this.state.fillStock
        })
      );
    }
  }]);

  return Container;
}(React.Component);

ReactDOM.render(React.createElement(Container, { products: PRODUCTS }), document.getElementById('container'));