import { useState, useEffect } from "react";

function LandingPage() {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
      document.title = "ASG_D30 | Landing";
      document.documentElement.setAttribute('data-theme', theme);
    }, []);

    return (
        <div className="bg-[#C0DAE5] px-53">
            {/* Navbar */}
            <div className="flex justify-between py-5 px-30 bg-white">
                <div className="flex items-center gap-10">
                    <img src="/landing/Logo.png" alt="" />
                    <ul className="flex gap-7 font-semibold">
                        <li>For Candidates</li>
                        <li>For Employees</li>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-soft btn-primary rounded-lg">Sign in</button>
                    <button className="btn btn-primary rounded-lg ml-4">Sign up</button>
                </div>
            </div>
            {/* Hiring Process */}
            <div className="flex flex-col justify-center px-30 h-[750px] relative bg-white overflow-hidden">
                <div className="absolute right-10 bg-[#9c70e97c] w-[591px] h-[591px] rounded-full">
                    <img src="/landing/dashboard.png" className="absolute top-14 left-24 shadow-2xl rounded-xl h-120" alt="" />
                </div>
                <div className="z-1">
                    <h1 className="text-6xl font-bold leading-17 mb-5">Hiring process<br />made simple</h1>
                    <p className="text-[19px] mb-8">All-in-one recruiting platform that helps you hire the best<br/>candidate your mission needs.</p>
                    <div className="flex gap-10">
                        <button className="btn btn-primary">Start Hiring</button>
                        <a href="" className="flex items-center gap-2 link-primary">
                            <img src="/landing/play-icon.png" alt="" />
                            <span className="font-semibold text-[14px]">How it works</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage