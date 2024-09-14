import React from 'react'

export default function SkillsBar({hover1, hover2, hover3}) {


    const project1 = hover1 ? 'drop-shadow-xl border-black border-2 p-3 rounded-full duration-500' : 'scale-100 duration-500';
    const project2 = hover2 ? 'drop-shadow-xl border-black border-2 p-3 rounded-full duration-500' : 'scale-100 duration-500';
    const project3 = hover3 ? 'drop-shadow-xl border-black border-2 p-3 rounded-full duration-500' : 'scale-100 duration-500';

    return (
        <>
            <div className="flex gap-10 justify-center bg-gradient-to-b from-[#f3d3bd] to-[#f1ede9] py-10 w-full">
                <div className="has-tooltip relative">
                <img className={"h-[60px] "} src="/aws-svgrepo-com.png" alt="Amazon Web Services"></img>
                <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs text-nowrap ">Amazon Web Services</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] "  + project1} src="/react-svgrepo-com.png" alt="react"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">React</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] "  + project1} src="/css-3-svgrepo-com.png" alt="css"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">CSS3</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] "  + project1} src="/html-5-svgrepo-com.png" alt="html"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">HTML5</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] "  + project1} src="/tailwind-svgrepo-com.png" alt="tailwind"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Tailwind</p>
                </div>
                <div className="has-tooltip relative">
                    <img className="h-[60px] " src="/docker-icon-svgrepo-com.png" alt="docker"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Docker</p>
                </div>
                <div className="has-tooltip relative">
                    <img className="h-[60px] " src="/kubernetes-svgrepo-com.png" alt="kubernetes"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Kubernetes</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project1 + project2 + project3} src="/linux-svgrepo-com.png" alt="linux"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Linux</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project2} src="/java-svgrepo-com.png" alt="java"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Java</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project1 }src="/js-svgrepo-com.png" alt="javascript"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Javascript</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] "  + project1 + project2 + project3} src="/github-svgrepo-com.png" alt="github"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Github</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project3 } src="/python-svgrepo-com.png" alt="python"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Python</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project3 } src="/numpy-svgrepo-com.png" alt="numpy"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Numpy</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project3 } src="/pandas-svgrepo-com.png" alt="pandas"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Pandas</p>
                </div>
                <div className="has-tooltip relative">
                    <img className="h-[60px]"src="/mysql-logo-svgrepo-com.png" alt="mysql"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">MySQL</p>
                </div>
                <div className="has-tooltip relative">
                    <img className="h-[60px]"src="/mongodb-svgrepo-com.png" alt="mongodb"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">MongoDB</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[60px] " + project3 }src="/pytorch-svgrepo-com.png" alt="pytorch"></img>
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2  rounded-lg font-mono text-xs">Pytorch</p>
                </div>
            </div>
            <hr/>
        </>
  )
}
