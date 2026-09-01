# Roadmap brands reference

Read this before asking the creator which brand a video is for.

Everyone following the roadmap makes their videos for the same small set of
brands, so you can usually work it out yourself and just have them confirm.
Confirming is far less work for them than answering cold, and it is much
harder to get wrong.

---

## The brands

| Brand | Logo file | What their videos are |
|---|---|---|
| **LaunchPoint** | `media/logos/launchpoint.png` | The first recreation in the roadmap. |
| **Invo** | `media/logos/invo.png` | Money / trading angle. Often a reaction hook over a screen recording of a few websites, with Invo last. CTA is a comment keyword like COPY or website. |
| **Composio** | `media/logos/composio.png` | AI tool demo, usually connecting apps. Link is always `composio.dev/foryou`. |

Spelling matters on the page: **LaunchPoint** (capital P), **Invo**, **Composio**.

---

## How to work out which brand a video is for

Go in this order and stop as soon as you are confident.

**1. The caption, if you have a link.** For a TikTok link you already fetched
the oEmbed JSON for the thumbnail. That same response has a `title` field
holding the caption. Read it.

- Caption contains `#composiopartner` → **Composio.** This is required on every
  Composio video, so it is a reliable tell.
- Caption contains `composio.dev` → **Composio.**
- Caption mentions copying trades, mimicking traders, or a COPY keyword →
  likely **Invo.**

**2. The file name.** Creators often keep names like `launchpoint_hook3.mp4`
or `invo_b2.mp4`. Match case-insensitively against the three brand names.

**3. Roadmap order.** If they gave you their videos in roadmap order, the
**first one is LaunchPoint.** Treat later positions as a weak hint only.

**4. Just ask.** If none of the above gives you a confident answer, ask
plainly, and offer the three as options:

> Video 3, which brand was that one for? Most people's are LaunchPoint, Invo
> or Composio.

---

## Always confirm, never assume silently

When you have worked out a guess, say it as a guess and let them correct it in
one word:

> Video 1 looks like LaunchPoint, video 2 looks like Composio. Right?

Never put a brand on the live page that the creator has not confirmed. Getting
this wrong is worse than asking.

---

## Brands outside this list

A creator may have real client work beyond the roadmap. That is great, put it
on the page. They will need to supply the logo, see the logo section in
`CLAUDE.md`.
