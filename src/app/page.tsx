"use client"
import {supabase} from "@/supabase/client";
import {LoaderPinwheel} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import {toast} from "sonner";

export default function Home() {


  const [email,setEmail] = useState('')
  const [loading,setLoading] = useState(false)

  const insertEmail = async () => {

    if(email.trim() === "") {
      toast.error("Fill the email input to join the waitlist");
      return;  // stop execution if empty
    }
    try {
      setLoading(true)
      const {error} = await supabase
        .from('emails')
        .insert({email: email})

      if(error) {
        toast.error(error.message);
      } else {
        toast.success("Success!",{
          description: "You’ve been added to our waitlist. Stay tuned — we’ll be in touch soon!",
        });
      }

    } catch(error) {
      console.log(error)
    }
    finally {
      setLoading(false)
      setEmail('');
    }
  }


  return (
    <section className="overflow-x-clip h-screen px-4 w-full bg-gradient-to-br from-white to-[#9e98c8] py-20">
      <main className="flex items-center flex-col justify-center w-full">
        <div className="flex gap-1 items-center">
          <Image src={"/logo.png"} width={40} height={40} alt="logo image" />
          <h1 className="text-accent text-2xl font-bold tracking-wide ">RapidAds</h1>
        </div>
        <p className="mt-8 max-w-2xl leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-accent">
          We&#39;d love you to be apart of something big
        </p>

        <main className="px-5 py-8 rounded-lg mt-10 bg-gradient-to-br from-white to-[#cfcaee]">
          <h1 className="text-xl md:text-2xl text-center font-semibold">Join the waitlist</h1>
          <p className="text-start mt-2 max-w-xl font-medium ">
            to get early access, exclusive updates, and special rewards — directly in your inbox.
          </p>

          <div className="p-2 bg-gray-100 rounded-md mt-4">
            <div className="p-2 rounded-md bg-white flex flex-col md:flex-row gap-2 items-center">
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="px-2 md:py-1 py-2 border shadow-sm md:shadow-none md:border-none border-gray-200 rounded-md outline-none w-full" placeholder="Your email address" />
              <button onClick={insertEmail} className="px-6 py-2 rounded-md w-full font-medium tracking-wide md:w-36 bg-indigo-500 text-white">
                {loading ? <span className="flex gap-2 items-center"> <LoaderPinwheel className="animate-spin h-4 w-4" /> Subscribe</span> : <span>Subscribe</span>}
              </button>
            </div>
          </div>


        </main>

      </main>

    </section>
  );
}
