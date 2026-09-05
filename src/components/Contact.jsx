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
  const [status, setStatus] = useState(null); // "success" | "error" | null

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
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col lg:flex-row items-center justify-between mb-40 gap-10 px-4 lg:px-0"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-140 mx-auto lg:mx-0 lg:ml-40"
      >
        <div className="mt-3 w-full text-left">
          <h2 className="text-center text-foreground text-3xl font-bold pt-10">
            Get In Touch with Me
          </h2>

          <div>
            <label htmlFor="name" className="block pt-8 text-foreground">
              Name
            </label>
            <input
              id="name"
              className="rounded-md w-full h-12 mt-3 bg-[#18181b] text-white border-2 border-transparent focus:border-primary focus:outline-none px-3"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block pt-5 text-foreground">
              Email
            </label>
            <input
              id="email"
              className="rounded-md w-full h-12 mt-3 bg-[#18181b] text-white border-2 border-transparent focus:border-primary focus:outline-none px-3"
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block pt-5 text-foreground">
              Message
            </label>
            <textarea
              id="message"
              className="rounded-md w-full h-32 mt-3 bg-[#18181b] text-white border-2 border-transparent focus:border-primary focus:outline-none p-3 resize-none"
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer hover:text-primary mt-5 w-full h-12 bg-amber-50 text-black rounded-md font-bold text-center flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-400 text-sm">
              Thanks for reaching out — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 text-sm">
              Something went wrong sending your message. Please try again or
              email me directly.
            </p>
          )}
        </div>
      </form>

      <div className="hidden lg:flex justify-center mr-20">
        <img
          className="w-full max-w-[500px] lg:w-123 lg:h-130 relative lg:top-30"
          src="/connect.png"
          alt="Illustration of a person sending a message"
        />
      </div>
    </section>
  );
};

export default Contact;
