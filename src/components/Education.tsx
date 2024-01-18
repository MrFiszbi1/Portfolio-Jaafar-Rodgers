export function Education() {
    return (
        <div className="flex flex-col bg-black rounded-lg overflow-auto m-6 p-3">
            <h1 className="resumeSectionTitle">Education</h1>
            <div className="resumeEducationContent">
                <span>Bachelor of Science in Computer Science (2023)</span>
                <span className="jobDate">Portland State University - GPA: 3.7</span>
            </div>

            <div className="resumeEducationContent">
                <span>AWS Certified Cloud Practitioner</span>
                <span className="jobDate">Jan 2024</span>
            </div>
        </div>
    )
}