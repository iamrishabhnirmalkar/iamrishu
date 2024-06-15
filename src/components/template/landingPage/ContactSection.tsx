"use client";
import React, { useState } from "react";
import Heading from "@/components/ui/Heading/Heading";
import Input from "@/components/ui/Input/Input";
import Textarea from "@/components/ui/Input/Textarea";
import Button02 from "@/components/ui/Button/Button";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted with values:", { name, email, message });

    // Generate WhatsApp message link
    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/7803002963?text=${encodedMessage}`;

    // Redirect to WhatsApp link
    window.location.href = whatsappLink;
  };
  return (
    <section className="lg:px-10 px-3">
      <Heading bgheading="Contact" heading="Contact" />
      <div className=" w-full flex justify-center items-center">
        <form action="" className="glassmorphism w-full lg:w-6/12	 px-2 py-10">
          <Input
            id="name"
            label="Names"
            type="text"
            className=""
            value={name}
            onChange={handleNameChange}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            className=""
            value={email}
            onChange={handleEmailChange}
          />
          <Textarea
            id="message"
            label="Message"
            className=""
            value={message}
            onChange={handleMessageChange}
          />
          <div className="flex justify-center items-center py-5">
            <Button02
              buttonText="Submit"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
