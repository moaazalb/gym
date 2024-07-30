import './Navbar.css'

const Navbar = () => {
    return (
        <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        
                        <a href="/" class="logo">Training<em> Space</em></a>
                      
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="/" class="active">Home</a></li>
                            <li class="scroll-to-section"><a href="#program">Programs</a></li>
                            <li class="scroll-to-section"><a href="#tips">Tips</a></li>
                            <li class="scroll-to-section"><a href="#schedule">Schedules</a></li> 
                    
                        </ul>  
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>      

    )
}

export default Navbar