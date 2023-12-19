import React from "react";

const Items = (props) => {
  const {items, del, Qty} = props;
  //   const {value, setValue} = 1;
  let length = items.length;
  const min = (e, id) => {
    let value = document.querySelector("#count" + id).value;

    if (value !== "0") {
      document.querySelector("#count" + id).value = Number(value) - 1;
      value = Number(document.querySelector("#count" + id).value);
      Qty(id, value);
    }

    // console.log(e.target.parentElement.children[1].value);
  };
  const max = (e, id) => {
    let value = document.querySelector("#count" + id).value;
    // console.log(value);
    if (value !== "10") {
      document.querySelector("#count" + id).value = Number(value) + 1;
      value = Number(document.querySelector("#count" + id).value);
      Qty(id, value);
    }
    // console.log(e.target.parentElement.children[1].value);
    console.log(value);
  };
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>
            <div class="number">
              <span onClick={(e) => min(e, item.id)} class="minus">
                -
              </span>
              <input
                className="count"
                value={item.qty}
                type="text"
                id={"count" + item.id}
              />
              <span class="plus" onClick={(e) => max(e, item.id)}>
                +
              </span>
            </div>
          </p>
          <p>{item.price * item.qty}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
