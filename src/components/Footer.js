const Footer = () => {
    return ( 
        <footer className="bg-[#D9D9D9] mt-20">
            <div className="max-w-[1050px] mx-auto p-10">
                <img src = "./footerlogo.png" alt = "logo"/>
                <p className="my-3">All Rights are Reserved. {new Date().getFullYear()}</p>
                <p>Made with ❤️️ by DANSU⚡</p>
            </div>
        </footer>
     );
}
 
export default Footer;