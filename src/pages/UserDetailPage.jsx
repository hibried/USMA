import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'sonner';
import axios from "axios"

function UserDetailPage() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const [isOpen, setIsOpen] = useState(false);
    
    async function fetchSingleUser() {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });
            setUser(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const navigate = useNavigate();

    const handleLogOut = () => {
        const loading_toast = toast.loading("Logging out...");
        localStorage.removeItem("accessToken");
        setTimeout(() => {
            navigate("/landing");
            toast.dismiss(loading_toast);
            toast.success('Successfully logged out');
        }, 2000);
    };

    useEffect(() => {
      fetchSingleUser();
        if(isLoading){
            document.title = "ASG_D30 | Loading...";
        } else {
            document.title = `ASG_D30 | ${Object.keys(user).length > 0 ? (user.first_name + "'s Detail") : "Add New Member"}`;
        }
    }, [user])
    
    return (
        <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
            <input onChange={() => setIsOpen(!isOpen)} id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-white w-full px-4 md:px-9 border-b-1 border-b-gray-300 sticky top-0">
                    <div className="navbar-start flex flex-none gap-7">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        <label className="hidden md:flex input rounded-full bg-[#f5f6fa]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                    <div className="navbar-end flex-none">
                        <button className="md:hidden btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar lg:tooltip lg:tooltip-left" data-tip="Eve Jolt">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content bg-white rounded-box z-1 mt-4 w-52 p-0 shadow-lg">
                                <li><a className="px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm"><img src="/home/account.png" alt="" /> Manage Account</a></li>
                                <li className="m-0"></li>
                                <li><a className="px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm"><img src="/home/key.png" className="mr-1" alt="" /> Change Password</a></li>
                                <li className="m-0"></li>
                                <li><a className="px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm"><img src="/home/reload.png" className="mr-1" alt="" /> Activity Log</a></li>
                                <li className="m-0"></li>
                                <li><a onClick={handleLogOut} className="px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm"><img src="/home/logout.png" className="mr-1" alt="" /> Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                <div className="p-3 pt-5 sm:p-8">
                    <div className="flex justify-between items-center mb-3 sm:mb-6">
                        <h1 className="text-2xl sm:text-[32px] font-semibold">{Object.keys(user).length > 0 ? (user.first_name + "'s Detail") : "Add New Member"}</h1>
                        <button className="btn btn-primary text-[12px] sm:text-[14px] rounded-lg sm:py-6 btn-sm sm:btn-md">{Object.keys(user).length > 0 ? "Update Now" : "Add Now"}</button>
                    </div>
                    <div className="flex flex-col items-center bg-white bg-[url('/Pattern.png')] min-w-66 py-12 rounded-3xl">
                        <img src={Object.keys(user).length > 0 ? user.avatar : "/detail/empty_ava.png"} className="w-[80px] h-[80px] mb-5 rounded-full" alt="" />
                        <a href="" className="text-sm text-[#4379ee] font-semibold text-center mb-7">{Object.keys(user).length > 0 ? "Edit Photo" : "Upload Photo"}</a>
                        <fieldset className="fieldset grid lg:grid-cols-2 gap-13">
                            <div>
                                <legend className="fieldset-legend text-sm text-[#adadad] mb-1">First Name</legend>
                                <input type="text" className="input w-90 bg-[#f5f6fa] border-gray-200 focus:outline-none" placeholder="Enter your first name" value={user?.first_name} />
                            </div>
                            <div>
                                <legend className="fieldset-legend text-sm text-[#adadad] mb-1">Last Name</legend>
                                <input type="text" className="input w-90 bg-[#f5f6fa] border-gray-200 focus:outline-none" placeholder="Enter your last name" value={user?.last_name} />
                            </div>
                            <div>
                                <legend className="fieldset-legend text-sm text-[#adadad] mb-1">Your Email</legend>
                                <input type="email" className="input w-90 bg-[#f5f6fa] border-gray-200 focus:outline-none" placeholder="Enter your email" value={user?.email} />
                            </div>
                            <div>
                                <legend className="fieldset-legend text-sm text-[#adadad] mb-1">Phone Number</legend>
                                <input type="tel" className="input w-90 bg-[#f5f6fa] border-gray-200 focus:outline-none" placeholder="Enter your phone number" value={Object.keys(user).length > 0 ? "0812-3456-7890" : ""} />
                            </div>
                            <div>
                                <legend className="fieldset-legend text-sm text-[#adadad] mb-1">Date of Birth</legend>
                                <input type="date" className="input w-90 bg-[#f5f6fa] border-gray-200 focus:outline-none" placeholder="Enter your birthdate" value={Object.keys(user).length > 0 ? "2000-01-01" : ""} />
                            </div>
                            <div>
                                <legend className="fieldset-legend text-sm text-[#adadad] mb-1">Browsers</legend>
                                <select defaultValue="Pick a browser" className="select bg-[#f5f6fa] w-44 border-gray-200 focus:outline-none">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar"></label>
                <ul className="menu bg-white min-h-full lg:w-60 border-r-1 border-r-gray-300 p-0 pt-4">
                    {/* Sidebar content here */}
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.15625 2.94922C4.78906 1.31641 6.73698 0.5 9 0.5C11.263 0.5 13.1966 1.31641 14.8008 2.94922C16.4336 4.55339 17.25 6.48698 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.48698 1.55208 4.55339 3.15625 2.94922ZM13.8555 3.89453C12.5091 2.54818 10.8906 1.875 9 1.875C7.10938 1.875 5.49089 2.54818 4.14453 3.89453C2.79818 5.24089 2.125 6.85938 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 6.85938 15.2018 5.24089 13.8555 3.89453ZM8.48438 2.77734C8.6276 2.63411 8.79948 2.5625 9 2.5625C9.20052 2.5625 9.35807 2.63411 9.47266 2.77734C9.61589 2.89193 9.6875 3.04948 9.6875 3.25C9.6875 3.45052 9.61589 3.6224 9.47266 3.76562C9.35807 3.88021 9.20052 3.9375 9 3.9375C8.79948 3.9375 8.6276 3.88021 8.48438 3.76562C8.36979 3.6224 8.3125 3.45052 8.3125 3.25C8.3125 3.04948 8.36979 2.89193 8.48438 2.77734ZM4.61719 4.41016C4.76042 4.26693 4.91797 4.19531 5.08984 4.19531C5.29036 4.19531 5.46224 4.26693 5.60547 4.41016C5.7487 4.52474 5.82031 4.68229 5.82031 4.88281C5.82031 5.05469 5.7487 5.21224 5.60547 5.35547C5.46224 5.4987 5.29036 5.57031 5.08984 5.57031C4.91797 5.57031 4.76042 5.4987 4.61719 5.35547C4.5026 5.21224 4.44531 5.05469 4.44531 4.88281C4.44531 4.68229 4.5026 4.52474 4.61719 4.41016ZM12.3945 4.36719L13.3828 5.35547L10.332 8.40625C10.3607 8.52083 10.375 8.63542 10.375 8.75C10.375 9.1224 10.2318 9.45182 9.94531 9.73828C9.6875 9.99609 9.3724 10.125 9 10.125C8.6276 10.125 8.29818 9.99609 8.01172 9.73828C7.75391 9.45182 7.625 9.1224 7.625 8.75C7.625 8.3776 7.75391 8.0625 8.01172 7.80469C8.29818 7.51823 8.6276 7.375 9 7.375C9.11458 7.375 9.22917 7.38932 9.34375 7.41797L12.3945 4.36719ZM2.98438 8.27734C3.1276 8.13411 3.29948 8.0625 3.5 8.0625C3.70052 8.0625 3.85807 8.13411 3.97266 8.27734C4.11589 8.39193 4.1875 8.54948 4.1875 8.75C4.1875 8.95052 4.11589 9.1224 3.97266 9.26562C3.85807 9.38021 3.70052 9.4375 3.5 9.4375C3.29948 9.4375 3.1276 9.38021 2.98438 9.26562C2.86979 9.1224 2.8125 8.95052 2.8125 8.75C2.8125 8.54948 2.86979 8.39193 2.98438 8.27734ZM13.9844 8.27734C14.1276 8.13411 14.2995 8.0625 14.5 8.0625C14.7005 8.0625 14.8581 8.13411 14.9727 8.27734C15.1159 8.39193 15.1875 8.54948 15.1875 8.75C15.1875 8.95052 15.1159 9.1224 14.9727 9.26562C14.8581 9.38021 14.7005 9.4375 14.5 9.4375C14.2995 9.4375 14.1276 9.38021 13.9844 9.26562C13.8698 9.1224 13.8125 8.95052 13.8125 8.75C13.8125 8.54948 13.8698 8.39193 13.9844 8.27734ZM4.61719 12.1445C4.76042 12.0013 4.91797 11.9297 5.08984 11.9297C5.29036 11.9297 5.46224 12.0013 5.60547 12.1445C5.7487 12.2878 5.82031 12.4596 5.82031 12.6602C5.82031 12.832 5.7487 12.9896 5.60547 13.1328C5.46224 13.2474 5.29036 13.3047 5.08984 13.3047C4.91797 13.3047 4.76042 13.2474 4.61719 13.1328C4.5026 12.9896 4.44531 12.832 4.44531 12.6602C4.44531 12.4596 4.5026 12.2878 4.61719 12.1445ZM12.3945 12.1445C12.5378 12.0013 12.6953 11.9297 12.8672 11.9297C13.0677 11.9297 13.2253 12.0013 13.3398 12.1445C13.4831 12.2878 13.5547 12.4596 13.5547 12.6602C13.5547 12.832 13.4831 12.9896 13.3398 13.1328C13.2253 13.2474 13.0677 13.3047 12.8672 13.3047C12.6953 13.3047 12.5378 13.2474 12.3945 13.1328C12.2513 12.9896 12.1797 12.832 12.1797 12.6602C12.1797 12.4596 12.2513 12.2878 12.3945 12.1445Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.4375 0.1875H1.125H14.875H15.5625V0.875V14.625V15.3125H14.875H1.125H0.4375V14.625V0.875V0.1875ZM1.8125 1.5625V7.0625H7.3125V1.5625H1.8125ZM8.6875 1.5625V7.0625H14.1875V1.5625H8.6875ZM1.8125 8.4375V13.9375H7.3125V8.4375H1.8125ZM8.6875 8.4375V13.9375H14.1875V8.4375H8.6875Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Products</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.53125 0.1875C7.19271 0.1875 8.68229 0.860677 10 2.20703C11.3177 0.860677 12.8073 0.1875 14.4688 0.1875C15.901 0.1875 17.1185 0.703125 18.1211 1.73438C19.1237 2.73698 19.625 3.9401 19.625 5.34375C19.625 5.91667 19.4818 6.50391 19.1953 7.10547C18.9089 7.67839 18.6224 8.10807 18.3359 8.39453L17.9062 8.78125L10.5156 16.2578L10 16.7734L9.48438 16.2578L2.09375 8.78125C1.80729 8.52344 1.52083 8.19401 1.23438 7.79297C0.661458 6.93359 0.375 6.11719 0.375 5.34375C0.375 3.9401 0.876302 2.73698 1.87891 1.73438C2.88151 0.703125 4.09896 0.1875 5.53125 0.1875ZM5.53125 1.5625C4.5 1.5625 3.61198 1.9349 2.86719 2.67969C2.1224 3.42448 1.75 4.3125 1.75 5.34375C1.75 5.83073 1.95052 6.38932 2.35156 7.01953L3.03906 7.83594L10 14.7969L16.9609 7.83594C17.8203 6.89062 18.25 6.0599 18.25 5.34375C18.25 4.3125 17.8776 3.42448 17.1328 2.67969C16.388 1.9349 15.5 1.5625 14.4688 1.5625C13.8672 1.5625 13.237 1.73438 12.5781 2.07812C11.9193 2.39323 11.4036 2.72266 11.0312 3.06641L10.5156 3.53906L10 4.14062L9.48438 3.53906C9.34115 3.39583 9.14062 3.22396 8.88281 3.02344C8.65365 2.79427 8.18099 2.49349 7.46484 2.12109C6.77734 1.7487 6.13281 1.5625 5.53125 1.5625Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Favorites</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.375 0.1875H1.0625H13.4375H14.125V0.875V10.5V11.1875H13.4375H7.50781L4.24219 13.7656L3.125 14.7109V13.25V11.1875H1.0625H0.375V10.5V0.875V0.1875ZM1.75 1.5625V9.8125H3.8125H4.5V10.5V11.7891L6.82031 9.98438L6.99219 9.8125H7.25H12.75V1.5625H1.75ZM15.5 2.9375H19.625V13.9375H16.875V17.4609L12.4922 13.9375H6.13281L7.85156 12.5625H13.0078L15.5 14.5391V12.5625H18.25V4.3125H15.5V2.9375Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Inbox</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.04688 0.359375L6.07812 1.39062L3.32812 4.14062L2.8125 4.57031L2.29688 4.14062L0.921875 2.76562L1.95312 1.73438L2.8125 2.63672L5.04688 0.359375ZM8.3125 1.5625H17.25V2.9375H8.3125V1.5625ZM5.04688 5.85938L6.07812 6.89062L3.32812 9.64062L2.8125 10.0703L2.29688 9.64062L0.921875 8.26562L1.95312 7.23438L2.8125 8.13672L5.04688 5.85938ZM8.3125 7.0625H17.25V8.4375H8.3125V7.0625ZM5.04688 11.3594L6.07812 12.3906L3.32812 15.1406L2.8125 15.5703L2.29688 15.1406L0.921875 13.7656L1.95312 12.7344L2.8125 13.6367L5.04688 11.3594ZM8.3125 12.5625H17.25V13.9375H8.3125V12.5625Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Order Lists</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.4375 0.5H1.125H13.5H14.1875V1.1875V16.3125V17H13.5H1.125H0.4375V16.3125V1.1875V0.5ZM1.8125 1.875V5.3125H12.8125V1.875H1.8125ZM1.8125 6.6875V10.8125H12.8125V6.6875H1.8125ZM1.8125 12.1875V15.625H12.8125V12.1875H1.8125Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Product Stock</span>
                        </button>
                    </li>
                    <li className="m-0 my-3"></li>
                    <li className="hidden lg:block text-[12px] font-bold opacity-[0.6] px-8 mb-3">PAGES</li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                        <svg width="18" height="17" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.25 0.1875C7.16667 0.1875 8.02604 0.746094 8.82812 1.86328C8.82812 1.89193 8.88542 1.99219 9 2.16406C9.11458 1.99219 9.17188 1.89193 9.17188 1.86328C9.97396 0.746094 10.8333 0.1875 11.75 0.1875C12.3229 0.1875 12.8099 0.388021 13.2109 0.789062C13.612 1.1901 13.8125 1.67708 13.8125 2.25C13.8125 2.47917 13.7695 2.70833 13.6836 2.9375H16.5625H17.25V3.625V6.375V7.0625H16.5625V15.3125V16H15.875H2.125H1.4375V15.3125V7.0625H0.75V6.375V3.625V2.9375H1.4375H4.31641C4.23047 2.70833 4.1875 2.47917 4.1875 2.25C4.1875 1.67708 4.38802 1.1901 4.78906 0.789062C5.1901 0.388021 5.67708 0.1875 6.25 0.1875ZM6.25 1.5625C5.79167 1.5625 5.5625 1.79167 5.5625 2.25C5.5625 2.70833 5.79167 2.9375 6.25 2.9375H7.83984C7.8112 2.90885 7.78255 2.86589 7.75391 2.80859C7.72526 2.7513 7.69661 2.69401 7.66797 2.63672C7.15234 1.92057 6.67969 1.5625 6.25 1.5625ZM11.75 1.5625C11.3203 1.5625 10.8477 1.92057 10.332 2.63672C10.3034 2.69401 10.2747 2.73698 10.2461 2.76562C10.2461 2.76562 10.2318 2.79427 10.2031 2.85156C10.2031 2.88021 10.1888 2.90885 10.1602 2.9375H11.75C12.2083 2.9375 12.4375 2.70833 12.4375 2.25C12.4375 1.79167 12.2083 1.5625 11.75 1.5625ZM2.125 4.3125V5.6875H8.3125V5H9.6875V5.6875H15.875V4.3125H9H7.96875H2.125ZM2.8125 7.0625V14.625H8.3125V7.75H9.6875V14.625H15.1875V7.0625H2.8125Z" fill="currentColor"/>
                        </svg>
                        <span className="hidden lg:block">Pricing</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.1875 0.5H4.5625V1.1875H11.4375V0.5H12.8125V1.1875H14.875H15.5625V1.875V15.625V16.3125H14.875H1.125H0.4375V15.625V1.875V1.1875H1.125H3.1875V0.5ZM1.8125 2.5625V3.9375H14.1875V2.5625H12.8125V3.25H11.4375V2.5625H4.5625V3.25H3.1875V2.5625H1.8125ZM1.8125 5.3125V14.9375H14.1875V5.3125H1.8125ZM5.9375 6.6875H7.3125V8.0625H5.9375V6.6875ZM8.6875 6.6875H10.0625V8.0625H8.6875V6.6875ZM11.4375 6.6875H12.8125V8.0625H11.4375V6.6875ZM3.1875 9.4375H4.5625V10.8125H3.1875V9.4375ZM5.9375 9.4375H7.3125V10.8125H5.9375V9.4375ZM8.6875 9.4375H10.0625V10.8125H8.6875V9.4375ZM11.4375 9.4375H12.8125V10.8125H11.4375V9.4375ZM3.1875 12.1875H4.5625V13.5625H3.1875V12.1875ZM5.9375 12.1875H7.3125V13.5625H5.9375V12.1875ZM8.6875 12.1875H10.0625V13.5625H8.6875V12.1875Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Calender</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.50781 2.1875C5.88021 1.27083 6.48177 0.8125 7.3125 0.8125C8.14323 0.8125 8.74479 1.27083 9.11719 2.1875H10.75H11.4375H13.5H14.1875V2.875V17.3125V18H13.5H1.125H0.4375V17.3125V2.875V2.1875H1.125H3.1875H3.875H5.50781ZM7.78516 2.40234C7.67057 2.25911 7.51302 2.1875 7.3125 2.1875C7.11198 2.1875 6.9401 2.25911 6.79688 2.40234C6.68229 2.51693 6.625 2.67448 6.625 2.875V3.5625H5.9375H4.5625V4.9375H10.0625V3.5625H8.6875H8V2.875C8 2.67448 7.92839 2.51693 7.78516 2.40234ZM1.8125 3.5625V16.625H12.8125V3.5625H11.4375V5.625V6.3125H10.75H3.875H3.1875V5.625V3.5625H1.8125Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">To-Do</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.57812 1.76562C3.38021 0.963542 4.35417 0.5625 5.5 0.5625C6.64583 0.5625 7.61979 0.963542 8.42188 1.76562C9.22396 2.56771 9.625 3.54167 9.625 4.6875C9.625 6.09115 9.05208 7.20833 7.90625 8.03906C8.96615 8.55469 9.76823 9.29948 10.3125 10.2734C10.8568 9.29948 11.6589 8.55469 12.7188 8.03906C11.5729 7.20833 11 6.09115 11 4.6875C11 3.54167 11.401 2.56771 12.2031 1.76562C13.0052 0.963542 13.9792 0.5625 15.125 0.5625C16.2708 0.5625 17.2448 0.963542 18.0469 1.76562C18.849 2.56771 19.25 3.54167 19.25 4.6875C19.25 6.09115 18.6771 7.20833 17.5312 8.03906C18.4766 8.4974 19.2214 9.17057 19.7656 10.0586C20.3385 10.918 20.625 11.8776 20.625 12.9375H19.25C19.25 11.7917 18.849 10.8177 18.0469 10.0156C17.2448 9.21354 16.2708 8.8125 15.125 8.8125C13.9792 8.8125 13.0052 9.21354 12.2031 10.0156C11.401 10.8177 11 11.7917 11 12.9375H9.625C9.625 11.7917 9.22396 10.8177 8.42188 10.0156C7.61979 9.21354 6.64583 8.8125 5.5 8.8125C4.35417 8.8125 3.38021 9.21354 2.57812 10.0156C1.77604 10.8177 1.375 11.7917 1.375 12.9375H0C0 11.8776 0.272135 10.918 0.816406 10.0586C1.38932 9.17057 2.14844 8.4974 3.09375 8.03906C1.94792 7.20833 1.375 6.09115 1.375 4.6875C1.375 3.54167 1.77604 2.56771 2.57812 1.76562ZM7.43359 2.75391C6.91797 2.20964 6.27344 1.9375 5.5 1.9375C4.72656 1.9375 4.06771 2.20964 3.52344 2.75391C3.00781 3.26953 2.75 3.91406 2.75 4.6875C2.75 5.46094 3.00781 6.11979 3.52344 6.66406C4.06771 7.17969 4.72656 7.4375 5.5 7.4375C6.27344 7.4375 6.91797 7.17969 7.43359 6.66406C7.97786 6.11979 8.25 5.46094 8.25 4.6875C8.25 3.91406 7.97786 3.26953 7.43359 2.75391ZM17.0586 2.75391C16.543 2.20964 15.8984 1.9375 15.125 1.9375C14.3516 1.9375 13.6927 2.20964 13.1484 2.75391C12.6328 3.26953 12.375 3.91406 12.375 4.6875C12.375 5.46094 12.6328 6.11979 13.1484 6.66406C13.6927 7.17969 14.3516 7.4375 15.125 7.4375C15.8984 7.4375 16.543 7.17969 17.0586 6.66406C17.6029 6.11979 17.875 5.46094 17.875 4.6875C17.875 3.91406 17.6029 3.26953 17.0586 2.75391Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Contact</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.207 0.015625L18.7227 2.9375H17.3047L17.0898 1.60547L9.3125 2.9375H1.14844L18.207 0.015625ZM0.375 3.625H1.0625H2.09375H18.9375H19.625V4.3125V13.9375V14.625H18.9375H1.0625H0.375V13.9375V5.34375V4.3125V3.625ZM3.76953 5C3.79818 5.14323 3.8125 5.25781 3.8125 5.34375C3.8125 5.83073 3.64062 6.24609 3.29688 6.58984C2.98177 6.90495 2.58073 7.0625 2.09375 7.0625C2.00781 7.0625 1.89323 7.04818 1.75 7.01953V11.2305C1.89323 11.2018 2.00781 11.1875 2.09375 11.1875C2.58073 11.1875 2.98177 11.3594 3.29688 11.7031C3.64062 12.0182 3.8125 12.4193 3.8125 12.9062C3.8125 12.9922 3.79818 13.1068 3.76953 13.25H16.2305C16.2018 13.1068 16.1875 12.9922 16.1875 12.9062C16.1875 12.4193 16.3451 12.0182 16.6602 11.7031C17.0039 11.3594 17.4193 11.1875 17.9062 11.1875C17.9922 11.1875 18.1068 11.2018 18.25 11.2305V7.01953C18.1068 7.04818 17.9922 7.0625 17.9062 7.0625C17.4193 7.0625 17.0039 6.90495 16.6602 6.58984C16.3451 6.24609 16.1875 5.83073 16.1875 5.34375C16.1875 5.25781 16.2018 5.14323 16.2305 5H3.76953ZM7.55078 6.71875C8.23828 6.03125 9.05469 5.6875 10 5.6875C10.9453 5.6875 11.7474 6.03125 12.4062 6.71875C13.0938 7.3776 13.4375 8.17969 13.4375 9.125C13.4375 10.0703 13.0938 10.8867 12.4062 11.5742C11.7474 12.2331 10.9453 12.5625 10 12.5625C9.05469 12.5625 8.23828 12.2331 7.55078 11.5742C6.89193 10.8867 6.5625 10.0703 6.5625 9.125C6.5625 8.17969 6.89193 7.3776 7.55078 6.71875ZM11.4609 7.66406C11.0599 7.26302 10.5729 7.0625 10 7.0625C9.42708 7.0625 8.9401 7.26302 8.53906 7.66406C8.13802 8.0651 7.9375 8.55208 7.9375 9.125C7.9375 9.69792 8.13802 10.1849 8.53906 10.5859C8.9401 10.987 9.42708 11.1875 10 11.1875C10.5729 11.1875 11.0599 10.987 11.4609 10.5859C11.862 10.1849 12.0625 9.69792 12.0625 9.125C12.0625 8.55208 11.862 8.0651 11.4609 7.66406Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Invoice</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4375 0.5H13.125H17.25H17.9375V1.1875V16.3125V17H17.25H13.125H12.4375V16.3125V1.1875V0.5ZM13.8125 1.875V15.625H16.5625V1.875H13.8125ZM0.0625 4.625H0.75H4.875H5.5625V5.3125V16.3125V17H4.875H0.75H0.0625V16.3125V5.3125V4.625ZM1.4375 6V15.625H4.1875V6H1.4375ZM6.25 8.75H6.9375H11.0625H11.75V9.4375V16.3125V17H11.0625H6.9375H6.25V16.3125V9.4375V8.75ZM7.625 10.125V15.625H10.375V10.125H7.625Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">UI Elements</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91797 1.60547C4.86328 0.660156 5.99479 0.1875 7.3125 0.1875C8.63021 0.1875 9.76172 0.660156 10.707 1.60547C11.6523 2.55078 12.125 3.68229 12.125 5C12.125 5.80208 11.9245 6.5612 11.5234 7.27734C11.151 7.99349 10.6354 8.56641 9.97656 8.99609C11.237 9.54036 12.2539 10.3854 13.0273 11.5312C13.8008 12.6484 14.1875 13.9089 14.1875 15.3125H12.8125C12.8125 13.7943 12.2682 12.5052 11.1797 11.4453C10.1198 10.3568 8.83073 9.8125 7.3125 9.8125C5.79427 9.8125 4.49089 10.3568 3.40234 11.4453C2.34245 12.5052 1.8125 13.7943 1.8125 15.3125H0.4375C0.4375 13.9089 0.824219 12.6484 1.59766 11.5312C2.37109 10.3854 3.38802 9.54036 4.64844 8.99609C3.98958 8.56641 3.45964 7.99349 3.05859 7.27734C2.6862 6.5612 2.5 5.80208 2.5 5C2.5 3.68229 2.97266 2.55078 3.91797 1.60547ZM9.71875 2.59375C9.0599 1.90625 8.25781 1.5625 7.3125 1.5625C6.36719 1.5625 5.55078 1.90625 4.86328 2.59375C4.20443 3.2526 3.875 4.05469 3.875 5C3.875 5.94531 4.20443 6.76172 4.86328 7.44922C5.55078 8.10807 6.36719 8.4375 7.3125 8.4375C8.25781 8.4375 9.0599 8.10807 9.71875 7.44922C10.4062 6.76172 10.75 5.94531 10.75 5C10.75 4.05469 10.4062 3.2526 9.71875 2.59375Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Team</span>
                        </button>
                    </li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.4375 0.1875H1.125H14.875H15.5625V0.875V14.625V15.3125H14.875H1.125H0.4375V14.625V0.875V0.1875ZM1.8125 1.5625V5H5.25V1.5625H1.8125ZM6.625 1.5625V5H9.375V1.5625H6.625ZM10.75 1.5625V5H14.1875V1.5625H10.75ZM1.8125 6.375V9.125H5.25V6.375H1.8125ZM6.625 6.375V9.125H9.375V6.375H6.625ZM10.75 6.375V9.125H14.1875V6.375H10.75ZM1.8125 10.5V13.9375H5.25V10.5H1.8125ZM6.625 10.5V13.9375H9.375V10.5H6.625ZM10.75 10.5V13.9375H14.1875V10.5H10.75Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Table</span>
                        </button>
                    </li>
                    <li className="m-0 my-3"></li>
                    <li>
                        <button className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.06641 0.8125H7.625H10.375H10.9336L11.0625 1.37109L11.4492 3.39062C12.0794 3.64844 12.6667 4.00651 13.2109 4.46484L15.2305 3.77734L15.7891 3.60547L16.0469 4.07812L17.4219 6.48438L17.6797 6.95703L17.293 7.34375L15.7461 8.67578C15.832 9.19141 15.875 9.54948 15.875 9.75C15.875 9.95052 15.832 10.3086 15.7461 10.8242L17.293 12.1562L17.6797 12.543L17.4219 13.0156L16.0469 15.4219L15.7891 15.8945L15.2305 15.7227L13.2109 15.0352C12.6667 15.4935 12.0794 15.8516 11.4492 16.1094L11.0625 18.1289L10.9336 18.6875H10.375H7.625H7.06641L6.9375 18.1289L6.55078 16.1094C5.92057 15.8516 5.33333 15.4935 4.78906 15.0352L2.76953 15.7227L2.21094 15.8945L1.95312 15.4219L0.578125 13.0156L0.320312 12.543L0.707031 12.1562L2.25391 10.8242C2.16797 10.3086 2.125 9.95052 2.125 9.75C2.125 9.54948 2.16797 9.19141 2.25391 8.67578L0.707031 7.34375L0.320312 6.95703L0.578125 6.48438L1.95312 4.07812L2.21094 3.60547L2.76953 3.77734L4.78906 4.46484C5.33333 4.00651 5.92057 3.64844 6.55078 3.39062L6.9375 1.37109L7.06641 0.8125ZM8.18359 2.1875L7.83984 3.99219L7.75391 4.37891L7.36719 4.50781C6.59375 4.76562 5.90625 5.16667 5.30469 5.71094L4.96094 5.96875L4.61719 5.88281L2.85547 5.28125L2.03906 6.65625L3.41406 7.85938L3.75781 8.11719L3.62891 8.54688C3.54297 8.91927 3.5 9.32031 3.5 9.75C3.5 10.1797 3.54297 10.5807 3.62891 10.9531L3.75781 11.3828L3.41406 11.6406L2.03906 12.8438L2.85547 14.2188L4.61719 13.6172L4.96094 13.5312L5.30469 13.7891C5.90625 14.3333 6.59375 14.7344 7.36719 14.9922L7.75391 15.1211L7.83984 15.5078L8.18359 17.3125H9.81641L10.1602 15.5078L10.2461 15.1211L10.6328 14.9922C11.4062 14.7344 12.0938 14.3333 12.6953 13.7891L13.0391 13.5312L13.3828 13.6172L15.1445 14.2188L15.9609 12.8438L14.5859 11.6406L14.2852 11.3828L14.3711 10.9531C14.457 10.5807 14.5 10.1797 14.5 9.75C14.5 9.32031 14.457 8.91927 14.3711 8.54688L14.2422 8.11719L14.5859 7.85938L15.9609 6.65625L15.1445 5.28125L13.3828 5.88281L13.0391 5.96875L12.6953 5.71094C12.0938 5.16667 11.4062 4.76562 10.6328 4.50781L10.2461 4.37891L10.1602 3.99219L9.81641 2.1875H8.18359ZM6.55078 7.34375C7.23828 6.65625 8.05469 6.3125 9 6.3125C9.94531 6.3125 10.7474 6.65625 11.4062 7.34375C12.0938 8.0026 12.4375 8.80469 12.4375 9.75C12.4375 10.6953 12.0938 11.5117 11.4062 12.1992C10.7474 12.8581 9.94531 13.1875 9 13.1875C8.05469 13.1875 7.23828 12.8581 6.55078 12.1992C5.89193 11.5117 5.5625 10.6953 5.5625 9.75C5.5625 8.80469 5.89193 8.0026 6.55078 7.34375ZM10.4609 8.28906C10.0599 7.88802 9.57292 7.6875 9 7.6875C8.42708 7.6875 7.9401 7.88802 7.53906 8.28906C7.13802 8.6901 6.9375 9.17708 6.9375 9.75C6.9375 10.3229 7.13802 10.8099 7.53906 11.2109C7.9401 11.612 8.42708 11.8125 9 11.8125C9.57292 11.8125 10.0599 11.612 10.4609 11.2109C10.862 10.8099 11.0625 10.3229 11.0625 9.75C11.0625 9.17708 10.862 8.6901 10.4609 8.28906Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Settings</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={handleLogOut} className="gap-4 btn btn-ghost btn-primary justify-start text-start text-[14px] py-6 rounded-lg mx-2 lg:mx-4 hover:text-[##e0e7ff]">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.3125 0.5H9.6875V8.75H8.3125V0.5ZM6.25 0.972656V2.47656C5.01823 2.99219 4.01562 3.82292 3.24219 4.96875C2.4974 6.11458 2.125 7.375 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 7.375 15.4883 6.11458 14.7148 4.96875C13.9701 3.82292 12.9818 2.99219 11.75 2.47656V0.972656C13.3828 1.54557 14.7005 2.54818 15.7031 3.98047C16.7344 5.38411 17.25 6.97396 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.97396 1.2513 5.38411 2.25391 3.98047C3.28516 2.54818 4.61719 1.54557 6.25 0.972656Z" fill="currentColor"/>
                            </svg>
                            <span className="hidden lg:block">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserDetailPage