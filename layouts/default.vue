<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Black / White',
          to: '/blackWhite',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Rotate',
          to: '/rotate',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Edge Detection',
          to: '/detectEdge',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Volume',
          to: '/volume',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Delete Background',
          to: '/background',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Blur',
          to: '/blur',
        },
        {
          icon: 'mdi-information',
          title: 'About Project',
          to: '/about',
        },
      ],
      miniVariant: false,
      right: true,
      title: 'Image Processing Project',
    }
  },
}
</script>
