const Resume = () => {
  return (
    <section className='resume' id='resume'>
      <div className='container'>
        <div className='main-title'>
          <h2>My Resume</h2>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='timeline'>
              <ul>
                <li>
                  <div
                    className='timeline-content wow fadeInLeft'
                    data-wow-duration='.8s'
                    data-wow-offset='100'>
                    <span className='date'>Feb 2023 – Current</span>
                    <h4>Stackbuz Technologies Pvt Ltd</h4>
                    <div>
                      <p className='points'>
                        Enhanced existing software functionality by identifying
                        and resolving complex issues.
                      </p>
                      <p className='points'>
                        Participated in code reviews, debugging sessions, and
                        testing efforts to ensure the quality and stability of
                        software releases.
                      </p>
                      <p className='points'>
                        Using agile methodology develop scalable application.
                      </p>
                      <p className='points'>
                        Contribute to the completion one full project.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='timeline-content wow fadeInRight'
                    data-wow-duration='.8s'
                    data-wow-offset='100'>
                    <span className='date'>Oct 2021 - Jan 2023</span>
                    <h4>Omunim Software Pvt Ltd</h4>
                    <div>
                      <p className='points'>
                        Solved Bugs and Errors in existing project.
                      </p>
                      <p className='points'>
                        Design and developed new client requirement in existing
                        project.
                      </p>
                      <p className='points'>
                        Assisted in the development of software modules under
                        the guidance of senior developers.
                      </p>
                      <p className='points'>
                        Gained hands-on experience with front-end and back-end
                        technologies.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
