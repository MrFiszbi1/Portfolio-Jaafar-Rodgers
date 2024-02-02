export function ResumeButton() {
    const downloadResume = () => {
        const resumeUrl = "/Resume-Jaafar-Rodgers.pdf";

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Resume-Jaafar-Rodgers.pdf"; // Name of the downloaded file

        // Click the link to trigger the download
        link.click();

        // Remove the temporary link element
        link.remove();
    };

    return (
        <button
            type="button"
            className="btn flex justify-center m-auto sm:text-xl text-lg"
            onClick={() => downloadResume()}
        >
            Download Resume (PDF)
        </button>
    );
}