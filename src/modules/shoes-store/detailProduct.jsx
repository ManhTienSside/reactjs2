import  { Component } from 'react'
export default class DetailProduct extends Component {
  render() {
    const {item} =this.props;
    
    return (
      <div>
        <h1>Chi Tiet:</h1>
        <div className="detail-top">
          <img 
          style={{
            width:'300px'
          }}
          src={item.image} 
          alt="" />
        </div>
        <div className="detail-bottom">
          <table className='detail-table'>
            <tbody>
            <tr>
                  <td>Ten San Pham:</td>
                  <td>{item.name}</td>
            </tr>
            <tr>
                  <td>Chi Tiet San Pham:</td>
                  <td>{item.shortDescription}</td>
            </tr>
            <tr>
                  <td>So Luong San Pham:</td>
                  <td>{item.quantity}</td>
            </tr>
            <tr>
                  <td>Gia San Pham:</td>
                  <td>Adidas Prophere</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
