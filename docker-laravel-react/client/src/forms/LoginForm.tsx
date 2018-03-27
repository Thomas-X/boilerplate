import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { ButtonGlobal } from '../components/Button';
import { RenderField } from '../components/RenderField';
import validations, { FORM_NAMES, FORM_VALIDATIONS } from '../services/validations';
import { ReduxFormProps } from './typings/typings';
import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

// type Props = OwnProps & ReduxFormProps

export const TopButton: any = styled(ButtonGlobal)`
    margin: 1rem 0 !important;
`;

const LoginForm: React.SFC<ReduxFormProps> = (props: ReduxFormProps) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field
                name={FORM_NAMES.username}
                type="text"
                component={RenderField}
                label="Username"
            />
            <Field
                name={FORM_NAMES.passwordOne}
                type="password"
                component={RenderField}
                label="Password"
            />
            <FlexContainer>
                <TopButton type="submit" disabled={submitting}>
                    Submit
                </TopButton>
                <ButtonGlobal type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </ButtonGlobal>
            </FlexContainer>
        </StyledForm>
    );
};

export default compose(
    reduxForm({
        form: 'login',
        validate: validations([FORM_VALIDATIONS[FORM_NAMES.username], FORM_VALIDATIONS[FORM_NAMES.passwordOne]]),
    }),
)(LoginForm);