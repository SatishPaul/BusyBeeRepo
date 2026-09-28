# I Never Read Your Files. In 20 Questions I Know Your Whole Playbook.

{{svg:v69-hero}}

A friend asked me a simple question last week. WhatsApp says every message is end-to-end encrypted, so they cannot read the words. So why does it still feel like they know everything about you?

Here is the uncomfortable answer. They do not need the words.

Encryption locks the message. It does not lock the pattern around the message: who you talk to, how often, at what hour, in which group, right before which event. That pattern has a name. Metadata. Exhaust. It is not encrypted, and it is enough. Give a computer only the exhaust and it can redraw your whole life. Your closest people. Your routine. The exact day something big changed. It never read one word.

There is an old line for this. Metadata tells the story. The words just fill in the details.

I keep thinking about that line, because it is the exact risk hiding under the way most firms now use frontier AI. Almost nobody is pricing it in. So let me slow all the way down and show it with real examples, the way you would explain it to a smart ten-year-old.

## First, a game you already know

Play 20 Questions. I pick one person out of a packed stadium of 65,536 fans. You cannot see them. You can only ask me yes-or-no questions. Watch how fast the crowd shrinks.

{{svg:v69-math-20q}}

- "Are they in the lower bowl?" Yes. Half the stadium is gone. 32,768 left.
- "On the home side?" Yes. 16,384 left.
- "Wearing a team jersey?" Yes. 8,192 left.
- "Female?" Yes. 4,096 left.
- "Under 30?" Yes. 2,048 left.
- "Holding a drink?" No. 1,024 left.

Six questions and a crowd of 65,000 is down to a thousand. Keep going and after sixteen yes-or-no answers you are pointing at one single seat. You never asked the person's name. You only asked about their shape, and the shape was enough.

That is real math, not a trick: two multiplied by itself sixteen times is 65,536. Sixteen clues, one person.

Now the important part. When your firm uses an AI model that lives outside your walls, you hand it dozens of these yes-or-no clues every single day. You never tell it the secret. You do not have to. Your usage answers the questions for you, silently.

## How a model reads you without reading your words

A model turns every prompt into a list of numbers, like an arrow pointing in a direction. Two prompts about the same topic make two arrows pointing the same way. So it can sort your prompts into neat piles by direction, without knowing a single word. It is like sorting socks into color piles when you cannot see color, only the shape of each sock.

{{svg:v69-math-fingerprint}}

Then it watches the clock. If your team normally asks five questions a day about one topic and suddenly asks two hundred, that is a forty-times jump. You did not say why. The jump says it for you. Something just happened: a deal, a filing, a launch, a problem.

Put the piles and the timing together and the model has a live map of how your firm thinks and what it is about to do. Still no words. Just the exhaust.

Now let me make it real in four jobs. In every one, assume the content is perfectly locked. The client names, the numbers, the files: the model never sees them. It only sees the exhaust, and I will show you exactly how the exhaust gives the game away.

## Tax: Project Atlas

{{svg:v69-ex-tax}}

Your tax team is structuring an acquisition your firm calls "Project Atlas." What is fully locked and never used for training: the client name, the target name, the $3.8 billion price, and every workpaper.

Here is the exhaust the outside model still sees over two weeks.

- Day one: 140 prompts about one narrow rule, the Section 338(g) election that treats a stock purchase as an asset purchase, plus questions about stepping up the tax basis of acquired patents.
- The same six workpaper templates pulled every time, always in the same order: purchase price allocation, then 338(g) analysis, then GILTI, then foreign tax credit, then BEAT, then integration steps.
- Two tools always called as a pair: the price-allocation calculator first, the foreign-tax-credit modeler second.
- A separate burst of questions about German trade tax.
- All of it clustered between 9pm and 1am, three days before quarter close.

Now watch the model reason, one clue at a time, exactly like the stadium game.

- 338(g) plus basis step-up on patents. Clue: this is an acquisition of a company whose value is its intellectual property, structured as an asset deal.
- GILTI plus foreign tax credit plus BEAT. Clue: the target is foreign.
- A spike in German trade-tax questions. Clue: the target is German.
- Price-allocation prompts sized around $3.8 billion. Clue: the deal size.
- The same six templates in the same fixed order. Clue: this is not improvised. It is your firm's repeatable playbook for cross-border chip deals.
- Late-night bursts three days before quarter close. Clue: it is closing this quarter.

