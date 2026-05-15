export interface EraData {
  id: string;
  title: string;
  year: string;
  yearEnd: string;
  medium: string;
  artifact: string;
  source: string;
  symbol: string;
  bg: string;
  border: string;
  borderWidth: string;
  accent: string;
  accentLight: string;
  textPrimary: string;
  textSecondary: string;
  fontWeight: string;
  letterSpacing: string;
  hasTexture: boolean;
  isTypewriter: boolean;
  isHero?: boolean;
  description: string;
  significance: string;
}

export const eras: EraData[] = [
  {
    id: "01",
    title: "The Telegraph Age",
    year: "1837",
    yearEnd: "1900",
    medium: "Morse · Wire · Code",
    artifact: "Morse-Vail Telegraph Key",
    source: "Smithsonian Institution",
    symbol: "—·—·",
    bg: "#F2EAD8",
    border: "#0D0D0D",
    borderWidth: "3px",
    accent: "#8B3A2A",
    accentLight: "#C4602A",
    textPrimary: "#1A0F08",
    textSecondary: "#4A3728",
    fontWeight: "900",
    letterSpacing: "-0.01em",
    hasTexture: true,
    isTypewriter: true,
    description:
      "Electricity collapsed distance. For the first time, a message could outrun a horse — crossing continents in seconds through copper nerves buried beneath ocean floors. Samuel Morse's dots and dashes became the first digital language.",
    significance: "Beginning of real-time long-distance communication.",
  },
  {
    id: "02",
    title: "The Vocal Era",
    year: "1876",
    yearEnd: "1950",
    medium: "Bell · Circuit · Voice",
    artifact: "Bell's First Telephone Patent",
    source: "National Archives",
    symbol: "☏",
    bg: "#F5F0E0",
    border: "#0D0D0D",
    borderWidth: "2.5px",
    accent: "#1B3A6B",
    accentLight: "#2B5FA8",
    textPrimary: "#0D1B2A",
    textSecondary: "#2C4A6E",
    fontWeight: "800",
    letterSpacing: "-0.01em",
    hasTexture: false,
    isTypewriter: false,
    description:
      "Sound became portable. The human voice, stripped to electrical impulse, traveled down copper wire into another ear miles away. Bell's 1876 patent — scrawled hours before a rival arrived — marks the shift from coded pulse to human presence.",
    significance: "Shift from coded pulses (Morse) to transmission of the human voice.",
  },
  {
    id: "03",
    title: "The Wireless Era",
    year: "1901",
    yearEnd: "1980",
    medium: "Hertz · Wave · Ether",
    artifact: "Transatlantic Telegraph Cable",
    source: "Wikipedia — Historical Context",
    symbol: "~∿~",
    bg: "#F8F5EE",
    border: "#0D0D0D",
    borderWidth: "2px",
    accent: "#C17B00",
    accentLight: "#E8A800",
    textPrimary: "#1C1208",
    textSecondary: "#5C4A20",
    fontWeight: "700",
    letterSpacing: "0em",
    hasTexture: false,
    isTypewriter: false,
    description:
      "Invisible waves carrying voices, music, and war bulletins poured from towers into living rooms — binding strangers into a shared present. The transatlantic cable's 27,000 km of copper wire proved that no ocean was too wide.",
    significance: "Massive physical infrastructure required to connect the world globally.",
  },
  {
    id: "04",
    title: "The Digital Packet",
    year: "1983",
    yearEnd: "Now",
    medium: "TCP/IP · Bit · Protocol",
    artifact: "Motorola DynaTAC 8000X",
    source: "Motorola — Product Media",
    symbol: "01",
    bg: "#FAFAFA",
    border: "#0D0D0D",
    borderWidth: "1px",
    accent: "#D7263D",
    accentLight: "#FF4458",
    textPrimary: "#0D0D0D",
    textSecondary: "#555555",
    fontWeight: "400",
    letterSpacing: "0.02em",
    hasTexture: false,
    isTypewriter: false,
    isHero: true,
    description:
      "Messages atomized into packets, routed around damage, reassembled at the other end. The DynaTAC — $3,995, one hour of talk time — liberated the call from the wall. Communication became untethered, personal, everywhere.",
    significance: "Transition from place-to-place communication to person-to-person communication.",
  },
];
