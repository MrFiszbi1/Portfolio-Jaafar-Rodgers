export function Experience() {
    return (
        <div className="resumeBox">
            <h1 className="resumeSectionTitle">Experience</h1>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle">
                    Data Center Technician
                    <span className="jobDate">UST / Intel - (3/2024 - Present)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Worked for Intel (via UST), where I commissioned, decommissioned, reconfigured, and maintained servers.
                        My main duty was as a member of the ticketing team. Using Jira to help solve tier 1&2 IT issues with servers.
                    </p>

                    <div className="jobHighlights">
                        <p>Highlights:</p>
                        <ul className="list-disc pl-6">
                            <li>Debugging and Troubleshooting hardware server issues</li>
                            <li>Flashing, configuring, and managing the server's BIOS, OS, drivers, and software</li>
                            <li>Reconfiguring server hardware</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow jobDropDown">
                <input type="radio" name="my-accordion-2"/>
                <div className="jobTitle">
                    Security Guard
                    <span className="jobDate">Allied Universal - (03/2020 - 07/2022) and (12/2023 - 3/2024)</span>
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
                <div className="jobTitle">
                    Student Software Developer, Software Engineering Capstone
                    <span className="jobDate">Portland State University - (1/2023 - 06/2023)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Collaborated with an 8-member team to develop a website for PSU's CS department, enabling
                        anonymous student feedback. We employed an Agile development methodology. Tools used were
                        TypeScript, React, Material UI, and Jest.
                    </p>

                    <div className="jobHighlights">
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
                <div className="jobTitle">
                    Help Desk Technician
                    <span className="jobDate">Computer Action Team at PSU - (10/2021 - 04/2023)</span>
                </div>
                <div className="collapse-content">
                    <p className="jobDescription">
                        Worked at the front desk and online to help provide students and faculty with any technical
                        assistance needed, and ensured access to the college's technological resources. Maintained and
                        worked on both Windows and Linux systems.
                    </p>

                    <div className="jobHighlights">
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
                <div className="jobTitle">
                    Assistant and Technician for general construction and repair
                    <span className="jobDate">Pragmatic Services - (6/2018 - 3/2023)</span>
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
                <div className="jobTitle">
                    Youth Counselor
                    <span className="jobDate">Sons of Adam - (06/2018 - 07/2021)</span>
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