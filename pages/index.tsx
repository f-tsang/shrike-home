import {NextPageContext} from 'next'
import Head from 'next/head'
import React from 'react'

import Nav from '../components/nav'

export const config = {amp: true}

export interface HomeProps {
  userAgent: string
}

/**
 * NOTE: Unable to use 'amp-keyframes' due to namespacing.
 *       Animation keyframes will count towards the 'amp-custom' limit.
 */
export class Home extends React.Component<HomeProps, {}> {
  static async getInitialProps({req}: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {userAgent}
  }

  render() {
    return (
      <>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Nav />

        <main>
          <div id="projects" className={'box shadow fadeInUp'}>
            <div> It works! {this.props.userAgent} </div>
          </div>
        </main>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 50%, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          :global(html, body) {
            padding: 0;
            margin: 0;
          }
          :global(body) {
            font: normal normal 400 100%/1.5 'Ubuntu', sans-serif;
          }
          main {
            padding: 0 16px;
            display: grid;
            grid-auto-flow: row;
            justify-content: center;
          }
          .shadow {
            box-shadow: 0 0.4rem 1.1rem rgba(50, 58, 67, 0.12);
          }
          .box {
            border: 1px solid rgba(0, 0, 0, 0.12);
            border-radius: 16px;
          }
          .fadeInUp {
            animation-name: fadeInUp;
            animation-duration: 1s;
          }
          /* TBD */
          #projects {
            padding: 16px;
            display: grid;
            grid-auto-flow: row;
          }
        `}</style>
      </>
    )
  }
}

export default Home
