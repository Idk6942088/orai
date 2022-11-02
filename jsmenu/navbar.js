const navbar= `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" target="blank_" href="https://www.youtube.com/channel/UCICLD6Ie4bogpj49jZBaWHg">Legpacekabb yt csati a földön</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="negyzetker.10.05.html">Négyzet számolós feladat</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="smiles.html">Összeadós feladat</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="szamos2.10.05.html">Számolós feladat</a>
            </li>
          </ul>
        </div>
      </nav>`;

      document.querySelector("header").insertAdjacentHTML("beforebegin",navbar)