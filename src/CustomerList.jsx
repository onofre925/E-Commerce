import React, { Component } from "react";

export default class CustomerList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "http://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jones",
        phone: "982-014",
        address: { city: "London" },
        photo: "http://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "925-213",
        address: { city: "Berlin" },
        photo: "http://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "James",
        phone: null,
        address: { city: "New York" },
        photo: "http://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "John",
        phone: null,
        address: { city: "New Jersey" },
        photo: "http://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
          {this.state.pageTitle}
          <span className="badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thread>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thread>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on refresh
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td> {this.getPhoneToRender(cust.phone)} </td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  //Executes when the users clicks on "Change Picture" button in the grid
  // Recieves the "customer" object and index of the currently clicked customers
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    // console.log(index);
    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "http://picsum.photos/id/104/60";
    //update "customers" array in the state
    this.setState({ customer: custArr });
  };
}
