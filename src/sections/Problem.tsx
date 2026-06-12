import type { ReactNode } from "react"
import { Container, IllustrativeTag, SectionHead } from "../components/ui"
import { Reveal } from "../components/Reveal"
import {
  IconCamera,
  IconChat,
  IconEye,
  IconHardHat,
  IconHome,
  IconLayers,
  IconPlay,
  IconReceipt,
} from "../components/icons"

/* ------------------------------ chat primitives ----------------------------- */

const bubbleIn =
  "max-w-[88%] rounded-2xl rounded-bl-md border border-line bg-canvas px-3 py-2 text-[0.85rem] leading-snug text-ink-soft"
const bubbleOut =
  "max-w-[88%] rounded-2xl rounded-br-md border border-line bg-sage-tint px-3 py-2 text-[0.85rem] leading-snug text-ink-soft"
const tstamp = "ml-2 whitespace-nowrap font-mono text-[0.62rem] text-faint"
const sender = "mb-0.5 text-[0.68rem] font-semibold leading-none text-sage"
const mono = "font-mono"

function ChatWindow({
  icon,
  name,
  unread,
  hot = false,
  className = "",
  children,
}: {
  icon: ReactNode
  name: string
  unread: string
  hot?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`rounded-[14px] border border-line bg-card shadow-[var(--shadow-card)] ${className}`}>
      <header className="flex items-center justify-between gap-3 border-b border-line px-3.5 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage"
          >
            {icon}
          </span>
          <p className="truncate text-[0.85rem] font-semibold leading-tight text-ink">{name}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2 py-1 font-mono text-[0.64rem] leading-none ${
            hot ? "bg-marigold-tint text-ink" : "bg-sand text-ink-soft"
          }`}
        >
          {unread}
        </span>
      </header>
      <ul className="flex flex-col gap-2.5 px-3 py-3.5">{children}</ul>
    </div>
  )
}

/* --------------------------------- pain cards ------------------------------- */

const pains = [
  {
    icon: IconChat,
    title: "Decisions from memory",
    body: (
      <>
        Was it <span className={mono}>40</span> bori or <span className={mono}>50</span>? Scroll back three hundred
        messages and hope.
      </>
    ),
  },
  {
    icon: IconLayers,
    title: "Truth by hierarchy",
    body: <>When records disagree, the loudest voice in the room wins.</>,
  },
  {
    icon: IconEye,
    title: "The homeowner in the dark",
    body: (
      <>
        They call the contractor at <span className={mono}>9pm</span> because silence is scarier than bad news.
      </>
    ),
  },
]

/* ---------------------------------- section --------------------------------- */

export function Problem() {
  return (
    <section id="problem" className="bg-sand border-y border-line py-24 sm:py-32 scroll-mt-24">
      <Container>
        <SectionHead
          eyebrow="The problem"
          title="Six roles. Six groups. Six versions of the truth."
          lede="A construction project runs on hundreds of messages a day: the owner's group, the site group, the vendor chats. The photo lives in one place, the price in another, the decision in someone's head. So calls get made from memory and hierarchy, not facts."
        />

        {/* The chaos collage: three overlapping group-chat windows */}
        <div className="relative mt-14 overflow-hidden">
          <div className="flex flex-col gap-5 px-0.5 pb-9 pt-1 md:flex-row md:items-start md:gap-0 md:px-3 md:pt-6">
            <Reveal className="relative z-10 md:min-w-0 md:flex-1">
              <ChatWindow
                icon={<IconHardHat size={13} />}
                name="Site Team ⛑"
                unread="247 unread"
                hot
                className="md:mt-4 md:-rotate-[1.5deg]"
              >
                <li className="flex justify-start">
                  <div className={bubbleIn}>
                    <p className={sender}>Ravi S.</p>
                    <p>
                      Boss, sariya khatam ho raha hai
                      <span className={tstamp}>6:48 am</span>
                    </p>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className={`${bubbleIn} flex items-center gap-2.5`}>
                    <span className="sr-only">Voice note</span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage text-card"
                    >
                      <IconPlay size={11} />
                    </span>
                    <span aria-hidden="true" className="flex items-center gap-[2.5px]">
                      {[6, 10, 14, 8, 12, 16, 9, 13, 6, 10, 14, 7, 11, 6].map((h, i) => (
                        <span
                          key={i}
                          className="w-[2.5px] rounded-full bg-sage/50"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </span>
                    <span className="font-mono text-[0.62rem] text-muted">0:31</span>
                    <span className="font-mono text-[0.62rem] text-faint">6:52 am</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className={bubbleOut}>
                    <p>
                      <span className={mono}>50</span> bori aaya <span className="text-sage">✓✓</span>
                      <span className={tstamp}>11:02 am</span>
                    </p>
                  </div>
                </li>
              </ChatWindow>
            </Reveal>

            <Reveal delay={90} className="relative z-20 md:-ml-7 md:min-w-0 md:flex-1">
              <ChatWindow
                icon={<IconHome size={13} />}
                name="Owner & Contractor"
                unread="36 unread"
                className="md:shadow-[var(--shadow-lift)]"
              >
                <li className="flex justify-start">
                  <div className={`${bubbleIn} w-[78%]`}>
                    <div
                      aria-hidden="true"
                      className="flex h-24 items-center justify-center rounded-xl bg-sage-tint text-sage"
                    >
                      <IconCamera size={24} />
                    </div>
                    <p className="mt-1.5 flex items-baseline justify-between gap-2">
                      <span className="font-mono text-[0.62rem] text-muted">IMG_4021.jpg</span>
                      <span className="font-mono text-[0.62rem] text-faint">9:02 am</span>
                    </p>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className={bubbleOut}>
                    <p>
                      Kitna diya Sharma ji ko?
                      <span className={tstamp}>8:54 pm</span>
                    </p>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className={bubbleOut}>
                    <p>
                      Final kya decide hua??
                      <span className={tstamp}>9:41 pm</span>
                    </p>
                  </div>
                </li>
              </ChatWindow>
            </Reveal>

            <Reveal delay={180} className="relative z-10 md:-ml-7 md:mt-10 md:min-w-0 md:flex-1">
              <ChatWindow
                icon={<IconReceipt size={13} />}
                name="Vendor · Sharma Traders"
                unread="12 unread"
                className="md:rotate-[1.2deg]"
              >
                <li className="flex justify-start">
                  <div className={bubbleIn}>
                    <p className={sender}>Sharma Traders</p>
                    <p>
                      Bill bhej diya · <span className={mono}>₹46,200</span>
                      <span className={tstamp}>3:58 pm</span>
                    </p>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className={bubbleOut}>
                    <p>
                      @Meena pls check last month slip
                      <span className={tstamp}>4:12 pm</span>
                    </p>
                  </div>
                </li>
              </ChatWindow>
            </Reveal>
          </div>
          <IllustrativeTag className="absolute bottom-2 right-1 md:bottom-3 md:right-4" />
        </div>

        {/* Pain cards */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {pains.map((pain, i) => (
            <Reveal
              as="li"
              key={pain.title}
              delay={i * 90}
              className="rounded-[14px] border border-line bg-card p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-sand text-ink-soft">
                <pain.icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-[1.1rem] font-bold text-ink">{pain.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{pain.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
