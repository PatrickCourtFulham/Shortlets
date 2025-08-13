// src/components/VideoBackground.js
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/dn1jpokek/video/upload/v1754599059/14904130-hd_1920_1080_30fps_vi9niy.mp4" // Change to your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
    </div>
  );
};

export default VideoBackground;
