import React from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { ButtonGlobal } from '../components/Button';
import { RenderField } from '../components/RenderField';
import validations, { FORM_VALIDATIONS, FORM_NAMES } from '../services/validations';
import { ReduxFormProps } from './typings/typings';
import { FlexContainer, StyledForm, TopButton } from './LoginForm';

const RegisterForm = (props: ReduxFormProps) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field
                name={FORM_NAMES.username}
                type="text"
                component={RenderField}
                label="Username"
                willUnmount={() => null}
            />
            <Field
                name={FORM_NAMES.passwordOne}
                type="password"
                component={RenderField}
                label="Password"
                willUnmount={() => null}
            />
            <Field
                name={FORM_NAMES.passwordTwo}
                type="password"
                component={RenderField}
                label="Confirm password"
                willUnmount={() => null}
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
        form: 'register',
        validate: validations([FORM_VALIDATIONS[FORM_NAMES.username], FORM_VALIDATIONS[FORM_NAMES.passwordOne], FORM_VALIDATIONS[FORM_NAMES.passwordTwo]]),
    }),
)(RegisterForm);