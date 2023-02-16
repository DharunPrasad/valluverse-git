
const DesktopNavbar = () => {
    return (
        <nav className="max-w-[1050px] mx-auto flex  justify-between items-center h-[30px] py-10 mt-10">
            <svg className="" width="60" height="58" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 59.4322V8C0 3.58172 3.58172 0 8 0H62C66.4183 0 70 3.58173 70 8V44.2055C70 47.7876 67.6188 50.9331 64.1712 51.9052L10.1711 67.132C5.06668 68.5713 0 64.7357 0 59.4322Z" fill="url(#paint0_linear_1_4)" />
                <defs>
                    <linearGradient id="paint0_linear_1_4" x1="-9.45946" y1="82.25" x2="73.9567" y2="-12.6265" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7DA900" />
                        <stop offset="0.614977" stop-color="#BDFF00" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex gap-20  text-[#FFFFFF] uppercase font-medium text-base ">
                <a href="#about" className="w-[80px] hover:text-primary hover:italic hover:font-semibold">About</a>
                <a href="#howitworks" className="w-[140px] hover:text-primary hover:italic hover:font-semibold">How It Works</a>
                <a href="#contact" className="w-[120px] hover:text-primary hover:italic hover:font-semibold">Contact</a>
            </div>
        </nav>
    );
}

export default DesktopNavbar;