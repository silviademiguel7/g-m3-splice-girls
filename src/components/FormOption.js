import React from 'react';
import PropTypes from 'prop-types';
import FormOptDesign from './FormOptDesign';
import FormOptFill from './FormOptFill';
import FormOptShare from './FormOptShare';

class FormOption extends React.Component {
    constructor(props){
        super(props);
        this.notSend = this.notSend.bind(this);
    }
    notSend(event) {
        event.preventDefault();
    }
    render() {
        const titulo = 'Diseña';
        return (
            <div className="options__box">
                <form className="create__card" action="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/" onSubmit={this.notSend} method="POST">
                    <FormOptDesign
                        title={titulo}
                        handleChangeState={this.props.handleChangeState}
                        cardPalette={this.props.cardPalette}
                        changeCollap={this.props.changeCollap}
                        visible={this.props.visible} />
                    <FormOptFill handleChangeState={this.props.handleChangeState}
                        changeCollap={this.props.changeCollap}
                        visible={this.props.visible}
                        cardName={this.props.cardName}
                        cardJob={this.props.cardJob}
                        cardEmail={this.props.cardEmail}
                        cardTelephone={this.props.cardTelephone}
                        cardLinkedin={this.props.cardLinkedin}
                        cardGithub={this.props.cardGithub}
                        updateAvatar={this.props.updateAvatar}
                        avatar={this.props.avatar}
                        isAvatarDefault={this.props.isAvatarDefault} />
                    <FormOptShare
                        handleChangeState={this.props.handleChangeState}
                        changeCollap={this.props.changeCollap}
                        visible={this.props.visible}
                        handleSendData={this.props.handleSendData} />

                </form>

            </div>

        );
    }
}

FormOption.propTypes = {
    avatar: PropTypes.string,
    isAvatarDefault: PropTypes.bool,
    updateAvatar: PropTypes.func,
    visible: PropTypes.object,
    changeCollap: PropTypes.func,
    handleChangeState: PropTypes.func,
    cardPalette: PropTypes.number,
    cardName: PropTypes.string,
    cardJob: PropTypes.string,
    cardEmail: PropTypes.string,
    cardTelephone: PropTypes.string,
    cardLinkedin: PropTypes.string,
    cardGithub: PropTypes.string,
    handleSendData: PropTypes.func.isRequired
}

export default FormOption;