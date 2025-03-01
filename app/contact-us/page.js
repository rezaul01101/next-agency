import PageHeader from "@/components/PageHeader";
import Button from "@/components/ui/Button";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


const ContactUs = () => {
  return (
    <>
      <PageHeader name="Contact us" />
      <div className="bg-white py-28">
        <div className="container mx-auto flex justify-between items-center gap-20">
          <div>
            <div className="bg-orange-400 text-slate-900 inline-block px-[12px] py-[8px] rounded-md font-medium mb-2">
              Contact us
            </div>
            <h3 className="text-[50px] font-extrabold leading-[60px] my-2">
              Get in Touch Let's Start the Conversation
            </h3>
            <p className="font-Figtree leading-[30px] text-[18px] text-justify my-4 text-slate-500">
              We're here to help you find the right staffing solutions for your
              needs. Whether you're a company looking to hire top talent or a
              candidate seeking your next career opportunity,
            </p>
            <div className="flex justify-between my-8 border-t">
              <div className="pt-8 border-r w-full">
                <div className="w-[50px] h-[50px] cursor-pointer bg-orange-100 text-orange-500 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
                  <IoCallOutline className="text-xl" />
                </div>
                <p className=" my-2">Gives us a Call</p>
                <a className="text-xl text-slat-900 font-bold" href="tel:123-456-7890">123-456-7890</a>
              </div>
              <div className="pt-8 w-full pl-8">
              <div className="w-[50px] h-[50px] cursor-pointer bg-orange-100 text-orange-500 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
                  <CiMail className="text-xl" />
                </div>
                <p className="my-2">Send me Mail</p>
                <a className="text-xl text-slat-900 font-bold" href="mailto:rezaul01101@gmail.com">rezaul01101@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="p-[32px] w-full bg-[#F5F3F4]">
            <h3 className="text-3xl text-slate-800 font-bold font-Figtree">
              Send us a Message
            </h3>
            <p className="leading-6 text-xl my-5">
              Feel free to reach out to us with any questions, inquiries, or
              staffing requirements you may have. Our experienced
            </p>
            <div className="grid grid-cols-2 gap-6 my-3">
              <input
                type="text"
                placeholder="First Name"
                className="border bg-[#E9E8E9] text-xl p-4 focus:outline-none placeholder-[#60656E] font-medium"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border bg-[#E9E8E9] text-xl p-4 focus:outline-none placeholder-[#60656E] font-medium"
              />
              <input
                type="email"
                placeholder="Email"
                className="border bg-[#E9E8E9] text-xl p-4 focus:outline-none placeholder-[#60656E] font-medium"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border bg-[#E9E8E9] text-xl p-4 focus:outline-none placeholder-[#60656E] font-medium"
              />
              <input
                type="text"
                placeholder="Subject"
                className="col-span-2 border bg-[#E9E8E9] text-xl p-4 focus:outline-none placeholder-[#60656E] font-medium"
              />
              <textarea
                rows={6}
                placeholder="Message"
                className="col-span-2 border bg-[#E9E8E9] text-xl p-4 focus:outline-none placeholder-[#60656E] font-medium"
              ></textarea>
            </div>
            <Button text="Submit Now" className={"my-2"} />
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518384286!2d-0.26640253299975086!3d51.52852620463015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1740806515167!5m2!1sen!2sbd" width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default ContactUs;
