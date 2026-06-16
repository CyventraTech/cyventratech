import { Suspense, lazy, useState, useEffect } from 'react'

// Spline is loaded lazily — the ~2MB bundle only downloads when triggered
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  /** Delay in ms before starting to load the heavy 3D scene (default 1500ms) */
  loadDelay?: number
}

export function SplineScene({ scene, className, loadDelay = 1500 }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  // Defer loading until after first paint + delay
  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), loadDelay)
    return () => clearTimeout(timer)
  }, [loadDelay])

  if (!shouldLoad) {
    return <SplinePlaceholder />
  }

  return (
    <Suspense fallback={<SplinePlaceholder />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}

/** Animated placeholder shown while Spline loads */
function SplinePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Pulsing rings */}
      <style>{`
        @keyframes ringPulse {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes scanLine {
          0%   { top: 10%; opacity: 0.6; }
          100% { top: 90%; opacity: 0; }
        }
      `}</style>

      {/* Concentric pulsing rings */}
      {[0, 0.4, 0.8].map((delay, i) => (
        <div key={i} className="absolute rounded-full border"
          style={{
            width: `${180 + i * 80}px`,
            height: `${180 + i * 80}px`,
            borderColor: i % 2 === 0 ? 'rgba(239,68,68,0.4)' : 'rgba(59,130,246,0.4)',
            animation: `ringPulse 2s ${delay}s ease-out infinite`,
          }} />
      ))}

      {/* Robot SVG silhouette */}
      <div style={{ animation: 'robotFloat 3s ease-in-out infinite' }}>
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <rect x="35" y="10" width="50" height="40" rx="12" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="2"/>
          {/* Eyes */}
          <circle cx="48" cy="28" r="6" fill="#3b82f6" opacity="0.9"/>
          <circle cx="72" cy="28" r="6" fill="#ef4444" opacity="0.9"/>
          {/* Eye glow */}
          <circle cx="48" cy="28" r="3" fill="white" opacity="0.8"/>
          <circle cx="72" cy="28" r="3" fill="white" opacity="0.8"/>
          {/* Neck */}
          <rect x="53" y="50" width="14" height="10" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="1.5"/>
          {/* Body */}
          <rect x="25" y="60" width="70" height="55" rx="10" fill="#0f0f1a" stroke="#3b82f6" strokeWidth="2"/>
          {/* Chest panel */}
          <rect x="40" y="72" width="40" height="25" rx="6" fill="#1a1a2e" stroke="#ef4444" strokeWidth="1.5"/>
          {/* Chest light */}
          <circle cx="60" cy="84" r="6" fill="#ef4444" opacity="0.8"/>
          <circle cx="60" cy="84" r="3" fill="white" opacity="0.9"/>
          {/* Arms */}
          <rect x="5" y="62" width="18" height="45" rx="8" fill="#0f0f1a" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="97" y="62" width="18" height="45" rx="8" fill="#0f0f1a" stroke="#3b82f6" strokeWidth="1.5"/>
          {/* Legs */}
          <rect x="32" y="115" width="22" height="35" rx="8" fill="#0f0f1a" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="66" y="115" width="22" height="35" rx="8" fill="#0f0f1a" stroke="#3b82f6" strokeWidth="1.5"/>
          {/* Scan line */}
          <rect x="40" y="75" width="40" height="2" rx="1" fill="#ef4444" opacity="0.7"
            style={{ animation: 'scanLine 1.5s linear infinite', position: 'absolute' }}/>
        </svg>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-8 text-center">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-white/30 text-xs mt-2 tracking-widest uppercase">loading</p>
      </div>
    </div>
  )
}
