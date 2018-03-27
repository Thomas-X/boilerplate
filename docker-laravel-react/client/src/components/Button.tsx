import React from 'react';
import Button from 'material-ui/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    width: 100%;
`;

export const ButtonGlobal: React.SFC<any> = (props: any ) => {
    return (
        <StyledButton variant="raised" color="primary" {...props}>
            {props.children}
        </StyledButton>
    );
};