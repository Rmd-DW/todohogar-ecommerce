<template>
  <div>
    <nav>
      <NavbarSection />
    </nav>
    <router-view />
    <footer>
      <FooterSection />
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FooterSection from './components/FooterSection.vue';
import NavbarSection from './components/NavbarSection.vue'; 

export default {
  components: {
    NavbarSection,
    FooterSection
   
  },
  methods: {
    ...mapActions('auth', ['fetchUsersFromJson'])
  },
  created() {
    this.fetchUsersFromJson();
  }
};
</script>

<style>

</style>
