import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Link from 'next/link';

const config: DocsThemeConfig = {
  logo: <h1>docs.codedevils.org</h1>,
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <title>CodeDevils' Documentation</title>
      <meta
        name='description'
        content='CodeDevils documentation website for all of our projects and resources.'
      />
      <meta
        name='keywords'
        content='CodeDevils, ASU, Arizona State University, CodeDevils documentation, CodeDevils projects'
      />
      <meta name='robots' content='index, follow' />

      <meta
        name='author'
        content="CodeDevils' Website Team, CodeDevils' Project leads and developers"
      />

      {/* opengraph */}
      <meta property='og:title' content="Codedevils' Documenation" />
      <meta
        property='og:description'
        content='CodeDevils documentation website for all of our projects and resources.'
      />
      <meta property='og:image' content='https://www.codedevils.org/og.png' />

      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='https://www.codedevils.org/favicon.webp'
      />
    </>
  ),
  project: {
    // CodeDevils github organization page
    link: 'https://github.com/ASU-CodeDevils',
  },
  chat: {
    // CodeDevils Discord server
    link: 'https://discord.gg/eevXKjVmm2',
  },
  docsRepositoryBase:
    'https://github.com/ASU-CodeDevils/docs.codedevils.org/tree/dev/',
  footer: {
    // component: <Footer />,
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <Link
          href='https://codedevils.org'
          target='_blank'
          className='hover:underline hover:text-maroon transition-colors duration-200 ease-in-out'
        >
          CodeDevils
        </Link>
        .
      </span>
    ),
  },

  /*
  Sorry for the late ping @Officer. I just got done with the sponsorship packet. These will go out tomorrow around noon. If you happen to have time to look it over in the morning, I would appreciate some feedback. Thanks and sweet dreams! 😊


  This is my diary, so that I can shit talk and the such.

  */
};

export default config;
