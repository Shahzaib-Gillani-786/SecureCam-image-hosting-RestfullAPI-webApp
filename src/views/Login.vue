  <template>
  <div>
  <v-app >
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12" color="rgb(48, 48, 48, 0.7)">
              <v-window v-model="step">
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="black darken-4">
                      <v-row class="fill-height">
                        <v-col cols="12" class="hidden pb-0">
                          <v-row
                            justify="center"
                            align="center"
                            class="fill-height"
                             mt-10
                          >
                            <v-list-item-avatar size="100"  mt-10>
                              <img
                                contain
                                src="https://www.graphicsprings.com/filestorage/stencils/cb06edab257dd82e0f7e961d214d6300.png?width=500&height=500"
                                alt="Image"
                              />
                            </v-list-item-avatar>
                            <v-col
                              cols="12"
                              class="text-center white--text mt-md-n5"
                            >
                              <h2>{{ userName }}</h2></v-col
                            >
                          </v-row>
                        </v-col>
                        <v-col cols="12" class="">
                          <v-card-text class="white--text">
                            <h5 class="text-center">
                              create an account ? sign up Here
                            </h5>
                          </v-card-text>
                          <div class="text-center">
                            <v-btn outlined dark @click="Signup">Sign up</v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-6">
                        <h1 class="text-center display-2 white--text">
                          LOG<span class="black--text">IN</span>
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn
                            elevation="5"
                            plain
                            class="mx-2 black darken-4 white--text"
                            outlined
                          >
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn
                            elevation="8"
                            class="mx-2 black darken-4 white--text"
                            outlined
                          >
                            <v-icon fab>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn
                            elevation="5"
                            plain
                            class="mx-2 black darken-4 white--text"
                            outlined
                          >
                            <v-icon> mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for Login
                        </h4>
                        <v-form relative>
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="loginData.email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="white darken-4"
                          />
                          <v-text-field
                            id="password"
                            label="Password"
                            v-model="loginData.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            name="password"
                            prepend-icon="mdi-lock"
                            color="white darken-4"
                          />

                          <!--- forgot modal starts here--->

                          <v-row justify="space-around">
                            <v-col cols="auto">
                              <v-dialog
                                transition="dialog-top-transition"
                                max-width="600"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <h4
                                    class="forgot-btn"
                                    color="primary"
                                    outlined
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    Forgot password?
                                  </h4>
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
                                                label="Email"
                                                name="Email"
                                                v-model="user_emailemail"
                                                prepend-icon="mdi-email"
                                                type="text"
                                                color="light-blue darken-4"
                                              />
                                            </v-form>
                                          </v-card-text>
                                          <div class="text-center my-2">
                                            <v-btn
                                            @click="forgot"
                                              block
                                              color="blue-grey darken-4 white--text"
                                              >Send Request</v-btn
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
                        </v-form>
                      </v-card-text>
                      <div class="text-center my-2">
                        <v-btn
                          color="blue-grey darken-4 white--text"
                          @click="Login"
                          >LOGIN</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <!--- --->

    <!--- --->
  </v-app>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      show1: false,
      currentUser:[],

      loginData: {
        email: "",
        password: "",
      },
    user_email:{
      email:"",
    }
    };
  },
   created() {
    this.currenntUser = JSON.parse(localStorage.getItem("currentUser"));
    this.userName = this.currenntUser.name;
    this.User_img = this.currenntUser.profile_picture;
  },
  methods: {
    Signup() {
      this.$router.push({ name: "Signup" });
    },
    imageGallery() {
      this.$router.push({ name: "imageGallery" });
    },
    Login() {
      this.$store.dispatch("Login", this.loginData);
       this.$router.push({ name: "Home" });
      console.log(this.formdata);
    },
    forgot() {
      this.$store.dispatch("forgot", this.user_email);
  
    },
  },
};
</script>
<style scoped>
#app {
  background: url("https://images.pexels.com/photos/4199484/pexels-photo-4199484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center center fixed !important;
  background-size: contain;
}
@media (max-width: 769.98px) {
  .hidden {
    display: none;
  }
}
.forgot-btn {
  position: absolute;
  right: 12px;
}
</style>
