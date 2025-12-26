"use client"; // Ensure this is a client component if using hooks
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
const DownloadButton = () => {
  const handleDownload = () => {
    //drive.google.com/file/d/11H3kXYg-ygwTZHAXwuSz2c_lpez5R2Ob/view?usp=sharing
    window.open(
      "https://drive.google.com/file/d/148yur7pGqiV1NxMjRGMCxOinGG8K_qYv/view?usp=sharing"
    ); // Adjust the path as needed
    // Create an anchor element and trigger a download
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-[#FD6F00] py-2 px-4  text-white rounded-full"
    >
      Get Resume <CloudDownloadRoundedIcon />
    </button>
  );
};

export default DownloadButton;
