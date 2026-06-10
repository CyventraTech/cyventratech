import React from 'react'

interface CyventraLogoProps {
  className?: string
  variant?: 'full' | 'icon'
}

export default function CyventraLogo({ className = '', variant = 'full' }: CyventraLogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 200 220"
        className={className || 'h-12 w-auto'}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CYVENTRA icon"
      >
        <Shield />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 520 180"
      className={className || 'h-14 w-auto'}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CYVENTRA Technologies"
    >
      {/* Shield icon left */}
      <g transform="translate(0, 10) scale(0.82)">
        <Shield />
      </g>

      {/* CYVENTRA wordmark */}
      {/* CYV — white/silver */}
      <text
        x="185"
        y="90"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill="url(#blueGrad)"
        letterSpacing="-1"
      >
        CY
      </text>
      {/* VEN — red */}
      <text
        x="311"
        y="90"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill="#cc1a1a"
        letterSpacing="-1"
      >
        VEN
      </text>
      {/* TRA — dark blue */}
      <text
        x="449"
        y="90"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill="url(#blueGrad)"
        letterSpacing="-1"
      >
        TRA
      </text>

      {/* TECHNOLOGIES subtitle */}
      <line x1="186" y1="106" x2="310" y2="106" stroke="#cc1a1a" strokeWidth="2" />
      <text
        x="352"
        y="122"
        fontFamily="'Arial', sans-serif"
        fontWeight="600"
        fontSize="18"
        fill="#cc1a1a"
        textAnchor="middle"
        letterSpacing="4"
      >
        TECHNOLOGIES
      </text>
      <line x1="394" y1="106" x2="518" y2="106" stroke="#cc1a1a" strokeWidth="2" />

      <defs>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a5cd4" />
          <stop offset="100%" stopColor="#1a3a8f" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* Shared shield graphic */
function Shield() {
  return (
    <g>
      {/* Shield body — left half blue, right half red */}
      <defs>
        <linearGradient id="shieldLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a5cd4" />
          <stop offset="100%" stopColor="#1a3a8f" />
        </linearGradient>
        <linearGradient id="shieldRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dd2222" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
        <linearGradient id="orbitRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="100%" stopColor="#cc1a1a" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="leftHalf">
          <rect x="0" y="0" width="100" height="220" />
        </clipPath>
        <clipPath id="rightHalf">
          <rect x="100" y="0" width="100" height="220" />
        </clipPath>
      </defs>

      {/* Full shield path */}
      <path
        d="M100 8 L20 35 L20 110 C20 155 55 185 100 200 C145 185 180 155 180 110 L180 35 Z"
        fill="url(#shieldLeft)"
        clipPath="url(#leftHalf)"
      />
      <path
        d="M100 8 L20 35 L20 110 C20 155 55 185 100 200 C145 185 180 155 180 110 L180 35 Z"
        fill="url(#shieldRight)"
        clipPath="url(#rightHalf)"
      />

      {/* Shield border / silver trim */}
      <path
        d="M100 8 L20 35 L20 110 C20 155 55 185 100 200 C145 185 180 155 180 110 L180 35 Z"
        fill="none"
        stroke="url(#silverTrim)"
        strokeWidth="5"
      />

      {/* Center divider line */}
      <line x1="100" y1="8" x2="100" y2="200" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

      {/* C letter mark inside shield */}
      <path
        d="M130 65 C118 56 82 56 70 65 C58 74 56 92 56 100 C56 120 66 138 100 138 C116 138 126 132 133 123"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />

      {/* Cloud icon */}
      <ellipse cx="100" cy="104" rx="16" ry="10" fill="white" opacity="0.95" />
      <ellipse cx="88" cy="98" rx="11" ry="9" fill="white" opacity="0.95" />
      <ellipse cx="113" cy="98" rx="11" ry="9" fill="white" opacity="0.95" />

      {/* Orbit ellipse — red */}
      <ellipse
        cx="100" cy="108"
        rx="88" ry="32"
        stroke="url(#orbitRed)"
        strokeWidth="5"
        fill="none"
        transform="rotate(-18 100 108)"
        filter="url(#glow)"
      />

      {/* Orbit ellipse — blue (slightly larger) */}
      <ellipse
        cx="100" cy="108"
        rx="92" ry="34"
        stroke="#2a5cd4"
        strokeWidth="3.5"
        fill="none"
        transform="rotate(-22 100 108)"
        opacity="0.8"
      />

      {/* White outer ring trim */}
      <ellipse
        cx="100" cy="108"
        rx="90" ry="33"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        fill="none"
        transform="rotate(-20 100 108)"
      />

      {/* Glowing node dots */}
      <circle cx="28" cy="88" r="5" fill="#3b82f6" filter="url(#glow)" />
      <circle cx="172" cy="128" r="5" fill="#ff4444" filter="url(#glow)" />

      <defs>
        <linearGradient id="silverTrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#b0b0b0" />
        </linearGradient>
      </defs>
    </g>
  )
}
