import React from "react";

function Contact() {
  return (
    <div className="flex  lg:flex-row gap-10 w-full">
      
      
      <div className=" w-full">
        <div>
          <h1 className="uppercase font-[font5] lg:text-[14vw] flex items-center justify-center lg:leading-[13vw] text-[17vw] sm:text-[13vw] md:text-[11vw] lg:p-5">Contact us</h1>
        </div>
        <div className="form p-4 flex items-center justify-center w-full ">
          <form
            action=""
            className="flex flex-col lg:w-1/2 w-full uppercase font-[font1]  gap-5 rounded-lg  "
          >
            <input
              className="bg-zinc-300  p-3 rounded-full outline-none"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              className="bg-zinc-300  p-3 rounded-full outline-none"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <input
              className="bg-zinc-300  p-3 rounded-full outline-none"
              type="text"
              placeholder="Enter Your Phone no."
            />
            <div className="flex ">
              <button className=" w-full flex items-center bg-[var(--foreground)] text-[var(--background)] justify-center rounded-full p-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
