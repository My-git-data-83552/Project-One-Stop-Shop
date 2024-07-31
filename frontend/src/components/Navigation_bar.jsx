import { Link } from "react-router-dom"

export default function navigation_bar() {
    return (
<nav class="navbar navbar-expand-lg bg-info-subtle">
  <div class="container-fluid">
    <img src="../amazon-logo.png" style={{width:"50px"}} />
    <a class="nav-link" aria-disabled="true" style={{color:"black"}}>OneStopShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-disabled="true">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link to='/home' className='nav-link' aria-current='page' href='#' >HOME</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
            <Link to='/login' className='nav-link' aria-current='page' href='#' >Login</Link>
        </li>
        <li class="nav-item">
          {/* <a class="btn btn-outline-danger" href="#">Logout</a> */}
          <Link to='/logout' className='btn btn-outline-danger' aria-current='page' href='#' >Logout</Link>
        </li>       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Looking for something?" style={{width:"300px"}} aria-label="Search" />
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
)
}
