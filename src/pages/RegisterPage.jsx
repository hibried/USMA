import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate();

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleSubmit = async () => {
        const payload = {
            username: username,
            password: password,
        };

        const headers = {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }

        const loading_toast = toast.loading("Registering...");

        try {
            const response = await axios.post('https://reqres.in/api/register', payload, headers);
            localStorage.setItem("accessToken", response.data.token);
            setTimeout(() => {
                navigate("/login");
                toast.dismiss(loading_toast);
                toast.success('Successfully registered');
            }, 2000);
        } catch (error) {
            console.error(error.response.data.error);
            toast.dismiss(loading_toast);
            toast.error(error.response.data.error);
        }
    };

    useEffect(() => {
        document.title = "ASG_D30 | Register";
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen sm:bg-black sm:px-65 sm:py-15">
            <div className="flex w-full h-full rounded-3xl overflow-y-auto sm:overflow-hidden shadow-lg sm:min-w-[499px]">
                <div className="hidden xl:flex items-end bg-[url(/register/tower.webp)] bg-cover bg-center h-full w-full">
                    <p className="text-white text-[12px] ml-13 mb-5">Photo by <a href="https://unsplash.com/@irrabagon" target="_blank" className="underline">Alexandr Popadin</a></p>
                </div>
                <div className="flex flex-col justify-between w-full xl:w-[499px] px-4 sm:px-13 pt-7 sm:pt-13 pb-5 bg-white shrink-0">
                    <div>
                        <div className="flex items-center gap-2 mb-10 sm:mb-12">
                            <img src="/login/Avatar-UI-Unicorn-V2.png" className="w-11 sm:w-13" alt="" />
                            <h1 className="text-[#1A1A1A] text-[17px] sm:text-[20px] font-bold sm:tracking-wide">USMA</h1>
                        </div>
                        <div>
                            <h3 className="text-[#1A1A1A] text-[23px] font-bold tracking-wide">Hello!</h3>
                            <p className="mb-5 sm:mb-4">Sign Up to Get Started</p>
                            <fieldset className="fieldset">
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Full Name</legend>
                                <input type="text" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg mb-2 sm:mb-0" placeholder="Enter your full name" />
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Email Address</legend>
                                <input type="email" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg mb-2 sm:mb-0" placeholder="Enter your email address" />
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Password</legend>
                                <input type="password" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg" placeholder="Enter your password" />
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Confirm Password</legend>
                                <input type="password" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg" placeholder="Confirm your password" />
                                <div className="flex items-center gap-2 mt-2 sm:mt-4">
                                    <input type="checkbox" className="checkbox bg-[#f2f2f2] checked:bg-blue-500 text-white border-[#e5e5e5] border-[0.5px]" />
                                    <span className="text-[13px]">I agree to the Terms & Conditions</span>
                                </div>
                                <button className="btn bg-[#007aff] active:bg-[#2e5b8c] text-white text-[16px] rounded-lg mt-5 sm:mt-7 h-12">
                                    Sign in
                                </button>
                                <p className="text-[13px] text-center mt-5 sm:mt-4">
                                    Don't have an account? <a href="" className="text-[#007aff] text-[13px] hover:underline ml-1">Sign up now</a>
                                </p>
                            </fieldset>
                        </div>
                    </div>
                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="/login/Figma.png" alt="" />
                            <a href="https://www.figma.com/@uiunicorn" target="_blank" className="text-[#007aff] text-[13px] ml-1">@uiunicom</a>
                        </div>
                        <p className="text-[13px] text-[#666666]">@ Perfect Login 2021</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default RegisterPage