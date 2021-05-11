import { connect } from 'react-redux';


import MainPage from './main_page';

const mapStateToProps = (state) => ({
    state
});

export default connect(
    mapStateToProps,
   null
)(MainPage);