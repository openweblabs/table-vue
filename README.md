# Table Elements

The easiest way to integrate Meilisearch into your frontend as a data source for your tables. These components will allow you to kick-start the development of feature-rich & configurable table UIs, including a beautiful, blazing-fast (!) UX.

## 🐙 Features

This Vue component library comes with the following features, improvements to the `table` element:

- `<table-v2 />`
  - quickly spin up a highly-configurable table UI without worrying about the backend
  - "facet-filtering" & "table head sorting" natively built-in
  - Meilisearch & Laravel Scout API compatible
  - Enterprise-ready
  - _Soon: Algolia integration_

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
import { TableConfigure, TableV2 } from 'table-vue'
</script>

<template>
  <!-- the `type`-property indicates to Meilisearch the "index" you want to target   -->
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

  <!-- alternatively, you may configure your table by using these 2 components in combination -->
  <TableV2
    columns="id, title, poster, overview, release_date"
    sortable="release_date"
    actionable="Edit"
    per-page="20"
  />

  <TableConfigure
    source="search.ow3.org/api"
    type="movies"
    searchable="title, overview"
    filterable="genre, director"
  />
</template>
```

Check out the `index.html` & `App.vue` to get an idea how to implement a modern table.

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

[Join the Meema Discord Server](https://discord.meema.io)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️ by Open Web Labs.
