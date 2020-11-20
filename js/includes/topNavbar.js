var topNavbar = `<div class="container d-flex align-items-center top">
  <div class="mr-auto d-flex">
    <a href="#">
      <i class="fas fa-phone-alt"></i>
      <span>(+34) 943 000 000</span>
    </a>
    <div class="separate"></div>
    <a href="#">
      <i class="fa fa-envelope"></i>
      <span>info@inmolopez.com</span>
    </a>
  </div>
  <div class="ml-auto d-flex">
    <a href="#" class="ml-2 d-flex align-items-center">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="#" class="ml-2 d-flex align-items-center">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="ml-2 d-flex align-items-center">
      <i class="fab fa-instagram"></i>
    </a>
    <div class="separate"></div>
    <div class="dropdown">
      <a
        href="#"
        class="dropdown-toggle idioma"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        <img
          src="img/language/english.png"
          alt="language"
          class="languageFlag"
        />
        <span>English</span>
      </a>
      <div
        class="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton"
      >
        <button class="dropdown-item idiomaOpcion" key="en">
          <img
            src="img/language/english.png"
            alt="en"
            class="languageFlag"
          />
          English
        </button>
        <button class="dropdown-item idiomaOpcion" key="es">
          <img
            src="img/language/spanish.png"
            alt="es"
            class="languageFlag"
          />
          Español
        </button>
      </div>
    </div>
  </div>
</div>`;