import React from 'react';
import Link from 'next/link';
import { roboto } from '@/lib/fonts';


const Header: React.FC = () => {
    return (
        <nav className="bg-gray-100">
            <Link className="flex items-center p-2" href="/">
                <svg className="w-[3rem] h-[3rem] ">
                    <use xlinkHref="#cpd_logo">
                        <svg id="cpd_logo" viewBox="0 0 12.829 16.016" width="100%" height="100%">
                            <g clipPath="url(#a)" data-name="Group">
                                <path fill="#f69734"
                                    d="M5.389 9.112c.171.143-.042 4.191.322 5.55a10.03 10.03 0 0 1-1.812-.694c.596-1.905 1.118-5.163 1.49-4.856zm-3.264-.584c.077.463.529-.115.617-.146s1.295-1.985 1.501-1.957c.145.02-.993 4.408-1.3 7.005-.172-.11-.338-.225-.494-.342-2.847-2.1-.022-6.555-.022-6.555l.971-.978c-.695 1.034-1.377 2.381-1.273 2.973zm9.412 2.103c-.02.244-.049.49-.08.739a4.363 4.363 0 0 1-1.28 2.79 4.7 4.7 0 0 1-3.778.658c.087-.541.516-4.823.43-5.354-.092-.555.208-1.375.47-1.138s.649.845.943 1.049.559.119.531-.291l-.031-.407a27.323 27.323 0 0 0-1.648-3.334c-.324-.348-.44-1.341-1.116-1.167 0 0 .646-1.082.234-1.752-.32-.527-1.184-.412-1.627-.154l-.068-.292-1.265.726.061.282-.126.057-1.786 2.762S-.914 9.354.409 11.916l1.454 1.841a9.388 9.388 0 0 0 1 .762c0 .454.077.741.249.775.14.025.28-.115.419-.369 1.65.922 3.793 1.521 5.573.708 1.523-.51 2.842-1.956 3.459-5 1.588-7.821-4.354-9.211-6.339-10S4.523.089 4.324.026a1.783 1.783 0 0 0-.518-.017c-.223-.03-.679 0-.514.272.013.1.121.233.392.408a2.023 2.023 0 0 0 .515.238 2.649 2.649 0 0 0 .71.209c4.741 1.132 7.06 4.399 6.628 9.495z"
                                ></path>
                                <path fill="#0077bd"
                                    d="M4.092 4.68S2.825 6.609 2.503 7.281s-.614 1.616.443.511a12.321 12.321 0 0 0 1.326-2.183c-.706 2.1-1.223 8.974-.971 9.288s.43-.1.486-.393.838-5.653 1.544-6.09c.019-.014-.237-3.325-.266-3.525s-.973-.209-.973-.209zm2.215-1.964a.915.915 0 1 0-1.3 1.194c1.061.902 1.749-.461 1.3-1.194zm2.156 3.807c-.13-.963-1.129-.572-1.24.018a.642.642 0 1 0 1.24-.018zM7.89 7.697a1.577 1.577 0 0 1-.573-.044c-.561.2-1.344 6.112-.994 7.273.133.44.375.054.419.023.079-.06.461-5.161.531-4.669.065.461.214 3.218.926 4.207.221.309.487.221.487-.044s-1.015-5.411-.749-5.542.839 2.125 1.1 1.817-.882-3.065-1.147-3.021z"
                                ></path>
                            </g>
                        </svg>
                    </use>
                </svg>
                <span className={`text-md text-blue-800 ${roboto.className}`}>
                    Centar za prava deteta
                </span>
            </Link>
        </nav>
    );
};

export default Header;
