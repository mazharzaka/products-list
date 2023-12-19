import React, {Component} from "react";

class addItem extends Component {
  state = {
    product: "",
    qty: "",
    price: "",
  };

  handleChange = (e) => {
    console.log(e.target.id + ": " + e.target.value);
    // let qty= document.getElementById('qty')
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.state.price = Number(this.state.price) * Number(this.state.qty);
    // console.log(this.state);
    this.props.add(this.state);
    this.setState({
      product: "",
      qty: "",
      price: "",
    });
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.qty}
            placeholder="Enter Quantity"
            id="qty"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            id="price"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
