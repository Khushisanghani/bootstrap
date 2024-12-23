function NavBar(){
    return(
        <>
           <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container">
                <h3 class="text-white text-center">Logo</h3>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="container">
                        <ul class="navbar-nav justify-content-center flex-row">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact us</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Link</a></li>
                                <li><a class="dropdown-item" href="/">Another link</a></li>
                                <li><a class="dropdown-item" href="/">A third link</a></li>
                            </ul>
                            </li>
                        </ul>
                        
                    
                    </div>
                    <form class="d-flex" role="search" justify-content-end>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
           </nav>
        
        </>
    )
}
export default NavBar;