var navigationBar = `
  <div class="container text-center">
    <a
      href="index.html"
      class="navbar-brand mx-auto d-block "
    >
      <img src="img/logo.png" height="80" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target=".dual-nav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="navbar-collapse collapse dual-nav w-50 justify-content-end"
      id="navbarResponsive"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html" data-key="homeNav"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="onSaleForRent.html?t=0&e=onsale&s=enventa" data-key="onsaleNav"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="onSaleForRent.html?t=1&s=forrent&e=enalquiler" data-key="forrentNav"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html" data-key="contactNav"></a>
        </li>
      </ul>
    </div>
  </div>`;

  /*
  <div class="navbar-collapse collapse dual-nav w-50 order-2">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button type="button" class="btn btn-button loginRegister" data-key="loginNav"></button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button type="button" class="btn btn-button loginRegister" data-key="registerNav"></button>
          </a>
        </li>
      </ul>
    </div>*/