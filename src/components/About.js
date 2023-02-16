
const content = [
    "VALLUVERSE⚡ is an Open Course Platform. It has an Exclusive Content of Literature like Thirukural etc. It will help the scholars to check the standard of their Philology knowledge.",

    "As an Beginning, It has only the Thirukural Recognition to help the scholars to check their Knowledge and the Common People to learn Philology free of cost. Also, It is an initiative “To make the people, Read the Thirukural in the Modern Way.”"
]

const About = () => {

    return (
        <section className="mt-5" id = "about">
        <h1 className="text-[60px]  font-semibold leading-relaxed mb-5">ABOUT : </h1>
            <ul className="text-[#D9D9D9] flex flex-col gap-5 text-2xl">
            {content.map(cont => (
                <li key={cont}>{cont}</li>
            ))}
         </ul>
        </section>
      );
}
 
export default About;