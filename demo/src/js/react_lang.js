const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

/** 搜索框 */
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handChangeInput = this.handChangeInput.bind(this);
    this.handChangeStock = this.handChangeStock.bind(this);
  }

  handChangeInput(e) {
    this.props.onChangeInput(e.target.value)
  }

  handChangeStock(e) {
    this.props.onCheckStock(e.target.checked)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.fillText}
          onChange={this.handChangeInput}
        />
        <label>
          <input
            type="checkbox"
            checked={this.props.fillStock}
            onChange={this.handChangeStock}
          />
          Only show products in stock
        </label>
      </form>
    );
  }
}

/** 列表 */
class ListBox extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product)=>{
      let name = product.stocked ? product.name : <span style={{ color: 'red'}}>product.name</span>

      // 模糊匹配
      if(product.name.indexOf(this.props.fillText) === -1) {
        return;
      }

      // 判断是否售罄
      if(this.props.fillStock && !product.stocked) {
        return;
      }

      if(product.category !== lastCategory) {
        rows.push(
          <tr>
            <th colspan="2">{product.category}</th>
          </tr>
        );
      }

      rows.push(
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

/* 最外层容器 */
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fillText: '', fillStock: false };
    this.changeInput = this.changeInput.bind(this);
    this.checkStock = this.checkStock.bind(this);
  }

  changeInput(fillText) {
    this.setState({ fillText: fillText });
  }

  checkStock(fillStock) {
    this.setState({ fillStock: fillStock });
  }

  render() {
    return (
      <div>
        <SearchBox
          fillText={this.state.fillText}
          fillStock={this.state.fillStock}
          onChangeInput={this.changeInput}
          onCheckStock={this.checkStock}
        />
        <ListBox
          products={this.props.products}
          fillText={this.state.fillText}
          fillStock={this.state.fillStock}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Container products={PRODUCTS} />,
  document.getElementById('container')
)