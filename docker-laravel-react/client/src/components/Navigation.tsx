import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action, compose, Dispatch } from 'redux';
import styledComponent, { css } from 'styled-components';
import { COLORS, NAVBAR_HEIGHT } from '../constants/constants';
import { onLogout } from '../redux/user';
import { ReduxState, ReduxStateUser } from '../redux';
import { AppBar, ListItem, Toolbar, Typography, } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import { ROUTES } from '../App';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';

const styled = styledComponent;

const Left = styled.div`
    flex: 1;
`;

const DrawerContainer = styled.div`
    width: 250px !important;
    background-color: white;
`;

const NoStylingLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

interface Props {
    user: ReduxStateUser;
    onLogout: () => void;
}

interface State {
    open: boolean;
}

class Navigation extends React.Component<Props, State> {

    toggle = () => {
        this.setState({open: !this.state.open});
    }

    public state: State = {
        open: false,
    };

    public render() {
        const {isLoggedIn} = this.props.user;
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Left>
                            <NoStylingLink
                                to={ROUTES.home.path}
                            >
                                <Typography variant="title" color="inherit">
                                    Vervang dit
                                </Typography>
                            </NoStylingLink>
                        </Left>
                        {/* Right nav.. */}

                        {!isLoggedIn && (
                            <NoStylingLink to={ROUTES.login.path}>
                                <Button color="inherit">Login</Button>
                            </NoStylingLink>
                        )}
                        {!isLoggedIn && (
                            <NoStylingLink to={ROUTES.register.path}>
                                <Button color="inherit">Register</Button>
                            </NoStylingLink>
                        )}
                        {isLoggedIn && (
                            <NoStylingLink to={''} onClick={this.props.onLogout}>
                                <Button color="inherit">Register</Button>
                            </NoStylingLink>
                        )}
                    </Toolbar>
                </AppBar>

                {/* Drawer logic */}

                <Drawer
                    anchor="left"
                    open={this.state.open}
                    onClose={() => {
                        this.setState({
                            open: false,
                        });
                    }}
                >
                    <DrawerContainer>
                    <List>
                        <ListItem>
                            <Typography variant="subheading" gutterBottom={true}>
                                Made with ❤️
                            </Typography>
                        </ListItem>
                    </List>
                    </DrawerContainer>
                </Drawer>
            </div>
        );
    }
}

export default compose(
    connect(
        (state: ReduxState) => ({
            user: state.user,
        }),
        (dispatch: Dispatch<{}>) => ({
            onLogout: (): Action => dispatch(onLogout()),
        })),
)(Navigation as React.ComponentClass<any>);