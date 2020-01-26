/**
 * Auth Middlerware Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import * as React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { setTokenInRequest } from '../configureClient';

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export const auth = ctx => {
  const { token, userId } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/');
  }

  return { token, userId };
};

export const withAuthSync = WrappedComponent =>
  class extends React.Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const { token, userId } = auth(ctx);
      await setTokenInRequest(token);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token, userId };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
