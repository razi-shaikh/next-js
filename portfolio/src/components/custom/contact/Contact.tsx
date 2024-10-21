import { CONTACT } from "@/constants";
import React from "react";

// const Contact = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-20">
//       <h1 className="my-20 text-center text-4xl">
//         Contact
//         <span className="text-neutral-500"> Us</span>
//       </h1>
//       <div className="text-center tracking-tighter">
//         <p className=" my-4">{CONTACT.address}</p>
//         <p className=" my-4">{CONTACT.phoneNo}</p>
//         <p className=" my-4 underline">{CONTACT.email}</p>
//       </div>
//     </div>
//   );
// };

const Contact = () => {
  return (
    <div className="py-16 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-around flex-col md:flex-row mb-4">
        <div>
          <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/70">
            Get in <span className="text-orange-400">touch</span>
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
          >
            {CONTACT.email}
          </a>
        </div>
        {/* address */}
        <div className="text-white/70 mt-12">
          <div>
            <p className=" text-lg mb-1">Phone No</p>
            <a
              href={CONTACT.phoneNo}
              className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
            >
              {CONTACT.phoneNo}
            </a>
          </div>

          <div>
            <p>Address</p>
            <p>Plot - 17, Line - L, Room - 2, Road - 9</p>
            <p>Baiganwadi, Govandi, Mumbai</p>
            <p>Maharashtra, India</p>
            <p>Pin Code 400043</p>
          </div>
        </div>
      </div>

      <form
        action=""
        className="max-w-[1200px] mx-auto flex flex-wrap justify-between"
      >
        {/* email and subject */}
        <div className="w-full md:w-[48%] space-y-6">
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email <span className="text-red-500 text-sm font-medium">*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="your@example.com"
              required
              className=" w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          {/* subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="what is this about??"
              className=" w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>
        {/* message */}
        <div className="w-full md:w-[48%] mt-6 md:mt-0">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Message <span className="text-red-500 text-sm font-medium">*</span>
          </label>
          <textarea
            id="message"
            rows={8}
            required
            placeholder="Your message here ..."
            className="w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        {/* button */}
        <div className="w-full md:w-[48%] mt-6 md:mt-4 md:text-right">
          <button
            type="submit"
            className="inline-block h-16 px-16 bg-transparent border border-gray-400 text-gray-400 font-medium rounded-lg hover:bg-white/70 hover:text-black hover:font-bold"
          >
            Submit →
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
