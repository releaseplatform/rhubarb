import React from 'react';
import Users from '../data.json';

const cols = [
  "order ID",
  "influencer",
  "customer",
  "order value",
  "date/time"
];

const tableHead = cols.map((col) =>
    <th>{col}</th>
);

const userList = Users.map((user) =>
  <tr className="dataRow">
    <td><a href="">#{user.ID}</a></td>
    <td>{user.influencer}</td>
    <td>{user.customer}</td>
    <td>{user.orderValue}</td>
    <td>{user.date}</td>
  </tr>
);

class Table extends React.Component {
  render() {
    return (
      <div className="grid-item transactionView">
        <table>
          <tr className="tableHead">
            {tableHead}
          </tr>
          {userList}
        </table>
      </div>
    )
  }
}

export default Table;
