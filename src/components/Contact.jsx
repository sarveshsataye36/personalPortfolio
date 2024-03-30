import { IoLocation } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneFlip } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='main-title'>
          <h2>Contact Me</h2>
        </div>
        <div className='row'>
          <div className='col-lg-10 col-lg-offset-1'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='contact-box'>
                  <div className='title-box'>
                    <div className='icon-box'>
                      <IoLocation />
                    </div>
                    <div className='name-box'>
                      <h4>Location</h4>
                    </div>
                  </div>
                  <div className='content-box'>
                    <p>Pune, Maharashtra</p>
                  </div>
                  <div className='number-box'>
                    <span>01.</span>
                  </div>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='contact-box'>
                  <div className='title-box'>
                    <div className='icon-box'>
                      <TfiEmail />
                    </div>
                    <div className='name-box'>
                      <h4>Email</h4>
                    </div>
                  </div>
                  <div className='content-box'>
                    <p>sataye.sarvesh@gmail.com</p>
                  </div>
                  <div className='number-box'>
                    <span>02.</span>
                  </div>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='contact-box'>
                  <div className='title-box'>
                    <div className='icon-box'>
                      <FaPhoneFlip />
                    </div>
                    <div className='name-box'>
                      <h4>Phone</h4>
                    </div>
                  </div>
                  <div className='content-box'>
                    <p>+91 9146346957</p>
                  </div>
                  <div className='number-box'>
                    <span>03.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-10 col-lg-offset-1'>
            <form className='contact-form' action='#' method='post'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      placeholder='Name'
                      required
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Email'
                      required
                    />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                      required
                    />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      name='message'
                      placeholder='Your Message'
                      required></textarea>
                  </div>
                </div>
              </div>
              <button className='main-btn' type='submit' name='send'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
