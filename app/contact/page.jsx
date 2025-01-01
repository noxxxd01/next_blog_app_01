import React from "react";

const Contact = () => {
  return (
    <div className="px-4 md:px-[10%] py-16 md:py-32 text-scampi-900">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg">
          We'd love to hear from you! Please fill out the form below or reach
          out to us using the contact information provided.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-scampi-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-scampi-300 rounded-md shadow-sm focus:outline-none focus:ring-scampi-500 focus:border-scampi-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-scampi-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-scampi-300 rounded-md shadow-sm focus:outline-none focus:ring-scampi-500 focus:border-scampi-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-scampi-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="mt-1 block w-full px-3 py-2 border border-scampi-300 rounded-md shadow-sm focus:outline-none focus:ring-scampi-500 focus:border-scampi-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-scampi-800 text-white px-6 py-2 rounded-full hover:bg-scampi-900 transition-all ease-in-out duration-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">Contact Information</h2>
            <p className="mt-2 text-scampi-700">Email: contact@bunbun.com</p>
            <p className="mt-2 text-scampi-700">Phone: +1 (123) 456-7890</p>
            <p className="mt-2 text-scampi-700">
              Address: 123 BunBun Street, Blog City, BC 12345
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Our Location</h2>
            <div className="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b6b1a1c!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1611815471234!5m2!1sen!2sau"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
