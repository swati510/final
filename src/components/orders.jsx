import React from 'react'
import  { Component } from 'react'

export default class Orders extends Component {
  render() {
    return (
     
    
     
    
    <header id="header" className="header">
<div className="content" >
        {/* Content Header (Page header) */}
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="p-heading p-large display-4">Orders</h1>
           
          </div> {/* end of col */}
        </div></div>
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
              <div className="card ">
  <div className="card-header  ">
    <div className="mr-auto">
      <span>Order Book</span>
    </div>
   
 </div>
 <div  className="order-lable scroll-table">
  <table  className="table table-bordered table-hover dataTable">
    <tbody>
      <tr data-v-6a970cf6 className="name">
        <th data-v-6a970cf6>Price (TRX)</th>{" "}
        <th data-v-6a970cf6>Amount(USDT)</th>{" "}
        <th data-v-6a970cf6 className="text-right">
          Total (TRX)
        </th>
      </tr>
    </tbody>
  </table>
</div>;

 <table className="table table-bordered table-hover dataTable" style={{ marginTop: 0 }}>
  <tbody>
    <tr style={{ cursor: "pointer" }}>
      <td>
        <div
          className="d-flex align-items-center"
          style={{ position: "relative", marginLeft: 2 }}
        >
          <span
            style={{ minWidth: 8, position: "absolute", left: "-18px", top: 1 }}
          >
            {/**/}
          </span>{" "}
          <span className="up">31.000000</span>
        </div>
      </td>{" "}
      <td>10.000</td>{" "}
      <td className="text-right">
        <span>310.000000</span>
      </td>
    </tr>
    <tr style={{ cursor: "pointer" }}>
      <td>
        <div
          className="d-flex align-items-center"
          style={{ position: "relative", marginLeft: 2 }}
        >
          <span
            style={{ minWidth: 8, position: "absolute", left: "-18px", top: 1 }}
          >
            {/**/}
          </span>{" "}
          <span className="up">30.000000</span>
        </div>
      </td>{" "}
      <td>5.000</td>{" "}
      <td className="text-right">
        <span>150.000000</span>
      </td>
    </tr>
    <tr style={{ cursor: "pointer" }}>
      <td>
        <div
          className="d-flex align-items-center"
          style={{ position: "relative", marginLeft: 2 }}
        >
          <span
            style={{ minWidth: 8, position: "absolute", left: "-18px", top: 1 }}
          >
            {/**/}
          </span>{" "}
          <span className="up">16.000000</span>
        </div>
      </td>{" "}
      <td>71.000</td>{" "}
      <td className="text-right">
        <span>1,136.000000</span>
      </td>
    </tr>
  </tbody>
</table>;

 </div>

              </div>
              {/* /.col-md-6 */}
              <div className="col-lg-6">
              <div className="card card-info">
  <div className="card-header">
    <h3 className="card-title">Line Chart</h3>
    <div className="card-tools">
      <button
        type="button"
        className="btn btn-tool"
        data-card-widget="collapse"
      >
        <i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove">
        <i className="fas fa-times" />
      </button>
    </div>
  </div>
  <div className="card-body">
    <div className="chart">
      <div className="chartjs-size-monitor">
        <div className="chartjs-size-monitor-expand">
          <div className />
        </div>
        <div className="chartjs-size-monitor-shrink">
          <div className />
        </div>
      </div>
      <canvas
        id="lineChart"
        style={{
          minHeight: 250,
          height: 250,
          maxHeight: 250,
          maxWidth: "100%",
          display: "block",
          width: 459
        }}
        width={459}
        height={250}
        className="chartjs-render-monitor"
      />
    </div>
  </div>
  {/* /.card-body */}
</div>;
  {/* /.card */}
              </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
      <div>
  <div className="row">
  <div className="col-lg-12">
  <div className="card">      
  <nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <a
        className="nav-item nav-link active"
        id="nav-home-tab"
        data-toggle="tab"
        href="#nav-home"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
      >
        Order History
      </a>
      <a
        className="nav-item nav-link"
        id="nav-profile-tab"
        data-toggle="tab"
        href="#nav-profile"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
      >
        Open Orders
      </a>
     
    </div>
  </nav>
  <div className="tab-content" id="nav-tabContent">
    <div
      className="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <table className="table table-sm table-gx borderless table-scroll mb-1">
  <thead>
    <tr>
      <th style={{ width: "9%" }}>
        <span>Status</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "15%" }}>
        <span>Creation Time</span>
        <i className="icon-arrow icon-arrow-down" />
      </th>
      <th style={{ width: "15%" }}>
        <span>Execution Time</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "7%" }}>
        <span>Pair</span>
      </th>
      <th style={{ width: "7%" }}>
        <span>Side</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Price</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Amount</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Filled</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Total</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={10} className="text-center pt-2">
        <span>No orders found</span>
      </td>
    </tr>
  </tbody>
</table>;

    </div>
    <div
      className="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <table className="table table-gx table-scroll mb-1">
  <thead>
    <tr>
      <th style={{ width: "10%" }}>
        <span>Status</span>
      </th>
      <th style={{ width: "16%" }}>
        <span>Date</span>
        <i className="icon-arrow icon-arrow-down" />
      </th>
      <th style={{ width: "8%" }}>
        <span>Pair</span>
      </th>
      <th style={{ width: "8%" }}>
        <span>Type</span>
      </th>
      <th style={{ width: "8%" }}>
        <span>Side</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Price</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Amount</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Filled</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>
        <span>Total</span>
        <i className="icon-arrow icon-arrow-gray" />
      </th>
      <th style={{ width: "10%" }}>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={12} className="text-center pt-2">
        <span>There are no open orders</span>
      </td>
    </tr>
  </tbody>
</table>;

    </div>
    
  </div>
</div></div></div></div>

   
     </header>
  )
  }
}