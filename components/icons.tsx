import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string
}

function PlaceholderIcon({ size = 24, width, height, ...props }: IconProps) {
  return (
    <svg
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  )
}

export const Star = PlaceholderIcon
export const Download = PlaceholderIcon
export const Share2 = PlaceholderIcon
export const Bookmark = PlaceholderIcon
export const Calendar = PlaceholderIcon
export const Code = PlaceholderIcon
export const Mail = PlaceholderIcon
export const Lock = PlaceholderIcon
export const User = PlaceholderIcon
export const AlertCircle = PlaceholderIcon
export const Github = PlaceholderIcon
export const ChevronDown = PlaceholderIcon
export const Filter = PlaceholderIcon
export const X = PlaceholderIcon
export const Users = PlaceholderIcon
export const Globe = PlaceholderIcon
export const Upload = PlaceholderIcon
export const FileText = PlaceholderIcon
export const CheckCircle = PlaceholderIcon
