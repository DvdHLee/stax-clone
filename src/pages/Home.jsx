import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { HiOutlineArrowLongRight } from 'solid-icons/hi'
import logo from "../assets/logolight.png";

function Home() {
  return (
    <div class="min-h-screen flex flex-col items-center">
      <Nav />
      <div class="grow text-white w-full max-w-[1600px]">
        <section id="landing" class="h-screen min-h-fit justify-center flex px-[100px] flex-col">
          <div class="text-[140px] font-bold width-[90%] flex justify-left leading-[140px]">
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
          <div class="opacity-[0.5] mt-[30px] text-[30px] font-light">SCROLL TO CONTINUE</div>
        </section>
        <section id="video" class="h-screen min-h-fit justify-center flex px-[100px] flex-col">
          <div class="text-[40px] opacity-[0.8] font-extralight max-w-[1000px] mb-[20px]">STAX•AI IS A REVOLUTIONARY SOLUTION THAT EMPOWERS TPAs TO STREAMLINE THEIR OPERATIONS AND ACHIEVE UNPARALLELED PRODUCTIVITY.</div>
          <div class="w-full bg-black h-[600px] flex justify-center items-center rounded-xl">VIDEO which I do not have :(</div>
        </section>
        <section id="today" class="min-h-fit justify-center flex px-[100px] flex-col mt-[200px]">
            <h2 class="h-fit text-left text-[40px] font-semibold mb-[10px]">TODAY</h2>
            <div class="bg-[#1E1E1E] rounded-xl w-full h-fit flex justify-between py-5 px-8 items-center mb-[100px]">
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
              <h1 class="text-[80px] font-bold text-[#00C1EF]">TRUST ACCOUNTING</h1>
              <p class="w-[50%] text-[20px]">Upload brokerage statements for automatic sorting, renaming, and precise filing into the respective client folders, all aligned with your existing naming conventions.</p>
              <div class="bg-black w-full h-[600px] flex justify-center items-center">VIDEO: https://youtu.be/jjYHxzJj6Xc</div>
            </div>
        </section>
        <section id="roi" class="min-h-fit justify-center flex px-[100px] flex-col mt-[200px] mb-[300px]">
          <h2 class="h-fit text-left text-[40px] font-semibold mb-[10px]">ROI CALCULATOR</h2>
          <div class="bg-[#1E1E1E] rounded-xl w-full h-[700px] flex items-center justify-center flex flex-col">
            <div class="flex justify-left w-[90%] translate-y-[-50px]">
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
      <Footer />
    </div>
  );
}

export default Home;
