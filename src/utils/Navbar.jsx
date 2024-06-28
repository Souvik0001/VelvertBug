import "./Navbar.css";

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TheVelVetBug</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-1 me-auto " id="navbaroptions"> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Upload New Card</a>
        </li>
        
        <li class="nav-item dropdown">
        <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Wedding</a></li>
                <li><a class="dropdown-item" href="#">Save the date</a></li>
                <li><a class="dropdown-item" href="#">Roka & engagement ceremony</a></li>
                <li><a class="dropdown-item" href="#">Countdown</a></li>
                <li><a class="dropdown-item" href="#">Lovestory based wedding</a></li>
                <li><a class="dropdown-item" href="#">Housewarming Ceremony</a></li>
                <li><a class="dropdown-item" href="#">Baby Shower Invitation</a></li>
                <li><a class="dropdown-item" href="#">Baby Name Announcement</a></li>
                <li><a class="dropdown-item" href="#">Birthday</a></li>
                <li><a class="dropdown-item" href="#">Anniversary</a></li>
                <li><a class="dropdown-item" href="#">Dhoti Ceremony</a></li>
                <li><a class="dropdown-item" href="#">Half Saree Ceremony</a></li>
            </ul>
            </div>
        </li>
      </ul>
      <form class="d-flex " role="search">
        <input class="form-control me-2 ms-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}