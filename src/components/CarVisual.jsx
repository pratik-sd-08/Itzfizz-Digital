export default function CarVisual() {
  return (
    <svg
      viewBox="0 0 900 360"
      className="h-auto w-full overflow-visible drop-shadow-[0_35px_55px_rgba(0,0,0,.45)]"
      role="img"
      aria-label="Abstract lime sports car"
    >
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1ff9c" />
          <stop offset=".28" stopColor="#d7ff43" />
          <stop offset=".7" stopColor="#74851d" />
          <stop offset="1" stopColor="#1c2110" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9dce0" stopOpacity=".85" />
          <stop offset=".5" stopColor="#31343a" stopOpacity=".9" />
          <stop offset="1" stopColor="#090a0b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <ellipse cx="455" cy="294" rx="350" ry="22" fill="#d7ff43" opacity=".12" filter="url(#glow)" />
      <path
        d="M92 251 C122 218 174 195 255 181 L342 118 C378 91 423 77 480 77 L590 79 C628 81 656 95 683 121 L749 183 C796 194 830 216 842 250 L830 279 H102 C91 270 86 260 92 251Z"
        fill="url(#body)"
        stroke="#efffa0"
        strokeOpacity=".55"
        strokeWidth="3"
      />
      <path
        d="M279 180 L354 125 C383 103 418 94 466 94 H579 C614 96 638 107 662 130 L712 181 Z"
        fill="url(#glass)"
        stroke="#fff"
        strokeOpacity=".14"
        strokeWidth="3"
      />
      <path d="M460 96 L452 179 M584 100 L594 181" stroke="#fff" strokeOpacity=".14" strokeWidth="3" />
      <path d="M130 229 H242 M662 229 H804" stroke="#eaff7d" strokeOpacity=".55" strokeWidth="7" strokeLinecap="round" />
      <path d="M750 201 Q794 212 822 242" stroke="#fff" strokeOpacity=".3" strokeWidth="5" fill="none" />
      <path d="M102 251 Q127 230 158 226" stroke="#d7ff43" strokeWidth="4" fill="none" />
      <circle cx="242" cy="268" r="55" fill="#090a0b" stroke="#727d32" strokeWidth="5" />
      <circle cx="242" cy="268" r="26" fill="#191c14" stroke="#d7ff43" strokeOpacity=".7" strokeWidth="4" />
      <circle cx="700" cy="268" r="55" fill="#090a0b" stroke="#727d32" strokeWidth="5" />
      <circle cx="700" cy="268" r="26" fill="#191c14" stroke="#d7ff43" strokeOpacity=".7" strokeWidth="4" />
      <path d="M335 218 H622" stroke="#fff" strokeOpacity=".16" strokeWidth="2" />
      <path d="M360 244 H588" stroke="#090a0b" strokeOpacity=".55" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}