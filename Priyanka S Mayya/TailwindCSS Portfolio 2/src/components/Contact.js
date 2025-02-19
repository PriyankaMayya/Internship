import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex items-center">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wider">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Lets work <br></br> together!
              </h2>
            </motion.div>
          </div>
          <motion.form
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
          >
            <input
              className="bg-transparent border-b py-3 w-full placeholder:text-white focus:border-accent transition-all outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 w-full placeholder:text-white focus:border-accent transition-all outline-none"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 w-full placeholder:text-white focus:border-accent transition-all outline-none resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
