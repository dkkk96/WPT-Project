import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <MDBFooter bgColor='info' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className = 'test-mid'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='fff' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                InsureDrive
              </h6>
              <p>
                Get your car insurance from the world's leading car insurance brand now...
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p>
                
                <Link to ='/blog/is-it-safe-to-buy-car-insurance-online' className='text-reset'>
                  Blogs
                </Link>
              </p>
              <p>
                <Link to ='/about' className='text-reset'>
                  About Us
                </Link>
              </p>
              <p>
                <Link to ='/terms-and-conditions' className='text-reset'>
                  Terms and Conditions
                </Link>
              </p>
              <p>
                <Link to ='/contact-us' className='text-reset'>
                  Contact Us
                </Link>
              </p>
            </MDBCol>

           

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                SV Road, Kandivali West, Mumbai
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                insuredrive@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 8454051724
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 55 654 541 17
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <Link to = '/' className='text-reset fw-bold'>
          InsureDrive.com
        </Link>
      </div>
    </MDBFooter>
  );
}



//html
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" />