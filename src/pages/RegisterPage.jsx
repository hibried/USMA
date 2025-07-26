import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState("disabled");
    const [isChecked, setIsChecked] = useState(false);

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleCheckbox = (event) => {
        setIsChecked(event.target.checked);
    };

    const navigate = useNavigate();

    const handleSubmit = async () => {

        if(password !== confirmPassword) return toast.error("Password confirmation doesn't match");

        const payload = {
            email: email,
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
            // localStorage.setItem("accessToken", response.data.token);
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
    }, []);

    useEffect(() => {
        if(name.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0 && isChecked === true){
            setIsDisabled("");
        } else {
            setIsDisabled("disabled")
        }
    }, [name, email, password, confirmPassword, isChecked]);

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
                                <input onChange={changeName} type="text" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg mb-2 sm:mb-0" placeholder="Enter your full name" />
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Email Address</legend>
                                <input onChange={changeEmail} type="email" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg mb-2 sm:mb-0" placeholder="Enter your email address" />
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Password</legend>
                                <input onChange={changePassword} type="password" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg" placeholder="Enter your password" />
                                <legend className="hidden sm:block fieldset-legend text-[12px] font-normal pl-5 pb-2">Confirm Password</legend>
                                <input onChange={changeConfirmPassword} type="password" className="input input-lg bg-[#f2f2f2] border-[#e5e5e5] focus:border-[#007aff] border-[0.5px] w-full h-13 px-4 focus:outline-none rounded-lg" placeholder="Confirm your password" />
                                <div className="flex items-center gap-2 mt-2 sm:mt-4">
                                    <input onChange={handleCheckbox} type="checkbox" checked={isChecked} className="checkbox bg-[#f2f2f2] checked:bg-blue-500 text-white border-[#e5e5e5] border-[0.5px]" />
                                    <span className="text-[13px]">I agree to the Terms & Conditions</span>
                                </div>
                                <button onClick={handleSubmit} className="btn bg-[#007aff] active:bg-[#2e5b8c] text-white text-[16px] rounded-lg mt-5 sm:mt-7 h-12" disabled={isDisabled}>
                                    Sign up
                                </button>
                                <p className="text-[13px] text-center mt-5 sm:mt-4">
                                    Already have an account? <a href="/login" className="text-[#007aff] text-[13px] hover:underline ml-1">Sign in now</a>
                                </p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage