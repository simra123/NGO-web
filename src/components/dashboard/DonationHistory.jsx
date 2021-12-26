import React from 'react'
import { Table } from 'react-bootstrap'
import User from '../../assets/user.jpg'

const history = [
    {
        name: 'john',
        id: 1,
        image: '',
        email: 'johnsmilga@gmail.com',
        amount: '120',
        date: '28:9:2020'
    },
    {
        name: 'john',
        id: 2,
        image: '',
        email: 'johnsmilga@gmail.com',
        amount: '120',
        date: '28:9:2020'
    },
    {
        name: 'john',
        id: 3,
        image: '',
        email: 'johnsmilga@gmail.com',
        amount: '120',
        date: '28:9:2020'
    }

]
const DonationHistory = () => {
    return (
        <div className='donation-table'>
            <h2 className='text-center'>DONATION HISTORY</h2>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>

                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amout</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { history.map((history) => (
                        <tr>
                            <td>{ history.id }</td>
                            <td>
                                <div className="d-flex">
                                    <img src={ User } className="rounded-circle" height={ 40 } width={ 40 } alt="" />
                                    <p className='ml-3'>{ history.name }</p>
                                </div>
                            </td>
                            <td>
                                { history.email }
                            </td>
                            <td>
                                { history.amount }
                            </td>
                            <td>
                                { history.date }
                            </td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    )
}
export default DonationHistory