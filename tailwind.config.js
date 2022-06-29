/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",

      black: "#232323",
      white: "#fff",

      gray: {
        50: "#FAF8F0",
        100: "#E5E5E5",
        200: "#AAAAAA",
        300: "#A8A8A8",
        400: "#797979",
        500: "#454545",
        600: "#475569",
        700: "#3F3F3F",
        800: "#1E293B",
        900: "#2F2F2F",
      },
      red: {
        50: "#FCFBF9",
        100: "#FDEEEB",
        200: "#F6D3C7",
        300: "#E9A89A",
        400: "#E17A6D",
        500: "#D55959",
        600: "#B63D32",
        700: "#8F2D27",
        800: "#65201B",
        900: "#3F1410",
      },
      orange: {
        50: "#FBFAF6",
        100: "#F9F0D1",
        200: "#EDD7A7",
        300: "#E0B36E",
        400: "#FF824F",
        500: "#FF824F",
        600: "#924C18",
        700: "#703914",
        800: "#4D2710",
        900: "#31180B",
      },
      yellow: {
        50: "#FDFBED",
        100: "#FBF0C2",
        200: "#f5edaf",
        300: "#EFE281",
        400: "#E9D758",
        500: "#F1D870",
        600: "#EDCE4F",
        700: "#897d22",
        800: "#5c5416",
        900: "#2e2a0b",
      },
      green: {
        50: "#EFF5F4",
        100: "#D1EFF2",
        200: "#B7E9C5",
        300: "#62CBBF",
        400: "#4C8557",
        500: "#4F885A",
        600: "#197B57",
        700: "#185E45",
        800: "#124134",
        900: "#0D2827",
      },
      teal: {
        50: "#F0FAFA",
        100: "#d2dede",
        200: "#a6bdbd",
        300: "#369696",
        400: "#297373",
        500: "#205A5A",
        600: "#1a4848",
        700: "#133636",
        800: "#0d2424",
        900: "#061212",
      },
      blue: {
        50: "#EBF8FF",
        100: "#ceefff",
        200: "#9ddeff",
        300: "#70CFFF",
        400: "#45C1FF",
        500: "#4E97B7",
        600: "#088acc",
        700: "#345370",
        800: "#044566",
        900: "#022333",
      },
      indigo: {
        50: "#F7F9FB",
        100: "#E3F0FC",
        200: "#C5DAFA",
        300: "#9CB6F2",
        400: "#778FE8",
        500: "#345370",
        600: "#4E4ED2",
        700: "#3C3AB1",
        800: "#345370",
        900: "#000000",
      },
      purple: {
        50: "#F9FAFB",
        100: "#EFEFFA",
        200: "#DDD5F6",
        300: "#BFAFE9",
        400: "#A885D9",
        500: "#56548D",
        600: "#7645B5",
        700: "#593490",
        800: "#3D2465",
        900: "#23173C",
      },
      pink: {
        50: "#FCFBFA",
        100: "#F9EFF1",
        200: "#F4D0E4",
        300: "#E6A5C7",
        400: "#DF76A5",
        500: "#CF5387",
        600: "#B63867",
        700: "#8E2A4C",
        800: "#651E32",
        900: "#3D131C",
      },
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      26: "6.5rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    keyframes: {
      fadeInLtoR: {
        "0%": { opacity: "0", transform: "translateX(-70px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      fadeInRtoL: {
        "0%": { opacity: "0", transform: "translateX(70px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      fadeInDtoU: {
        "0%": { opacity: "0", transform: "translateY(70px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      fadeInUtoD: {
        "0%": { opacity: "0", transform: "translateY(-70px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      moveUtoD: {
        "0%": { transform: "translateY(-15px)" },
        "50%": { transform: "translateY(15px)" },
        "100%": { transform: "translateY(-15px)" },
      },
      moveDtoU: {
        "0%": { transform: "translateY(15px)" },
        "50%": { transform: "translateY(-15px)" },
        "100%": { transform: "translateY(15px)" },
      },
      goUpFirst: {
        "0%": {
          transform: "translateY(0)",
        },
        "100%": {
          transform: "translateY(-50px)",
        },
      },
      goUpSecond: {
        "20%": {
          transform: "translateY(0)",
        },
        "100%": {
          transform: "translateY(-90px)",
        },
      },
      goUpThird: {
        "30%": {
          transform: "translateY(0)",
        },
        "100%": {
          transform: "translateY(-120px)",
        },
      },
      goUpFourth: {
        "50%": {
          transform: "translateY(0)",
        },
        "100%": {
          transform: "translateY(-30px)",
        },
      },
    },
    animation: {
      fadeInLtoR: "fadeInLtoR 1.1s ease-out",
      fadeInRtoL: "fadeInRtoL 1.1s ease-out",
      fadeInDtoU: "fadeInDtoU 1.1s ease-out",
      fadeInUtoD: "fadeInUtoD 1.1s ease-out",
      moveUtoD: "moveUtoD 2.5s infinite",
      moveDtoU: "moveDtoU 2.5s infinite",
      goUpFirst: "goUpFirst 0.9s linear forwards",
      goUpSecond: "goUpSecond 0.9s linear forwards",
      goUpThird: "goUpThird 0.9s linear forwards",
      goUpFourth: "goUpFourth 0.9s linear forwards",
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      body: "#303030",
    }),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderColor: theme => ({
      ...theme("colors"),
      DEFAULT: "#F1F5F9",
    }),
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.375rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
    boxShadow: {
      sm: "2px 2px 0px 0.5px rgba(0, 0, 0, 1)",
      DEFAULT: "6px 6px 0px 2px rgba(0, 0, 0, 1)",
      md: "4px 4px 0px 1px rgba(0, 0, 0,1)",
      lg: "5px 5px 0px 5px rgba(19, 38, 70, 0.25)",
      xl: "7px 7px 8px 2px rgba(0, 0, 0, 0.15)",
      "2xl": "9px 9px 0px 9px rgba(19, 38, 70, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    container: {},
    cursor: {
      auto: "auto",
      DEFAULT: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    fill: {
      current: "currentColor",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontFamily: {
      body: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      heading: '"Black Ops One", cursive',
      sans: '"Do Hyeon", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.875rem" }],
      lg: ["1.125rem", { lineHeight: "1.875rem" }],
      xl: ["1.25rem", { lineHeight: "2.25rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2.25rem", { lineHeight: "1.125" }],
      "4xl": ["3rem", { lineHeight: "1.125" }],
      "5xl": ["4rem", { lineHeight: "1.125" }],
      "6xl": ["4.5rem", { lineHeight: "1" }],
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    inset: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
      "-1/2": "-50%",
      "-1/3": "-33.333333%",
      "-2/3": "-66.666667%",
      "-1/4": "-25%",
      "-2/4": "-50%",
      "-3/4": "-75%",
      "-full": "-100%",
    }),
    letterSpacing: {
      tighter: "-0.02em",
      tight: "-1px",
      normal: "0em",
      wide: "0.03em",
      wider: "0.08em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    maxWidth: {
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
    },
    minHeight: {
      0: "0",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      0: "0",
      full: "100%",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    padding: theme => theme("spacing"),
    placeholderColor: theme => theme("colors"),
    stroke: {
      current: "currentColor",
    },
    textColor: theme => ({
      ...theme("colors"),
      body: "#FAF8F0",
    }),
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
  },
  variants: {
    accessibility: ["responsive", "focus-within", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    animation: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundClip: ["responsive"],
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    backgroundImage: ["responsive"],
    backgroundOpacity: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderOpacity: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    boxSizing: ["responsive"],
    clear: ["responsive"],
    container: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive", "dark"],
    divideOpacity: ["responsive"],
    divideStyle: ["responsive"],
    divideWidth: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontVariantNumeric: ["responsive"],
    fontWeight: ["responsive"],
    gap: ["responsive"],
    gradientColorStops: ["responsive", "dark", "hover", "focus"],
    gridAutoColumns: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridAutoRows: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridColumnStart: ["responsive"],
    gridRow: ["responsive"],
    gridRowEnd: ["responsive"],
    gridRowStart: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridTemplateRows: ["responsive"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus-within", "focus"],
    overflow: ["responsive"],
    overscrollBehavior: ["responsive"],
    padding: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    placeholderColor: ["responsive", "dark", "focus"],
    placeholderOpacity: ["responsive", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    ringColor: ["responsive", "dark", "focus-within", "focus"],
    ringOffsetColor: ["responsive", "dark", "focus-within", "focus"],
    ringOffsetWidth: ["responsive", "focus-within", "focus"],
    ringOpacity: ["responsive", "focus-within", "focus"],
    ringWidth: ["responsive", "focus-within", "focus"],
    rotate: ["responsive", "hover", "focus"],
    scale: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textDecoration: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textOpacity: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textOverflow: ["responsive"],
    textTransform: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    transitionDelay: ["responsive"],
    transitionDuration: ["responsive"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    translate: ["responsive", "hover", "focus"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive", "focus-within", "focus"],
  },
  corePlugins: {},
  plugins: [],
};
