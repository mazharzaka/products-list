import React from "react";

const Items = (props) => {
  const {items, del, Qty} = props;
  //   const {value, setValue} = 1;
  let length = items.length;

  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>
            <input
              className="count"
              defaultValue={item.qty}
              onChange={(e) => {
                let num = Number(e.target.value);
                Qty(item.id, num);
                console.log(item.qty);
              }}
              type="number"
              min={0}
            />
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
