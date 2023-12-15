import React from 'react';
import Slider from 'react-slick';
import './About.css';

const About = () => {
  // Konfigurasi Slick Slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="about-container">
      <div className="slideshow-section">
        <h3>Pendidikan</h3>
        <Slider {...sliderSettings}>
          {/* Isi dengan gambar pendidikan */}
          <div>
            <img src="path/to/education-1.jpg" alt="Education 1" />
          </div>
          <div>
            <img src="path/to/education-2.jpg" alt="Education 2" />
          </div>
          {/* ... tambahkan gambar pendidikan lainnya */}
        </Slider>
      </div>

      <div className="slideshow-section">
        <h3>Pengalaman</h3>
        <Slider {...sliderSettings}>
          {/* Isi dengan gambar pengalaman */}
          <div>
            <img src="path/to/experience-1.jpg" alt="Experience 1" />
          </div>
          <div>
            <img src="path/to/experience-2.jpg" alt="Experience 2" />
          </div>
          {/* ... tambahkan gambar pengalaman lainnya */}
        </Slider>
      </div>
      <div className="slideshow-section">
        <h3>Sertifikat</h3>
        <Slider {...sliderSettings}>
          {/* Isi dengan gambar sertifikat */}
          <div>
            <img src="path/to/certificate-1.jpg" alt="Certificate 1" />
          </div>
          <div>
            <img src="path/to/certificate-2.jpg" alt="Certificate 2" />
          </div>
          {/* ... tambahkan gambar sertifikat lainnya */}
        </Slider>
      </div>
    </div>
  );
};

export default About;
