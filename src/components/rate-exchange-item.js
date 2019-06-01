import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
//1
import ReactChartkick, { AreaChart } from "react-chartkick";
import Chart from "chart.js";


//2
ReactChartkick.addAdapter(Chart);
export default class RateExchangeItem extends Component {
    static propTypes = {
        rateExchange: PropTypes.object,
    }

    formatedData=(rates, currencyCode)=> {
      return  Object.keys(rates).map(date => {
            return [date, rates[date][currencyCode]]
        })
    }

    render() {

        const { name, flag, rates, currencyCode } = this.props.rateExchange
        console.log(name)
    
        return (
        <Fragment>
                <tr>
                    <td>{name}<br /><img src={flag} alt={name} height="60" width="100" /></td>
                    <td className="col-md-12">
                        <AreaChart 
                            data={this.formatedData(rates, currencyCode)} 
                            xtitle="Date" 
                            ytitle={currencyCode} /></td>
                </tr>    
        </Fragment>
        )
    }
}


/**
 * La méthode Object.keys() renvoie un tableau contenant 
 * les noms des propriétés propres à un objet (qui ne sont pas héritées 
 * via la chaîne de prototypes) et qui sont énumérables. 
 * L'ordre de ce tableau est le même que celui obtenu par une boucle for...in (à la différence qu'une boucle for-in liste également les propriétés héritées).
 */