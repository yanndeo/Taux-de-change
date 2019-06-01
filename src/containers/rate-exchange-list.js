import React, { Component } from 'react'
import { connect } from 'react-redux';
import RateExchangeItem from '../components/rate-exchange-item';





class RateExchangeList extends Component {
    render () {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Pays</th>
                        <th className="col-md-6">Valeur de la monnaie par rapport au $</th>
                    </tr>
                </thead>
               
                <tbody>
                    {
                        this.props.rate_exchangeList.map((rate , i)=>{
                            return <RateExchangeItem key={rate.code + i}  rateExchange = {rate} />
                        })
                    }
                </tbody>
            </table>
        )
    }
}



const mapStateToProps = state => ({
    rate_exchangeList: state.ratesExchange.rate_exchangeList
});


export default connect(mapStateToProps, {})(RateExchangeList)