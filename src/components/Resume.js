import React from "react";

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "User Interface Designer - PeeraShaik.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "User Interface Designer - PeeraShaik.pdf";
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