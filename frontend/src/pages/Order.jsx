import React from "react";

const Order = () => {
  return (
    <section className="max-padd-container py-28 xl:py-32">
      <form action="">
        <div>
          <h3>Delivery Information</h3>
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="ring-1 
            ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2 required"
            />
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="ring-1 
            ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2 required"
            />
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="ring-1 
            ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2 required"
            />
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="ring-1 
            ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2 required"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Order;
