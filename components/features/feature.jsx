import React from "react";

export default function Feature({icon, title, content, color}) {
    return (
        <div className="w-full px-6 lg:px-8 mb-20 lg:mb-0 bg-white rounded-lg">
          <span className={`flex mb-10 justify-center items-center w-20 h-20 mt-8 rounded-lg ${color}`}>
              {icon}
          </span>
            <div className="pb-px mb-12 bg-gray-500"></div>
            <h3 className="mt-12 mb-8 text-lg font-bold font-heading">{title}</h3>
            <p className="text-lg">{content}</p>
        </div>
    );
}
