import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ROUTES } from '../App';
import { COLORS } from '../constants/constants';
import RegisterForm from '../forms/RegisterForm';
import onLoginHOC from '../hoc/onLoginHOC';
import { clearError, onRegister } from '../redux/user';
import { getErrorMessage } from '../services/hasDeepProperty';
import { Container } from './Login';
import styled from 'styled-components';
import { Well } from 'react-bootstrap';
import Typography from 'material-ui/Typography';

export const ErrorMessage = styled(Well)`
    background-color: rgba(220, 53, 69, 0.2);
    background-image:none;
    color: ${COLORS.darkRed};
`;

interface Props {
    clearError: () => void;
    onRegister: (values: any) => void;
    history: any;
}

class Register extends Component<Props, {}> {

    public componentWillUnmount() {
        const message = getErrorMessage('user', this.props);
        if (message.length > 0) {
            this.props.clearError();
        }
    }

    private submit = (values: any) => {
        this.props.onRegister(values);
    }

    public render() {
        const message = getErrorMessage('user', this.props);
        return (
            <Container>
                <Typography variant="display1" color="primary">
                    Login
                </Typography>
                {message && <ErrorMessage>{message}</ErrorMessage>}
                <RegisterForm onSubmit={this.submit}/>
            </Container>
        );
    }
}

export default compose(
    onLoginHOC((ownProps: Props) => {
        ownProps.history.push(ROUTES.home.path);
    }),
    connect(() => ({}), (dispatch: any) => ({
        onRegister: (values: any): any => dispatch(onRegister(values)),
        clearError: (): any => dispatch(clearError()),
    }))
)(Register);