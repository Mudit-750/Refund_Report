const ideas = [
  {
    icon: "ti-gavel",
    title: "Challenge implied consent for the extension",
    tag: "legal",
    tagLabel: "Legal",
    strength: 5,
    summary:
      "Natasa claims payment = agreement to T&Cs for the extension. This is legally contested in Croatia.",
    detail:
      "Under EU Directive 2015/2302 (implemented in Croatia), terms must be clearly communicated *before* payment — not assumed from it. The extension was created as a separate product with no signed contract. A lawyer's letter citing this to Adriatic Signature puts her on the back foot and may unlock a negotiated partial refund.",
    actions: [
      "Draft lawyer's letter on firm letterhead",
      "Cite EU Directive 2015/2302 Article 5(3)",
      "Demand written evidence Fengyi was shown the T&Cs pre-payment",
    ],
    prompt:
      "Draft a firm legal letter to Adriatic Signature challenging that payment alone constitutes acceptance of T&Cs for the extension tour, citing EU Directive 2015/2302",
  },
  {
    icon: "ti-credit-card",
    title: "Credit card chargeback",
    tag: "legal",
    tagLabel: "Legal",
    strength: 5,
    summary:
      "Services not rendered + disproportionate penalty = strong chargeback grounds with Visa/Mastercard.",
    detail:
      "If Fengyi paid by credit card, she can dispute the charge under Visa/MC reason code 'services not rendered as agreed'. A 100% penalty for services entirely unused — especially when it's peak season and reselling is trivially easy — is a compelling case. The card network will request evidence from the merchant. This works best if filed within 120 days of the transaction.",
    actions: [
      "Contact card issuer immediately",
      "State reason: services not rendered / unfair penalty",
      "Attach all WhatsApp screenshots + itinerary documents",
    ],
    prompt:
      "Help me write a chargeback dispute statement for my credit card issuer for the Adriatic Signature booking — services not rendered and disproportionate 100% cancellation penalty",
  },
  {
    icon: "ti-building-bank",
    title: "File complaint with AZTN",
    tag: "legal",
    tagLabel: "Legal",
    strength: 4,
    summary:
      "Croatia's market competition authority investigates unfair commercial practices by tour operators.",
    detail:
      "The Croatian Agency for Protection of Market Competition (AZTN) handles consumer complaints against businesses. Filing a formal complaint — especially citing the undisclosed T&Cs and 100% penalty clause — often triggers rapid compliance from operators who want to avoid regulatory attention. It's free and can be done from abroad.",
    actions: [
      "File at aztn.hr (online complaint form)",
      "Attach invoice, itinerary, and chat screenshots",
      "Cite unfair contract terms and lack of pre-payment disclosure",
    ],
    prompt:
      "Help me draft a complaint to the Croatian consumer protection authority AZTN against Adriatic Signature for unfair T&Cs and 100% cancellation penalty",
  },
  {
    icon: "ti-mail-forward",
    title: "Contact hotel and tour operators directly",
    tag: "direct",
    tagLabel: "Direct negotiation",
    strength: 5,
    summary:
      "Bypass Natasa entirely. Hotel Ambasador and the quad/kayak operator may have more flexibility.",
    detail:
      "Natasa has a commercial incentive to keep the forfeited money. The hotel and tour operators do not — they just want to fill the slots. Hotel Ambasador's T&Cs specifically allow direct written complaints and mandate a 15-day response. July is peak season. A direct appeal citing this and offering to rebook in future has a reasonable chance of securing at least a credit voucher.",
    actions: [
      "Email Hotel Ambasador at info@ambasadorsplit.com",
      "Find the quad/kayak operator via the itinerary details",
      "Frame it as a future loyalty opportunity, not a refund demand",
    ],
    prompt:
      "Draft an email directly to the quad and kayak tour operator in Dalmatian hinterland explaining our cancellation and asking for a credit or partial refund",
  },
  {
    icon: "ti-replace",
    title: "Name substitution — transfer to another person",
    tag: "direct",
    tagLabel: "Direct negotiation",
    strength: 4,
    summary:
      "Natasa confirmed she can change names. Sell or gift the booking to someone else.",
    detail:
      "Natasa explicitly said 'we can change the names only.' This is Fengyi's cleanest option to recover the money outside of a refund — sell the booking. With a 5-star hotel, islands tour, and private motorboat experiences in peak Croatian summer season, this is a premium product that travellers would pay for. List it in expat/travel Facebook groups, Singapore travel communities, or private sale apps.",
    actions: [
      "Post in Singapore expat Facebook groups (e.g. Singapore Expats)",
      "List on travel deal platforms or private groups",
      "Price it at cost and frame it as a once-in-a-lifetime deal",
    ],
    prompt:
      "Help me write a post to sell or transfer my Croatia private tour booking (Hotel Ambasador 5*, Blue Cave motorboat, quad kayak adventure, June 30–July 3) to another party",
  },
  {
    icon: "ti-umbrella",
    title: "Travel insurance — child's schedule change",
    tag: "insurance",
    tagLabel: "Insurance",
    strength: 4,
    summary:
      "Many policies cover cancellation due to unforeseen compulsory educational commitments of an insured child.",
    detail:
      "Cameron's 'new schedule' is the stated reason for cancellation. If this is school-related (exam, mandatory event, term date change), it likely falls under 'compulsory educational commitment' in many travel insurance policies. Key: the change must have arisen after the booking was made and been unforeseeable at the time. Get documentation from Cameron's school.",
    actions: [
      "Pull out Fengyi's travel insurance policy",
      "Look for: 'compulsory educational commitment', 'schedule change', 'travelling companion'",
      "Get a letter from Cameron's school confirming the change",
    ],
    prompt:
      "What travel insurance clauses typically cover cancellation due to a child's unforeseen school schedule change, and how should I frame my claim?",
  },
  {
    icon: "ti-file-certificate",
    title: "Request a cancellation letter from Natasa",
    tag: "insurance",
    tagLabel: "Insurance",
    strength: 4,
    summary:
      "Natasa confirmed she'll write a letter for the insurer. Get the right wording without fabricating anything.",
    detail:
      "Natasa said on record: 'I can write whatever you want.' What Fengyi should ask for is a letter that is 100% factually accurate but strategically worded: 'The client requested an amendment to dates which Adriatic Signature was unable to accommodate. The client subsequently cancelled. All booked services remain fully forfeited per our cancellation policy.' Every word true — and maximally useful for an insurance claim.",
    actions: [
      "Send Natasa a WhatsApp confirming the exact wording you need",
      "Keep it factually airtight — no fabrication",
      "Ask for it on company letterhead with company stamp",
    ],
    prompt:
      "Draft the exact wording I should ask Natasa to put in her cancellation letter for my insurer — factually accurate and maximally supportive of an insurance claim",
  },
  {
    icon: "ti-star",
    title: "Leverage review threat (calmly)",
    tag: "pressure",
    tagLabel: "Pressure",
    strength: 3,
    summary:
      "A calm, professional message noting you'll leave detailed public reviews if unresolved creates leverage.",
    detail:
      "Adriatic Signature is a luxury boutique operator whose business depends on referrals and reviews. A detailed, factual TripAdvisor or Google review describing how they handled this cancellation — especially the WhatsApp chat about 'writing whatever you want' — would be devastating. A polite message noting this intention (without threats) is a legal and often effective lever. Keep it professional.",
    actions: [
      "Send a polite message noting you'll share your experience publicly if unresolved",
      "Don't threaten — just state you'll be honest about your experience",
      "Check if Adriatic Signature has Google/TripAdvisor profiles to reference",
    ],
    prompt:
      "Help me write a firm but professional message to Natasa noting that I will share my experience publicly if this is not resolved fairly",
  },
  {
    icon: "ti-brand-tripadvisor",
    title: "Escalate to referral source or travel community",
    tag: "pressure",
    tagLabel: "Pressure",
    strength: 3,
    summary:
      "If someone referred Fengyi to Adriatic Signature, loop them in. Operators protect their referral relationships.",
    detail:
      "Luxury private tour operators often get business through referrals — travel concierges, hotel concierges, corporate travel desks. If Fengyi was referred through any of these, a message to the referrer puts social pressure on Adriatic Signature. Operators don't want to lose a referral partner over one dispute. Even a WhatsApp to the Singapore travel community about this operator creates pressure.",
    actions: [
      "Identify who referred Fengyi to Adriatic Signature",
      "Send a calm, factual account to the referrer",
      "Post in Singaporean luxury travel communities (private groups)",
    ],
    prompt:
      "Help me write a message to the person who referred me to Adriatic Signature explaining what happened with the cancellation",
  },
  {
    icon: "ti-device-laptop",
    title: "Book directly via OTA and immediately cancel",
    tag: "creative",
    tagLabel: "Creative",
    strength: 2,
    summary:
      "Explore if Hotel Ambasador has OTA rates with free cancellation — to understand the hotel's own policy vs Natasa's.",
    detail:
      "Hotels.com lists Hotel Ambasador with 'fully refundable rates.' This strongly suggests the hotel's own direct/OTA cancellation terms are more lenient than what Natasa is claiming. This proves the non-refundable terms are Adriatic Signature's policy, not the hotel's — which may matter for Fengyi's insurance claim or legal argument, since it suggests Natasa chose the most restrictive terms.",
    actions: [
      "Screenshot any refundable rate for the same dates on Hotels.com/Booking.com",
      "Use this as evidence in your legal letter and insurance claim",
      "This proves the hotel itself doesn't require non-refundable terms",
    ],
    prompt:
      "How can I use the fact that Hotel Ambasador offers refundable rates on OTAs as evidence against Adriatic Signature's claim that the hotel booking is non-refundable?",
  },
  {
    icon: "ti-users",
    title: "Propose a group rebooking deal",
    tag: "creative",
    tagLabel: "Creative",
    strength: 3,
    summary:
      "Offer to rebook the same package for a future date with friends — giving Natasa an upsell.",
    detail:
      "Fengyi mentioned this is a Chua/Tay family group. If she can bring 2-3 friends or family members on a future Croatia trip, that's potentially a new €30,000+ booking for Natasa. Framing the current resolution as a 'let's build a long-term relationship' opportunity — especially if Fengyi has a social circle who travel — turns a dispute into a business development conversation.",
    actions: [
      "Offer to rebook in 2026/2027 with a larger group",
      "Ask Natasa to roll forfeited funds into a future booking credit",
      "Position yourself as a valuable long-term client",
    ],
    prompt:
      "Help me draft a message to Natasa proposing to roll our forfeited amount into a future group booking credit as a way to resolve this dispute",
  },
  {
    icon: "ti-scale",
    title: "Small claims / EU ODR platform",
    tag: "legal",
    tagLabel: "Legal",
    strength: 3,
    summary:
      "The EU Online Dispute Resolution platform lets consumers in any country file against EU businesses for free.",
    detail:
      "The EU has an Online Dispute Resolution (ODR) platform specifically for cross-border disputes with EU businesses. Adriatic Signature is a Croatian EU-registered company (OIB: 45473362294). Fengyi, as a Singaporean consumer, can file through ec.europa.eu/consumers/odr — it's free and often leads to mediation within 90 days. Croatian courts would apply consumer-protective interpretations of the Package Travel Directive.",
    actions: [
      "File at ec.europa.eu/consumers/odr",
      "Have Adriatic Signature's company details ready (OIB: 45473362294, registered in Split)",
      "Attach all documentation — invoice, itinerary, T&Cs, chat screenshots",
    ],
    prompt:
      "Walk me through how to file an EU ODR (Online Dispute Resolution) complaint against a Croatian tour operator as a Singaporean consumer",
  },
];

