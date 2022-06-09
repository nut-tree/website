import React, {useState} from "react";

function Open() {
    return (
        <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                fill="#1F40FF"></path>
        </svg>
    );
}

function Close() {
    return (
        <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                fill="#1F40FF"></path>
        </svg>
    );
}

export default function Item({idx, title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`px-4 lg:px-12 py-5 ${idx % 2 !== 0 ? 'bg-white' : 'bg-gray-200'} border-b border-gray-50`}>
            <button className="flex items-center justify-between w-full text-left" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center justify-between">
                    <div className="w-auto mr-8">
                    <span
                        className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-50 rounded-full">{idx}</span>
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <span className="ml-4" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? Close() : Open()}
                        </span>
            </button>
            <div
                className={`${isOpen ? 'block' : 'hidden'} mt-10 mb-6 max-w-xl border-l-2 border-gray-500 pl-4 lg:pl-10`}>
                {content}
            </div>
        </li>);
}
