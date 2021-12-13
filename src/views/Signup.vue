  <template>
  <div>
    <v-app>
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="7" md="7">
              <v-card class="elevation-12" color="rgb(48, 48, 48, 0.7)">
                <v-window v-model="step">
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="black darken-3">
                        <v-row class="fill-height">
                          <v-col cols="12" class="hidden pb-0">
                            <v-row
                              justify="center"
                              align="center"
                              class="fill-height"
                            >
                              <v-list-item-avatar size="120">
                                <img
                                  contain
                                  src="https://www.graphicsprings.com/filestorage/stencils/cb06edab257dd82e0f7e961d214d6300.png?width=500&height=500"
                                  alt="Image"
                                />
                              </v-list-item-avatar>
                              <v-col
                                cols="12"
                                class="text-center white--text mt-md-n15"
                              >
                                <h2>{{ formdata.name }}</h2></v-col
                              >
                            </v-row>
                          </v-col>
                          <v-col cols="12" class="">
                            <v-card-text class="white--text">
                              <h5 class="text-center">
                                All ready have an account ? sign in Here
                              </h5>
                            </v-card-text>
                            <div class="text-center">
                              <v-btn outlined dark @click="login"
                                >Sign in</v-btn
                              >
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col cols="12" md="8">
                        <v-card-text class="mt-6">
                          <h1 class="text-center display-1 white--text">
                            Sign Up
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
                          <h4 class="text-center mt-4 white--text">
                            Ensure your email for registration
                          </h4>
                          <v-form ref="form" v-model="valid" lazy-validation>

                            <v-text-field
                           
                              v-model="formdata.name"
                              :rules="userNameRuleExp"
                              required
                              label=" User Name"
                              name="userName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="white darken-4 "
                            >
                             
                            </v-text-field>

                            <v-text-field
                              v-model="formdata.email"
                              :rules="emailRuleExp"
                              required
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="white darken-4"
                            />

                            <v-text-field
                              v-model="formdata.password"
                              :rules="passwordRuleExp"
                              required
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                              id="password"
                              label="Password"
                              name="password"
                              prepend-icon="mdi-lock"
                              color="white darken-4"
                            />
                            <v-text-field
                              v-model="formdata.password_confirmation"
                              :rules="passwordRuleExp"
                              required
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                              id="password"
                              label="Password"
                              name="password"
                              prepend-icon="mdi-lock"
                              color="white darken-4"
                            />
                            <v-text-field
                              v-model="formdata.age"
                              :rules="ageRuleExp"
                              required
                              id="age"
                              label="How you are old?"
                              name="password"
                              prepend-icon="mdi-pencil"
                              type="text"
                              color="white darken-4"
                            />
                            <v-file-input
                              prepend-icon="mdi-camera"
                              :v-model="formdata.profile_picture"
                              @change="captureImage"
                              color="white darken-4 "
                            >
                            </v-file-input>

                            <!-- <v-checkbox
                              v-model="formdata.checkbox"
                              :rules="[
                                (v) => !!v || 'You must agree to continue!',
                              ]"
                              label="Terms and conditions"
                              required
                            ></v-checkbox> -->
                          </v-form>
                        </v-card-text>
                        <div class="text-center mb-5">
                          <v-btn
                            color="black darken-4 white--text"
                            @click.prevent="Submit"
                            >SIGN UP</v-btn
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
    </v-app>
  </div>
</template>

<script>
import {
  emailExpression,
  nameExpression,
  ageExpression,
  passwordExpression,
} from "@/constants/constant.js";
// import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      ///////////////////////////////////*     Data properties for Regex */
      emailRuleExp: emailExpression,
      userNameRuleExp: nameExpression,
      ageRuleExp: ageExpression,
      passwordRuleExp: passwordExpression,

      ////////////////////////////////////*  Data properties for storing data */
      show1: false,
      checkbox: false,
      newUser: [],
      formdata: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        age: "",
        profile_picture: "",
      },
    };
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem("users") || "[]");
  },
  methods: {
    login() {
      this.$router.push({ name: "Login" });
    },
    ///////////// send data to api///////////
    // async handleSubmit() {
    //   await axios.post("http://localhost:3000/posts", {

    //     userName: this.userName,
    //     password: this.password,
    //     age: this.age,
    //     email: this.email,
    //     user_img: this.user_img,
    //   });
    // },

    Submit() {
      if (this.$refs.form.validate()) {
        // let user = {
        //   userNameValue: this.userName,
        //   emailValue: this.email,
        //   passwordValue: this.password,
        //   ageValue: this.age,
        // };

        // //////////////////////////////////////* duplication checkup by email */
        // if (
        //   this.newUser.some((e) => {
        //     return e.emailValue == this.email;
        //   })
        // ) {
        //   console.log("duplicate data");
        // }
        // //////////////////////////////////* push in local storage   */
        // else {
        //   this.newUser.push(user);
        //   localStorage.setItem("users", JSON.stringify(this.newUser));
        //   console.log("Your account has been successfully created");
        //   // this.$alert("Your account has been successfully created");
        //   this.$router.push({ name: "Login" });
        // }
        this.$store.dispatch("signup", this.formdata);
        //  localStorage.setItem("currentUser", JSON.stringify(this.formdata));
        this.$router.push({ name: "Login" });
        console.log(this.formdata);
      }
      /////////////////////* to enter the new inputs */
      else {
        //this.$alert("Please fill input feilds");
        alert("Your account is not created");
      }
    },

    // convert image into base64
    captureImage(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.formdata.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
  },
};
</script>
<style scoped>
#app {
  background: url("https://images.pexels.com/photos/4199484/pexels-photo-4199484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center center fixed;
  background-size: cover;
}


@media (max-width: 769.98px) {
  .hidden {
    display: none;
  }
}
@media (min-width: 960.98px) {
  .hidden {
    margin-top: 100px;
  }
}
</style>