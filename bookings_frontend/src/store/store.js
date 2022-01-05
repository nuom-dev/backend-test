import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// const LOGIN_URL = '/api/v1/signin';
//TODO: for production, localhost/BASE_URL should be in env file

const SIGNUP_URL = 'http://localhost:5050/api/v1/signup';
const state = {
    auth_token: null,
};

const store = new Vuex.Store({
    state,

    mutations: {
        SET_AUTH_TOKEN(state, auth_token) {
            state.auth_token = auth_token;
        },        
    },

    getters: {
        // getAuthToken: _ => {
        //     return localStorage.getItem('user_token') ? localStorage.getItem('user_token') : null;
        // },
    },

    actions: {
        studentSignup(state, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post(SIGNUP_URL, {
                        email: payload.email,
                        password: payload.password,
                    })
                    .then((response) => {
                        console.log('soo mee')
                        if ( response.data.data[0] ) {
                            let data = response.data.data[0];
                            localStorage.setItem('user_info', JSON.stringify(data.email));
                            localStorage.setItem('user_token', data.token);
                        }
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log('mann', error)
                        reject(error);
                    });
            })
        },
    }
});

export default store;
