import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function BodyComp() {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch);

    return (
        <div className='container d-flex justify-content-center m-5 p-5'>
            <div>
                <h2>Deposit/Withdraw</h2>
                <Button className='m-4' variant="primary" onClick={() => withdrawMoney(500)}>-</Button>
                <Button disabled variant="primary-outline">500</Button>
                <Button className='m-4' variant="primary" onClick={() => depositMoney(500)}>+</Button>
            </div>
        </div>
    )
}