Stack those clues and the model has never seen the word "Atlas" or the client's name, yet it knows: a US semiconductor company is buying a German chip firm for about $3.8 billion as an asset deal, closing this quarter, and it now knows your exact six-step method for doing it. Your method is your product. You taught it, for free, to a model your competitors also use.

## Audit: Northwind Electronics

{{svg:v69-ex-audit}}

Your audit team tests the books of an electronics retailer, "Northwind," with a December year-end. Locked: the ledgers, the sampled transactions, the findings, and the name in the files.

The exhaust is the order you always work in, and it never changes.

- You test revenue cutoff first, every engagement.
- Then you hunt journal entries with one very specific filter: amounts ending in 000, posted between 6pm and 6am, by users who are not on the accounts-payable list.
- You stop sampling at around 60 items each time.
- And every February, a spike of 300 prompts about goodwill impairment and ASC 350 triggering events, always tied to one particular client.

Now the inference, clue by clue.

- That exact journal-entry filter (round-dollar, after-hours, non-standard users). Clue: this is your fraud-detection fingerprint, the precise definition of "suspicious" your firm uses.
- Sampling that always stops near 60 items. Clue: your materiality threshold sits near a fixed dollar figure, because that is what decides the sample size.
- The February goodwill spike, landing right before a December-year-end retailer's audit wraps. Clue: you suspect that specific client's goodwill is impaired, and you are quietly building the case.

Run ten thousand of your prompts through the model and they cluster into about twelve repeated shapes. Those twelve shapes are your twelve-step audit program, rebuilt without a single ledger, plus a flag on the one client you are worried about.

## Advisory: A Consumer-Electronics Growth Play

{{svg:v69-ex-advisory}}

Your strategy team builds a growth recommendation for a consumer-electronics maker. Locked: the client's plans, the final deck, the name.

The exhaust is your diagnostic frame, run the same way every single time.

- Size the total and serviceable market.
- Cut it into segments by willingness to pay.
- Build a three-horizon roadmap.
- Benchmark against the same five named rivals: Anker, Belkin, Logitech, Razer, Corsair.
- Then one week, prompts about CHIPS Act grants, Arizona fab capacity, and reshoring incentives jump thirty times.

The inference.

- Four moves, always in the same order. Clue: your proprietary "frame" is really a fixed four-step method, and now the model has it.
- The same five benchmark companies every time. Clue: that is your trusted competitive set for this market, worth money on its own.
- The sudden reshoring and CHIPS Act spike. Clue: your next big recommendation for this client is a US-manufacturing, reshoring play.

The frame is the exact thing clients pay you for. Four or five fixed steps is like four or five yes-or-no answers about how your firm thinks, which is enough to narrow "how does this firm work" from a million possibilities down to basically one. The exhaust handed it over, and told them the punchline of the next deck.

## IT Consulting: SAP ECC to S/4HANA

{{svg:v69-ex-it}}

Your team is migrating a client from old SAP (ECC) to the cloud version (S/4HANA). Locked: the client's real system, code, credentials, and name.

The exhaust is everything around the work.

- Your prompts always follow the same runbook: assess the old system, map it to the new one, generate a migration plan, then write the cloud setup script.
- You paste in real error messages while debugging. Two of them: "ORA-01555 snapshot too old" and "SAP kernel 753 patch level 200."
- A burst of questions about PCI-DSS scoping and tokenizing card data.

The inference.

- The same four-step runbook every project. Clue: you have a repeatable SAP-to-cloud migration factory, and now the model has the blueprint.
- "ORA-01555" and "kernel 753." Clue: the client runs an Oracle database under a specific SAP kernel version. You just leaked the exact stack.
- The PCI-DSS burst. Clue: the client is in payments.
- Live debugging, mid-runbook. Clue: the project is in flight right now.

Here is the sharpest part. A rare pasted error is almost a fingerprint. Paste the same unusual "kernel 753 plus ORA-01555" combination twice, and the model can tell it is the same client system with near-certainty, the same way one rare, specific detail can identify one exact person.

## A few clues become near-certainty

None of these single clues proves anything by itself. The danger is how fast they stack.

