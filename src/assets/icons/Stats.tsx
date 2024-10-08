import { Icon, IconProps } from "@chakra-ui/react";

export const StatsIcon = (props: IconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="149"
      height="149"
      viewBox="0 0 149 149"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_1_10915)">
        <rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C" />
      </g>
      <rect
        x="51.3496"
        y="44.0752"
        width="47.3"
        height="44.85"
        rx="8"
        fill="white"
      />
      <path
        d="M74.5 54.4248V78.5748"
        stroke="#F25471"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M65.875 58.7373L65.875 78.5748"
        stroke="#F25471"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M83.125 63.9121V78.5746"
        stroke="#F25471"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_d_1_10915"
          x="0"
          y="0"
          width="149"
          height="149"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_10915"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_10915"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
};
