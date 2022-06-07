<template lang="">

  <form class="form">
    <label for="name">Name</label>
    <div class="form-group">
      <input type="text" id="name" v-model="name" @input="nameInput"/>
      <div class="error" v-if="!$v.name.required && targetSubmit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
            fill="#D60000"
          />
        </svg>
        Field is required
      </div>
      <div class="error" v-if="!$v.name.minLength">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
            fill="#D60000"
          />
        </svg>
        Name must have at least
        {{ $v.name.$params.minLength.min }} letters.
      </div>
      <div class="error" v-if="!$v.name.maxLength">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
            fill="#D60000"
          />
        </svg>
        Name must have at least
        {{ $v.name.$params.maxLength.max }} letters.
      </div>
    </div>

    <label for="password">Password</label>
    <div class="form-group">
      <input
        type="text"
        id="password"
        v-model="password"
        @input="passwordInput"
      />
      <div class="error" v-if="!$v.password.required && targetSubmit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
            fill="#D60000"
          />
        </svg>
        Field is required
      </div>
      <div class="error" v-if="!$v.password.minLength">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
            fill="#D60000"
          />
        </svg>
        Password must have at least
        {{ $v.password.$params.minLength.min }} letters.
      </div>
      <div class="error" v-if="!$v.password.maxLength">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
            fill="#D60000"
          />
        </svg>
        Password must have at least
        {{ $v.password.$params.maxLength.max }} letters.
      </div>
    </div>

    <button @click.prevent="submitForm">Login</button>

    <a href="#">Forgot password</a>
    <a href="#">Register now</a>
  </form>

</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";


export default {
  name: "LoginForm",
  
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      password: "",
      class: "",
      targetSubmit: false,
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30),
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30),
    },
  },

  methods: {
    nameInput(e) {
      this.name = e.target.value;
      this.$v.name.$touch();

        if (this.name.length < 3 || this.name.length >= 30) {
          e.target.classList.value = '';
          e.target.classList.add("error-input")
        } else {
        e.target.classList.value = "";
        e.target.classList.add("validate")
      }
    
    },
    passwordInput(e) {
      this.password = e.target.value;
      this.$v.password.$touch();

        if (this.password.length < 3 || this.password.length > 30) {
          e.target.classList.value = '';
          e.target.classList.add("error-input")
        } else {
        e.target.classList.value = "";
        e.target.classList.add("validate")
      }
    },
    submitForm() {
      if (this.$v.$invalid) {
        this.targetSubmit = true;
      }
      if (this.name === "Admin" && this.password === "12345") {
        this.$store.dispatch("ADD_visibilityTodo");
        this.$store.dispatch("ADD_visibilityLogin");
        this.$store.dispatch("ADD_name", this.name);
        localStorage.setItem("auth", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: absolute;
  width: 481px;
  height: 464px;
  right: 0;
  bottom: 170px;
  background: #ffffff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    right: auto;
    bottom: auto;
    top: -300px;
  }
  @media (max-width: 695px) {
    bottom: 445px;
  }
  @media (max-width: 590px) {
    width: 85%;
    max-width: 481px;
  }

  label {
    text-align: left;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
  }

  div {
    width: 100%;

    input {
      width: 100%;
      height: 53px;
      margin: 7px 0 40px;
      padding: 0 15px;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    input.error-input {
      border: 1px solid #d60000;
    }

    input.validate {
      border: 1px solid #9A9A9A;
    }

    input:focus {
      border: 1px solid #101010;
    }

    .error {
      margin-top: -40px;
      margin-bottom: 20px;
      text-align: left;
      color: #d60000;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }

  button {
    width: 100%;
    height: 53px;
    background: #0076c0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #ffffff;
    border: 2px solid #0076c0;
    color: #0076c0;
    font-weight: 500;
  }

  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-decoration: none;
    color: #056dae;
    margin: 20px 0 23px;
  }

  a:last-child {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 63px;
    margin: 0;
    padding: 17px 0;
    background: #f6f6f6;
  }
}
</style>
