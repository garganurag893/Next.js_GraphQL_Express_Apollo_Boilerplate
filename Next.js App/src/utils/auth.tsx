import * as React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { setTokenInRequest } from '../configureClient';

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/');
  }

  return token;
};

export const withAuthSync = WrappedComponent =>
  class extends React.Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);
      await setTokenInRequest(token);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
