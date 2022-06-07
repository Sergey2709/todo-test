<template lang="">
  
  <div v-if=GET_visibilityLogin>
    <Header />
    <section class="login">
      <div class="login__header">
        <div class="login__header-container container">
          <p>Welcome to<br />Business Analytics Online</p>
        </div>
      </div>
      <div class="login__body">
        <div class="login__body-container container">
          <article class="login__body-article">
            <p class="login__body-article__text">
              Business Analytics — a new, convenient tool for managing and
              forecasting your business performance, which will help analyze your
              own finances and cash flows, visualize your reporting, business
              processes, KPI's
            </p>
            <div class="login__body-article__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
              >
                <path
                  d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                  fill="#0076C0"
                />
              </svg>
              <div class="login__body-article__text">
                <h6>Interactive Reporting</h6>
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM),<br />
                E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta),
                Google Analytics and many more systems that reflect different
                aspects of business activities.
              </div>
            </div>
            <div class="login__body-article__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
              >
                <path
                  d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                  fill="#0076C0"
                />
              </svg>
              <div class="login__body-article__text">
                <h6>Automated data updates</h6>
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </div>
            </div>
            <div class="login__body-article__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
              >
                <path
                  d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                  fill="#0076C0"
                />
              </svg>
              <div class="login__body-article__text">
                <h6>Data Security</h6>
                The Bank guarantees the safety of your personal data, ensuring
                their integrity and confidentiality.
              </div>
            </div>
          </article>
          <LoginForm />
        </div>
      </div>
    </section>
    <Footer />
  </div>

</template>
<script>
import { mapGetters } from "vuex";
import LoginForm from "./LoginForm.vue"

import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Login",

  components: {
    Header,
    Footer,
    LoginForm,
  },

  computed: {
    ...mapGetters(["GET_visibilityLogin"]),
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  align-items: end;
  flex-direction: row;

  @media (max-width: 1200px) {
    max-width: 1100px;
    padding-left: 30px;
    padding-right: 30px;
  }
}

.login {
  width: 100%;
  height: calc(457px + 452px);

  @media (max-width:1200px) {
    height: auto;
  }

  &__header {
    background-image: url(../assets/images/bc-login.png);
    height: 457px;
    display: flex;
    justify-content: center;

    &-container {
      @media (max-width: 1200px) {
        align-items: start !important;
      }
    
    p {
      margin: 70px 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 55px;
      line-height: 156.69%;
      display: flex;
      text-align: start;
      color: #fff;
      
      @media (max-width:1200px) {
        margin: 25px 0;
        font-size: 36px;
      }
      @media (max-width: 472px) {
        font-size: 24px;
      }
    }
    }
  }

  &__body {
    display: flex;
    justify-content: center;

    .login__body-article {
      max-width: 670px !important;
      padding-top: 40px;

      @media (max-width: 1200px) {
        height: auto;
        padding-top: 200px;
      }

      &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 156.69%;
        display: flex;
        text-align: left;
        color: #333333;
      }

      &__item {
        display: flex;
        flex-direction: row;

        svg {
          width: 23px !important;
          margin-top: 4px;
        }

        .login__body-article__text {
          display: flex;
          align-items: start;
          flex-direction: column;
          max-width: 633px;
          padding-left: 15px !important;
          padding-bottom: 15px;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 156.69%;
          color: #333333;

          h6 {
            margin: 0 0 10px;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 156.69%;
            display: flex;
            align-items: center;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
