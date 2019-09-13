import React from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import FormMain from './FormMain';
import FormFooter from './FormFooter';


class FormCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FormHeader />

                <FormMain 
                    selectedCollap={this.props.selectedCollap}
                    visible={this.props.visible}
                    changeCollap={this.props.changeCollap}
                    cardPalette={this.props.cardPalette}
                    cardName={this.props.cardName}
                    cardJob={this.props.cardJob}
                    cardEmail={this.props.cardEmail}
                    cardTelephone={this.props.cardTelephone}
                    cardLinkedin={this.props.cardLinkedin}
                    cardGithub={this.props.cardGithub}
                    handleChangeState={this.props.handleChangeState} />

                <FormFooter />

            </React.Fragment>
        );
    }
}

FormCards.propTypes = {
    selectedCollap: PropTypes.string,
    visible: PropTypes.bool,
    changeCollap: PropTypes.func,
    cardPalette: PropTypes.string,
    cardName: PropTypes.string,
    cardJob: PropTypes.string,
    cardEmail: PropTypes.string,
    cardTelephone: PropTypes.string,
    cardLinkedin: PropTypes.string,
    cardGithub: PropTypes.string,
    handleChangeState: PropTypes.func,
}
export default FormCards;