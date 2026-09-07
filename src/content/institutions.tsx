export type InstitutionContent = {
  slug: "/schools" | "/colleges" | "/corporates";
  eyebrow: string;
  title: string;
  intro: string;
  challenges: { title: string; body: string }[];
  program: { title: string; body: string }[];
  outcomes: string[];
  ctaTitle: string;
  ctaBody: string;
  meta: { title: string; description: string };
};

export const schools: InstitutionContent = {
  slug: "/schools",
  eyebrow: "For schools",
  title: "A screen-free habit system that fits inside the school day.",
  intro:
    "Ennotraan gives every classroom a physical habit board and every family a shared rhythm, so discipline is practised at school and reinforced at home.",
  challenges: [
    {
      title: "Attention is fragmenting",
      body: "Students arrive already saturated by screens, and teachers spend the first minutes of every lesson recovering focus.",
    },
    {
      title: "Home and school pull apart",
      body: "Habits taught in class rarely survive the evening, because parents have no visible way to see or support them.",
    },
    {
      title: "Behaviour charts feel punitive",
      body: "Public star charts reward the same few children and quietly label the rest. Motivation drops instead of building.",
    },
  ],
  program: [
    {
      title: "Classroom boards, printed inserts",
      body: "Each class receives wooden boards with habit sheets chosen by teachers, covering punctuality, reading, tidiness, kindness, and phone-free periods.",
    },
    {
      title: "Students mark their own day",
      body: "Children physically tick off what they completed. No screens, no app in their hands, no ranking against classmates.",
    },
    {
      title: "Teachers and parents award points",
      body: "A class teacher reviews boards in the private app once a day, while parents do the same at home, so one child sees one consistent standard.",
    },
  ],
  outcomes: [
    "Calmer starts to lessons and fewer repeated reminders",
    "A shared vocabulary for discipline between teachers and parents",
    "Age-appropriate habit modules for primary, middle, and high school",
    "No student data collected, no leaderboards, ever",
  ],
  ctaTitle: "Bring Ennotraan to your school, free.",
  ctaBody:
    "Tell us about your school and our team will walk your leadership through the setup, the boards, and the teacher app.",
  meta: {
    title: "Ennotraan for Schools — screen-free habit building in class",
    description:
      "A free physical habit board and private teacher app that helps schools build punctuality, reading and focus, with parents reinforcing the same habits at home.",
  },
};

export const colleges: InstitutionContent = {
  slug: "/colleges",
  eyebrow: "For colleges",
  title: "Self-discipline for students who finally control their own time.",
  intro:
    "College is the first place nobody checks your routine. Ennotraan gives students a visible, screen-free anchor for study blocks, sleep, fitness, and focus.",
  challenges: [
    {
      title: "Total freedom, no structure",
      body: "Attendance is the only checkpoint. Sleep, study, and health quietly collapse across the first two semesters.",
    },
    {
      title: "Phones own the study hours",
      body: "Deep work is replaced by fragmented scrolling, and productivity apps live inside the same device causing the problem.",
    },
    {
      title: "Placement pressure arrives late",
      body: "Skills that need daily practice, reading, coding, communication, get crammed into the final months instead of built over years.",
    },
  ],
  program: [
    {
      title: "Hostel and department boards",
      body: "Students set 15 to 20 personal benchmarks such as deep work blocks, gym, reading, revision, and phone-free windows, then print their insert.",
    },
    {
      title: "Tick it off, away from the phone",
      body: "The board sits on the desk or hostel wall as a visible daily anchor. Nothing to unlock, nothing to notify.",
    },
    {
      title: "Screen-free sessions earn points",
      body: "Students open the app only to start a screen-free hold and claim points for honoured focus time and board consistency, under structured caps.",
    },
  ],
  outcomes: [
    "Consistent study and sleep rhythms without policing",
    "Focus time measured honestly, not by app screenshots",
    "Department, hostel, or club level rollouts",
    "No rankings between students, only progress against their own past week",
  ],
  ctaTitle: "Roll it out on your campus, free.",
  ctaBody:
    "Share your college details and we will help you pilot Ennotraan with a department, hostel block, or student club.",
  meta: {
    title: "Ennotraan for Colleges — student focus and self-discipline",
    description:
      "A free habit board and screen-free focus system helping college students hold study blocks, sleep, fitness and phone-free hours without leaderboards.",
  },
};

export const corporates: InstitutionContent = {
  slug: "/corporates",
  eyebrow: "For corporates",
  title: "Deep work and wellbeing, anchored on the desk, not in another app.",
  intro:
    "Ennotraan gives teams a tactile daily board and honest screen-free sessions, so focus and wellbeing habits stay visible in the workplace.",
  challenges: [
    {
      title: "Meetings and pings own the day",
      body: "Uninterrupted work is rare, and the tools meant to protect focus sit inside the same devices that break it.",
    },
    {
      title: "Wellness programmes fade fast",
      body: "Launch enthusiasm drops within weeks because nothing physically reminds people of the commitment they made.",
    },
    {
      title: "Burnout shows up too late",
      body: "Sleep, movement, and breaks go untracked until performance and attrition make the problem visible.",
    },
  ],
  program: [
    {
      title: "Desk boards for every participant",
      body: "Employees choose 15 to 20 habits across deep work, movement, learning, breaks, and phone-free hours, then print their personal insert.",
    },
    {
      title: "Marked by hand, through the day",
      body: "Ticking off a habit on a wooden board keeps intent visible at the desk instead of buried behind tabs and notifications.",
    },
    {
      title: "Screen-free holds and capped points",
      body: "The private app records honoured phone-free sessions and board consistency, awarding points under structured capping rules.",
    },
  ],
  outcomes: [
    "More protected deep work blocks each week",
    "A wellbeing programme people can actually see on their desk",
    "Team or department level rollouts with no employee surveillance",
    "Points redeemable through the reimbursement module with partner brands",
  ],
  ctaTitle: "Start a pilot with your team, free.",
  ctaBody:
    "Tell us about your organisation and we will help you run Ennotraan with a team, floor, or department.",
  meta: {
    title: "Ennotraan for Corporates — deep work and workplace wellbeing",
    description:
      "A free physical habit board and screen-free session app that helps teams protect deep work, movement and wellbeing habits without surveillance.",
  },
};
