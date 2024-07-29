import { A } from "@solidjs/router";
import logo from "../assets/logo.png";
import { BiLogosLinkedin } from 'solid-icons/bi'
import { VsMail } from "solid-icons/vs";
import { AiFillYoutube } from 'solid-icons/ai'

function Footer() {
  return (
    <div class="flex justify-center w-full h-fit">
      <div class="max-w-[1600px] w-full h-fit flex flex-col py-5 mx-3">
        <div class="flex justify-between">
          <A href="/#">
            <img src={logo} alt="logo" class="h-[45px]" />
          </A>
          <button
            class="font-semibold w-[200px] h-[65px] bg-transparent rounded-[32px] transition-all duration-200 tracking-widest cursor-not-allowed
            border border-[#00C1EF] border-2 text-[#00C1EF] hover:bg-gradient-to-r from-[#00C1EF] to-[#3C85FF] hover:text-white"
          >
            GET STARTED
          </button>
        </div>
        <div class="border-t-[1px] w-[50%]" />
        <div class="flex w-fit text-white m-5 space-x-5">
          <div class="space-y-3">
            <A href="/company" class="text-2xl hover:text-[#00C1EF]">COMPANY</A>
            <div class="opacity-[0.5] cursor-not-allowed hover:text-[#00C1EF]">OUR STORY</div>
            <div class="opacity-[0.5] cursor-not-allowed hover:text-[#00C1EF]">LEADERSHIP TEAM</div>
            <div class="opacity-[0.5] cursor-not-allowed hover:text-[#00C1EF]">JOIN THE TPA REVOLUTION</div>
            <div class="opacity-[0.5] cursor-not-allowed hover:text-[#00C1EF]">SOC 2 TYPE II</div>
          </div>
          <div class="space-y-3"> 
            <A href="/education" class="text-2xl hover:text-[#00C1EF]">EDUCATION</A>
            <div class="opacity-[0.5] cursor-not-allowed hover:text-[#00C1EF]">BLOGS</div>
            <div class="opacity-[0.5] cursor-not-allowed hover:text-[#00C1EF]">E-BOOKS</div>
          </div>
        </div>
        <div class="px-5 flex justify-between w-full items-center">
          <div class="space-x-4 text-white flex">
            <div class="cursor-not-allowed hover:text-[#00C1EF]">Terms of Service</div>
            <div class="cursor-not-allowed hover:text-[#00C1EF]">Privacy Policy</div>
          </div>
          <div class="text-white flex space-x-5 items-center">
            <VsMail class="w-[40px] h-[40px] bg-[#D1D1D1] text-[#151515] p-1 rounded-[50%] cursor-not-allowed"/>
            <BiLogosLinkedin class="w-[40px] h-[40px] bg-[#D1D1D1] text-[#151515] p-1 rounded-[50%] cursor-not-allowed"/>
            <AiFillYoutube class="w-[40px] h-[40px] bg-[#D1D1D1] text-[#151515] p-1 rounded-[50%] cursor-not-allowed"/>
            <div class="w-[250px]">Copyright © 2019-2024 Stax.ai, Inc. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
