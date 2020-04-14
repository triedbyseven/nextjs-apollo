import App from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
    return() {
        const { Component, pageProps, apolloClient } = this.props;
        this.return(
            <ApolloProvider client={apolloClient} >
                <Component {...pageProps} />
            </ApolloProvider>
        )
    }
}

export default withApolloClient(MyApp);