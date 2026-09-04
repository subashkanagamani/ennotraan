import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import logo from "@/assets/ennotraan-logo.jpg.asset.json";
import lamp from "@/assets/lamp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ennotraan — small habits, big achievements" },
      {
        name: "description",
        content:
          "A free, screen-free board and private parent app that helps families build good daily habits, one honest day at a time.",
      },
      { property: "og:title", content: "Ennotraan — small habits, big achievements" },
      {
        property: "og:description",
        content:
          "A free, screen-free way for families to build good daily habits. No data on children, no leaderboards, no cost.",
      },
    ],
  }),
  component: Home,
});

const problems = [
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

const steps = [
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

const ages = [
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

const promises = [
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

function JoinForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  if (sent) {
    return (
      <div className="rounded-3xl bg-card p-8 shadow-soft sm:p-10">
        <h3 className="text-2xl text-foreground">Thank you for joining</h3>
        <p className="mt-3 text-muted-foreground">
          Your details are with us. Someone from our team will reach out personally to welcome
          you in. There is nothing to pay, today or ever.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-8 shadow-soft sm:p-10">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Your name</span>
          <input required name="name" className={field} placeholder="Name" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Phone number</span>
          <input required name="phone" type="tel" className={field} placeholder="Phone number" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">City</span>
          <input required name="city" className={field} placeholder="City" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Who is this for?</span>
          <select required name="who" defaultValue="" className={field}>
            <option value="" disabled>
              Please choose
            </option>
            <option>My child</option>
            <option>Myself</option>
            <option>My whole family</option>
            <option>A parent or grandparent</option>
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Email (optional)</span>
          <input name="email" type="email" className={field} placeholder="Email" />
        </label>
      </div>
      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-primary px-6 py-4 text-base text-primary-foreground transition-opacity hover:opacity-90"
      >
        Join free, no cost ever
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        By joining, you are only agreeing to be contacted about this free programme. We will never
        sell your information.
      </p>
    </form>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <img src={logo.url} alt="Ennotraan" className="h-12 w-auto sm:h-14" />
        <a
          href="#join"
          className="hidden rounded-full border border-primary px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
        >
          Join free
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-16">
          <div>
            <p className="text-sm tracking-wide text-leaf">
              A free, screen-free way to build good habits at home
            </p>
            <h1 className="mt-5 text-4xl leading-[1.15] sm:text-5xl md:text-[3.4rem]">
              One small habit a day. That is all it takes to raise a disciplined, confident child.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ennotraan is a simple board and a private app that helps your family build good daily
              habits, without putting a screen in your child's hands. It is offered free, as a small
              contribution to healthier homes, not as a business selling to children.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-full bg-primary px-7 py-3.5 text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join free, no cost ever
              </a>
              <a
                href="#how"
                className="rounded-full border border-border px-7 py-3.5 text-foreground transition-colors hover:bg-secondary"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-[24%] top-[58%] h-24 w-24 rounded-full bg-primary/25 blur-2xl flame-glow" />
            <img
              src={lamp}
              alt="A hand lighting a small oil lamp"
              width={1024}
              height={1024}
              className="relative w-full rounded-[2rem] mix-blend-multiply"
            />
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Every home is fighting the same quiet battle
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Homework, sleep, screen time, chores. Parents repeat the same battle every single day,
            and it wears everyone out. Most rewards on offer make things worse, more screen time,
            more gadgets, more comparison. What is missing is not willpower. It is a simple, honest
            way to notice effort and make it feel worthwhile.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border p-7">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Belief */}
        <section className="bg-ink px-6 py-24 text-background">
          <div className="mx-auto max-w-3xl text-center">
            <span
              aria-hidden
              className="block font-display text-7xl leading-none text-gold opacity-80"
            >
              &ldquo;
            </span>
            <blockquote className="mt-4 text-2xl leading-relaxed sm:text-3xl">
              Raising a child well is not just something that happens. It is a daily practice of
              caring, one honest day at a time.
            </blockquote>
            <p className="mt-8 text-sm italic opacity-70">
              Based on Thirukkural 70, an old Tamil verse about parenting as a daily practice, not a
              one-time event.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Three simple steps. Nothing new for your child to learn.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title}>
                <span className="font-display text-5xl text-primary">{index + 1}</span>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Not just for children */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl sm:text-4xl">One board. One app. Any age, any goal.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We built this for families first, then realised the same simple method helps anyone keep
            a promise to themselves.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ages.map((group) => (
              <div key={group.title} className="rounded-3xl bg-blush p-8">
                <h3 className="text-xl">{group.title}</h3>
                <ul className="mt-4 grid gap-2.5 text-foreground/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Promise */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            We built this to protect your home, not to study it.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {promises.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="text-leaf">{item.icon}</span>
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why */}
        <section className="bg-leaf px-6 py-24 text-leaf-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl">This was built for families, not for profit.</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-90">
              Ennotraan is offered free because we believe every family deserves a simple, honest
              tool to build good habits, not because we expect something back. This began as a small
              idea to help households cope with screens, and it stays true to that purpose. If we
              ever have to choose between what is good for a child and what is good for a business,
              the child comes first, always.
            </p>
          </div>
        </section>

        {/* Join */}
        <section id="join" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl">Join today. It costs nothing, now or later.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We are opening Ennotraan to families first, so we can build it properly before we
                grow. Leave your details below and our team will personally reach out to welcome you
                in.
              </p>
              <p className="mt-5 italic text-leaf">
                This is a free invitation, not a purchase. There is nothing to pay, today or ever.
              </p>
            </div>
            <JoinForm />
          </div>
        </section>
      </main>

      <footer className="bg-ink px-6 py-16 text-background">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">Ennotraan</h2>
            <p className="mt-3 max-w-md leading-relaxed opacity-75">
              A free, screen-free way to help families build good habits, one honest day at a time.
            </p>
          </div>
          <div className="text-sm leading-relaxed opacity-75 md:text-right">
            <p>
              Contact: Saravanan Ganesan,{" "}
              <a href="tel:+917092023733" className="underline-offset-4 hover:underline">
                +91 70920 23733
              </a>
              ,{" "}
              <a href="mailto:info@pplmeliorate.com" className="underline-offset-4 hover:underline">
                info@pplmeliorate.com
              </a>
            </p>
            <p className="mt-3">
              A social initiative by PPLMeliorate Services Private Limited, a recognised startup in
              Tamil Nadu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
