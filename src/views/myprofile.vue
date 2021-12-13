  <template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="2">
                  <v-row class="fill-height" justify="center" align="center">
                    <v-col cols="12" md="8" class="blue-grey darken-4">
                      <v-row class="fill-height">
                        <v-col cols="12" class="hidden pb-0">
                          <v-row
                            justify="center"
                            align="center"
                            class="fill-height"
                          >
                            <v-list-item-avatar size="100">
                              <img contain :src="user.profile_picture" alt="John" />
                            </v-list-item-avatar>
                            <v-col
                              cols="12"
                              class="text-center white--text mt-md-n5"
                            >
                              <h2>{{ user.userName }}</h2></v-col
                            >
                          </v-row>
                        </v-col>
                        <v-col cols="12" class="">
                          <v-card-text class="white--text">
                            <h5 class="text-center">
                              All ready have an account ? sign in Here
                            </h5>
                          </v-card-text>

                          <!--- forgot modal starts here--->

                          <v-row justify="space-around">
                            <v-col cols="auto">
                              <v-dialog
                                transition="dialog-top-transition"
                                max-width="600"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <div class="text-center">
                                    <v-btn
                                      outlined
                                      dark
                                      v-bind="attrs"
                                      v-on="on"
                                      @click="dialog"
                                      >Update profile</v-btn
                                    >
                                  </div>
                                </template>

                                <template v-slot:default="dialog">
                                  <v-card>
                                    <v-toolbar color="blue-grey darken-4" dark
                                      >No worries ! Enter your email and we will
                                      send you a reset
                                    </v-toolbar>
                                    <!-- modal body -->
                                    <v-container class="mt-5" fluid>
                                      <v-row justify="center" align="center">
                                        <v-col cols="12">
                                          <v-card-text class="mt-6">
                                            <h2
                                              class="
                                                text-center
                                                blue-grey--text
                                              "
                                            >
                                              FORGOT
                                              <span class="black--text">?</span>
                                            </h2>

                                            <h4 class="text-center mt-4">
                                              Ensure your email !
                                            </h4>
                                            <v-form relative>
                                              <v-text-field
                                                v-model="user.name"
                                                :rules="userNameRuleExp"
                                                required
                                                label=" User Name"
                                                name="userName"
                                                prepend-icon="mdi-account"
                                                type="text"
                                                color="light-blue darken-4"
                                              />

                                              <v-text-field
                                                v-model="user.email"
                                                :rules="emailRuleExp"
                                                required
                                                label="Email"
                                                name="Email"
                                                prepend-icon="mdi-email"
                                                type="text"
                                                color="light-blue darken-4"
                                              />

                                              <v-text-field
                                                v-model="user.age"
                                                :rules="ageRuleExp"
                                                required
                                                id="age"
                                                label="How you are old?"
                                                name="password"
                                                prepend-icon="mdi-pencil"
                                                type="text"
                                                color="light-blue darken-4"
                                              />
                                              <v-file-input
                                                v-model="user.profile_picture"
                                                required
                                                @change="captureImage"
                                                label="choose iamge"
                                                name="image"
                                                prepend-icon="mdi-camera"
                                                color="light-blue darken-4"
                                              />
                                             
                                            </v-form>
                                          </v-card-text>
                                          <div class="text-center my-2">
                                            <v-btn
                                              block
                                              color="blue-grey darken-4 white--text"
                                              @click="updateProfile"
                                              >Save</v-btn
                                            >
                                          </div>
                                        </v-col>
                                      </v-row>
                                    </v-container>
                                    <!--End  modal body -->

                                    <v-card-actions class="justify-end">
                                      <v-btn
                                        class="blue-grey darken-4 white--text"
                                        text
                                        @click="dialog.value = false"
                                        >Close</v-btn
                                      >
                                    </v-card-actions>
                                  </v-card>
                                </template>
                              </v-dialog>
                            </v-col>
                          </v-row>
                          <!---End forgot modal --->
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-6">
                        <h1 class="text-center display-1 blue-grey--text">
                          Your Profile Here
                        </h1>

                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-text-field
                            v-model="user.name"
                            :readonly="true"
                            :rules="userNameRuleExp"
                            required
                            label=" User Name"
                            name="userName"
                            prepend-icon="mdi-account"
                            type="text"
                            color="light-blue darken-4"
                          />

                          <v-text-field
                            v-model="user.email"
                            :readonly="true"
                            :rules="emailRuleExp"
                            required
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="light-blue darken-4"
                          />

                          <v-text-field
                            v-model="user.age"
                            :readonly="true"
                            :rules="ageRuleExp"
                            required
                            id="age"
                            label="How you are old?"
                            name="password"
                            prepend-icon="mdi-pencil"
                            type="text"
                            color="light-blue darken-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-5"></div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import {mapGetters} from "vuex"
export default {
  name: "Profile",

  data() {
    return {
      valid: true,
      dialog: false,
      userProfile: [],
      show1: false,

      user: {
        name: "",
        age: "",
        email: "",
        profile_picture: "",
      },
    };
  },
  ///// get profile /////////
  mounted() {
    this.$store.dispatch("getProfile");
    this.userProfile = JSON.parse(localStorage.getItem("Profile"));
    this.user.name = this.userProfile.name;
    this.user.email = this.userProfile.email;
    this.user.age = this.userProfile.age;
    this.user.profile_picture = this.userProfile.profile_picture;
  },

  methods: {
    updateProfile() {
      this.$store.dispatch("updatedUser", this.user);
    },
     // convert image into base64
    captureImage(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.user.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },

    // replace() {
    //   console.log(this.currenntUser.firstNameValue);
    //   localStorage.setItem(
    //     "currentUser",
    //     JSON.stringify({
    //       emailValue: this.email,
    //       firstNameValue: this.firstName,
    //       lastNameValue: this.lastName,
    //       userNameValue: this.userName,
    //       passwordValue: this.password,
    //       numberValue: this.number,
    //     })
    //   );
    // },
  },
  // computed:{

  //     uData () {
  //       this.currenntUser = this.$store.state.Users

  //     }

  // },

  //   mounted() {

  // this.$store.dispatch("getUsers");

  // },
};
</script>
