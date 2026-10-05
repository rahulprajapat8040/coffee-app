import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

export const TabIcons = {
  Home: ({ size = 24, color = 'currentColor' }: IconProps) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M9.144 20.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 002.444-1 3.41 3.41 0 001.013-2.422V9.866c0-.735-.328-1.431-.895-1.902l-6.662-5.29a3.115 3.115 0 00-3.958.071L3.467 7.963A2.474 2.474 0 002.5 9.867v8.703C2.5 20.464 4.047 22 5.956 22h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036z"
          fill={color}
        />
      </Svg>
    );
  },
  Heart: ({ size = 24, color = 'currentColor' }: IconProps) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Mask
          id="a"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={2}
          y={2}
          width={21}
          height={21}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 3h20.473v19.5H2V3z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.824 12.123c1.402 4.362 6.94 7.889 8.413 8.762 1.477-.882 7.056-4.448 8.413-8.758.89-2.786.064-6.315-3.222-7.374-1.592-.511-3.45-.2-4.731.792a.75.75 0 01-.91.006 5.234 5.234 0 00-4.75-.798c-3.28 1.058-4.104 4.587-3.213 7.37zm8.414 10.378a.748.748 0 01-.36-.091c-.312-.171-7.685-4.235-9.482-9.829l-.001-.001c-1.128-3.522.128-7.948 4.183-9.255a6.729 6.729 0 015.657.714c1.626-1.028 3.786-1.312 5.652-.714 4.059 1.309 5.319 5.734 4.192 9.255-1.74 5.53-9.166 9.655-9.481 9.828a.743.743 0 01-.36.093z"
            fill={color}
          />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.154 10.625a.75.75 0 01-.747-.69 2.024 2.024 0 00-1.4-1.768.75.75 0 01.46-1.428 3.525 3.525 0 012.436 3.075.75.75 0 01-.75.81z"
          fill={color}
        />
      </Svg>
    );
  },
  Cart: ({ size = 24, color = 'currentColor' }: IconProps) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Mask
          id="a"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={2}
          y={6}
          width={20}
          height={17}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6.54h19.586v16.182H2V6.54z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.715 8.04c-.44 0-1.915.178-2.338 2.462l-.772 6c-.25 1.683-.057 2.901.578 3.638.627.728 1.75 1.082 3.43 1.082h8.348c1.048 0 2.478-.209 3.342-1.207.686-.79.922-1.969.703-3.502l-.78-6.052c-.331-1.49-1.207-2.42-2.331-2.42H6.715zm9.245 14.682H7.612c-2.143 0-3.636-.525-4.565-1.604-.933-1.082-1.245-2.705-.927-4.823l.776-6.026c.51-2.763 2.375-3.729 3.82-3.729h10.178c1.45 0 3.214.963 3.809 3.664l.788 6.107c.284 1.971-.07 3.552-1.053 4.686-.979 1.128-2.526 1.725-4.477 1.725z"
            fill={color}
          />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.098 7.82a.75.75 0 01-.75-.75 3.574 3.574 0 00-3.57-3.57h-.015A3.6 3.6 0 009.24 4.54a3.595 3.595 0 00-1.051 2.53.75.75 0 01-1.5 0c0-1.339.544-2.648 1.492-3.593A5.112 5.112 0 0111.76 2h.02a5.075 5.075 0 015.068 5.07.75.75 0 01-.75.75zM14.743 12.324h-.046a.75.75 0 010-1.5c.414 0 .773.336.773.75s-.313.75-.727.75zM8.912 12.324h-.045a.75.75 0 010-1.5c.414 0 .773.336.773.75s-.314.75-.728.75z"
          fill={color}
        />
      </Svg>
    );
  },
  Bell: ({ size = 24, color = 'currentColor' }: IconProps) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Mask
          id="a"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={3}
          y={1}
          width={19}
          height={18}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 1h18.497v17.348H3V1z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.247 2.5c-3.495 0-5.93 2.738-5.93 5.195 0 2.079-.578 3.04-1.088 3.888-.409.681-.732 1.219-.732 2.388.167 1.886 1.412 2.877 7.75 2.877 6.303 0 7.587-1.035 7.753-2.942-.003-1.104-.326-1.642-.735-2.323-.51-.848-1.087-1.809-1.087-3.888 0-2.457-2.436-5.195-5.93-5.195zm0 15.848c-4.676 0-8.902-.33-9.247-4.313-.003-1.648.5-2.486.944-3.224.45-.748.872-1.453.872-3.116C4.816 4.462 7.802 1 12.247 1s7.431 3.462 7.431 6.695c0 1.663.423 2.368.872 3.116.444.738.947 1.576.947 3.16-.349 4.047-4.574 4.377-9.25 4.377z"
            fill={color}
          />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.198 22.5h-.002c-1.12-.001-2.182-.495-2.987-1.392a.749.749 0 111.115-1.002c.518.577 1.183.894 1.873.894h.001c.693 0 1.361-.317 1.88-.895a.75.75 0 011.115 1.004c-.808.897-1.87 1.391-2.995 1.391z"
          fill={color}
        />
      </Svg>
    );
  },
};

export const TestIcon = () => (
  <Svg width={24} height={24}>
    <Path d="M2 12 L12 2 L22 12 V22 H2 Z" fill="#C67C4E" />
  </Svg>
);

export const ChevronDown = ({
  size = 24,
  color = 'currentColor',
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M2.607 4.649a.438.438 0 01.57-.042l.049.042L7 8.423l3.774-3.774a.438.438 0 01.57-.042l.049.042c.155.155.17.398.042.57l-.042.049L7.309 9.35a.438.438 0 01-.57.042l-.048-.042-4.084-4.083a.437.437 0 010-.619z"
        fill={color}
      />
    </Svg>
  );
};

export const ChevronLeft = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M16.03 4.47a.75.75 0 01.073.976l-.073.084L9.561 12l6.47 6.47a.75.75 0 01.072.976l-.073.084a.75.75 0 01-.976.073l-.084-.073-7-7a.75.75 0 01-.073-.976l.073-.084 7-7a.75.75 0 011.06 0z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};

export const SearchIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={17}
        height={17}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.667 1.667h16.23v16.23H1.667V1.668z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.782 2.917a6.873 6.873 0 00-6.865 6.865 6.874 6.874 0 006.865 6.866 6.873 6.873 0 006.865-6.866 6.873 6.873 0 00-6.865-6.865zm0 14.98c-4.475 0-8.115-3.64-8.115-8.115s3.64-8.115 8.115-8.115 8.115 3.64 8.115 8.115-3.64 8.116-8.115 8.116z"
          fill="#fff"
        />
      </G>
      <Mask
        id="b"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={14}
        y={14}
        width={5}
        height={5}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.367 14.756h4.186v4.179h-4.186v-4.18z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.928 18.935c-.159 0-.319-.061-.441-.183l-2.937-2.928a.625.625 0 01.883-.886l2.937 2.93a.624.624 0 01-.442 1.067z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const Plus = ({ size = 24, color = 'currentColor' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M4 8h8M8 12V4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
