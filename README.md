# Table Elements

The easiest way to work with tables, and, in particular, data tables. Without much effort, configure a search engine in your frontend as the data source for your tables. These components will allow you to kick-start the development of a feature-rich & configurable table UI, including a beautiful, blazing-fast (!) UX.

## 🐙 Features

This Vue component library comes with the following features, improvements to the `table` element:

- `<table-v2 />`
  - quickly spin up a highly-configurable table UI without worrying about the backend
  - "facet-filtering" & "table head sorting" natively built-in
  - Meilisearch & Laravel Scout API compatible
  - Enterprise-ready
  - _Soon: Algolia & Typesense integration_

Get granular control over the table appearance & behavior, with the following (optional) components:

- `<table-search />`
  - configure your search input for blazing fast search results

- `<table-filters />`
  - overwrite the default display of your table's filters

- `<table-pagination />`
  - easily configure the pagination of your table

- `<table-configure />`
  - simple way to configure the table in HTML semantic fashion

Read more about these features in their respective [docs](https://ow3.org/docs).

## 💡 Get Started

To get started, you simply need to install the `@openweb/table-vue` npm package.

```bash
npm install @openweb/table-vue
```

Next up, we need to make use of the components.

```vue
<script setup>
import { TableV2 } from 'table-vue'
</script>

<template>
  <!-- the `type`-property indicates to to the search engine the "index" you want to target -->
  <TableV2 type="movies" />

  <!-- these are the default properties (all of them are optional)  -->
  <TableV2
    src="127.0.0.1:7700"
    cols="*"
    :searchable="true"
    :filterable="true"
    :sortable="true"
    :actionable="true"
    :per-page="20"
  />
</template>
```

To learn more about what's possible, check out our documentation. Alternatively, the `index.html` & `App.vue` will help you get an understanding as well on how to get started with a "modern table."

## 🧪 Testing

```bash
yarn test
```

## 📈 Changelog

Please see our [releases](https://github.com/openweblabs/table-vue/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Table Elements on GitHub](https://github.com/openweblabs/table-vue/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️ by Open Web Labs.
