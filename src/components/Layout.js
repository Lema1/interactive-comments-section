import Head from "next/head";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <title>Frontend Mentor | Interactive comments section</title>
      </Head>
      <div className="main-content">
        <main className="main">{children}</main>
        {/* <footer className="footer">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </footer> */}
      </div>
    </Fragment>
  );
};

export default Layout;
