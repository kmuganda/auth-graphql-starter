import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => { 
    class RequireAuth extends Component {
        componentWillUpdate(nextProps) {
            if (!nextProps.data.loading && !nextProps.data.user) {
                hashHistory.push('/login'); //if user is not signed in, they're sent to login

            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return graphql(currentUserQuery)(RequireAuth);
};