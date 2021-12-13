import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /// for signup response
    images:[],
    email: "",
    token: "",
    refresh: "",
    Users: [],
    /// for signup response
  },

  getters: {
    get_user_state(state) {
      return state.Users;
    },
  },

  mutations: {
    ///// post section//////////

    // response from signup
    auth(state, data) {
      state.token = data.token;

      // response from signup

      //////    End post sectop       /////////
    },

                           //////// get section ///////

     ALL_IMAGES(state, images) {
        state.images =images;
    },

                         //////////  End get section ///////
  },

  actions: {
    ///////////post section /////////////////

    //// post signup data ////
    signup({ commit }, payload) {
      console.log(commit);
      axios
        .post(
          "http://image-hosting-sharing-service.herokuapp.com/api/register",
          {
            ...payload,
            returnSecureToken: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token, Authorization",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Credentials": true,
              "Content-Type": "text/html; charset=utf-8",
            },
          }
        )
        .then((response) => {
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.data.user)
          );
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //// End post signup data ////

    //// post Login data ////
    Login({ commit }, payload) {
      console.log(commit);
      axios
        .post("http://image-hosting-sharing-service.herokuapp.com/api/login", {
          ...payload,
          returnSecureToken: true,

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token, Authorization",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": true,
            // 'Content-Type': 'text/html; charset=utf-8',
            "Content-Type": "Application/json; charset=utf-8",
          },
        })
        .then((response) => {
          localStorage.setItem(
            "Token",
            JSON.stringify(response.data.data.token)
          );

          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //// End post Login data ////

    //// post Logout data ////
    logOut({ commit }) {
      console.log(commit);

      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .post("http://image-hosting-sharing-service.herokuapp.com/api/logout")

        .catch((error) => {
          console.log(error.response);
        });
    },

    //// End post Logout data ////

    //// post images  ////
    postImages({ commit }, payload) {
      console.log(commit);
      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .post(
          "https://image-hosting-sharing-service.herokuapp.com/api/image/upload",{
          ...payload
          })
        .then((response) => {
          // localStorage.setItem("Profile", JSON.stringify(response.data.data));

          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },


    //// End post images ////

           //// get imagelist data ////
    getImageList({ commit }) {
      console.log(commit);

      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .get(
          "https://image-hosting-sharing-service.herokuapp.com/api/images/all"
        )
        .then((response) => {
          commit('ALL_IMAGES', response.data.data);
          localStorage.setItem("image_list", JSON.stringify(response.data.data));

          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },

    //// End imagelist data ////



    //// get profile data ////
    getProfile({ commit }) {
      console.log(commit);

      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .get(
          "http://image-hosting-sharing-service.herokuapp.com/api/users/myprofile"
        )
        .then((response) => {
          localStorage.setItem("Profile", JSON.stringify(response.data.data));

          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },

    //// End profile data ////

    //// get profile data ////
    updatedUser({ commit }, payload) {
      console.log(commit);

      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .post(
          "http://image-hosting-sharing-service.herokuapp.com/api/users/update",
          {
            ...payload,
          }
        )
        .then((response) => {
          // localStorage.setItem("Profile", JSON.stringify(response.data.data));

          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },

    //// End profile data ////

    //// get profile data ////
    forgot({ commit }, payload) {
      console.log(commit);

      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .post(
          "https://image-hosting-sharing-service.herokuapp.com/api/forgot-password",
          {
            ...payload,
          }
        )
        .then((response) => {
          // localStorage.setItem("Profile", JSON.stringify(response.data.data));

          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },

    //// End profile data ////

    //// get profile data ////
    uploadImages({ commit }, payload) {
      console.log(commit);

      var get_token = JSON.parse(localStorage.getItem("Token"));
      console.log(get_token);
      let customAxios = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + get_token,
        },
      });
      customAxios
        .post(
          " https://image-hosting-sharing-service.herokuapp.com/api/image/upload",
          {
            ...payload,
          }
        )
        .then((response) => {
          // localStorage.setItem("Profile", JSON.stringify(response.data.data));

          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },

    //// End profile data ////

    //////// post multiple images data
    images({ commit }, payload) {
      console.log(commit);
      axios.post("http://localhost:3000/images", {
        ...payload,
        returnSecureToken: true,
        //  this:$toastr.s('All images uplaoded successfully'),
        //  this:images = [],
        //    this:files = []
      });
    },
    //////// post multiple images data

    ///////////get section /////////////////
    getUsers({ commit }) {
      axios.get(`http://localhost:3000/Signup`).then((response) => {
        let data = response.data;
        console.log(data);
        commit("GET_USER", data);
      });
    },
  },
});
