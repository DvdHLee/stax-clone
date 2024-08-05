import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { HiOutlineArrowLongRight } from 'solid-icons/hi'
import logo from "../assets/logolight.png";
import tpa1 from "../assets/tpa1.png";
import tpa2 from "../assets/tpa2.png";
import tpa3 from "../assets/tpa3.png";
import tpa4 from "../assets/tpa4.png";
import tpa5 from "../assets/tpa5.avif";
import tpa6 from "../assets/tpa6.avif";
import tpa7 from "../assets/tpa7.avif";
import tpa8 from "../assets/tpa8.avif";
import tpa9 from "../assets/tpa9.avif";
import tpa10 from "../assets/tpa10.avif";
import slider1 from "../assets/slider1.avif";
import slider2 from "../assets/slider2.avif";
import slider3 from "../assets/slider3.avif";
import partner1 from "../assets/partner1.avif";
import partner2 from "../assets/partner2.avif";
import partner3 from "../assets/partner3.avif";
import partner4 from "../assets/partner4.avif";
import partner5 from "../assets/partner5.avif";
import partner6 from "../assets/partner6.avif";
import partner7 from "../assets/partner7.avif";
import partner8 from "../assets/partner8.avif";
import partner9 from "../assets/partner9.avif";
import "solid-slider/slider.css";
import { Slider, SliderButton, createSlider } from "solid-slider";
import { FaSolidChevronLeft } from 'solid-icons/fa'
import { FaSolidChevronRight } from 'solid-icons/fa'
import { createSignal } from "solid-js";

