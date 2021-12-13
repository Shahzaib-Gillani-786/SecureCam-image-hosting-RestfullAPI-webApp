// its a user update profile page in which i take the data of that user

// which login in our system and then display its all information and update its information 🇮🇳

// local storage.

// 1. display the user data

// 2. modal open and then change the information

// 3. store the data in local storage

<template>
<v-app>
  <v-container >
    <v-row class="text-center">
      <v-col>

        <!-- Profile img-->
        <v-card height="45%"
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      :src="User_img"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-card
            class="profile "
            color="grey"
            size="164"
            tile
            height="100%"
            
          >
            <v-img  :src="User_img "  style="background-size:containr"></v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="text-h4 black--text ">
                {{ firstName }}  {{ lastName }}
              </v-list-item-title>
              <v-list-item-subtitle  class="text-h6 black--text">Frontend Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
        <!-- Profile -->

        <v-container style="width: 72%">
          <v-row class="mt-1">
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
              <u> <strong> First Name: </strong> </u>
            </v-col>
            <v-col
              cols="6"
              sm="6"
              xsm="6"
              lg="6"
              md="6"
              class=""
              v-model="firstName"
            >
              {{ firstName }}
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-1">
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
              <u> <strong> Last Name: </strong> </u>
            </v-col>
            <v-col
              cols="6"
              sm="6"
              xsm="6"
              lg="6"
              md="6"
              class=""
              v-model="lastName"
            >
              {{ lastName }}
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-1">
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
              <u> <strong> User Name: </strong> </u>
            </v-col>
            <v-col
              cols="6"
              sm="6"
              xsm="6"
              lg="6"
              md="6"
              class=""
              v-model="userName"
            >
              {{ userName }}
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-1">
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
              <u> <strong> Email: </strong> </u>
            </v-col>
            <v-col
              cols="6"
              sm="6"
              xsm="6"
              lg="6"
              md="6"
              class=""
              v-model="email"
            >
              {{ email }}
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-1">
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
              <u> <strong> Password: </strong> </u>
            </v-col>
            <v-col
              cols="6"
              sm="6"
              xsm="6"
              lg="6"
              md="6"
              class=""
              v-model="password"
            >
              {{ password }}
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-1">
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
              <u> <strong> Phone Number: </strong> </u>
            </v-col>
            <v-col
              cols="6"
              sm="6"
              xsm="6"
              lg="6"
              md="6"
              class=""
              v-model="number"
            >
              {{ number }}
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    

    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue-grey darken-4" dark v-bind="attrs" v-on="on">
              Update Profile
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="first name"
                      hint="Name must be less than 15 characters"
                      v-model="firstName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Last name"
                      hint="Name must be less than 15 characters"
                      v-model="lastName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Username"
                      v-model="userName"
                      hint=""
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email"
                      hint="Email must be valid"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                      hint="Password must be minimum eight characters, atleast one letter and one number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Number"
                      v-model="number"
                      hint="Phone Number must be in Pakistan format"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" class="my-5" text @click="replace">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>

    <br>
    
  </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      currenntUser: [],
      dialog: false,
       User_img:"",
    };
  },

  created() {
    this.currenntUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstName = this.currenntUser.firstNameValue;
    this.lastName = this.currenntUser.lastNameValue;
    this.userName = this.currenntUser.userNameValue;
    this.email = this.currenntUser.emailValue;
    this.password = this.currenntUser.passwordValue;
    this.number = this.currenntUser.numberValue;
    this.User_img = this.currenntUser.User_img;
  },
  methods: {
    replace() {
      console.log(this.currenntUser.firstNameValue);
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          emailValue: this.email,
          firstNameValue: this.firstName,
          lastNameValue: this.lastName,
          userNameValue: this.userName,
          passwordValue: this.password,
          numberValue: this.number,
        })
      );
    },
  },
};
</script>
