import type { SVGProps } from "react"

/**
 * Hand-drawn-feeling stroke icon set. 1.7px strokes, rounded caps,
 * 24x24 viewBox. Sized via the `size` prop, colored via currentColor.
 */
type IconProps = { size?: number } & SVGProps<SVGSVGElement>

function Base({ size = 20, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const IconMic = (p: IconProps) => (
  <Base {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </Base>
)

export const IconCamera = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.2" />
  </Base>
)

export const IconReceipt = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21z" />
    <path d="M9 8h6M9 12h6" />
  </Base>
)

export const IconChat = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M8 9h8M8 12h5" />
  </Base>
)

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 12.5l5 5 10-11" />
  </Base>
)

export const IconCheckSeal = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.8l2.2 2 3-.3 1 2.8 2.6 1.5-.8 2.9.8 2.9-2.6 1.5-1 2.8-3-.3-2.2 2-2.2-2-3 .3-1-2.8L3.2 14.6l.8-2.9-.8-2.9 2.6-1.5 1-2.8 3 .3z" />
    <path d="M8.8 12.2l2.2 2.2 4.2-4.6" />
  </Base>
)

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Base>
)

export const IconLink = (p: IconProps) => (
  <Base {...p}>
    <path d="M9.5 14.5l5-5" />
    <path d="M11 7.5l2-2a3.54 3.54 0 0 1 5 5l-2 2" />
    <path d="M13 16.5l-2 2a3.54 3.54 0 0 1-5-5l2-2" />
  </Base>
)

export const IconSun = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8" />
  </Base>
)

export const IconHome = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </Base>
)

export const IconDesk = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M3 13h18M9 20h6M12 16v4" />
  </Base>
)

export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </Base>
)

export const IconRupee = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 4h10M7 8.5h10M7 4c6 0 6 8 0 8l7 8" />
  </Base>
)

export const IconClipboard = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="4.5" width="14" height="17" rx="2" />
    <path d="M9 4.5V3h6v1.5" />
    <path d="M8.5 10h7M8.5 13.5h7M8.5 17h4" />
  </Base>
)

export const IconHardHat = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 16a8 8 0 0 1 16 0" />
    <path d="M2.8 16h18.4v2.5H2.8z" />
    <path d="M10 8.5V6h4v2.5" />
  </Base>
)

export const IconEye = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="2.8" />
  </Base>
)

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.8l7.5 3v5.5c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10V5.8z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.6" />
  </Base>
)

export const IconCompass = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </Base>
)

export const IconLayers = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5l9 4.5-9 4.5L3 8z" />
    <path d="M3 12.5l9 4.5 9-4.5M3 17l9 4.5L21 17" opacity="0.6" />
  </Base>
)

export const IconWallet = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6" width="18" height="14" rx="2.5" />
    <path d="M3 10h18" />
    <circle cx="16.5" cy="15" r="1.2" fill="currentColor" stroke="none" />
  </Base>
)

export const IconDocument = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 2.5h8l4 4V21.5H6z" />
    <path d="M14 2.5v4h4" />
    <path d="M9 12h6M9 15.5h6" />
  </Base>
)

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
)

export const IconClose = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
)

export const IconPlay = (p: IconProps) => (
  <Base {...p}>
    <path d="M8 5.5l11 6.5-11 6.5z" />
  </Base>
)

export const IconWaveform = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 10v4M7.5 7.5v9M11 5v14M14.5 8.5v7M18 6.5v11M21 10v4" />
  </Base>
)
