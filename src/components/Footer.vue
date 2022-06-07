<template lang="">
  <div class="footer">
    <div class="footer-container container">
      <div class="content">
        <div class="content__header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="35"
            viewBox="0 0 56 35"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0717 28.2171L16.9661 28.3116C16.2816 29.0526 15.4494 29.6516 14.5197 30.0725C13.5901 30.4933 12.5821 30.7274 11.5567 30.7606C7.53614 30.7606 4.61212 27.8312 4.61212 23.7915C4.61212 19.7517 7.53614 16.8302 11.5567 16.8302C12.5821 16.8633 13.5901 17.0974 14.5197 17.5183C15.4494 17.9392 16.2816 18.5382 16.9661 19.2792L17.0717 19.3816L19.6546 16.3419L19.5896 16.2632C18.6507 15.1036 17.4482 14.1698 16.076 13.5347C14.7038 12.8995 13.1989 12.5802 11.6785 12.6014C8.66814 12.5429 5.7443 13.5796 3.48312 15.5072C1.25015 17.7229 0 20.6976 0 23.7954C0 26.8931 1.25015 29.8679 3.48312 32.0836C5.73937 34.0201 8.66586 35.0606 11.6785 34.9973C13.1998 35.0188 14.7056 34.6987 16.078 34.0621C17.4504 33.4255 18.6523 32.4896 19.5896 31.3276L19.6546 31.2567L17.0717 28.2171Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.27 34.5801H26.8429V12.9481H22.27V34.5801Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.7525 29.8788C43.748 30.5301 42.5804 30.9056 41.3736 30.9655C39.8954 30.9655 39.2293 30.178 39.2293 28.5243V17.0429H43.8834V13.011H39.2293V6.23871L34.7458 8.60114V13.011H30.8878V17.0823H34.7458V29.296C34.7458 32.6192 36.7845 34.895 39.8141 34.9501C41.2396 35.019 42.6537 34.6735 43.8753 33.9579H43.9159L45.0205 29.7843L44.7525 29.9418V29.8788Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.5293 34.5801H53.1103V12.9481H48.5293V34.5801Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M55.7743 9.15243C53.7273 6.3254 51.0082 4.0178 47.8471 2.42475C44.6859 0.831687 41.1756 0 37.6129 0C34.0502 0 30.5399 0.831687 27.3787 2.42475C24.2176 4.0178 21.4985 6.3254 19.4515 9.15243L19.2322 9.45167H24.4954L24.5523 9.38866C26.2284 7.66123 28.2514 6.28467 30.4969 5.34373C32.7423 4.40279 35.1626 3.91739 37.6088 3.91739C40.055 3.91739 42.4754 4.40279 44.7208 5.34373C46.9662 6.28467 48.9893 7.66123 50.6654 9.38866L50.7304 9.45167H55.9855L55.7743 9.15243Z"
              fill="#E40520"
            />
          </svg>
          <nav>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy</a>
            <a href="#">Notice at Collection</a>
            <a href="#">CA Privacy Hub</a>
            <a href="#">Contact Us</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
        <div class="content__line"></div>
        <p class="content__footer">
          Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
          Opportunity Lender.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
.footer {
  width: 100%;
  height: 175px;
  background-color: #333;
  display: flex;

  @media (max-width: 800px) {
    height: auto;
  }

  &-container {
    margin: auto;
    height: 100%;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 1200px) {
        padding: 0 30px;
      }
      

      &__header {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        
        @media (max-width: 740px) {
          justify-content: center;
        }

        svg {
          @media (max-width: 810px) {
            display: none;
          }
        }

        nav {
          display: flex;
          align-items: center;

          @media (max-width: 740px) {
            flex-direction: column;
            justify-content: center;

            a {
              margin: 0 !important;
            }
          }

          a {
            margin-right: 20px;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 156.69%;
            display: flex;
            align-items: center;
            color: #ffffff;
            text-decoration: none;
          }

          a:last-child {
            margin-right: 0;
          }
        }
      }

      &__line {
        margin: 30.5px 0 0;
        border: 1px solid #ffffff;
      }

      &__footer {
        margin: 30px 0;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 156.69%;
        display: flex;
        color: #ffffff;
      }
    }
  }
}
</style>
