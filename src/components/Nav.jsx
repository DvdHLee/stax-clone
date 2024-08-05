import { A } from "@solidjs/router";
import logo from "../assets/logo.png";
import { VsChevronDown } from "solid-icons/vs";

function Nav() {
  return (
    <>
      <nav class="flex justify-center w-full fixed bg-[#151515] z-50">
        <div class="max-w-[1600px] w-full flex justify-between items-center text-white font-light m-3">
          <div class="justify-center items-center space-x-8 flex">
            <A
              href="/#"
              class="hover:opacity-[0.8] transition-all duration-200"
            >
              <img src={logo} alt="logo" class="h-[45px]" />
            </A>
            <div class="nav__item relative bg-[#151515] hidden md:flex">
              <div
                class="absolute text-white w-[160px] h-fit rounded-xl top-[100%] left-[50%] translate-x-[-50%]
                translate-y-[-20px] opacity-0 text-black space-y-2 p-3 pt-6 nav__drop flex-col transition-all duration-300 invisible bg-[#151515]"
              >
                <div class="hover:text-[#00C1EF] cursor-not-allowed">
                  OUR STORY
                </div>
                <div class="hover:text-[#00C1EF] cursor-not-allowed">
                  LEADERSHIP TEAM
                </div>
                <div class="hover:text-[#00C1EF] cursor-not-allowed">
                  SOC 2 TYPE II
                </div>
              </div>
              <A
                href="/company"
                class="flex items-center space-x-2 transition-all duration-300 nav__link relative z-100"
              >
                <p>COMPANY</p>
                <VsChevronDown class="nav__chevron transition-all duration-300" />
              </A>
            </div>
            <div class="nav__item relative bg-[#151515] hidden md:flex">
              <div
                class="absolute text-white w-[160px] h-fit rounded-xl top-[100%] left-[50%] translate-x-[-50%] 
              translate-y-[-20px] opacity-0 text-black space-y-2 p-3 pt-6 nav__drop flex-col transition-all duration-300 invisible bg-[#151515]"
              >
                <div class="hover:text-[#00C1EF] cursor-not-allowed">BLOG</div>
                <div class="hover:text-[#00C1EF] cursor-not-allowed">
                  E-BOOKS
                </div>
              </div>
              <A
                href="/education"
                class="flex items-center space-x-2 transition-all duration-300 nav__link"
              >
                <p>EDUCATION</p>
                <VsChevronDown class="nav__chevron transition-all duration-300" />
              </A>
            </div>
          </div>
          <div class="space-x-8 hidden md:flex">
            <button class="hover:text-[#00C1EF]  cursor-not-allowed">
              LOG IN
            </button>
            <button
              class="font-semibold w-[200px] h-[65px] bg-gradient-to-r from-[#FF813B] to-[#F15A24] 
            rounded-[32px] hover:scale-[1.05] transition-all duration-200 tracking-widest  cursor-not-allowed"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
