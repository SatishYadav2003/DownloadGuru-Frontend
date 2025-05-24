import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import formatDuration from "../../utility/formatDuration";
import formatSize from "../../utility/formatSize";

const VideoResultModal = ({ data, onClose }) => {
  if (!data) return null;

  const [showVideoDropdown, setShowVideoDropdown] = useState(false);
  const [showAudioDropdown, setShowAudioDropdown] = useState(false);
  const [showMuxedDropdown, setShowMuxedDropdown] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedMuxed, setSelectedMuxed] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  const {
    title,
    uploader,
    thumbnail,
    duration,
    video_formats,
    audio_formats,
    muxed_formats,
  } = data;

  const isValidFormat = (format) => {
    if (format.filesize) return true;
    if (format.url && !format.url.includes("segment")) return true;
    return false;
  };

  const filteredVideos = video_formats.filter(isValidFormat);
  const filteredAudios = audio_formats.filter(isValidFormat);
  const filteredMuxed = muxed_formats
    ? muxed_formats.filter(isValidFormat)
    : [];

  const canDownload =
    selectedMuxed !== null ||
    (selectedVideo !== null &&
      selectedAudio !== null &&
      selectedMuxed === null);

  const handleMuxedSelect = (format) => {
    setSelectedMuxed(format);
    setSelectedVideo(null);
    setSelectedAudio(null);
  };

  const handleVideoSelect = (format) => {
    setSelectedVideo(format);
    setSelectedMuxed(null);
  };

  const handleAudioSelect = (format) => {
    setSelectedAudio(format);
    setSelectedMuxed(null);
  };

  const handleDownload = async () => {
    if (!canDownload) return;

    if (selectedMuxed) {
      const baseUrl = import.meta.env.VITE_NODE_BACKEND_BASE_URL;
      const videoUrl = encodeURIComponent(selectedMuxed.url);
      const extension = encodeURIComponent(selectedMuxed.ext || "mp4");
      const safeTitle = encodeURIComponent(title || "video");

      const downloadUrl = `${baseUrl}/api/download_video?videoUrl=${videoUrl}&title=${safeTitle}&extension=${extension}`;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `${title}.mp4`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (selectedVideo && selectedAudio) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_PYTHON_BACKEND_BASE_URL}/api/merge_download`,
          {
            video_url: selectedVideo.url,
            audio_url: selectedAudio.url,
            title: title,
          },
          {
            responseType: "blob",
          }
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      } catch (err) {
        alert("Failed to merge and download: " + err.message);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-y-auto max-h-[90vh] p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500 cursor-pointer"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <img
            src={thumbnail}
            alt={title}
            className="w-full md:w-64 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">Uploader: {uploader}</p>
            <p className="text-gray-600">
              Duration: {formatDuration(duration)}
            </p>
          </div>
        </div>

        {/* Muxed Formats */}
        {filteredMuxed.length > 0 && (
          <div className="mb-6">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() =>
                isMobile && setShowMuxedDropdown(!showMuxedDropdown)
              }
            >
              <h3 className="text-lg font-medium text-purple-700">
                Muxed Formats (Audio + Video)
              </h3>
              <div className="md:hidden">
                {showMuxedDropdown ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ${
                !isMobile || showMuxedDropdown ? "block" : "hidden"
              }`}
            >
              {filteredMuxed.map((format, index) => (
                <button
                  key={index}
                  onClick={() => handleMuxedSelect(format)}
                  className={`p-3 rounded-xl border transition text-left cursor-pointer ${
                    selectedMuxed === format
                      ? "bg-purple-600 text-white border-purple-700"
                      : "bg-purple-100 border-purple-300 hover:bg-purple-200 text-purple-900"
                  }`}
                >
                  <p className="text-sm font-medium">
                    {format.format_note || format.ext} (
                    {format.resolution || "Unknown"})
                  </p>
                  <p className="text-xs">Size: {formatSize(format.filesize)}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Video Formats */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => isMobile && setShowVideoDropdown(!showVideoDropdown)}
          >
            <h3 className="text-lg font-medium text-blue-700">Video Formats</h3>
            <div className="md:hidden">
              {showVideoDropdown ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ${
              !isMobile || showVideoDropdown ? "block" : "hidden"
            }`}
          >
            {filteredVideos.map((format, index) => (
              <button
                key={index}
                onClick={() => handleVideoSelect(format)}
                className={`p-3 rounded-xl border transition text-left cursor-pointer ${
                  selectedVideo === format
                    ? "bg-blue-600 text-white border-blue-700"
                    : "bg-blue-100 border-blue-300 hover:bg-blue-200 text-blue-900"
                }`}
              >
                <p className="text-sm font-medium">
                  {format.format_note || format.ext} (
                  {format.resolution || "Unknown"})
                </p>
                <p className="text-xs">Size: {formatSize(format.filesize)}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Audio Formats */}
        <div>
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => isMobile && setShowAudioDropdown(!showAudioDropdown)}
          >
            <h3 className="text-lg font-medium text-green-700">
              Audio Formats
            </h3>
            <div className="md:hidden">
              {showAudioDropdown ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ${
              !isMobile || showAudioDropdown ? "block" : "hidden"
            }`}
          >
            {filteredAudios.map((format, index) => (
              <button
                key={index}
                onClick={() => handleAudioSelect(format)}
                className={`p-3 rounded-xl border transition text-left cursor-pointer ${
                  selectedAudio === format
                    ? "bg-green-600 text-white border-green-700"
                    : "bg-green-100 border-green-300 hover:bg-green-200 text-green-900"
                }`}
              >
                <p className="text-sm font-medium">
                  {format.ext || "Audio"} (
                  {format.acodec ? `${format.acodec}` : "Unknown"})
                </p>
                <p className="text-xs">
                  Size:{" "}
                  {format.filesize
                    ? `${(format.filesize / 1024 / 1024).toFixed(2)} MB`
                    : "N/A"}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <p className="mt-6 text-sm text-gray-600">
          Please select <strong>one</strong> muxed format OR{" "}
          <strong>one</strong> video format and <strong>one</strong> audio
          format to download.
        </p>

        {/* Download Button */}
        <button
          disabled={!canDownload}
          onClick={handleDownload}
          className={`mt-4 w-full py-3 rounded-lg font-semibold transition ${
            canDownload
              ? "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default VideoResultModal;
