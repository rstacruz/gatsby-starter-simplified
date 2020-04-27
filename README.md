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
# Using the official Gatsby tool
npx gatsby new my-project-name https://github.com/rstacruz/gatsby-starter-simplified
```

```sh
# ...or using degit
npx degit rstacruz/gatsby-starter-simplified my-project-name
```

_([degit](https://yarn.pm/degit) automates starting projects using templates in GitHub.)_

## Simplified starter

These are the files you'll find here. They're a reduced subset of the original _gatsby-starter-default_ package.

- [`src/components/Layout.tsx`](/src/components/Layout.tsx) &mdash; Layout component
- [`src/pages/404.tsx`](/src/pages/404.tsx) &mdash; Not found page
- [`src/pages/index.tsx`](/src/pages/index.tsx) &mdash; Home page
- [`gatsby-config.js`](/gatsby-config.js) &mdash; Gatsby config
- [`package.json`](/package.json) &mdash; Package manifest

This is based off the default starter pack with a lot of simplifications:

- ❌ Removed: all default CSS
- ❌ Removed: Extraneous config files
- ❌ Removed: Service workers support (`gatsby-plugin-offline`)
- ❌ Removed: Responsive image support (`gatsby-image`)
- ❌ Removed: Image optimization (`gatsby-plugin-sharp`)
- ❌ Removed: Mobile manifest (`gatsby-plugin-manifest`)
- ➕ Added: Normalize/reset CSS ([`sanitize.css`](https://yarn.pm/sanitize.css))
- ➕ Added: TypeScript ([`gatsby-plugin-typescript`](https://yarn.pm/gatsby-plugin-typescript))
