
function Nav(){

    return(<div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Calculator</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link " aria-current="page" href="#">events</a>
        <a class="nav-link" href="#">play</a>
        <a class="nav-link" href="#">sports</a>
        <a class="nav-link " aria-disabled="true">Activites</a>
      </div>
    </div>
  </div>
</nav>
    </div>);
}

export default Nav;