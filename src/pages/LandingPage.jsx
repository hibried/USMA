import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();

    function login() {
        navigate('/login');
    }

    function register() {
        navigate('/register');
    }

    useEffect(() => {
      document.title = "ASG_D30 | Landing";
    }, []);

    return (
        <div className="bg-[#C0DAE5] xl:px-26 2xl:px-53">
            {/* Navbar */}
            <div className="flex justify-between py-5 px-5 sm:px-10 lg:px-18 xl:px-30 bg-white">
                <div className="flex items-center gap-10">
                    <img src="/landing/Logo.png" alt="" />
                    <ul className="hidden lg:flex gap-7 font-semibold">
                        <li><a href="">For Candidates</a></li>
                        <li><a href="">For Employees</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={login} className="hidden sm:block btn bg-[#ede9fe] text-[#7c3aed] rounded-lg">Sign in</button>
                    <button onClick={register} className="hidden sm:block btn bg-[#7c3aed] text-white rounded-lg">Sign up</button>
                    <div className="lg:hidden dropdown dropdown-end ml-2">
                        <div tabIndex={0} role="button">
                            <img src="/landing/more.png" className="cursor-pointer" alt="" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-46 p-2 shadow-sm">
                            <li><a href="">For Candidates</a></li>
                            <li><a href="">For Employees</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li className="flex sm:hidden flex-row gap-2 mt-4">
                                <button onClick={login} className="btn bg-[#ede9fe] text-[#7c3aed] rounded-lg">Sign in</button>
                                <button onClick={register} className="btn bg-[#7c3aed] text-white rounded-lg">Sign up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Hiring Process */}
            <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-18 xl:px-30 pt-10 sm:pt-19 lg:pt-0 lg:h-[750px] relative bg-white overflow-hidden">
                <div className="z-1 mb-11 sm:mb-20 lg:mb-0">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-11 sm:leading-15 lg:leading-18 mb-4 lg:mb-5">Hiring process<br className="hidden lg:block" /> made simple</h1>
                    <p className="text-lg mb-8 sm:mb-7">
                        All-in-one recruiting platform that helps you hire<br className="hidden lg:block" /> the best candidate your mission needs.
                    </p>
                    <div className="flex gap-9">
                        <button onClick={register} className="btn bg-[#7c3aed] text-white rounded-lg p-6">Sign up</button>
                        <a href="" className="flex items-center gap-2 link-primary">
                            <img src="/landing/play-icon.png" alt="" />
                            <span className="text-[#7c3aed] text-[14px] font-semibold">How it works</span>
                        </a>
                    </div>
                </div>
                <div className="relative self-center lg:absolute lg:right-8 bg-[#9c70e97c] w-[298px] h-[298px] sm:w-[591px] sm:h-[591px] rounded-full shrink-0">
                    <img src="/landing/dashboard.png" className="absolute top-10 left-16 sm:top-19 sm:left-31 shadow-lg rounded-lg scale-112" alt="" />
                </div>
            </div>
            {/* Companies */}
            <div className="bg-white px-5 sm:px-10 lg:px-18 xl:px-30 py-19 sm:py-29 lg:py-0">
                <h4 className="text-center text-[24px] font-bold mb-2 sm:mb-6 leading-8">Over 50,000 people & companies use Landify</h4>
                <div className="flex flex-wrap justify-center">
                    <img src="/landing/airbnb.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/hubspot.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/google.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/microsoft.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/walmart.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/Gatsby.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/BookMyShow.png" className="object-contain px-5 py-4 w-35" alt="" />
                    <img src="/landing/fedex.png" className="object-contain px-5 py-4" alt="" />
                    <img src="/landing/Strapi.png" className="object-contain px-5 py-4 w-35" alt="" />
                    <img src="/landing/OLA.png" className="object-contain px-5 py-4 w-30" alt="" />
                    <img src="/landing/OYO.png" className="object-contain px-5 py-4 w-26" alt="" />
                </div>
            </div>
            {/* Features */}
            <div className="bg-white px-5 sm:px-10 lg:px-18 xl:px-30 lg:pt-30 pb-12 md:pb-20 lg:pb-24 relative">
                <div className="absolute top-[-1.15%] sm:top-[-5%] lg:top-17 right-0 sm:right-2 md:right-8 bg-[#9c70e921] w-[250px] h-[250px] sm:w-[424px] sm:h-[424px] md:w-[550px] md:h-[550px] rounded-full shrink-0">
                </div>
                <h3 className="text-4xl md:text-5xl font-bold leading-15 mb-10 sm:mb-14 md:mb-19 relative">Discover the key features</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 relative">
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Mobile<br className="hidden md:block" /> Responsive</h4>
                        <img src="/landing/Property 1=01.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">User<br className="hidden md:block" /> Friendly</h4>
                        <img src="/landing/Property 1=02.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Well Organized Layers</h4>
                        <img src="/landing/Property 1=03.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Easily<br className="hidden md:block" /> Customisable</h4>
                        <img src="/landing/Property 1=04.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Better<br className="hidden md:block" /> Components</h4>
                        <img src="/landing/Property 1=05.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Multiple<br className="hidden md:block" /> Blocks</h4>
                        <img src="/landing/Property 1=06.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Robust<br className="hidden md:block" /> Workflow</h4>
                        <img src="/landing/Property 1=07.png" className="w-8" alt="" />
                    </div>
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 h-42 md:h-54">
                        <h4 className="text-2xl lg:text-3xl font-bold">Mobile<br className="hidden md:block" /> Responsive</h4>
                        <img src="/landing/Property 1=08.png" className="w-8" alt="" />
                    </div>
                </div>
            </div>
            {/* Get Started */}
            <div className="bg-[#381b6a] px-5 sm:px-10 lg:px-28 pt-22">
                <h3 className="text-4xl text-white md:text-5xl font-bold leading-15 mb-8 sm:mb-10 md:mb-8 relative">Get started with Landify<br className="hidden md:block" /> today.</h3>
                <a href="/register" className="flex gap-2 text-[#1DB5BE] font-semibold mb-22">Sign up for a free account <img src="/landing/Icon=arrow-right.png" alt="" /></a>
                <img src="/landing/dark_2.png" className="w-full object-cover rounded-t-lg border-1 border-gray-600 border-b-0" alt="" />
            </div>
            {/* Footer */}
            <div className="bg-black px-5 sm:px-10 lg:px-28 pt-20 md:pt-24 pb-6 sm:pb-7 relative overflow-hidden">
                <img src="/landing/Color=White.png" className="absolute top-0 -left-50 opacity-[0.05]" alt="" />
                <div className="lg:grid grid-cols-[1fr_1fr] relative mb-21 md:mb-33">
                    <img src="/landing/Color=Light.png" className="mb-12" alt="" />
                    <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-8 sm:gap-0 text-white">
                        <div className="min-w-[206px]">
                            <h5 className="text-2xl font-semibold mb-4 sm:mb-8">Product</h5>
                            <ul className="flex flex-col gap-3">
                                <li><a href="">Overview</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Tutorials</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Releases</a></li>
                            </ul>
                        </div>
                        <div className="min-w-[206px]">
                            <h5 className="text-2xl font-semibold mb-4 sm:mb-8">Company</h5>
                            <ul className="flex flex-col gap-3">
                                <li><a href="">About</a></li>
                                <li><a href="">Press</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Partners</a></li>
                            </ul>
                        </div>
                        <div className="min-w-[206px]">
                            <h5 className="text-2xl font-semibold mb-4 sm:mb-8">Support</h5>
                            <ul className="flex flex-col gap-3">
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Terms of service</a></li>
                                <li><a href="">Legal</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Status</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-around md:justify-between items-center gap-9 sm:gap-0 relative">
                    <p className="text-white text-[14px]">© 2021 Landify UI Kit. All rights reserved</p>
                    <div className="flex gap-4">
                        <a href=""><img src="/landing/instagram.svg" alt="" /></a>
                        <a href=""><img src="/landing/dribble.svg" alt="" /></a>
                        <a href=""><img src="/landing/twitter.svg" alt="" /></a>
                        <a href=""><img src="/landing/youtube.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage