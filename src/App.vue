<template>
  <div id="app">
    <b-navbar shadow>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/">Lista </b-navbar-item>
        <b-navbar-item href="/novo">Novo imóvel</b-navbar-item>
      </template>
    </b-navbar>

    <router-view />
  </div>
</template>

<style>
</style>
