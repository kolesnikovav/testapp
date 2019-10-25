<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify-Toolkit</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <span class="mr-2">VTreeSelect example</span>
      <v-tree-select :items="treeItems" chips clearable multiple></v-tree-select>
      <span class="mr-2">VCascader example</span>
      <v-cascader :items="cascaderItems" itemText="name" clearable></v-cascader>
      <span class="mr-2">VDataGridSelect example</span>
      <v-data-grid-select
        :items="dgItems"
        :headers="dgHeaders"
        item-key="name"
        item-text="name"
        clearable
        dense
        chips
        chips-dense
        multiple
      ></v-data-grid-select>
    </v-content>
  </v-app>
</template>

<script>
import { staticitems, dataGridHeaders, desserts, ofices } from './example-data'

export default {
  name: 'App',
  data: () => ({
    treeItems: staticitems,
    cascaderItems: ofices,
    name: 'name',
    dgItems: desserts,
    dgHeaders: dataGridHeaders
    //
  })
}
</script>
