# PayPay Backend Interview — 8-Week Plan

**10 hrs/week** · 1 hr weekdays, 2.5 hrs Sat + Sun · **80 hours total** · **apply to Payments in week 5**

Matched to two postings:
- **Backend Engineer (Payments)** — https://job-boards.greenhouse.io/paypay/jobs/5683668004 — AI/LLM tools *required*; concurrency & distributed computing; NoSQL + distributed cache; English or Japanese
- **Backend Engineer (Core Banking System)** — https://job-boards.greenhouse.io/paypay/jobs/5587090004 — RDB/NoSQL schema design; tuning & security; middleware selection; modernisation; **Japanese N1/N2, interviews entirely in Japanese** → apply after N2

Both restrict parallel applications within the PayPay group — confirm with the recruiter before applying to both.

Week 1 starts whenever you start. Tick a week when the *work* is done, not when the calendar passes.

Interactive version with question bank and model answers: `paypay-plan.html`

---

## The weekly engine

Never changes. Only the material below changes.

| Day | Minutes | Block |
| --- | --- | --- |
| Mon–Fri | 0–10 | Recall — 3 question-bank prompts out loud, **never skip** |
| | 10–45 | One timed problem (25 min cap, then read solution and rewrite) |
| | 45–60 | Theory — one topic, explain it out loud in English |
| Saturday | 0–10 | Recall |
| | 10–90 | Timed set — 3–4 problems in 70 min, stdin input, no autocomplete |
| | 90–150 | Deep theory (DDIA / concurrency code / design write-up) |
| Sunday | 0–10 | Recall |
| | 10–70 | Redo every failed problem cold |
| | 70–125 | Speak it — record answers or the week’s design |
| | 125–140 | Write one STAR story with numbers |
| | 140–150 | Log hours, tick the week, pick next week’s problems, one AI-log entry |

**Minimum viable day:** 20 min — three questions out loud. That still counts.
**Bad week:** cut theory, keep the daily problem. Keep N3 SRS reviews running.

---

## 解 Phase 1 · Coding patterns

*Weeks 1–2 · 20 hrs*

