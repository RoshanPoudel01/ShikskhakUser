import { Icon, IconProps } from "@chakra-ui/react";

export const NotesIcon = (props: IconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="182"
      viewBox="0 0 180 182"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_1_10865)">
        <ellipse
          cx="90"
          cy="75"
          rx="50"
          ry="51"
          fill="#637BFF"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_10865"
          x="0"
          y="0"
          width="180"
          height="182"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.146118 0 0 0 0 0.172389 0 0 0 0 0.441667 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_10865"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_10865"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
};
