export function Experience() {
    return (
        <div className="flex flex-col bg-black rounded-lg overflow-auto m-6 p-3">
            <h1 className="mx-auto sm:text-4xl text-3xl mb-3">Experience</h1>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle flex justify-between">
                    Security Guard
                    <span className="ml-auto"> Allied Universal - (03/2020 - 07/2022) and (12/2023 - Present)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Ensuring building and personnel security, inspections of belongings, and de-escalation of
                        conflicts.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle flex justify-between">
                    Student Software Developer, Software Engineering Capstone
                    <span className="ml-auto">Portland State University - (1/2023 - 06/2023)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Collaborated with an 8-member team to develop a website for PSU's CS department, enabling
                        anonymous student feedback. We employed an Agile development methodology. Tools used were
                        TypeScript, React, Material UI, and Jest.
                    </p>

                    <div className="bg-base-100 my-1 rounded-md p-2">
                        <p>Highlights:</p>
                        <ul className="list-disc pl-6">
                            <li>System and functionality design</li>
                            <li>System and functionality prototyping</li>
                            <li>Front End design and development</li>
                            <li>Tested frontend with Jest</li>
                            <li>Project and Source Code documentation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle flex justify-between">
                    Help Desk Technician
                    <span className="ml-auto">Computer Action Team at PSU - (10/2021 - 04/2023)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Worked at the front desk and online to help provide students and faculty with any technical
                        assistance needed, and ensured access to the college's technological resources. Maintained and
                        worked on both Windows and Linux systems.
                    </p>

                    <div className="bg-base-100 my-1 rounded-md p-2">
                        <p>Highlights:</p>
                        <ul className="list-disc pl-6">
                            <li> Communicating to help students and faculty understand and utilize technological
                                resources
                            </li>
                            <li> Collaborating with team members to troubleshoot and resolve technical issues</li>
                            <li> Creating IT support tickets and redirecting them to the necessary resources</li>
                            <li> Maintaining software, printers, and other peripherals</li>
                            <li> Managing, sorting, inventorying equipment</li>
                            <li> User account maintenance and file recovery</li>
                            <li> Connecting with VPNs, and setting up VNCs</li>
                            <li> Building and setting up PCs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle flex justify-between">
                    Assistant and Technician for general construction and repair
                    <span className="ml-auto"> Pragmatic Services - (6/2018 - 3/2023)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Assisted in online research, applications, and any other web assistance needed. Onsite worked to
                        build, repair, and improve a variety of different homes and buildings.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle flex justify-between">
                    Youth Counselor
                    <span className="ml-auto"> Sons of Adam - (06/2018 - 07/2021)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Organization and running of events, Supervision of youth, conflict resolution, and youth
                        counseling.
                    </p>
                </div>
            </div>
        </div>
    )
}