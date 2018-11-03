<br>

<p align='center'>
  <a href='https://www.gatsbyjs.org'>
    <img alt='Gatsby' src='https://www.gatsbyjs.org/monogram.svg' width='60' />
  </a>
</p>

<br>

<h1 align="center">
  Gatsby simplified starter
</h1>

<p align='center'>
This is a simplified version of the default Gatsby boilerplate.<br>
See <a href='https://github.com/gatsbyjs/gatsby-starter-default'>gatsbyjs/gatsby-starter-default</a>.
</p>

## Quick start

 Use the Gatsby CLI to create a new site, specifying this starter. After this, See [CONTRIBUTING.md](CONTRIBUTING.md) on info on how to start a server.

 ```sh
 npx gatsby new my-project-name https://github.com/rstacruz/gatsby-starter-simplified
 ```

## About this boilerplate

This is the same as the default starter pack, except with these omissions:

- All default CSS has been removed.
- Extraneous config files have been removed.
- Service workers support (`gatsby-plugin-offline`) has been removed.
- Responsive image support (`gatsby-image`) has been removed.
- Image optimization (`gatsby-plugin-sharp`) has been removed.

These things have been added:

- Normalize/reset CSS ([sanitize.css](https://yarn.pm/sanitize.css)) has been added.
- Docker support for development (see [developer notes](CONTRIBUTING.md)) has been added.

Some of these omissions (and other features) can be added back as you need them:

- [Blogging support](https://github.com/rstacruz/gatsby-starter-simplified/pull/3)
- [Responsive images](https://github.com/rstacruz/gatsby-starter-simplified/pull/4)

See [CONTRIBUTING.md](CONTRIBUTING.md) for developer notes.
