import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'; 
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 shadow-lg rounded-lg border-10 border-gray-300">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between">
                
                    <div className="mb-6 md:mb-0 md:w-1/3 md:pr-12">
                        <h2 className="text-[#a6a6a6] font-semibold mb-2">About STUDENTEST</h2>
                        <p className="text-xs text-[#a6a6a6]">
                            Studentest is a platform based on Artificial Intelligence to create tests automatically.
                            Thanks to algorithms, you can create multiple choice tests that are always different but homogeneous in difficulty and content. In just one click!
                        </p>
                    </div>

                    <div className="mb-6 md:mb-0 md:w-1/3 md:px-14">
                        <h2 className="text-[#a6a6a6] font-semibold mb-2">Pages</h2>
                        <ul className="text-xs text-[#a6a6a6] space-y-1">
                            <li>
                                <Link to="/service" className="hover:text-[#068ca4]">Service</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#068ca4]">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col md:items-start md:w-1/3 md:pl-8">
                        <h2 className="text-[#a6a6a6] font-semibold mb-2">Follow us</h2>
                        <div className="flex space-x-4 mb-4">
                            <Link to="/facebook" aria-label="Facebook" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaFacebook size={20} />
                            </Link>
                            <Link to="/instagram" aria-label="Instagram" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaInstagram size={20} />
                            </Link>
                            <Link to="x" aria-label="X" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FiX size={20} /> 
                            </Link>
                            <Link to="/linkedin" aria-label="LinkedIn" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link to="/youtube" aria-label="YouTube" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaYoutube size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div className="mt-4">
                    <p className="text-xs text-[#a6a6a6]">
                        © 2024 Studentest - 
                        <Link to="/privacy" className="hover:text-[#068ca4] ml-1">Privacy</Link> / 
                        <Link to="/cookies" className="hover:text-[#068ca4] ml-1">Cookies</Link> / 
                        <Link to="/termsofuse" className="hover:text-[#068ca4] ml-1">Terms of use</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;