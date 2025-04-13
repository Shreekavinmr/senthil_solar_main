import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Animation
import { motion } from "framer-motion";

// Import your video from assets
import solarVideo from "assets/videos/commercil_video.mp4"; // update path as needed

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function CustomVideoPlayer({ isVisible }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => setShowControls(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, showControls]);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
    setShowControls(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (event, newValue) => {
    if (videoRef.current) {
      const newTime = (newValue / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(newValue);
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.volume = newValue;
      setVolume(newValue);
      setIsMuted(newValue === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume || 0.5;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const skipForward = () => {
    if (videoRef.current) videoRef.current.currentTime += 10;
    setShowControls(true);
  };

  const skipBackward = () => {
    if (videoRef.current) videoRef.current.currentTime -= 10;
    setShowControls(true);
  };

  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
      setShowControls(true);
    }
  };

  const videoAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container sx={{ my: 6 }}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={videoAnimation}
      >
        <MKBox textAlign="center" mb={4}>
          <MKTypography variant="h2" mb={1}>
            Our Solar Solutions
          </MKTypography>
          <MKTypography variant="body1" color="text">
            See how we are transforming businesses with clean energy
          </MKTypography>
        </MKBox>

        <Card
          ref={containerRef}
          sx={{
            overflow: "hidden",
            boxShadow: 5,
            position: "relative",
            mx: "auto",
            maxWidth: "960px" // ⬅️ LIMIT SIZE
          }}
          onMouseMove={() => setShowControls(true)}
        >
          <MKBox
            sx={{
              position: "relative",
              height: "800px", // ⬅️ MAINTAIN ASPECT RATIO
              width: "100%",
              backgroundColor: "black"
            }}
          >
            <video
              ref={videoRef}
              poster="assets/images/video-poster.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={solarVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && showControls && (
              <MKBox
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                }}
                onClick={togglePlay}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    minWidth: "auto",
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 40 }} />
                </Button>
              </MKBox>
            )}

            {showControls && (
              <MKBox
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "10px 16px",
                  transition: "opacity 0.3s ease",
                }}
              >
                <Slider
                  value={progress}
                  onChange={handleProgressChange}
                  aria-label="Video Progress"
                  sx={{
                    color: "primary.main",
                    height: 4,
                    padding: "13px 0",
                    '& .MuiSlider-thumb': {
                      width: 12,
                      height: 12,
                      transition: '0.3s',
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0px 0px 0px 8px rgba(255, 255, 255, 0.16)`,
                      },
                    },
                  }}
                />

                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton onClick={togglePlay} size="medium" sx={{ color: "white" }}>
                      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <IconButton onClick={skipBackward} size="medium" sx={{ color: "white" }}>
                      <FastRewindIcon />
                    </IconButton>
                    <IconButton onClick={skipForward} size="medium" sx={{ color: "white" }}>
                      <FastForwardIcon />
                    </IconButton>
                    <MKTypography variant="button" color="white">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </MKTypography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton onClick={toggleMute} size="medium" sx={{ color: "white" }}>
                      {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </IconButton>
                    <Slider
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      aria-label="Volume"
                      min={0}
                      max={1}
                      step={0.01}
                      sx={{
                        width: 100,
                        color: "white",
                        '& .MuiSlider-track': {
                          border: 'none',
                        },
                      }}
                    />
                    <IconButton onClick={toggleFullScreen} size="medium" sx={{ color: "white" }}>
                      <FullscreenIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </MKBox>
            )}
          </MKBox>

          <MKBox p={3} textAlign="center">
            <MKTypography variant="h4" mb={1}>
              See Our Solutions In Action
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Watch how our commercial solar installations are helping businesses save money while contributing to a sustainable future.
            </MKTypography>
          </MKBox>
        </Card>
      </motion.div>
    </Container>
  );
}

CustomVideoPlayer.propTypes = {
  isVisible: PropTypes.bool
};

CustomVideoPlayer.defaultProps = {
  isVisible: false
};

export default CustomVideoPlayer;