{{svg:v69-math-bayes}}

Say you start with a one-in-fifty hunch, about two percent, that a particular client is about to close a deal. Now watch each clue roughly double your confidence.

- Prompts about that client's industry spike. About 4 percent.
- Cross-border due-diligence templates get pulled. About 8 percent.
- The work moves to late nights. About 16 percent.
- Foreign-tax-credit and 338(g) tools appear. About 32 percent.
- "Purchase agreement redline" prompts show up. About 64 percent.
- Volume hits forty times normal. Past 90 percent.

Six clues turned a wild guess into near-certainty. The model is not guessing anymore. It knows. And it got there without ever reading the secret you kept locked.

This is the metadata attack from the WhatsApp story, pointed straight at knowledge work.

## The 28 percent problem, made worse

I wrote recently that the knowledge a firm creates is the only thing it truly keeps, and that most firms keep almost none of it. Only about 28 percent of what professionals create ever becomes reusable firm property. The rest lives in one head, one thread, one chat, and walks out the door.

{{svg:v69-roi}}

Sending your work through someone else's model does not fix that leak. It opens a second one, pointed the other way. You lose the IP twice. Once because you never captured it. Once because you handed its shape, as exhaust, to a model you do not control.

For a professional services firm this is not abstract. Your methodology is your product. The way your tax team sequences Project Atlas, the way your audit team scopes Northwind, the way your advisory team frames a growth play, the way your IT team runs a migration: that sequence, run thousands of times through an external model, is legible in the exhaust long before any single client file is. You are not worried they will read one workpaper. You should be worried they can infer the template behind ten thousand of them.

## Why "we do not train on your data" answers the wrong question

That promise is real and worth having. It just answers a smaller question than the one that matters.

"Do you train on my content" protects the words. It says nothing about who can watch the pattern of your use, where that telemetry is stored, who inside the provider can query it, how long it is kept, or whether it crosses a border. WhatsApp can honestly say it cannot read your messages while holding a near-perfect map of your relationships. A model host can honestly say it does not train on your prompts while sitting on the richest description anywhere of how your firm thinks.

The right question is not "do you read my content." It is "who can see the exhaust, and does it ever leave my walls."

## What actually closes the gap

{{svg:v69-tech}}

Do not stop using frontier models. The productivity gap will be brutal for firms that sit out. Change where the model runs and where the exhaust lands.

Run the model inside your own boundary. When the frontier model executes in your tenant and your compliance perimeter, the prompts, the arrows, the retrieval patterns and the timing all stay on your side of the line. The exhaust is yours. It is the difference between cooking in a stranger's kitchen and cooking in your own.

Make the content promise a contract, not a slogan. No training on your data, isolation between customers, and audit logs you can actually inspect. In writing. Verifiable.

Capture your own exhaust on purpose. The same telemetry a stranger could mine is, in your hands, the fix for the 28 percent problem. Your prompt patterns, your best retrievals, your experts' corrections, kept inside your walls, become firm memory that compounds run over run. The exhaust you refused to hand a stranger becomes the IP your firm was never keeping.

That last point is the whole reframe. Exhaust is only a leak when it lands somewhere you do not control. Landing in your own environment, it is the asset. Same data, opposite outcome, decided entirely by where it runs.

## The one-line version

WhatsApp taught a generation that encrypting the message is not the same as protecting the relationship. Frontier AI is about to teach every firm the same lesson about its IP. The vendors who promise not to read your messages are answering the question that was never the dangerous one.

Encrypt the content. Then ask the harder question: who is reading the exhaust.

Which question is your firm actually asking its AI vendor, the content one or the exhaust one? Tell me in the comments.

The views here are my own. Written from a Microsoft point of view: I think keeping the model and the exhaust inside your own tenant boundary is the right architecture, which is what the Azure and Copilot approach is built to do. Judge the argument on its merits. Project Atlas, Northwind, and the other names and figures are illustrative examples, not real engagements. OpenAI and Anthropic are named as examples of frontier models commonly hosted outside a customer tenant, not as any specific claim about their contractual terms. The 28 percent figure is from public knowledge-capture analysis.

#AI #DataGovernance #ProfessionalServices #LLM #Privacy #Copilot #IP #Metadata
