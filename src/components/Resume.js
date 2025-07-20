import React from "react";

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "Certified Magento2 Theme Designer and Developer.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Certified Magento2 Theme Designer and Developer.pdf";
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