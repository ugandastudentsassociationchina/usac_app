<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="@/assets/images/usac-logo@2x.png" />
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
            About Us
        </a>

        <a class="navbar-item">
            Blog
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Documents
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Statutes
            </a>
            <a class="navbar-item">
              Standing Order
            </a>
            <a class="navbar-item">
              Other Documents
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Request Document
            </a>
          </div>
        </div>
        <a class="navbar-item">
            Gallery
        </a>
        <a class="navbar-item">
            Contact
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button register__button">
              <strong>Register</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {};
    },
    mounted() {

        document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
            });
        }

        });
    }
  }
</script>

<style lang="scss">
  .register__button {
      background: $red;
      color: $white;

      &:hover {
          color: $white;
      }
  }

  .navbar {
      padding: 0 100px;
    //   background: $red;
      color: $white;
  }

  .navbar-start {
      margin-right: 0;
      margin-left: auto;
  }

//   .navbar-item, .navbar-link {
//       color: $white;
//   }

//   .navbar-dropdown > .navbar-item {
//       color: black;

//       &:hover ~ .navbar-link {
//           color: black;
//       }
//   }
</style>