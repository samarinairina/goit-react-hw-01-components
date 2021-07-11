import React from 'react';
import Transaction from './transHistory';
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  return (
    <>
      <table >
        <thead className=''>
          <tr>
            <th className=''>Type</th>
            <th className=''>Amount</th>
            <th className=''>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <Transaction
              key={item.id}
              id={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              count={index % 2}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
TransactionHistory.defaultProps = {
  items: [],
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;