<template>
  <div id="app">
    <navbar />
    <main>
      <router-view />
    </main>
    <foot />
  </div>
</template>

<script>
import navbar from './components/navbar';
import foot from './components/foot';
export default {
  name: 'app',
  components: {navbar, foot},
}
</script>

<style>

</style>
