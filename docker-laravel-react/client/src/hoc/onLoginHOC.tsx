import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deepDiff } from '../services/Helpers';
import { ReduxState } from '../redux';

interface Props {
    user: any;
}

export default (func: (props: any) => void) => (WrappedComponent: any) => {
    class OnLoginHOC extends React.Component<Props, {}> {

        public componentDidUpdate(prevProps: Props) {
            if (deepDiff(this.props.user, prevProps.user)) {
                if (this.props.user.isLoggedIn === true) {
                    func(this.props);
                }
            }
        }

        public render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    return compose(
        connect((state: ReduxState) => ({
            user: state.user,
        })),
    )(OnLoginHOC);
};