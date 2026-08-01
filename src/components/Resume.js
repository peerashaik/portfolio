import React from "react";

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "Shaik_Peera_Resume_01_08_2026.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Shaik_Peera_Resume_01_08_2026.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
        <a href="#" title="Download Resume" onClick={onButtonClick} className="link">
            Download - RESUME
        </a>
        </>
    );
};

export default Resume;