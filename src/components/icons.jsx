const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 25s8-7.2 8-13a8 8 0 10-16 0c0 5.8 8 13 8 13z" />
      <circle cx="14" cy="12" r="3.2" />
    </svg>
  );
}

export function IconHeadset(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 15v-1a9 9 0 0118 0v1" />
      <rect x="3.5" y="14" width="4" height="6.5" rx="2" />
      <rect x="20.5" y="14" width="4" height="6.5" rx="2" />
      <path d="M22.5 20.5v1a3 3 0 01-3 3h-3" />
    </svg>
  );
}

export function IconShieldTeam(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3l9 3.5v6c0 6-4 10.5-9 12.5-5-2-9-6.5-9-12.5v-6L14 3z" />
      <circle cx="14" cy="12.5" r="2.6" />
      <path d="M9.5 18.5c1-1.8 2.6-2.8 4.5-2.8s3.5 1 4.5 2.8" />
    </svg>
  );
}

export function IconBanknote(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="22" height="12" rx="2.5" />
      <circle cx="14" cy="14" r="3" />
      <path d="M6.5 8v12M21.5 8v12" />
    </svg>
  );
}

export function IconLock(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="13" width="16" height="11" rx="2.5" />
      <path d="M9 13V9a5 5 0 0110 0v4" />
      <circle cx="14" cy="18" r="1.6" />
    </svg>
  );
}

export function IconStore(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10l1.4-5h17.2L24 10" />
      <path d="M4 10a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" />
      <path d="M6 10.5V24h16V10.5" />
      <rect x="11.5" y="16" width="5" height="8" />
    </svg>
  );
}

export function IconSteeringWheel(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="14" r="10" />
      <circle cx="14" cy="14" r="2.4" />
      <path d="M14 4v7.6M6.5 19.2l5-3.6M21.5 19.2l-5-3.6" />
    </svg>
  );
}

export function IconHouseHeart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13.5L14 5l10 8.5" />
      <path d="M6.5 12v11h15V12" />
      <path d="M14 20.5s-3-2-3-4.2a2.1 2.1 0 013-1.8 2.1 2.1 0 013 1.8c0 2.2-3 4.2-3 4.2z" />
    </svg>
  );
}

export function IconCompass(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="14" r="10.5" />
      <path d="M17.5 10.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

export function IconTruckFleet(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="13" height="9" rx="1.5" />
      <path d="M16 12h4.5L23 15.5V18h-7z" />
      <circle cx="8" cy="20.5" r="2" />
      <circle cx="19" cy="20.5" r="2" />
    </svg>
  );
}
