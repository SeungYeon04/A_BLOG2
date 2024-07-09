import React from "react"; 
import person from "../image/임시.jpg"

export default function Home(){
    return (
        <div className="w-full max-w-3-xl mx-auto py-12 px4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center space-y-2">
                    <span className="flex overflow-hidden rounded-full w-24 h-24 ring-2 ring-primary">
                        <img alt="user Profile" src={person}/>
                    </span>
                    <div className="text-center">
                        <h1 className="test-3x1 font-bold">승연</h1>
                        <p className="text-stone-500">풀스텍 개발자</p>

                    </div>
                </div>
                <div className="text-center max-w-x1">
                    <p className="text-stone-400">
                        나를 소개합니다.
                    </p>
                </div>
            </div>
        </div>
    );
} 