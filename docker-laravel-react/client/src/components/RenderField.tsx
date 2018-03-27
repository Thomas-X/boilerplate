import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/constants';
import { ButtonGlobal } from './Button';
import { Col, Row } from 'react-bootstrap';
import { InputLabel, FormHelperText, FormControl } from 'material-ui';
import Input from 'material-ui/Input';

const Error = styled.span`
    color: ${COLORS.red};
`;

const StyledLabel = styled.label`
    padding: 1rem 2rem 1rem 2rem;
    margin: 0.5rem;
    border: 1px solid ${COLORS.darkRed};
    cursor:pointer;
`;

interface State {
    numbers: Array<any>;
    creditCardValue: number | string;
    name: string;
}

interface Props {
    type?: string;
    updateNumbers?: any;
}

// @ts-ignore
export class RenderField extends React.Component<Props, State> {

    public state: State = {
        numbers: [],
        creditCardValue: '',
        name: '',
    };

    private addNumber = () => {
        const numbers: any = this.state.numbers.slice();
        numbers.push(this.state.creditCardValue);
        this.setState({
            numbers,
            creditCardValue: '',
        });
        this.props.updateNumbers(numbers);
    }

    private removeNumber = (whatNumberToRemove: number) => {
        const idx = this.state.numbers.findIndex((val) => val === whatNumberToRemove);
        const numbers: any = this.state.numbers.slice();
        numbers.splice(idx, 1);
        this.setState({
            numbers,
        });
        this.props.updateNumbers(numbers);
    }

    public render() {
        const {type, input, label, meta: {touched, error, warning}}: any = this.props;

        if (type === 'textarea') {
            return (
                <div>
                    <label>{label}</label>
                    <div className="form-group">
                        <textarea {...input} placeholder={label} type={type} className="form-control"/>
                        {touched &&
                        ((error && <Error>{error}</Error>) ||
                            (warning && <span>{warning}</span>))}
                    </div>
                </div>
            );
        }
        if (type !== 'textarea') {
            return (
                <FormControl error={error && touched} aria-describedby="name-error-text">
                    <InputLabel htmlFor={`input-label-${label}`}>{label}</InputLabel>
                    <Input id={`input-label-${label}`} value={this.state.name} {...input} type={type}/>
                    {(touched && error) && <FormHelperText>{error}</FormHelperText>}
                </FormControl>
            );
        }
        return null;
    }
}