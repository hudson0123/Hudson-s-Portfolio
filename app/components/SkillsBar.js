import React from 'react';

export default function SkillsBar({ hover1, hover2, hover3 }) {

    const project1 = hover1 ? 'blur-lg scale-[.5] duration-500 ' : 'blur-none scale-100 duration-500 ';
    const project2 = hover2 ? 'blur-lg scale-[.5] duration-500 ' : 'blur-none scale-100 duration-500 ';
    const project3 = hover3 ? 'blur-lg scale-[.5] duration-500 ' : 'blur-none scale-100 duration-500 ';

    return (
        <div>
            <div className="flex gap-6 justify-between px-10 bg-gradient-to-b from-[#f3d3bd] to-[#f1ede9] py-11 w-full">
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2 + project3} src="/aws-svgrepo-com.png" alt="Amazon Web Services" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs text-nowrap">Amazon Web Services</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project2 + project3} src="/react-svgrepo-com.png" alt="React" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">React</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project2 + project3} src="/css-3-svgrepo-com.png" alt="CSS3" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">CSS3</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project2 + project3} src="/html-5-svgrepo-com.png" alt="HTML5" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">HTML5</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project2 + project3} src="/tailwind-svgrepo-com.png" alt="Tailwind" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Tailwind</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2 + project3} src="/docker-icon-svgrepo-com.png" alt="Docker" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Docker</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2 + project3} src="/kubernetes-svgrepo-com.png" alt="Kubernetes" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Kubernetes</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain "} src="/linux-svgrepo-com.png" alt="Linux" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Linux</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project3} src="/java-svgrepo-com.png" alt="Java" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Java</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project2 + project3} src="/js-svgrepo-com.png" alt="JavaScript" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">JavaScript</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain "} src="/github-svgrepo-com.png" alt="GitHub" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">GitHub</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2} src="/python-svgrepo-com.png" alt="Python" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Python</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2} src="/numpy-svgrepo-com.png" alt="Numpy" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Numpy</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2} src="/pandas-svgrepo-com.png" alt="Pandas" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">Pandas</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2 + project3} src="/mysql-logo-svgrepo-com.png" alt="MySQL" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">MySQL</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2 + project3} src="/mongodb-svgrepo-com.png" alt="MongoDB" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">MongoDB</p>
                </div>
                <div className="has-tooltip relative">
                    <img className={"h-[50px] object-contain " + project1 + project2} src="/pytorch-svgrepo-com.png" alt="PyTorch" />
                    <p className="tooltip absolute left-[25px] bg-gray-400 px-2 rounded-lg font-mono text-xs">PyTorch</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

