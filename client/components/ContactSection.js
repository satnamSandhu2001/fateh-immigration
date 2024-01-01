import React, { useState } from 'react';
import { BsTelephonePlus } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';

const initialFormValue = {
  name: '',
  email: '',
  phone: '',
  message: '',
  subject: '',
};
const ContactSection = () => {
  const [formData, setformData] = useState(initialFormValue);
  const [loading, setloading] = useState(false);

  const handleInput = (e) => {
    if (e.target.name === 'phone') {
      e.target.value = e.target.value.toString().slice(0, 10);
      e.target.value = parseInt(e.target.value);
    }
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setloading(true);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      setloading(false);
      if (res.status === 200) {
        window.alert(
          "Thank's for contacting us, We will get back to you shortly."
        );
        setformData(initialFormValue);
      }
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container px-6 sm:px-0 mx-auto grid lg:grid-cols-[3fr_2fr] gap-10">
        <div>
          <p className="text-black/40 uppercase font-medium text-sm tracking-wider mb-3">
            send us an email
          </p>
          <h3 className="text-slate-800 text-4xl leading-tight font-semibold mb-6">
            Feel free to write
          </h3>

          <form onSubmit={submitHandler}>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-black/60"
                >
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  required
                  type="text"
                  maxLength={50}
                  placeholder="Full Name"
                  name="name"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md focus:ring-orange-400-500 focus:border-orange-400-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold text-black/60"
                >
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  required
                  type="email"
                  maxLength={50}
                  placeholder="Johndoe@example.com"
                  name="email"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md focus:ring-orange-400-500 focus:border-orange-400-500"
                />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-4">
              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-bold text-black/60"
                >
                  Mobile no.
                </label>
                <input
                  value={formData.phone}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  required
                  type="number"
                  placeholder="91234XXXXX"
                  name="phone"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md focus:ring-orange-400-500 focus:border-orange-400-500"
                />
              </div>
              {/* subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-bold text-black/60"
                >
                  Subject
                </label>
                <input
                  value={formData.subject}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  required
                  type="text"
                  maxLength={150}
                  placeholder="Reason of enquiry..."
                  name="subject"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md focus:ring-orange-400-500 focus:border-orange-400-500"
                />
              </div>
            </div>
            {/* message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold text-black/60"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => {
                  handleInput(e);
                }}
                required
                maxLength={400}
                placeholder="Your Message Here..."
                name="message"
                className="block w-full p-4 text-black border border-gray-300 rounded-lg  sm:text-md focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="flex gap-2">
              <button
                type="reset"
                disabled={loading ? true : false}
                onClick={() => setformData(initialFormValue)}
                className="hidden sm:inline-block text-center text-white bg-red-500 px-12 py-4 mt-4 hover:bg-red-600 duration-500"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={loading ? true : false}
                className="w-full sm:w-fit text-center text-white bg-red-500 px-12 py-4 mt-4 hover:bg-red-600 duration-500"
              >
                {loading ? (
                  <div>
                    <span className="h-3 aspect-square inline-block border-t-2 border-white rounded-full animate-spin mr-3"></span>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="text-black/40 uppercase font-medium text-sm tracking-wider mb-3">
            need any help?
          </p>
          <h3 className="text-slate-800 text-4xl leading-tight font-semibold mb-6">
            Get in touch with us
          </h3>
          <p className="text-black/50 leading-relaxed font-medium">
            Do you have any questions, comments, or concerns? Contact our team
            to receive assistance with any of our services.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <a
              href="tel:+919716897168"
              target="_blank"
              className="flex gap-3 sm:gap-6 items-stretch group cursor-pointer"
            >
              <div className="bg-black group-hover:bg-red-500 duration-300 text-white flex items-center justify-center px-5 md:px-8">
                <BsTelephonePlus size="20px" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-3 text-slate-800">
                  Have any question?
                </p>
                <p className="text-black/50 text-lg font-medium">
                  +91 97168-97168
                </p>
              </div>
            </a>
            <a
              href="mail:fatehconsultants@outlook.com"
              target="_blank"
              className="flex gap-3 sm:gap-6 items-stretch group cursor-pointer"
            >
              <div className="bg-black group-hover:bg-red-500 duration-300 text-white flex items-center justify-center px-5 md:px-8">
                <MdOutlineEmail size="20px" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-3 text-slate-800">
                  Write email
                </p>
                <p className="text-black/50 text-lg font-medium">
                  fatehconsultants@outlook.com
                </p>
              </div>
            </a>
            {/* address */}
            <a
              href="https://goo.gl/maps/gU82NFuVFupn7wiu9"
              target="_blank"
              className="flex gap-3 sm:gap-6 items-stretch group cursor-pointer"
            >
              <div className="bg-black group-hover:bg-red-500 duration-300 text-white flex items-center justify-center px-5 md:px-8">
                <FiMapPin size="20px" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-3 text-slate-800">
                  Visit anytime
                </p>
                <p className="text-black/50 text-lg font-medium">
                  Dr. Kehar Singh Marg, Kkp Bypass, Muktsar, Punjab, India
                  152026
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
