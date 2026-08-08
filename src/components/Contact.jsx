import React from 'react'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {


  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("EmailJS Error:", error);
console.log("Status:", error.status);
console.log("Text:", error.text);


      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    /*{Left}*/
    <section id="contact" className=' relative flex items-center justify-between mb-40 ' >
        <form  ref={formRef} onSubmit={handleSubmit} >
        <div  className=' mt-3 w-140 h-120 text-left ml-40'>

            <h2 className='text-center  text-white text-3xl font-bold pt-10'> Get In Touch with Me</h2>

<div className="">
       <p className='pt-8'> Name </p>
       <input className=' rounded-md w-140 h-12 mt-3 bg-[#18181b] text-white border-2' type="text" 
        name="name" placeholder=" Your name" value={form.name} onChange={handleChange} required />
</div>

<div className="box">
       <p className='pt-5'> Email </p>
       <input className=' rounded-md w-140 h-12 mt-3 bg-[#18181b] text-white border-2' type="email"
        name="email" placeholder="Your email address" value={form.email} onChange={handleChange} required />
</div>

<div className="big-box">
       <p className='pt-5' > Message </p>
       <textarea className=' rounded-md w-140 h-40 mt-3 bg-[#18181b] text-white border-2'
       name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
</div>

<div className=' cursor-pointer hover:text-primary mt-5 w-140 h-12 bg-amber-50 text-black rounded-md font-bold text-center flex items-center justify-center'>
    <button type="submit" >
         {loading ? "Sending..." : "Send Message"}
    </button>
</div>
         
          
               

        </div>

        </form>

        <div className=' flex justify-center mr-20'>
            
        <img className='w-123 h-130 relative top-30' 
        src='/connect.png' alt=""/>


        </div>


    </section>
  )
}

export default Contact