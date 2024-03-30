const HeroBanner = () => {
  const handleDownload = () => {
    const filename = "Sarvesh_Sataye_Resume.pdf";
    const url = filename;
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className='home'
      id='home'
      style={{
        background: "url('banner.png')",
      }}>
      <div className='overlay'>
        <div className='container'>
          <div className='intro display-table'>
            <div className='display-table-cell'>
              <h6>
                <span className='top-name'>Sarvesh Sataye</span>
              </h6>
              <h1>Hi, I’m Sarvesh</h1>
              <div>
                <h2 className='pogrammer'>
                  I'm a&nbsp;
                  <span className='text_1'>Full Stack Developer</span>
                  <span className='text_2'>Mobile Application Developer</span>
                </h2>
              </div>
              <div className='my-btn'>
                <a
                  href={void 0}
                  onClick={handleDownload}
                  className='main-btn margin-button text-dec-none'>
                  Download Resume
                </a>
                <a
                  href='#contact'
                  data-value='#contact'
                  className='main-btn bg-none text-dec-none'>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
