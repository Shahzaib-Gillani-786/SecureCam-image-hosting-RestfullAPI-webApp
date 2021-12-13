<template >
  <div id="inspire">
    <!-- Drawer starts from here -->

    <!-- Drawer end here -->

    <!--Nav starts from here -->
    <v-app-bar app color="blue-grey darken-4 white--text" class="white--text">
      <v-list-item-avatar size="100" mt-10>
        <img
          contain
          src="https://www.graphicsprings.com/filestorage/stencils/cb06edab257dd82e0f7e961d214d6300.png?width=500&height=500"
          alt="Image"
        />
      </v-list-item-avatar>

      <v-toolbar-title
        ><span class="font-weight-black" style="color: orange">$</span
        >ecure<span style="color: orange"> Cam</span> :)</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <!-- 3rd -->
      <router-link>
        <v-btn class="ma-2" color="Black" dark>
          <v-icon dark left>mdi-checkbox-marked-circle </v-icon>
          product
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn
        reletive
        color="blue-grey darken-4"
        class="white--text mx-5"
        large
        right
        @click="imageGallery"
      >
        <v-icon left>mdi-widgets</v-icon> Gallery
      </v-btn>

      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            reletive
            class="white--text"
            fab
            small
            right
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar> <img :src="user.profile_picture" /></v-avatar>
          </v-btn>
        </template>

        <v-list width="100%">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img :src="user.profile_picture" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{user.name}}</v-list-item-title
              >
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link @click="profile">
            <v-icon left>mdi-account</v-icon>
            <v-list-item-title> User Profile </v-list-item-title>
          </v-list-item>

          <v-list-item link @click="logout">
            <v-icon left>mdi-logout</v-icon>

            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data: () => ({
    drawer: null,
    User_img: "",
    firstName: "",
    lastName: "",
    userProfile: [],

    user: {
      name: "",
      age: "",
      email: "",
      profile_picture: "",
    },
  }),
  mounted() {
    this.$store.dispatch("getProfile");
    this.userProfile = JSON.parse(localStorage.getItem("Profile"));
    this.user.name = this.userProfile.name;
    this.user.email = this.userProfile.email;
    this.user.age = this.userProfile.age;
    this.user.profile_picture = this.userProfile.profile_picture;
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    /// logout/////
    logout() {
      this.$store.dispatch("logOut");
      localStorage.removeItem("Token");
      alert("running");
    },

    /// logout/////

    /////////* Router links of specific pages */

    profile() {
      this.$router.push({ name: "myprofile" });
    },
    imageGallery() {
      this.$router.push({ name: "imageGallery" });
    },
  },
};
</script>





















































