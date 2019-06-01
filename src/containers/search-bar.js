import React, { Component } from 'react'
import { connect } from 'react-redux';
import { _fetchCountries, _fetchRateExchange } from "../actions/index";
const _= require('lodash');


class SearchBar extends Component {

componentWillMount(){
    this.props._fetchCountries();
}



renderSelectCountries(){

    return(
        <select 
        className="form-control search_bar" 
            onChange={e => this.onChangeCountry(e)} >

            {this.props.countries.map(country =>(
                <option key={country.code} value={country.code } >
                    {country.name}
                </option>
             ))}
        
         </select>
    )
}


    onChangeCountry = (e) => {
        const country_code = e.target.value;
        const country = _.find(this.props.countries, { code: country_code })  //meth .lodash

        this.props._fetchRateExchange(country)

    }



render () {
   // console.log(this.props.countries)
    return (
         <form className="form-group">
             {this.renderSelectCountries() }
        </form>
        )
    }
}




const  mapStateToProps = state => ({
    countries: state.countries.countries
})

export default connect(mapStateToProps, { _fetchCountries , _fetchRateExchange})(SearchBar);