import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/init";
import Spinners from "../../Shear/Spinners/Spinners";
import "./CheckoutPage.css";
const CheckoutPage = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Spinners />;
  }

  return (
    <div className="container">
      <div className="orderDetails">
        <h2 className="text-center py-3 fw-bold">Order Details</h2>
        <form>
          <p>Name</p>
          <input required type="text" name="name" placeholder="Enter Name" />

          <p> Email</p>
          <input
            required
            value={user?.email}
            readOnly
            type="email"
            name="email"
            placeholder="Enter Email"
          />

          <p>Your Work details</p>
          <textarea
            placeholder="Your Work Requirement"
            class="form-control mb-5"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="orderDetailsBtn">Shipping Now</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
