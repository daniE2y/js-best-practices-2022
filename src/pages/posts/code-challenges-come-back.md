---
layout: ../../layouts/MarkdownPostLayout.astro

title: '🎨 Back to the Drawing Board: Approaching and Overcoming Coding Challenges'
pubDate: 2024-02-28
description: 'Back to the Drawing Board: Approaching and Overcoming Coding Challenges'
author: 'Dani Sanchez'
image:
    url: '/imgs/article-03.jpg' 
    alt: ''
tags: ["astro", "blogging", "learning in public", "code challenge"]
---

Hello and welcome to my first article written entirely in English! I hope I don't make too many mistakes 🥶

For the past few days, I've set out to tackle different coding challenges to improve my skills, both in problem-solving and coding-related areas. You truly can't see your weaknesses and areas for improvement until you face a "real" problem. And that's where coding challenges come in.

There are numerous repositories on GitHub with a wide variety of challenges, but I've decided to create my <a class="a-dps" href="https://github.com/danisanga/code-challenges/tree/main" target="blank">own</a> and start pushing my solutions there. All for the sake of learning that can be gained from them.

Since I haven't had much time to program outside of work lately, I want to dedicate a maximum of an hour and a half every day that I can, for a maximum period of one week.

With that brief introduction out of the way, let's get down to business.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

# 🍺 Dispensers API challenge
The first coding challenge I found is from the Rviewer <a href="https://rviewer.io/" target="blank">website</a>.
This challenge is focused entirely on the backend.

## 🙌 Let's understand the problem
The challenge presents the following needs:

<em>"Anyone who goes to a festival at least one time knows how difficult it is to grab some drinks from the bars. They are crowded and sometimes queues are longer than the main artist we want to listen!

That's why some promoters are developing an MVP for new festivals. Bar counters where you can go and serve yourself a beer. This will help make the waiting time much faster, making festival attendees happier and concerts even more crowded, avoiding delays!"</em>

We can imagine what the challenge will be: to design an API that allows the user (the <em>promoter</em>, in this case) to obtain certain information related to spending, dispenser details, etc.

Reviewing the API workflow:

<em>

1. Admins will create the dispenser by specifying a <i class="italic">flow_volume</i>. This config will help to know how many liters of beer come out per second and be able to calculate the total spend.

2. Every time an attendee opens the tap of a dispenser to pour some beer, the API will receive a change on the corresponding dispenser to update the status to <i class="italic">open</i>. With this change, the API will start counting how much time the tap is open and be able to calculate the total price later.

3. Once the attendee closes the tap of a dispenser, as the glass is full of beer, the API receives a change on the corresponding dispenser to update the status to <i class="italic">close</i>. At this moment, the API will stop counting and mark it closed.

At the end of the event, the promoters will want to know how much money they make with this new approach. So, we have to provide some information about how many times a dispenser was used, for how long, and how much money was made with each service.

<p>
⚠️ The promoters could check how much money was spent on each dispenser while an attendee is taking beer! So you have to control that by calculating the time diff between the tap opening and the request time.
</p>

</em>

At this point, I already had the database structure planned out and knew which endpoints would be necessary.

<img src="/imgs/article-03/01.png" alt="01" />
<div class="little-img-container">
    <img src="/imgs/article-03/02.png" alt="02" />
</div>

It is of utmost importance to take a moment to think about how to approach the problem before writing any lines of code.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

## 👩‍💼 Choosing the architecture
Regarding architecture, I opted for the <b>hexagonal architecture</b>.

I'm currently focused on learning it thoroughly. I believe that this type of <i class="italic">clean architecture</i>, centered on the business domain, adds a lot of value to the team.

Moreover, it is <b>easily modifiable</b> and <b>testable</b>.

<div class="little-img-container">
    <img src="/imgs/article-03/03.png" alt="03" />
</div>

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

## 👀 Taking a look at the proposed solution...
Let's get back to the code. We have 2 main modules:
 - Authentication,
 - Dispensers

The first one, <b>Authentication</b>, contains all the logic related to authentication with JWTs.
The second one, <b>Dispensers</b> the business logic.

Both have the basic structure of the hexagonal architecture, infrastructure, application, and domain.

Here are a couple of things I want to highlight about my solution:
- Controllers, as simple as possible, only input data validation and references to the service layer.
- Interfaces and implementations. Keep it extensible, open to changes.
- Striving to apply SOLID, DRY principles, ... We aim to deliver the best possible solution that will stay in production for a long time.
- Test coverage and documentation are a must-have in software development.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

And that's it, this is the <a href="https://github.com/danisanga/code-challenges/tree/main">repository</a>. 

As next steps, add Swagger, improve test coverage (mainly edge cases)...

Thank you for reading!

<style>
    .little-separator-main-dps {
        margin: 3rem 0;
        display: flex;
        justify-content: center;
    }
    hr {
        border: none;
        background: #fcb955;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        margin: 0 0.325rem;
    }
    .text-gradient {
        background-image: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        background-position: 0%;
    }
    b, .italic {
        color: #fcb955;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 0.5rem;
    }
    .little-img-container {
        margin: auto;
        width: 70%;
        padding: 10px;
    }
</style>