**Materials:** [NeetCode 150](https://neetcode.io/practice) · [LeetCode 2672](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/) · [LeetCode 125](https://leetcode.com/problems/valid-palindrome/) · [LeetCode 5](https://leetcode.com/problems/longest-palindromic-substring/)

- [ ] **Week 1** — Hash maps, prefix sums, two pointers
  - LC 1, 49, 128, 560, 125, 15, 3, and 2672 (reported). 25-minute timer on each.
- [ ] **Week 2** — Stack, sliding window, binary search
  - LC 20, 1047, 394, 739, 76, 424, 33, 34, 875. Saturday: first timed set.
  - 🔒 **Gate 1: 4 problems (2 easy, 2 medium) in 70 min, every test passing on at least 3.**

## 並 Phase 2 · Java, concurrency & distributed computing

*Weeks 3–4 · 20 hrs*

**Materials:** [Baeldung](https://www.baeldung.com/) · [Kotlin for Java devs](https://kotlinlang.org/docs/comparison-to-java.html) · [LeetCode 347](https://leetcode.com/problems/top-k-frequent-elements/) · [LeetCode 215](https://leetcode.com/problems/kth-largest-element-in-an-array/)

- [ ] **Week 3** — GC, JVM memory, HashMap & ConcurrentHashMap, locks
  - Question bank: Java items 1–5. Coding: heaps and top-K: LC 347, 692, 215, 23, 973.
- [ ] **Week 4** — Thread pools, virtual threads, Spring @Transactional, distributed locks
  - Write the bounded queue from memory. Distributed locks and fencing tokens, DDIA ch. 8. Read one Kotlin file. Coding: trees: Sum Tree, LC 98, 236, 124, 102.
  - 🔒 **Gate 2: recorded 2-min answers on GC, race vs data race, deadlock and fencing tokens; bounded queue from memory in 15 min.**

## 基 Phase 3 · Backend fundamentals

*Weeks 5–6 · 20 hrs*

**Materials:** [High Performance Browser Networking](https://hpbn.co/) · [Linux performance](https://www.brendangregg.com/linuxperf.html) · [OWASP Top 10](https://owasp.org/Top10/) · [DynamoDB best practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html) · [LeetCode 1584](https://leetcode.com/problems/min-cost-to-connect-all-points/) · [LeetCode 2508](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/)

- [ ] **Week 5** — Networking, Linux, containers, DB transactions, locking & schema design
  - URL walkthrough, high-CPU debugging, ACID, isolation levels, account/ledger schema. Coding: graphs: LC 200, 207, 684, 1584, 2508. APPLY TO PAYMENTS THIS WEEK.
- [ ] **Week 6** — Indexes, DynamoDB, Redis, Kafka, outbox, resilience, tuning, security, AWS
  - DDIA ch. 2, 5, 7, 9. OWASP Top 10. Coding: DP: LC 70, 198, 322, 300, 1143. Saturday: second timed set.
  - 🔒 **Gate 3: 15 of 20 random Java/Backend prompts without notes, a 4-problem set with a hard, and the ledger schema in MySQL and DynamoDB.**

## 設 Phase 4 · Payments & core banking design

*Week 7 · 11 hrs*

**Materials:** [Stripe on idempotency](https://stripe.com/blog/idempotency) · [Google SRE book](https://sre.google/sre-book/table-of-contents/) · [Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html) · [System Design Primer](https://github.com/donnemartin/system-design-primer)

- [ ] **Week 7** — Design PayPay and a core bank: wallet, bank top-up, Zengin transfer, legacy migration
  - Three timed 45-min designs out loud: the wallet, core banking transfers + interest batch, legacy core migration. Write one postmortem. SRE book ch. 6 and 15.
  - 🔒 **Gate 4: a recorded 45-min design covering idempotency, state machine, ledger, bank timeouts with reconciliation, a justified middleware choice, and your alerts.**

## 面 Phase 5 · Mock loop

*Week 8 · 10 hrs*

**Materials:** [Exponent peer mocks](https://www.tryexponent.com/) · [PayPay Inside-Out](https://insideout.paypay.ne.jp/en/) · [PayPay 5 senses](https://www.paypay-card.co.jp/recruit/en/work-style/5-senses/)

- [ ] **Week 8** — Mock loop, stories, AI workflow demo
  - One mock of each round type. Eight STAR stories matched to the 5 senses. A 5-minute AI-assisted change walkthrough. A 30-second Japanese self-introduction. Redo every failed problem cold.
  - 🔒 **Ready: every question-bank box ticked, "multiple pay clicks" in 5 minutes, and a real AI-assisted change you can show.**

---

## Hours log

Two weeks under 8 hrs in a row means move the week-5 application date, do not defend it.

| Week | Target | Actual | Timed-set score | Notes |
| --- | --- | --- | --- | --- |
| 1 | 10 | | | |
| 2 | 10 | | | |
| 3 | 10 | | | |
| 4 | 10 | | | |
| 5 | 10 | | | |
| 6 | 10 | | | |
| 7 | 10 | | | |
| 8 | 10 | | | |

---

## Question bank

Tick only when you can answer out loud, in English, under two minutes, without notes. 65 questions. [P] = Payments posting, [B] = Core Banking posting.

### Coding test

- [ ] Hash map, counting & prefix sums
- [ ] Stack & monotonic stack *(reported)*
- [ ] Heap / top-K *(reported)*
- [ ] Graphs: BFS/DFS, degrees, union-find, MST *(reported)*
- [ ] Two pointers, sliding window, strings *(reported)*
- [ ] Binary search, including binary search on the answer *(reported)*
- [ ] Trees: DFS returning two values, BST properties *(reported)*
- [ ] 1-D and 2-D dynamic programming basics
- [ ] Fast stdin parsing in Java *(reported)*

### Java & concurrency

- [ ] When is an object eligible for GC? How does the GC work? *(reported)*
- [ ] JVM memory areas; the JVM inside a container
- [ ] Race condition vs data race. Deadlock vs livelock vs starvation. *(reported)*
- [ ] synchronized vs ReentrantLock vs volatile vs Atomic*
- [ ] HashMap internals, and how ConcurrentHashMap differs
- [ ] Thread pools, sizing, CompletableFuture, virtual threads *(reported)*
- [ ] Live coding: write a thread-safe bounded blocking queue
- [ ] Spring IoC / dependency injection; @Transactional pitfalls *(reported)*
- [ ] Modern Java: records, sealed types, pattern matching, stream pitfalls
- [ ] Distributed locks, leases and fencing tokens [P]
- [ ] Kotlin and Scala for a Java engineer; Java vs C memory [P][B]

### Backend fundamentals

- [ ] What happens when you open a URL? *(reported)*
- [ ] TCP vs UDP; HTTP/1.1 vs 2 vs 3; which HTTP methods are idempotent
- [ ] A Java service is at 100% CPU in production. How do you debug it? *(reported)*
- [ ] What is a container, really? Container vs pod? *(reported)*
- [ ] Explain ACID in detail, using a payment *(reported)*
- [ ] Isolation levels and the anomalies each one prevents
- [ ] Autocommit, COMMIT vs ROLLBACK, savepoints *(reported)*
- [ ] Optimistic vs pessimistic locking. When do you use which?
- [ ] Indexes: B+tree, composite, covering, EXPLAIN
- [ ] SQL vs NoSQL: which would you use where at a payments company? *(reported)*
- [ ] Caching patterns and how caches fail
- [ ] Design the relational schema for bank accounts and transfers [B]
- [ ] NoSQL schema design: model it in DynamoDB [P][B]
- [ ] Redis as a distributed cache: cluster, eviction, keeping it consistent with the DB [P]
- [ ] CAP / PACELC. Which side should a wallet choose? *(reported)*
- [ ] Monolith vs microservices *(reported)*
- [ ] Kafka: ordering, delivery guarantees, consumer groups
- [ ] The dual-write problem, the outbox pattern, saga vs two-phase commit
- [ ] Timeouts, retries and circuit breakers (Resilience4j)
- [ ] Platform components: a REST API, a Pub/Sub system, a database client [P][B]
- [ ] Which AWS services would you use for a payments or banking backend, and why? [P][B]
- [ ] p99 latency on an API doubled. Walk through tuning it. [B]
- [ ] Security-conscious development for a financial web app [B]
- [ ] Monitoring, alerts and failure analysis: what do you page on? [P][B]

### Payments design

- [ ] "The user taps Pay three times." How do you guarantee exactly one charge? *(reported)*
- [ ] Payment state machine and the "unknown" bank result *(reported)*
- [ ] Why a double-entry ledger instead of just a balance column?
- [ ] Campaign spike: "20% cashback for the first 1M payments." How does the system survive?
- [ ] Design a core banking system: accounts, transfers, interest, end of day [B]
- [ ] An interbank transfer through Zengin: cut-offs, failures, unknown results [B][P]
- [ ] Modernise a legacy core banking system without losing reliability [B]
- [ ] Middleware selection: justify Kafka vs SQS, Aurora vs TiDB vs DynamoDB [B][P]
- [ ] Five more designs to practise: 45 minutes each, timed, out loud

### AI-first engineering

- [ ] "How do you use AI tools in your daily engineering work?" [P]
- [ ] How do you verify AI-generated code before it reaches production? [P]
- [ ] AI guardrails at a fintech: data, secrets, licences [P]
- [ ] AI in system design and workflow automation (preferred) [P]

### Behavioral

- [ ] "What is the biggest mistake you ever made? What did you learn?" *(reported)*
- [ ] "Tell me about your most challenging project." *(reported)*
- [ ] "How did you solve a hard problem?" (root-cause story) *(reported)*
- [ ] "Why PayPay? Why Japan?"
- [ ] Disagreeing with a teammate or manager; speed vs quality
- [ ] Your questions for them
- [ ] "Tell us about a tool you built or an open source contribution." [P]
- [ ] 自己紹介 and 志望動機: introduce yourself in Japanese [B]

---

## The gates

Fail a gate, repeat the phase. Do not walk into the coding test on a broken foundation.

- [ ] **Week 2** — Gate 1: 4 problems (2 easy, 2 medium) in 70 min, every test passing on at least 3.
- [ ] **Week 4** — Gate 2: recorded 2-min answers on GC, race vs data race, deadlock and fencing tokens; bounded queue from memory in 15 min.
- [ ] **Week 6** — Gate 3: 15 of 20 random Java/Backend prompts without notes, a 4-problem set with a hard, and the ledger schema in MySQL and DynamoDB.
- [ ] **Week 7** — Gate 4: a recorded 45-min design covering idempotency, state machine, ledger, bank timeouts with reconciliation, a justified middleware choice, and your alerts.
- [ ] **Week 8** — Ready: every question-bank box ticked, "multiple pay clicks" in 5 minutes, and a real AI-assisted change you can show.

---

## Error log

| Date | Problem | Why I failed | Pattern |
| --- | --- | --- | --- |
| | | | |

## AI log

| Date | Task | Tool | What it got wrong | How I verified | Time saved |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
