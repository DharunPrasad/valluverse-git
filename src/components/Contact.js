const Contact = () => {
    return (
        <section className="mt mt-24" id = "contact">

            <div className="flex gap-10 justify-between">

                <div>
                <h3 className="text-[60px]  font-semibold leading-relaxed mb-5">CONTACT US : </h3>

                    <p className="text-2xl font-normal text-[#DDDDDD]">It will make you to feel the words! and <br></br>
                        Door of Moral!</p>
                    <div className="flex justify-between items-center mt-5">
                        <div className="flex flex-col items-center">
                            <img src="/speaker.png" alt="Speaker" className="w-[130px]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/tick.png" alt="tick" className="w-[130px]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/box.png" alt="box" className="w-[130px]" />
                        </div>
                    </div>
                    <p className="text-3xl text-center mt-5">நன்றி :)</p>
                </div>
                <form className="flex flex-col gap-5 mt-5">
                    <input type="text" placeholder="Your Name" className="h-14 outline-primary rounded-md py-3 px-5 text-black placeholder:text-[#111] font-medium" />
                    <div className="flex gap-5">
                        <input type="email" placeholder="Your Email" className="h-14 outline-primary rounded-md py-3 px-5 text-black placeholder:text-[#111] font-medium" />
                        <input type="tel" placeholder="Your Phone" className="h-14 outline-primary rounded-md py-3 px-5 text-black placeholder:text-[#111] font-medium"/>
                    </div>
                    <textarea placeholder="Your Message" className="outline-primary h-36 rounded-md py-3 px-5 text-black placeholder:text-[#111] font-medium">

                    </textarea>
                    <button className="bg-primary  text-[#111] py-3 px-4 font-bold rounded-md"><i>SUBMIT</i></button>
                </form>
            </div>

        </section>
    );
}

export default Contact;