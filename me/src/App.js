import './App.css';
import React from 'react';
import avatar from './images/avatar.jpeg'
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div className='SMALLER-SCREEN'>
        <p>Please use bigger screen for better view.</p>
      </div>
      <div className='App'>
        <header className='App-header'>
          <p className='HELLO-WORLD'>hello world !!</p>
        <div className='late'>
          <p className='late-hoverMetext'>Hover over me !!</p>
          <div className='ITSME'>
            <div className="AVATAR">
                <img src={avatar} width='200px' height='200px' style={{borderRadius:50+'%'}}/>
            </div>
            <div className='INTRO'>
            <h1>Ajay Kumar Gond</h1>
               <p>+91 <a href='https://t.me/ajayg51' target='_blank' rel="noopener noreferrer">8090485110</a> , <a href='https://web.whatsapp.com/send?phone=6307542669' target='_blank' rel="noopener noreferrer">6307542669</a></p>
               <p><a href='mailto:ajayg.ug18.cs@nitp.ac.in' target='_blank' rel="noopener noreferrer">ajayg.ug18.cs@nitp.ac.in</a> , <a href='mailto:hi.ajay51@gmail.com' target='_blank' rel="noopener noreferrer">hi.ajay51@gmail.com</a></p>
            </div>
          </div>
          <div className='RESUME'>
             <div className='EDUCATION'>
             <ul>
               <li>EDUCATION
                 <ul>
                  <div className='NITP'>
                    <li><p><a href='http://nitp.ac.in' target='_blank' rel="noopener noreferrer">NIT PATNA</a>
                        <span className='NITP-MODAL'>
                          <ul>
                            <dl>B.TECH CSE</dl>
                            <dd>Expected 2022 | Patna, India CGPA: 8.47 (Till 5th Semester)</dd>
                          </ul>
                        </span>
                    </p></li>
                  </div>
                  <div className='RLB'>
                    <li><p><a href='http://rlb14in.com' target='_blank' rel="noopener noreferrer">RLB MEMORIAL SCHOOL</a>
                      <span className='RLB-MODAL'>
                          <ul>
                            <dl>XII (HIGHER SECONDARY), CBSE</dl>
                            <dd>Grad. 2018 | Lucknow, India Percentage: 93.2%</dd>
                          </ul>
                        </span>
                    </p></li>
                  </div>
                  <div className='NDA'>
                    <li><p><a href='http://ndagkp.com' target='_blank' rel="noopener noreferrer">NETAJEE DEFENCE ACADEMY</a>
                      <span className='NDA-MODAL'>
                          <ul>
                            <dl>X (SECONDARY SCHOOL), CBSE</dl>
                            <dd>Grad. 2016 | Gorakhpur, India CGPA: 9.4</dd>
                          </ul>
                        </span>
                    </p></li>
                  </div>
                  </ul>
                </li>
                <li>LINKS
                  <ul>
                    <li><p><a href='https://github.com/ajayg51' target='_blank' rel="noopener noreferrer">Github://ajayg51</a></p></li>
                    <li><p><a href='https://www.linkedin.com/in/ajayg51' target='_blank' rel="noopener noreferrer">Linkedin://ajayg51</a></p></li>
                    <li><p><a href='https://codeforces.com/profile/Heyajay' target='_blank' rel="noopener noreferrer">Codeforces://Heyajay</a></p></li>
                    <li><p><a href='https://www.codechef.com/users/heyajay' target='_blank' rel="noopener noreferrer">Codechef://heyajay</a></p></li>
                  </ul>
                </li>
                <li>SKILLS
                  <ul>
                    <li>Proficient :
                        <ul>
                          <li>C++</li>
                          <li>Git</li>
                        </ul>
                    </li>
                    <li>Experienced :
                        <ul>
                          <li>Java </li>
                          <li>C </li>
                          <li>Firebase </li>
                        </ul>
                    </li>
                    <li>Familiar :
                        <ul>
                            <li>Python</li>
                        </ul>
                    </li>
                  </ul>
                </li>
                <li>HOBBIES</li>
                  <ul>
                      <li>Music</li>
                      <li>Coding</li>
                  </ul>
              </ul>
             </div> 
             <div className="PROJECTS">
              <ul>
                <li>
                  <dl>
                    <a href='https://www.kaggle.com/gauravsingh17467/cassava-alexnet/edit/run/63864507'>
                       CASSAVA LEAF DISEASE CLASSIFICATION ( MINOR PROJECT )
                    </a>
                  </dl>
                  <dd>
                    Replicated the AlexNet architecture and trained it on the 
                    Cassava leaf disease dataset. Achieved accuracy of 70% on the 
                    validation set.
                  </dd>
                  </li>
                  <li>
                    <dl>
                      <a href='https://www.kaggle.com/ajaygond/detecting-colors-hsv-color-space-opencv-with-p/edit'>
                         MULTIPLE COLOR DETECTION IN REAL TIME USING OPENCV-PYTHON
                      </a>
                    </dl>
                    <dd>
                      Created model that filters out RGB channels in real time video 
                      obtained from webcam moreover it also filters out only white and non-white 
                      components, have a window of trackbars for different values of HSV using 
                      which various shades of video frame can be obtained.
                    </dd>
                    </li>
                    <li>
                      <dl>
                        <a href='https://github.com/ajayg51/MessageApp'>
                           beGlobal Android App
                        </a>
                      </dl>
                      <dd>
                        A blog based android application where anyone can share their 
                        thoughts created using JAVA and FIREBASE.
                      </dd>
                      </li>
                    <li>
                      <dl>
                        <a href='https://github.com/ajayg51/portfolio'>
                           Portfolio
                        </a>
                      </dl>
                      <dd>
                        Duplicated layout of resume using react.js and css.
                      </dd>
                      </li>
              </ul>
             </div>
          </div>
        </div>
        </header>
        <footer className='FOOTER'>
            <p className='CLICKABLE-INFO'>All underlined texts are clickable</p>
            <p><a href='https://drive.google.com/file/d/1HC0JPSTj0qZyVwV5uHrQQA4JgR-c5ESt/view?usp=sharing'><span className='CLICK-PDF'>Click here</span></a> to get pdf version of my resume.</p>
        </footer>
      </div>
    </div>
    );  
}



export default App;
