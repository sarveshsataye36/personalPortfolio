import { useEffect, useState } from "react";

const AboutMe = () => {
  const [myAge, setMyAge] = useState("");

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setMyAge(age);
  }

  useEffect(() => {
    getAge("2000/06/04");
  }, []);

  return (
    <section className='about-me' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='about-image'>
              <img className='img-responsive' src='about.jpg' alt='' />
            </div>
          </div>
          <div className='col-md-7'>
            <div className='about-info'>
              <div className='main-title'>
                <h2>About Me</h2>
              </div>
              <h3>
                I am Sarvesh Sataye, I'm a passionate Software Engineer with 2+
                Years of Experience
              </h3>
              <p>
                My journey in software engineering began during my college days
                when I discovered my passion for coding and problem-solving.
                Since then, I've been on a relentless pursuit of honing my
                skills and mastering various technologies.
              </p>
              <p>
                Outside of coding, I'm passionate about staying updated with the
                latest technologies and trends in the tech industry.
              </p>
              <div className='personal-info'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <p className='d-flex align-items-center'>
                      Name: <span>Sarvesh Sataye</span>
                    </p>
                  </div>

                  <div className='col-sm-6'>
                    <p>
                      Age: <span>{myAge}</span>
                    </p>
                  </div>

                  <div className='col-sm-6'>
                    <p>
                      Phone: <span>+91 9146346957</span>
                    </p>
                  </div>

                  <div className='col-sm-6'>
                    <p>
                      Address: <span>Pune, Maharashtra</span>
                    </p>
                  </div>
                </div>
                <span className='info-bg'>
                  <i className='fa fa-address-card'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
