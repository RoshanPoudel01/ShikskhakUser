import { Icon, IconProps } from "@chakra-ui/react";

export const UsersIcon = (props: IconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_1_10867)">
        <circle cx="90" cy="80" r="50" fill="#29B9E7" fillOpacity="0.2" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_10867"
          x="0"
          y="0"
          width="180"
          height="180"
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
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.212 0 0 0 0 0.238778 0 0 0 0 0.533333 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_10867"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_10867"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
};
