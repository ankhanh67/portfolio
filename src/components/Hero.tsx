import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Play, Pause, Video, Image as ImageIcon, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showPosterOnly, setShowPosterOnly] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying && !showPosterOnly) {
        videoRef.current.play().catch(() => {
          // Autoplay policy or low power mode might prevent auto play
          setIsVideoPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying, showPosterOnly]);

  const toggleVideoPlayback = () => {
    if (showPosterOnly) {
      setShowPosterOnly(false);
      setIsVideoPlaying(true);
      return;
    }
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Media Container with object-fit: cover */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Video Element */}
        {!videoError && !showPosterOnly && (
          <video
            ref={videoRef}
            src={PORTFOLIO_DATA.heroMedia.videoUrl}
            poster={PORTFOLIO_DATA.heroMedia.posterImage}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40 dark:opacity-30' : 'opacity-0'
            }`}
          />
        )}

        {/* Fallback Static High-Res Backdrop Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            showPosterOnly || videoError || !videoLoaded
              ? 'opacity-35 dark:opacity-25'
              : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${PORTFOLIO_DATA.heroMedia.posterImage})` }}
        />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40" />

        {/* Measured Scrim & Gradient Overlays for Guaranteed Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa]/80 via-[#fafafa]/50 to-[#fafafa] dark:from-[#07090e]/85 dark:via-[#07090e]/60 dark:to-[#07090e]" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-white/90 dark:to-[#07090e]/95" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between pt-12 md:pt-16">
        {/* Header Kicker / Candidate Status */}
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">
          <span className="text-amber-600 dark:text-amber-400 font-semibold">SMU MITB Applicant</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
          <span>Master of IT in Business</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
          <span>Singapore Management University</span>
        </div>

        {/* Oversized Expressive Typography Hero Composition */}
        <div className="space-y-6 max-w-5xl">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-slate-950 dark:text-white leading-[0.92] uppercase">
            An Khanh
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-800 dark:text-slate-100 leading-snug tracking-tight text-balance">
                Bridging the commercial intuition of <span className="text-amber-600 dark:text-amber-400">marketing strategy</span> with the predictive power of <span className="text-blue-600 dark:text-blue-400">computational intelligence</span>.
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {PORTFOLIO_DATA.profile.shortBio}
              </p>
            </div>

            {/* Right quick stats / narrative summary strip */}
            <div className="lg:col-span-4 flex flex-col gap-3 p-5 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 shadow-xs">
              <div className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>Core Trajectory</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-mono">01</span>
                  <span>Market Analytics & Customer Empathy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">02</span>
                  <span>Data Science, Machine Learning & Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">03</span>
                  <span>SMU MITB & Enterprise Tech Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Strip: Video Controls & Story Scroll Indicator */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Ambient Video Mode Controls (Respecting user request for replaceable background video) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleVideoPlayback}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer shadow-xs"
              title={isVideoPlaying ? 'Pause ambient video' : 'Play ambient video'}
            >
              {isVideoPlaying && !showPosterOnly ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ambient Video: Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Play Ambient Loop</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowPosterOnly((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Toggle between Video and Static Architectural Backdrop"
            >
              {showPosterOnly ? (
                <>
                  <Video className="w-3.5 h-3.5" />
                  <span>Switch to Video</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Static Backdrop</span>
                </>
              )}
            </button>
          </div>

          {/* Narrative Scroll Cue */}
          <a
            href="#about"
            className="group flex items-center gap-3 text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <span>Begin Narrative Journey</span>
            <div className="w-7 h-7 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:border-amber-500 group-hover:translate-y-0.5 transition-all">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
