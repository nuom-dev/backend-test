
<template>
    <div class="container">
        <h2>Student Signin</h2>
        <div class="row">
          <div class="col-lg-3">
          </div>
          <div class="col-lg-6">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Student email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Student email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                  type="password"
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" style="margin-left:50px;" variant="danger">Reset form</b-button>
            </b-form>
          </div>
        </div>
        
    </div>
</template>

<script>
// import Header from './Header.vue';
export default {
  name: 'Signin',
  components: {
    // Header,
    // Signin,
  },
  props: {
    submit: Function,
  },
  data() {
    return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
  },
  methods: {

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form))
        // this.$store.dispatch("loginUser", {
        //     email : this.form.email,
        //     password : this.form.password,
        // }).then((response) => {
        //     if (response.data.data[0].token != null){
        //         if(this.$route.params.nextUrl != null){
        //             this.$router.push(this.$route.params.nextUrl)
        //         }else{
        //             window.location.href = '/admin/dashboard';
        //         }
        //     }
        // }).catch((e) => {
        //     console.log(`error loggin in...${e}`)
        //     this.submit_error = error;
        // }).finally(() => this.search_button_class = ``);
      // this.save
    },

    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  }
}
</script>