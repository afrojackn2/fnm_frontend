import React from "react";
import "./Template1.css";

export default function Template1() {
  return (
    <div>
      <div className="main-content">
        <div className="left-section">
          <div className="left-content">
            <div className="profile">
              <div className="image">
                <img src="/avatar.jpg" alt="" />
              </div>
              <h2 className="name">Lorem Dola Ipsum</h2>
              <p className="career">Software Engineer</p>
            </div>
            <div className="contact-info">
              <h3 className="main-title">Contact Info</h3>
              <ul>
                <li>
                  <i className="fa fa-phone"></i>
                  07661892982
                </li>
                <li>
                  <i className="fa fa-fax"></i>
                  loremipsum@gmail.com
                </li>
                <li>
                  <i className="fa fa-globe"></i>
                  www.loremipsum.com
                </li>
                <li>
                  <i className="fa fa-facebook"></i>
                  www.facebook.com/lorem
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                  @loremipsum
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  37 Pramount St, London
                </li>
              </ul>
            </div>
            <div className="skills-section">
              <h3 className="main-title">Skills</h3>
              <ul>
                <li>
                  <p className="skill-title">Javascript</p>
                  <div className="progress-bar">
                    <div className="progress js-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Photoshop</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Java</p>
                  <div className="progress-bar">
                    <div className="progress j-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">C++</p>
                  <div className="progress-bar">
                    <div className="progress c-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Ruby</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Node js</p>
                  <div className="progress-bar">
                    <div className="progress n-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">html/css</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">illustrator</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
                <li>
                  <p className="skill-title">Wordpress</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="references-section">
              <h3 className="main-title">References</h3>
              <div className="referee">
                <h6 className="sub-title">Michael Bowen</h6>
                <p className="sub-para">Product Manager</p>
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax"></i>
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">Joseph Kumar</h6>
                <p className="sub-para">Senior Developer</p>
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax"></i>
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">Rick Ross</h6>
                <p className="sub-para">Product Manager</p>
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax"></i>
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="right-main-content">
            <div className="about sect">
              <h2 className="right-title">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptate totam officiis nulla qui nobis temporibus
                maiores accusantium alias ut commodi autem neque, id culpa
                obcaecati iure magnam aliquam repellat placeat deserunt quidem!
                Quas?
              </p>{" "}
            </div>

            <div className="experince sect">
              <h2 className="right-title">Experience</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Microsoft</h5>
                  <p className="para">2017 - 2019</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Junior Developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Google Inc</h5>
                  <p className="para">2019 - 2020</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Lead Web developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Google Inc</h5>
                  <p className="para">2019 - 2020</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Lead Web developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Apple</h5>
                  <p className="para">2020 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Senior Developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education sect">
              <h2 className="right-title">education</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Cheney School</h5>
                  <p className="para">2015 - 2016</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Gcse's</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Cheney School</h5>
                  <p className="para">2016 - 2018</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">A - Levels</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">University of Sussex</h5>
                  <p className="para">2018 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Computer Science</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="awards sect">
              <h2 className="right-title">Awards</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Microsoft</h5>
                  <p className="para">June 2016</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Excellent Work</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Alphabet Inc</h5>
                  <p className="para">June 2016</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">The Star Employee</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
