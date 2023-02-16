const HowItWorks = () => {
    return (  
        <section className="mt-24" id = "howitworks">
        <h1 className="text-[60px]  font-semibold leading-relaxed mb-5">HOW IT WORKS : </h1>
        <div className="flex justify-between items-center w-10/12 mx-auto">
            <div className="flex flex-col items-center">
                <img src = "/speaker.png" alt = "Speaker" className="w-[200px]"/>
                <i className="text-2xl font-medium text-center">PRONOUNCE</i>
            </div>
            <div className="flex flex-col items-center">
                <img src = "/tick.png" alt = "tick" className="w-[200px]"/>
                <i className="text-2xl font-medium text-center">GET VALIDATE</i>
            </div>
            <div className="flex flex-col items-center">
                <img src = "/box.png" alt = "box" className="w-[200px]"/>
                <i className="text-2xl font-medium text-center">GET CERTIFIED</i>
            </div>
        </div>
        </section>
    );
}
 
export default HowItWorks;