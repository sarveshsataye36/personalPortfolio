const Navbar = () => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button className='menu-toggle'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
          <a className='navbar-brand' href={void 0}>
            Sarvesh<span className='brand-after'></span>
          </a>
        </div>
        <div className='navbar-links' id='ournavbar'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a className='cursor-pointer' href={void 0} data-value='#home'>
                Home
              </a>
            </li>
            <li>
              <a href={void 0} data-value='#about' className='cursor-pointer'>
                About
              </a>
            </li>
            <li>
              <a href={void 0} data-value='#skill' className='cursor-pointer'>
                Skill
              </a>
            </li>
            <li>
              <a href={void 0} data-value='#resume' className='cursor-pointer'>
                Resume
              </a>
            </li>
            <li>
              <a href={void 0} data-value='#contact' className='cursor-pointer'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
