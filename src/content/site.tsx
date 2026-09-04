import type { ReactNode } from "react";

export const problems = [
  {
    title: "The daily struggle",
    body: "The same arguments happen in millions of homes, every single day.",
  },
  {
    title: "Rewards that miss the point",
    body: "Most apps hand out more screen time to solve a screen time problem.",
  },
  {
    title: "Nothing to hold on to",
    body: "Children need something real to work towards, not another notification.",
  },
];

export const steps = [
  {
    title: "Choose the habit",
    body: "Pick two or three things that matter to your family, reading, sleeping on time, a walk, no phone at dinner. Write them on the board.",
  },
  {
    title: "Mark it done, on paper",
    body: "Your child ticks off the habit on the physical board itself. No screen, no app, nothing digital touches their hands.",
  },
  {
    title: "Earn it, then enjoy it",
    body: "Once a day, a parent opens the private app and logs what was done. Steady effort adds up to a real reward later, never cash, never a ranking against other children.",
  },
];

export const ages = [
  {
    title: "In their twenties",
    items: [
      "Going to the gym regularly",
      "Giving up smoking",
      "Saving a little money each month",
      "Reading before bed",
    ],
  },
  {
    title: "In their thirties",
    items: [
      "A few minutes of quiet meditation",
      "An evening away from the phone",
      "Drinking enough water",
      "Waking up early",
    ],
  },
  {
    title: "In their sixties",
    items: [
      "A daily walk",
      "Taking medicine on time",
      "A quiet moment of prayer",
      "Keeping a journal",
    ],
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3z" />
    </svg>
  );
}
function RanksIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M4 20V12h4v8M10 20V7h4v13M16 20v-6h4v6M3 20h18M4 4l16 16" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.5 10h4a1.8 1.8 0 010 3.6h-4" />
    </svg>
  );
}

export const promises: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <ShieldIcon />,
    title: "No data about your child, ever",
    body: "We do not collect, store, or share anything that identifies your child. Only the parent holds the record.",
  },
  {
    icon: <RanksIcon />,
    title: "No leaderboards, ever",
    body: "There is no ranking, no comparing children against each other. That was left out on purpose.",
  },
  {
    icon: <ClockIcon />,
    title: "A monthly rhythm, not instant rewards",
    body: "Points build up every day but are only given out once a month, the same lesson every good habit teaches, earned slowly, valued more.",
  },
  {
    icon: <CoinIcon />,
    title: "Never treated as money",
    body: "Points cannot be sold, transferred, or cashed out. They can only be turned into a real, useful reward.",
  },
];
