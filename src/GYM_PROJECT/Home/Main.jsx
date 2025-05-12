import "./Home.css";

export default function Main() {
  return (
    <main>
        <section className="welcome-container">
            <div className="photos">
                <div className="red"></div>
                <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/lean_woman_doing_dumbbell_row.jpg?itok=eU6elx6n" alt=""/>
                <img src="https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840" alt=""/>
            </div>
            <div className="welcome-text">
                <h2>WELCOME TO OUR GYM</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores nostrum sint inventore magnam repellendus autem beatae ex quod unde et consequuntur voluptatibus maiores numquam dolore non accusantium, possimus voluptates id sequi maxime aliquid assumenda totam impedit. Nihil iste eaque, illo ex cum ab nesciunt similique voluptas repellat itaque! Sed?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt pariatur, ratione voluptatibus est repudiandae obcaecati id cupiditate at, officia hic magnam quaerat. Perspiciatis ullam quia tempora eaque totam quod ex, consectetur veniam porro molestiae similique, ad expedita qui iusto, rerum temporibus voluptatum tempore numquam at! Laborum rerum laudantium aut.</p>
            </div>
        </section>

        <section id="about" className="about-container">
            <div className="about-text">
                <h2>ABOUT OUR GYM</h2>
                <div className="p-text">
                    <p className="active-p">About Company</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro, magni laudantium cum ipsam quo dignissimos ducimus laborum iure, atque nisi, voluptatibus quibusdam reprehenderit! Voluptatibus, inventore voluptates? Nam perspiciatis obcaecati, dicta, distinctio culpa inventore nobis repellat, iusto velit libero atque nihil ducimus vero quo unde odio deserunt? Repudiandae, quo sed.</p>
                </div>
            </div>
            <div className="about-img">
                <img src="https://c0.wallpaperflare.com/path/334/399/594/energy-exercise-gym-indoors-e0b3ca94a15f1296eb4f9b74e3c58223.jpg" alt=""/>
                <img src="https://r4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-742e3fa43719b9e7c12bea17c7ddd322.jpg" alt=""/>
            </div>
        </section>

        
        <section className="facilities-container">
            <div className="fac-title">
                <h1>GYM FACILITIES</h1>
            </div>
            
            <div className="fac-img">
                <img src="https://i.pinimg.com/564x/5d/05/17/5d05170e29ff9b8b9dd6d284e3a8809d.jpg" alt=""/>
                <img src="https://img.freepik.com/free-photo/gym-with-indoor-cycling-equipment_23-2149270210.jpg?semt=ais_hybrid&w=740" alt=""/>
                <img src="https://static.wixstatic.com/media/nsplsh_26f0c706d38540daa6de62db4f8f25b1~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_26f0c706d38540daa6de62db4f8f25b1~mv2.jpg" alt=""/>
                <img src="https://wienmitte-themall.at/wp-content/uploads/2021/09/Fitnesscenter-Fitness-Fitinn-Header-Mobil.jpg" alt=""/>
                <img src="https://www.flyefit.ie/wp-content/uploads/2025/03/Untitled-design-13.jpg" alt=""/>
            </div>

            <div className="fac-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa minima maxime ipsum iusto sint expedita, aperiam debitis optio tempora nam consequatur natus suscipit assumenda qui, placeat quod magnam alias labore velit libero doloribus! Suscipit incidunt deserunt quo quod laboriosam quasi vitae accusantium repudiandae non ipsa, hic qui sunt? Repellat, cumque!</p>
            </div>
        </section>


        <section className="mission-section">
            <div className="big-text">
                <h1>GYM CENTRE</h1>
            </div>
            <div className="left-images">
              <img src="https://www.legendfitness.com/wp-content/uploads/Legend_Fitness_Buy_or_Lease_Header.jpg" alt="" />
              <img src="https://www.dmoose.com/cdn/shop/articles/feature-image_3de374d4-850c-4627-856c-d2f8bb4c9cbc.jpg?v=1684507012" alt="" />
              <img src="https://www.shutterstock.com/image-photo/dumbbell-fitness-bodybuilder-black-man-600nw-2385070159.jpg" alt="" />
            </div>
        
            <div className="right-content">
              <h2>GYM MISSION</h2>
        
              <div className="mission-block">
                <div className="number">01</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
        
              <div className="mission-block">
                <div className="number">02</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
        
              <div className="mission-block">
                <div className="number">03</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </section>

          <section className="contact-section">
            <div className="contact-images">
              <img src="https://images.ctfassets.net/8urtyqugdt2l/6O5FSYt3miUVVqapCMfHjw/260cc09740d493f43d8aa8b498d500bf/desktop-sumo-squats.jpg" className="image squat" alt=""/>
              <img src="https://images.ctfassets.net/8urtyqugdt2l/4ED45oa0wztUIBA1ojKqKm/9891060992faed3798334e89669a0c83/Power_Central_Article_Tiles_Bicep.jpg" className="image bodybuilder" alt=""/>
            </div>
            <div className="contact-content">
              <h2>OUR CONTACT</h2>
              <ul>
                <li><svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z" fill="#ffffff"></path> </g></svg> +123-456-7890</li>
                <li><svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 15L20 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 9L20 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M12.0004 20.8182L11.2862 21.5181C11.4742 21.7101 11.7317 21.8182 12.0004 21.8182C12.2691 21.8182 12.5265 21.7101 12.7146 21.5181L12.0004 20.8182ZM12.0004 3.18188L12.7146 2.48198C12.5265 2.29005 12.2691 2.18188 12.0004 2.18188C11.7317 2.18188 11.4742 2.29005 11.2861 2.48198L12.0004 3.18188ZM14.6004 12.0001C14.6004 15.1611 13.3373 18.0251 11.2862 20.1183L12.7146 21.5181C15.1173 19.0662 16.6004 15.7053 16.6004 12.0001H14.6004ZM11.2861 3.88178C13.3373 5.97501 14.6004 8.83903 14.6004 12.0001H16.6004C16.6004 8.29478 15.1173 4.93389 12.7146 2.48198L11.2861 3.88178ZM9.40039 12.0001C9.40039 8.83903 10.6634 5.97501 12.7146 3.88178L11.2861 2.48198C8.88347 4.93389 7.40039 8.29478 7.40039 12.0001H9.40039ZM12.7146 20.1183C10.6634 18.0251 9.40039 15.1611 9.40039 12.0001H7.40039C7.40039 15.7053 8.88348 19.0662 11.2862 21.5181L12.7146 20.1183Z" fill="#ffffff"></path> </g></svg> www.reallygreatsite.com</li>
                <li><svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> hello@reallygreatsite.com</li>
                <li><svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 123 Anywhere ST., Any City, ST 12345</li>
              </ul>
            </div>
          </section>
    </main>
  );
}