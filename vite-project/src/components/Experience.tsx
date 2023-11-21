export function Experience() {
    return (
        <div className="flex flex-col bg-black rounded-lg overflow-auto m-6 p-3">
           <h1 className="mx-auto sm:text-4xl text-3xl mb-3">Experience</h1>
           <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2" /> 
                <div className="jobTitle flex justify-between">
                    Student Software Developer, Software Engineering Capstone
                    <span className="ml-auto">-Portland State University</span>
                </div>
                <div className="collapse-content"> 
                    <p className="jobDescription">
                        Collaborated with an 8-member team to develop a website for PSU's CS department, enabling anonymous student feedback. We employed an Agile development methodology. Tools used were TypeScript, React, Material UI, and Jest.
                    </p>
                    
                    <div className="bg-base-100 my-1 rounded-md p-2">
                        <p>Highlights:</p>
                        <ul className="list-disc pl-6">
                            <li>System and functionality design</li>
                            <li>System and functionality prototyping </li>
                            <li>Front End design and development</li>
                            <li>Tested frontend with Jest</li>
                            <li>Project and Source Code documentation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/> 
                <div className="jobTitle">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2" /> 
                <div className="jobTitle">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}