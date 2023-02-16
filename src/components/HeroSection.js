const Hero = () => {
    return (
        <header className="">
            <section className="flex items-center gap-10">
            <div className="flex flex-col gap-3 text-[#FFFFFF]">
            <h1 className="text-[60px]  font-semibold leading-snug">WELCOME TO <i>VALLUVERSE</i></h1>
            <p className="text-2xl font-normal text-[#DDDDDD]">It is the door of moral and feel the words!</p>
            <button className="mt-5 text-black w-fit uppercase py-3 px-16 rounded-lg bg-primary font-semibold">
                <i>Explore</i></button>
            </div>
            <img src = "/tamil.png" alt = "THAMIZH"/>
            </section>
        </header>
      );
}
 
export default Hero;