function Home() {
  const [slideNumber, setSlideNumber] = createSignal("2");

  if (window.innerWidth < 768) {
    setSlideNumber(1);
  }

  const options = { 
    loop: true,
    slides: {
      perView: slideNumber,
    },
  }

  const sliderRef = createSlider(options);

  //Intersection Observer

  const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (element.isIntersecting === true) {
        element.target.classList.add('move-up')
      }
    })
  }, { threshold: 0 })

  const observer2 = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (element.isIntersecting === true) {
        console.log("added")
        element.target.classList.add('fade-in')
      } else {
        console.log("removed")
        element.target.classList.remove('fade-in')
      }
    })
  }, { threshold: 0 })

  window.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".section__title");

    for (const element of elements) {
      observer.observe(element);
    }

    const elementfade = document.querySelector('.tpas');
    observer2.observe(elementfade);
  }, false);

  
  return (
    <div class="min-h-screen flex flex-col items-center w-full">
      <Nav />
      <div class="grow text-white w-full max-w-[1600px]">
        <section id="landing" class="h-screen min-h-fit justify-center flex px-[20px] sm:px-[100px] flex-col">
          <div class="2xl:text-[140px] xl:text-[120px] 2xl:text-[140px] lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] font-bold width-[90%] 
          2xl:leading-[140px] xl:leading-[120px] lg:leading-[100px] md:leading-[80px] sm:leading-[60px] leading-[40px]
          flex justify-left animate-fadeinup">
            <div class="w-fit">
              TAILORED
              <br></br>
              FOR TPAs<span class="text-[#00C1EF]">.</span>
              <br></br>
              ENGINEERED FOR
              <br></br>
              PRODUCTIVITY<span class="text-[#00C1EF]">.</span>
            </div>
          </div>
          <div class="opacity-[0.5] mt-[30px] text-[30px] font-light animate-fadeindown">SCROLL TO CONTINUE</div>
        </section>
        <section id="video" class="h-screen min-h-fit justify-center flex px-[20px] sm:px-[100px] flex-col">
          <div class="md:text-[40px] text-[25px] opacity-[0.8] font-extralight max-w-[1000px] mb-[20px]">STAX•AI IS A REVOLUTIONARY SOLUTION THAT EMPOWERS TPAs TO STREAMLINE THEIR OPERATIONS AND ACHIEVE UNPARALLELED PRODUCTIVITY.</div>
          <div class="w-full bg-black md:h-[600px] h-[300px] flex justify-center items-center rounded-xl">VIDEO which I do not have :(</div>
        </section>
        <section id="today" class="min-h-fit justify-center flex px-[20px] sm:px-[100px] flex-col mt-[200px]">
            <div class="section__title__container overflow-hidden">
              <h2 class="h-fit text-left text-[40px] font-semibold mb-[10px] section__title">TODAY</h2>
            </div>
            <div class="bg-[#1E1E1E] rounded-xl w-full h-fit flex justify-between py-5 px-8 items-center mb-[100px] today flex-col lg:flex-row">
              <div class="text-[#00C1EF]">
                <p class="text-[80px] font-light">5,814,286</p>
                <p>PAGES PROCESSED</p>
              </div>
              <HiOutlineArrowLongRight class="text-[#00C1EF] w-[100px] h-fit"/>
              <div class="h-[252px] w-[279px] bg-gradient-to-r from-[#00C1EF] to-[#3C85FF] rounded-3xl flex flex-col items-center justify-center font-light">
                <p class="text-[80px]">$2.7M</p>
                <p>COST REDUCED</p>
              </div>
              <div class="h-[252px] w-[279px] bg-gradient-to-r from-[#FF813B] to-[#F15A24] rounded-3xl flex flex-col items-center justify-center font-light">
                <p class="text-[80px]">104</p>
                <p>YEARS OF LABOR SAVED</p>
              </div>
            </div>
            <div class="p-[50px] bg-[#1E1E1E] rounded-xl w-full h-fit space-y-5">
              <h1 class="text-[30px] sm:text-[40px] font-bold text-[#00C1EF] lg:text-[80px] sm:text-[50px] md:[60px]">TRUST ACCOUNTING</h1>
              <p class="w-full lg:w-[50%] text-[20px]">Upload brokerage statements for automatic sorting, renaming, and precise filing into the respective client folders, all aligned with your existing naming conventions.</p>
              <div class="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex justify-center items-center">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/jjYHxzJj6Xc"></iframe>
              </div>
            </div>
        </section>
        <section id="roi" class="h-fit justify-center flex px-[20px] sm:px-[100px] flex-col mt-[200px] mb-[300px]">
          <h2 class="h-fit text-left text-[40px] font-semibold mb-[10px] section__title">ROI CALCULATOR</h2>
          <div class="bg-[#1E1E1E] rounded-xl w-full h-fit flex items-center justify-center flex flex-col py-[100px]">
            <div class="hidden justify-left w-[90%] translate-y-[-50px] lg:flexw-[45%] md:">
              <img src={logo} alt="logo" class="h-[45px]" />
            </div>
            <div class="w-[60%] h-fit">
              <h2 class="font-bold text-[40px] mb-5">ESTIMATE YOUR ROI</h2>
              <p class="text-xl font-extralight">Streamline manual workflows with Stax·ai empowering your teams to focus on client interactions and plan optimization.</p>
              <br></br>
              <p class="text-xl font-extralight">Curious about the benefits for your business? Explore your potential return on investment using our “ROI Calculator”—simply input a few details below.</p>
              <div class="text-center w-full">
                <p class="text-xl font-semibold mt-[30px]">What is your TPA's name?</p>
                <input type="text" placeholder="Type your TPA name here..." class="w-full border-[#00C1EF] focus:border-[#FF813B] bg-transparent text-lg px-2 border-b-2 p-1 outline-none mt-[30px]"/>
                <button class="mt-[40px] font-bold text-2xl bg-gradient-to-r from-[#00C1EF] to-[#3C85FF] py-3 px-7 rounded-[30px] hover:shadow-lg hover:shadow-[#00C1EF]">NEXT</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="bg-white w-full flex items-center flex-col">
        <section id="value" class="w-full max-w-[1600px] max-h-[800px] justify-between flex bg-white px-[20px] sm:px-[100px] pt-[100px] relative flex-col lg:flex-row">
          <div class="flex flex-col max-w-[400px]">
            <h2 class="font-bold text-[40px] leading-10 mb-[20px] section__title">THE VALUE ADDED: AUTOMATE, OPTIMIZE & SCALE</h2>
            <p class="font-extralight text-xl">TPAs play a vital role in the administration of brokerage statements. They are responsible for managing the filing, recording, reconciliation, and consolidation of statements for their 
              clients across months, quarters, or years. <br></br><br></br> Nonetheless, the manual handling of these statements, particularly physical mail, presents inherent challenges, such as time consumption, 
              potential errors, and monotonous tasks.</p>
          </div>
          <div class="w-fit flex-col items-center stack h-fit relative py-[100px] lg:py-[0] hidden sm:flex">
            <div class="xl:w-[400px] xl:h-[400px] w-[300px] h-[300px] bg-gradient-to-r from-[#00C1EF] to-[#3C85FF] rounded-3xl rotate-45 relative translate-y-[-500px] z-30"></div>
            <div class="xl:w-[400px] xl:h-[400px] w-[300px] h-[300px] bg-gradient-to-r from-[#00C1EF] to-[#3C85FF] rounded-3xl rotate-45 relative translate-y-[-700px] z-20"></div>
            <div class="xl:w-[400px] xl:h-[400px] w-[300px] h-[300px] bg-gradient-to-r from-[#00C1EF] to-[#3C85FF] rounded-3xl rotate-45 relative translate-y-[-900px] z-10"></div>
          </div>
        </section>
        <section id="value" class="min-h-fit items-center flex flex-col bg-white w-full mt-[200px] lg:mt-[0]">
          <h2 class="font-bold text-[40px] leading-10 mb-[20px] w-full max-w-[1600px] px-[20px] sm:px-[100px] section__title">TRUSTED BY LEADING TPAs</h2>
          <div class="w-full h-[300px] tpas">
            <div class="marquee__wrapper">
              <div class="item item__left" style={{ "--i": 1 }}><div class="w-[200px]"><img src={tpa1} /></div></div>
              <div class="item item__left" style={{ "--i": 2 }}><div class="w-[130px]"><img src={tpa2} /></div></div>
              <div class="item item__left" style={{ "--i": 3 }}><div class="w-[200px]"><img src={tpa3} /></div></div>
              <div class="item item__left" style={{ "--i": 4 }}><div class="w-[200px]"><img src={tpa4} /></div></div>
              <div class="item item__left" style={{ "--i": 5 }}><div class="w-[200px]"><img src={tpa5} /></div></div>
              <div class="item item__left" style={{ "--i": 6 }}><div class="w-[200px]"><img src={tpa6} /></div></div>
              <div class="item item__left" style={{ "--i": 7 }}><div class="w-[200px]"><img src={tpa7} /></div></div>
              <div class="item item__left" style={{ "--i": 8 }}><div class="w-[200px]"><img src={tpa8} /></div></div>
              <div class="item item__left" style={{ "--i": 9 }}><div class="w-[200px]"><img src={tpa9} /></div></div>
              <div class="item item__left" style={{ "--i": 10 }}><div class="w-[200px]"><img src={tpa10} /></div></div>
            </div>
            <div class="marquee__wrapper">
              <div class="item item__right" style={{ "--i": 1 }}><div class="w-[200px]"><img src={tpa1} /></div></div>
              <div class="item item__right" style={{ "--i": 2 }}><div class="w-[130px]"><img src={tpa2} /></div></div>
              <div class="item item__right" style={{ "--i": 3 }}><div class="w-[200px]"><img src={tpa3} /></div></div>
              <div class="item item__right" style={{ "--i": 4 }}><div class="w-[200px]"><img src={tpa4} /></div></div>
              <div class="item item__right" style={{ "--i": 5 }}><div class="w-[200px]"><img src={tpa5} /></div></div>
              <div class="item item__right" style={{ "--i": 6 }}><div class="w-[200px]"><img src={tpa6} /></div></div>
              <div class="item item__right" style={{ "--i": 7 }}><div class="w-[200px]"><img src={tpa7} /></div></div>
              <div class="item item__right" style={{ "--i": 8 }}><div class="w-[200px]"><img src={tpa8} /></div></div>
              <div class="item item__right" style={{ "--i": 9 }}><div class="w-[200px]"><img src={tpa9} /></div></div>
              <div class="item item__right" style={{ "--i": 10 }}><div class="w-[200px]"><img src={tpa10} /></div></div>
            </div>
          </div>
        </section>
        <section id="value" class="w-full max-w-[1600px] min-h-fit justify-between flex bg-white px-[20px] sm:px-[100px] mt-[100px] flex-col">
          <h2 class="font-bold text-[40px] leading-10 mb-[40px] section__title pl-[10px] md:pl-0">FEATURED</h2>
          <div class="w-full h-fit relative">
            <Slider options={options} class="">
              <div class="h-[600px] flex justify-center items-end">
                <div class="w-[95%] bg-[#151515] h-[95%] rounded-xl hover:translate-y-[-20px] transition-all duration-300 cursor-pointer flex-col overflow-hidden flex items-center">
                  <img src={slider1} class="w-full h-[50%]"/>
                  <div class="w-[70%] h-fit mt-[30px] space-y-3">
                    <h2 class="text-[#00C1EF] text-3xl font-bold">WHAT MAKES A TPA GREAT: HOW TECHNOLOGY IS LEVELING THE PLAYING FIELD</h2>
                    <h3 class="text-white font-light text-lg">By Ilene Ferenczy</h3>
                    <p class="text-white font-extralight text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci velit aperiam dicta quod ratione dolore.</p>
                  </div>
                </div>
              </div>
              <div class="h-[600px] flex justify-center items-end">
                <div class="w-[95%] bg-[#151515] h-[95%] rounded-xl hover:translate-y-[-20px] transition-all duration-300 cursor-pointer flex-col overflow-hidden flex items-center">
                  <img src={slider2} class="w-full h-[50%]"/>
                  <div class="w-[70%] h-fit mt-[30px] space-y-3">
                    <h2 class="text-[#00C1EF] text-3xl font-bold">LEADS ARE FOR CLOSERS</h2>
                    <h3 class="text-white font-light text-lg">By King Kenney</h3>
                    <p class="text-white font-extralight text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci velit aperiam dicta quod ratione dolore laudantium repudiandae earum similique quae sit, perferendis eligendi accusamus, voluptatem veniam qui temporibus non?</p>
                  </div>
                </div>
              </div>
              <div class="h-[600px] flex justify-center items-end">
                <div class="w-[95%] bg-[#151515] h-[95%] rounded-xl hover:translate-y-[-20px] transition-all duration-300 cursor-pointer flex-col overflow-hidden flex items-center">
                  <img src={slider3} class="w-full h-[50%]"/>
                  <div class="w-[70%] h-fit mt-[30px] space-y-3">
                    <h2 class="text-[#00C1EF] text-3xl font-bold">SAUSAGE IS DELICIOUS</h2>
                    <h3 class="text-white font-light text-lg">Fred Bloodgood & King Kenney</h3>
                    <p class="text-white font-extralight text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci velit aperiam dicta quod ratione dolore laudantium repudiandae earum similique quae sit, perferendis eligendi accusamus, voluptatem veniam qui temporibus non?</p>
                  </div>
                </div>
              </div>
            </Slider>
            <SliderButton prev class="absolute left-[-60px] top-[50%] rounded-full bg-gray-300 w-[50px] h-[50px] hidden md:flex justify-center items-center active:scale-[0.9] text-white text-xl">
              <FaSolidChevronLeft />
            </SliderButton>
            <SliderButton next class="absolute right-[-60px] top-[50%] rounded-full bg-gray-300 w-[50px] h-[50px] hidden md:flex justify-center items-center active:scale-[0.9] text-white text-xl">
              <FaSolidChevronRight />
            </SliderButton>
          </div>
        </section>
        <section id="value" class="w-full max-w-[1600px] min-h-fit justify-between flex bg-white px-[20px] sm:px-[100px] py-[100px] flex-col">
          <h2 class="font-bold text-[40px] leading-10 mb-[10px]">LOOKING FORWARD:<br></br>SHARED VALUE</h2>
          <p class="font-light text-xl max-w-[800px]">As Stax•ai evolves and expands, we remain committed to establishing and nurturing relationships with partners who share our vision for freeing TPAs from thankless undertakings.</p>
          <div class="flex flex-wrap justify-between">
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner1} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner2} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner3} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner4} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner5} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner6} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner7} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner8} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            <div class="w-[90%] sm:w-[45%] md:w-[30%] h-[150px] flex items-center justify-center mt-[20px] transition-all duration-300">
              <img src={partner9} class="w-[70%] hover:scale-[1.01] hover:opacity-[0.7]"></img>
            </div>
            
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
