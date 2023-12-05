import React from "react";
import Container from "@/app/components/Container";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row justify-between gap-3 md:gap-0">
                        <div className="flex items-center">
                            <div className="mr-4">
                                imagen_airbnb
                            </div>
                            <div className="hidden md:block">
                                <input type="text" placeholder="Start your search" className="bg-transparent border-none focus:outline-none w-96" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-4">
                                    <div className="text-gray-500">Become a host</div>
                                    <div className="text-gray-500">Help</div>
                                    <div className="text-gray-500">Sign up</div>
                                    <div className="text-gray-500">Log in</div>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <div className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M3 5.75A.75.75 0 013.75 5h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75zm0 7.5A.75.75 0 013.75 12h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 13.25zm0 7.5A.75.75 0 013.75 19h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Navbar;