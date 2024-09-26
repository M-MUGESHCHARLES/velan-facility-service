import React from 'react'

export const ButtonsSection = () => {
  return (
    <section className="section-buttons row m-0 py-4 text-center bg-body-secondary">
      <div className="col-10 col-md-4 mx-auto mb-2 mb-md-0">
        <button className="btn btn-lg btn-primary shadow fw-semibold" id="Button_links" href="" target="_blank">
          Introduction Video
        </button>
      </div>

      <div className="col-10 col-md-4 mx-auto">
        <a href="/assets/VFS-Profile.pdf" download="Velan-Facility-Service.pdf">
          <button className="btn btn-lg btn-primary shadow fw-semibold " id="Button_links">
            Download Brochure
          </button>
        </a>
      </div>
    </section>
  );
};

export default ButtonsSection;
