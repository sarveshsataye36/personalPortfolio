const PersonalProjects = () => {
  return (
    <section className='services' id='services'>
      <div className='container'>
        <div className='main-title'>
          <h2>Recent Projects</h2>
        </div>
        <div className='row'>
          <div className='col-md-4 col-sm-6'>
            <div className='service'>
              <div className='service-icon'>
                <i className='fa fa-briefcase fa-lg'></i>
              </div>
              <img
                className='img-responsive'
                src='wepapp-one.png'
                alt='recent-project.png'
              />
              <p className='display-flex-className'>
                <span>Name: &nbsp;</span>
                <span>AccurateCA Software</span>
              </p>
              <p className='display-flex-className'>
                <span>Type: &nbsp;</span>
                <span>Company</span>
              </p>
              <p className='display-flex-className'>
                <span>Status: &nbsp;</span> <span>Complete</span>
              </p>
              <a
                className='main-btn margin-button text-dec-none personal-projects-button'
                href='https://live.accurateca.in/'
                target='_blank'>
                Check here
              </a>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='service'>
              <div className='service-icon'>
                <i className='fa fa-briefcase fa-lg'></i>
              </div>
              <img
                className='img-responsive'
                src='flutter-document-scan.png'
                alt='recent-project.png'
              />
              <p className='display-flex-className'>
                <span>Name: &nbsp;</span>
                <span>Document Scanner</span>
              </p>
              <p className='display-flex-className'>
                <span>Type: &nbsp;</span>
                <span>Personal</span>
              </p>
              <p className='display-flex-className'>
                <span>Status: &nbsp;</span> <span>Ready for Production</span>
              </p>
              <a
                className='main-btn margin-button text-dec-none personal-projects-button'
                href='https://github.com/sarveshsataye36/Flutter-CamScanner-App'
                target='_blank'>
                Check here
              </a>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='service'>
              <div className='service-icon'>
                <i className='fa fa-briefcase fa-lg'></i>
              </div>
              <img
                className='img-responsive'
                src='app-one.png'
                alt='recent-project.png'
              />
              <p className='display-flex-className'>
                <span>Name: &nbsp;</span>
                <span>Expense Management</span>
              </p>
              <p className='display-flex-className'>
                <span>Type: &nbsp;</span>
                <span>Personal</span>
              </p>
              <p className='display-flex-className'>
                <span>Status: &nbsp;</span> <span>Ready for Production</span>
              </p>
              <a
                className='main-btn margin-button text-dec-none personal-projects-button'
                href='https://github.com/sarveshsataye36/expense_management'
                target='_blank'>
                Check here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
