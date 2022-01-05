<template>
    <div class="container">
        <h2>Create Booking</h2>
        <div class="row">
          <div class="col-lg-3">
          </div>
          <div class="col-lg-6">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <!-- <b-form-group
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
              </b-form-group> -->

              <!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group> -->

              <b-form-group id="input-group-3" label="Select Course:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-3" label="Select Location:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <!-- <b-form-group id="input-group-3" label="Select Trainer:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group> -->

              <b-form-group
                id="input-group-1"
                label="Start Date:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="date"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="End Date:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="date"
                  required
                ></b-form-input>
              </b-form-group>

              <!-- <b-form-group
                id="input-group-1"
                label="Add Comments or Requirements"
                label-for="input-1"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group> -->


              <!-- <pre class="mt-3 mb-0 danger">{{ text }}</pre> -->

              
              

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" style="margin-left:50px;" variant="danger">Reset form</b-button>
            </b-form>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'AddBooking',
  props: {
    save: Function,
  },
  data() {
    return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
  },
  methods: {

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form))
      // this.save
    },

    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  }
}
</script>