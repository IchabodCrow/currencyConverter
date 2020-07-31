import { connect } from 'react-redux'

import Converter from '../components/converter/Converter'
import { getCurrencyList } from '../actions/actions'

const mapStateToProps = ({ currencies }) => ({ currencies });

const mapDispatchToProps = dispatch => {
    return {
        getCurrencyList: data => dispatch(getCurrencyList(data))
    }
}

const ConverterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Converter)

export default ConverterContainer