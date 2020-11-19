import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Income from './Income';


const ListTransactions = ({transactions, removeTransaction}) => {
    return (
        <ListGroup>
            {transactions.map(transaction=>(<Income 
                transaction={transaction} 
                removeTransaction={removeTransaction}
                />))}
        </ListGroup>
    )
}

export default ListTransactions;