const tagColors = {
  legal: "tag-legal",
  pressure: "tag-pressure",
  insurance: "tag-insurance",
  creative: "tag-creative",
  direct: "tag-direct",
};

const tagLabels = {
  legal: "Legal",
  pressure: "Pressure",
  insurance: "Insurance",
  creative: "Creative",
  direct: "Direct negotiation",
};

let activeFilter = "all";

function renderCards(filter) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const filtered =
    filter === "all" ? ideas : ideas.filter((i) => i.tag === filter);
  filtered.forEach((idea, idx) => {
    const card = document.createElement("div");
    card.className = "idea-card";
    card.dataset.idx = idx;
    const dots = Array.from(
      { length: 5 },
      (_, i) =>
        `<div class="strength-dot ${i < idea.strength ? "on" : ""}"></div>`,
    ).join("");
    card.innerHTML = `
      <div class="card-top">
        <i class="ti ${idea.icon} card-icon" aria-hidden="true"></i>
        <div style="flex:1">
          <p class="card-title">${idea.title}</p>
          <span class="card-tag ${tagColors[idea.tag]}">${tagLabels[idea.tag]}</span>
        </div>
        <i class="ti ti-chevron-down chevron" aria-hidden="true"></i>
      </div>
      <p style="font-size:13px;color:var(--text-secondary);margin:8px 0 0;line-height:1.5;">${idea.summary}</p>
      <div class="strength-bar" style="margin-top:8px;" title="Leverage strength">${dots}</div>
      <div class="card-detail">
        <p>${idea.detail}</p>
        <ul>${idea.actions.map((a) => `<li>${a}</li>`).join("")}</ul>
      </div>
    `;
    card.addEventListener("click", function (e) {
      const detail = card.querySelector(".card-detail");
      const isOpen = detail.classList.contains("open");
      document
        .querySelectorAll(".card-detail")
        .forEach((d) => d.classList.remove("open"));
      document
        .querySelectorAll(".idea-card")
        .forEach((c) => c.classList.remove("expanded"));
      if (!isOpen) {
        detail.classList.add("open");
        card.classList.add("expanded");
      }
    });
    grid.appendChild(card);
  });
}

document.getElementById("filters").addEventListener("click", function (e) {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  renderCards(activeFilter);
});

renderCards("all");
