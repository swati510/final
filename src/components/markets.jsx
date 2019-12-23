import React from 'react'
import  { Component } from 'react'

export default class Markets extends Component {
  render() {
    return (
      <div id="features" className="tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="p-heading p-large display-4">Market Pairs</h2>
           
          </div> {/* end of col */}
        </div>
        <div className="card ">
      
        {/* /.card-header */}
        <div className="card-body  p-large" >
          <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6" /><div className="col-sm-12 col-md-6" /></div><div className="row"><div className="col-sm-12">
             <table  id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info"><tbody><tr> <th>Pair</th> <th>Coin</th> <th>Last Price</th> <th className="text-right">24h Change</th> <th className="text-right">24h High</th> <th className="text-right">24h Low</th> <th className="d-flex align-items-center justify-content-between">24h Volume  
              {/**/}</th></tr> <tr className="cursor"><td>888/TRX</td> <td>888</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">17.085026</td> <td className="text-right">15.800465</td> <td>116,636.945 TRX</td></tr><tr className="cursor"> <td>USDT/TRX</td> <td>USDT</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">81.000000</td> <td className="text-right">80.000000</td> <td>1,396.817 TRX</td></tr><tr className="cursor"> <td>TSHARE/TRX</td> <td>TSHARE</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">0.170000</td> <td className="text-right">0.170000</td> <td>340.340 TRX</td></tr><tr className="cursor"><td>WIN/TRX</td> <td>WIN</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">0.007101</td> <td className="text-right">0.007100</td> <td>213.233 TRX</td></tr><tr className="cursor"> <td>DVS/TRX</td> <td>DVS</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">900.000000</td> <td className="text-right">900.000000</td> <td>90.090 TRX</td></tr><tr className="cursor"> <td>BTT/TRX</td> <td>BTT</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">0.014212</td> <td className="text-right">0.014212</td> <td>26.760 TRX</td></tr><tr className="cursor"> <td>TOPIA/TRX</td> <td>TOPIA</td> <td><span className>0.000000</span> / $0.000000</td> <td className="text-right"><span className>0.00%</span></td> <td className="text-right">5.300000</td> <td className="text-right">5.300000</td> <td>12.765 TRX</td></tr></tbody></table>
   </div></div>
                </div>
        </div>
        {/* /.card-body */}
      </div>
         {/* end of row */}
       </div> {/* end of container */} 
    </div>)}}