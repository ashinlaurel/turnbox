import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

const Contactus = () => {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const newform = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const [values, setValues] = useState(newform);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setLoading(true);
    axios
      .post("/form", values)
      .then((response) => {
        setValues(newform);
        // console.log("here");
        setModal(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        throw err;
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <div className="text-5xl tracking-tight leading-tight font-bold my-2 border-b border-black">
          Contact Us
        </div>
      </ScrollAnimation>

      <form class="my-10 w-3/4 lg:w-1/2" onSubmit={handleSubmit}>
        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder=""
                required
                name="firstname"
                value={values.firstname}
                onChange={handleInput}
              />
              <p class="hidden text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="lastname"
                placeholder=""
                value={values.lastname}
                onChange={handleInput}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
                required
                value={values.email}
                onChange={handleInput}
              />
              <p class="hidden text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                required
                name="message"
                value={values.message}
                onChange={handleInput}
              ></textarea>
              <p class="hidden text-gray-600 text-xs italic">
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
              </p>
            </div>
          </div>
          <div class="md:flex items-center justify-center">
            <div class="mx-auto ">
              <button
                class=" shadow bg-black hover:bg-gray-800 uppercase text-white font-bold py-3 px-8 "
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </form>
    </div>
  );
};

export default Contactus;
