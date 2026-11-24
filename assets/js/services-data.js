/* ==========================================================================
   OMYRA – Official Brochure Master Service Catalog
   4 Main Categories · 47 Individual Service Entries (Exact Brochure Source)
   ========================================================================== */
window.OMYRA_CATEGORIES = [
  {
    id: "salon-services",
    navLabel: "Salon Services",
    title: "Salon Services",
    shortTitle: "Salon Services",
    subtitle: "Hair, Skin & Signature Grooming",
    description: "Tailored hairstyling, nourishing scalp rituals, classic beauty care and occasion-ready styling delivered in a calm, luxury salon setting.",
    icon: "bi-scissors",
    homeImg: "assets/img/service-haircare.jpg?v=24",
    count: 14
  },
  {
    id: "aesthetic-clinic",
    navLabel: "Aesthetic Clinic",
    title: "Aesthetic Clinic Services",
    shortTitle: "Aesthetic Clinic",
    subtitle: "Dermatologist-Guided Skin, Hair & Body Care",
    description: "Evidence-guided clinical aesthetics combining personalised assessments, advanced devices and gentle protocols tailored to your skin and hair goals.",
    icon: "bi-stars",
    homeImg: "assets/img/service-skincare.jpg?v=24",
    count: 13
  },
  {
    id: "semi-permanent-makeup",
    navLabel: "Semi-Permanent Makeup",
    title: "Semi-Permanent Makeup Centre Services",
    shortTitle: "Semi-Permanent Makeup",
    subtitle: "Precision Micropigmentation & Natural Definition",
    description: "Thoughtfully mapped brow, lip, eye and corrective micropigmentation performed with sterile single-use pigments for soft, natural-looking definition.",
    icon: "bi-brush",
    homeImg: "assets/img/service-aesthetics.jpg?v=24",
    count: 9
  },
  {
    id: "nail-bar",
    navLabel: "Nail Bar",
    title: "Nail Bar Services",
    shortTitle: "Nail Bar",
    subtitle: "Luxury Manicures, Extensions & Custom Nail Art",
    description: "Hygienic hand and foot care, durable gel and acrylic enhancements, restorative nail spa rituals and bespoke artistic finishes.",
    icon: "bi-gem",
    homeImg: "assets/img/service-wellness.jpg?v=24",
    count: 11
  }
];

window.OMYRA_SERVICES = [
  /* ========================================================================
     CATEGORY 1: SALON SERVICES (14)
     ======================================================================== */
  {
    slug: "haircut-styling",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Haircut & Styling",
    shortDesc: "Precision cuts and bespoke styling tailored to your face shape, hair texture and everyday routine.",
    overview: "Our stylists begin with a personal hair and face-shape consultation before crafting a balanced cut and polished finish that grows out gracefully and feels effortless to maintain.",
    img: "assets/img/services/haircut-styling.jpg",
    sessionInfo: "Personalised consultation & finish",
    approach: "Tailored to hair texture & lifestyle",
    highlights: [
      "Detailed consultation based on hair density, texture and face shape",
      "Precision cutting techniques for manageable, natural movement",
      "Custom blowout or heat styling tailored to your preferred look",
      "Practical styling and home-maintenance tips from your stylist"
    ]
  },
  {
    slug: "hair-wash-blow-dry",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Hair Wash & Blow Dry",
    shortDesc: "Refreshing cleanse, nourishing conditioning and a smooth, voluminous salon blow-dry finish.",
    overview: "Enjoy a gentle, thorough hair cleanse using formulations selected for your scalp and strand type, followed by a sleek or bouncy blow-dry designed for softness and shine.",
    img: "assets/img/services/hair-wash-blow-dry.jpg",
    sessionInfo: "Cleansing & brush-styled finish",
    approach: "Gentle heat-protected styling",
    highlights: [
      "Shampoo and conditioner selected for your scalp and hair type",
      "Relaxing wash-chair cleanse to leave hair light and refreshed",
      "Heat-protectant prep prior to brush-drying for smoother strands",
      "Choice of sleek straight, soft waves or natural-volume finish"
    ]
  },
  {
    slug: "hair-colouring",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Hair Colouring (Global, Highlights, Balayage, Ombré)",
    shortDesc: "Custom shade matching for global colour, dimensional highlights, soft balayage and blended ombré.",
    overview: "From rich all-over coverage to sun-kissed balayage, seamless ombré and soft framing highlights, our colour specialists formulate shades that complement your undertone while respecting hair integrity.",
    img: "assets/img/services/hair-colouring.jpg",
    sessionInfo: "Shade consultation & custom application",
    approach: "Bond-conscious colour care",
    highlights: [
      "Custom tone and shade selection suited to your complexion",
      "Global coverage, classic foil highlights, balayage and ombré techniques",
      "Conditioning post-colour rinse to support softness and shine",
      "Guidance on colour-safe home cleansing and maintenance"
    ]
  },
  {
    slug: "hair-spa-deep-conditioning",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Hair Spa & Deep Conditioning",
    shortDesc: "Restorative moisture masks, gentle steam and massage to replenish dry, dull or frizz-prone hair.",
    overview: "Designed to revive stressed strands, our Hair Spa & Deep Conditioning ritual combines rich botanical masks, warm steam infusion and a soothing massage for smoother, softer hair.",
    img: "assets/img/services/hair-spa-deep-conditioning.jpg",
    sessionInfo: "Multi-step conditioning ritual",
    approach: "Hydration & softness focused",
    highlights: [
      "Targeted nourishing mask selected for dryness, frizz or colour-treated hair",
      "Warm mist or steam to help conditioning actives coat the hair shaft",
      "Soothing scalp massage to promote relaxation during the session",
      "Leaves strands feeling softer, smoother and easier to detangle"
    ]
  },
  {
    slug: "keratin-smoothing-rebonding",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Keratin, Smoothing & Rebonding",
    shortDesc: "Frizz-control and texture-refining salon treatments for sleeker, more manageable hair.",
    overview: "Following a thorough strand assessment, our stylists help you choose between gentle keratin frizz-control, soft smoothing or structured rebonding tailored to your hair condition and styling preferences.",
    img: "assets/img/services/keratin-smoothing-rebonding.jpg",
    sessionInfo: "Strand assessment & tailored smoothing",
    approach: "Texture & manageability care",
    highlights: [
      "Pre-service hair elasticity and history check before application",
      "Options ranging from natural frizz reduction to sleek smoothness",
      "Helps shorten daily blow-drying and heat-styling time",
      "Aftercare advice including sulphate-free cleansing recommendations"
    ]
  },
  {
    slug: "scalp-treatments",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Scalp Treatments",
    shortDesc: "Purifying and soothing salon scalp rituals to lift buildup and support a balanced scalp environment.",
    overview: "Healthy-looking hair begins with a clean, comfortable scalp. Our salon scalp treatments gently exfoliate product residue, calm dryness or excess oil and refresh the roots.",
    img: "assets/img/services/scalp-treatments.jpg",
    sessionInfo: "Cleansing, exfoliation & soothing care",
    approach: "Balanced scalp comfort",
    highlights: [
      "Gentle removal of styling buildup, excess sebum and surface flakes",
      "Formulations selected for dry, oily or sensitive scalp types",
      "Relaxing application with targeted scalp massage techniques",
      "Leaves roots feeling clean, airy and refreshed"
    ]
  },
  {
    slug: "head-massage",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Head Massage",
    shortDesc: "Unhurried, rhythmic oil or dry head massage to ease everyday tension and promote calm.",
    overview: "Step away from daily stress with a traditional, slow-paced head, temple and neck massage using nourishing warm oils or light botanical blends tailored to your preference.",
    img: "assets/img/services/head-massage.jpg",
    sessionInfo: "Relaxing oil or dry ritual",
    approach: "Calm & tension relief",
    highlights: [
      "Gentle, rhythmic pressure across scalp, temples, neck and shoulders",
      "Choice of warm nourishing botanical oils or oil-free massage",
      "Helps ease everyday head and neck stiffness",
      "Can be paired effortlessly with a Hair Wash & Blow Dry"
    ]
  },
  {
    slug: "facials-clean-ups",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Facials & Clean-ups",
    shortDesc: "Gentle salon facials and deep clean-ups to refresh tired skin and maintain a clean glow.",
    overview: "Our salon facials and clean-ups combine thorough cleansing, mild exfoliation, gentle steam, relaxing facial massage and a soothing mask suited to your skin's current needs.",
    img: "assets/img/services/facials-clean-ups.jpg",
    sessionInfo: "Cleanse, exfoliate, massage & mask",
    approach: "Customised for skin comfort",
    highlights: [
      "Thorough yet gentle surface cleansing and pore refresh",
      "Skin-type-appropriate exfoliation and soothing hydrating masks",
      "Relaxing facial massage to leave skin feeling supple and refreshed",
      "Ideal for routine monthly upkeep or pre-event prep"
    ]
  },
  {
    slug: "waxing",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Waxing (Full Body, Brazilian, Bikini)",
    shortDesc: "Hygienic, gentle waxing services for full body, Brazilian and bikini areas in private suites.",
    overview: "Performed in private, sanitized rooms with strict single-use hygiene practices, our waxing services use gentle skin-calming waxes and soothing post-wax lotions for smooth comfort.",
    img: "assets/img/services/waxing.jpg",
    sessionInfo: "Private suite · strict hygiene",
    approach: "Gentle skin-soothing technique",
    highlights: [
      "Full body, underarms, arms, legs, Brazilian and bikini options",
      "Single-use spatulas and clean, private treatment rooms",
      "Gentle wax formulations selected for sensitive and delicate areas",
      "Calming post-wax lotion and simple aftercare guidance"
    ]
  },
  {
    slug: "threading-eyebrow-shaping",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Threading & Eyebrow Shaping",
    shortDesc: "Clean, precise facial threading and natural brow shaping to frame your features softly.",
    overview: "Our aestheticians shape brows cleanly to complement your natural arch and facial proportions, offering gentle facial threading finished with a cooling soothing gel.",
    img: "assets/img/services/threading-eyebrow-shaping.jpg",
    sessionInfo: "Precision brow & facial threading",
    approach: "Natural face-framing symmetry",
    highlights: [
      "Natural eyebrow shaping tailored to your bone structure",
      "Upper lip, chin, forehead and full-face threading available",
      "Gentle technique with hygienic single-use cotton thread",
      "Soothing post-threading gel to calm freshly shaped skin"
    ]
  },
  {
    slug: "bleach-detan",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Bleach & Detan",
    shortDesc: "Mild tan-removal packs and gentle brightening care for face, neck, arms and body.",
    overview: "Designed to refresh sun-exposed, dull-looking skin, our Bleach & Detan services use mild, skin-conscious packs and soothing hydration to leave skin looking fresher and more even.",
    img: "assets/img/services/bleach-detan.jpg",
    sessionInfo: "Gentle pack & soothing finish",
    approach: "Skin-sensitivity checked first",
    highlights: [
      "Patch-conscious, mild detan packs for face, neck, arms and back",
      "Helps lift dullness from everyday sun exposure",
      "Finished with calming moisture and sun-protection advice",
      "Can be combined with clean-ups or grooming packages"
    ]
  },
  {
    slug: "bridal-party-makeup",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Bridal & Party Makeup",
    shortDesc: "Luminous, camera-ready bridal and occasion makeup tailored to your outfit, lighting and style.",
    overview: "Whether you envision a timeless bridal look or soft evening glam, our makeup artists prep the skin thoughtfully and build seamless, comfortable makeup that celebrates your natural features.",
    img: "assets/img/services/bridal-party-makeup.jpg",
    sessionInfo: "Skin prep, custom makeup & setting",
    approach: "Soft, breathable & photo-ready",
    highlights: [
      "Personalised look planning matched to outfit, jewellery and lighting",
      "Thoughtful hydrating skin preparation for a smooth base",
      "Clean, sanitised brushes and quality professional products",
      "Pre-event trial consultations available for brides"
    ]
  },
  {
    slug: "saree-draping-hairstyling",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Saree Draping & Hairstyling",
    shortDesc: "Neat, secure saree draping paired with classic buns, braids, soft curls or floral hairstyling.",
    overview: "Complete your festive or bridal ensemble with crisp, comfortable saree pleating and elegant hairstyling—from traditional floral buns and braids to modern soft waves.",
    img: "assets/img/services/saree-draping-hairstyling.jpg",
    sessionInfo: "Draping, pleating & occasion hair",
    approach: "Secure, comfortable all-event hold",
    highlights: [
      "Classic and contemporary saree draping styles pinned cleanly",
      "Traditional buns, braids, fresh-flower styling and modern waves",
      "Secure finishing designed for hours of comfortable wear",
      "Seamless pairing with Bridal & Party Makeup bookings"
    ]
  },
  {
    slug: "grooming-packages",
    category: "salon-services",
    categoryLabel: "Salon Services",
    name: "Grooming Packages",
    shortDesc: "Curated multi-service salon and self-care packages for pre-bridal, festive and routine upkeep.",
    overview: "Save time and enjoy a cohesive self-care experience with our curated Grooming Packages, thoughtfully combining hair, skin, waxing and nail essentials for everyday upkeep or special occasions.",
    img: "assets/img/services/grooming-packages.jpg",
    sessionInfo: "Customisable bundled sessions",
    approach: "All-in-one curated care",
    highlights: [
      "Curated combinations of hair, facial, grooming and hand/foot care",
      "Options suited for routine monthly upkeep or pre-wedding schedules",
      "Customisable around your timeline and personal preferences",
      "Guided scheduling during your initial consultation"
    ]
  },

  /* ========================================================================
     CATEGORY 2: AESTHETIC CLINIC SERVICES (13)
     ======================================================================== */
  {
    slug: "chemical-peels",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Chemical Peels",
    shortDesc: "Dermatologist-guided exfoliating peels tailored to support smoother texture and brighter-looking skin.",
    overview: "Performed after a clinical skin evaluation, our Chemical Peels use carefully selected acid formulations and strengths suited to your skin type to gently exfoliate dull surface buildup.",
    img: "assets/img/services/chemical-peels.jpg",
    sessionInfo: "Clinical assessment & tailored peel",
    approach: "Dermatologist-guided protocol",
    highlights: [
      "Peel type and concentration chosen after individual skin evaluation",
      "Gentle controlled exfoliation to refresh uneven texture and dullness",
      "Soothing post-peel calming care and sun-protection guidance",
      "Planned as a safe, gradual series based on skin tolerance"
    ]
  },
  {
    slug: "hydrafacial-oxy-facial",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "HydraFacial / Oxy Facial",
    shortDesc: "Multi-step clinical cleansing, gentle extraction, oxygenation and serum hydration for refreshed skin.",
    overview: "Our HydraFacial and Oxy Facial protocols gently cleanse pores, lift surface impurities and infuse hydrating, antioxidant-rich serums to leave skin feeling clean, plump and comfortably refreshed.",
    img: "assets/img/services/hydrafacial-oxy-facial.jpg",
    sessionInfo: "Multi-step non-invasive facial",
    approach: "Deep hydration & pore care",
    highlights: [
      "Gentle cleansing, mild exfoliation and painless pore extraction",
      "Serum and oxygen-assisted hydration tailored to your skin type",
      "Comfortable experience with minimal to no social downtime",
      "Suitable for routine skin maintenance and pre-occasion glow"
    ]
  },
  {
    slug: "acne-acne-scar-treatment",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Acne & Acne Scar Treatment",
    shortDesc: "Structured clinical care plans addressing active breakouts, post-acne marks and uneven texture.",
    overview: "Acne and post-acne marks vary widely from person to person. Our clinical team evaluates your skin barrier, breakout pattern and scar type to recommend a tailored, step-by-step care plan.",
    img: "assets/img/services/acne-acne-scar-treatment.jpg",
    sessionInfo: "Clinical evaluation & staged plan",
    approach: "Barrier-respectful dermatology care",
    highlights: [
      "Thorough consultation to assess breakout triggers and scar patterns",
      "Tailored clinical sessions paired with supportive daily skincare guidance",
      "Focused on gentle pore care, calming inflammation and texture refinement",
      "Ongoing follow-ups to adjust your routine as skin responds"
    ]
  },
  {
    slug: "anti-aging-treatments",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Anti-Aging Treatments (Botox, Fillers, PRP)",
    shortDesc: "Doctor-led consultations and personalised aesthetic options including Botox, Fillers and PRP.",
    overview: "Our doctor-led anti-aging consultations take a conservative, natural-looking approach—reviewing facial proportions, skin elasticity and your personal goals before discussing options such as Botox, dermal fillers or PRP.",
    img: "assets/img/services/anti-aging-treatments.jpg",
    sessionInfo: "Doctor consultation & tailored plan",
    approach: "Subtle, balanced aesthetic care",
    highlights: [
      "Comprehensive facial assessment led by a qualified clinician",
      "Individualised discussion of Botox, dermal fillers and PRP options",
      "Conservative approach aimed at natural-looking expression and balance",
      "Clear pre-procedure and post-care guidance at every step"
    ]
  },
  {
    slug: "skin-rejuvenation-therapies",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Skin Rejuvenation Therapies",
    shortDesc: "Personalised clinical therapies designed to support skin vitality, tone evenness and healthy radiance.",
    overview: "Combining thorough skin analysis with gentle clinic-grade modalities, our Skin Rejuvenation Therapies are tailored to address dullness, tired-looking texture and early signs of environmental stress.",
    img: "assets/img/services/skin-rejuvenation-therapies.jpg",
    sessionInfo: "Custom clinical rejuvenation session",
    approach: "Gradual, supportive skin renewal",
    highlights: [
      "Customised selection of gentle clinic therapies after skin assessment",
      "Supports smoother texture, hydration and refreshed radiance",
      "Designed to integrate smoothly with your home skincare regimen",
      "Comfortable sessions with personalised recovery guidance"
    ]
  },
  {
    slug: "laser-hair-removal",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Laser Hair Removal",
    shortDesc: "Clinical laser hair reduction sessions tailored to skin tone and hair type for long-term smoothness.",
    overview: "Our clinic uses modern, comfort-focused laser technology calibrated to your individual skin phototype and hair thickness, following a structured multi-session schedule discussed during consultation.",
    img: "assets/img/services/laser-hair-removal.jpg",
    sessionInfo: "Patch test & multi-session schedule",
    approach: "Calibrated for Indian skin tones",
    highlights: [
      "Pre-treatment skin and hair assessment with test patch as needed",
      "Available for face, underarms, arms, legs, bikini and full body",
      "Cooling comfort features and hygienic clinical protocols",
      "Clear pre-session prep and sun-care aftercare instructions"
    ]
  },
  {
    slug: "pigmentation-melasma-treatment",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Pigmentation & Melasma Treatment",
    shortDesc: "Targeted dermatologist-guided protocols to help manage uneven tone, sun spots and melasma.",
    overview: "Uneven pigmentation and melasma require careful, patient management. Our clinicians evaluate pigment depth and lifestyle factors to craft gentle in-clinic protocols paired with sun-safe home care.",
    img: "assets/img/services/pigmentation-melasma-treatment.jpg",
    sessionInfo: "Pigment evaluation & ongoing care",
    approach: "Gentle, sun-smart clinical strategy",
    highlights: [
      "Detailed evaluation of sun spots, post-inflammatory marks and melasma",
      "Conservative in-clinic treatments selected for your skin tone",
      "Emphasis on daily broad-spectrum sun protection and gentle actives",
      "Structured follow-up reviews to monitor gradual progress"
    ]
  },
  {
    slug: "skin-tightening-rf-hifu",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Skin Tightening (RF, HIFU)",
    shortDesc: "Non-surgical radiofrequency (RF) and HIFU sessions designed to support firmer-looking skin contours.",
    overview: "Following a facial or neck laxity consultation, our team discusses non-invasive Radiofrequency (RF) and HIFU options tailored to support gradual skin firmness without surgical downtime.",
    img: "assets/img/services/skin-tightening-rf-hifu.jpg",
    sessionInfo: "Non-surgical RF / HIFU consultation",
    approach: "Non-invasive contouring support",
    highlights: [
      "Individual assessment to determine suitability for RF or HIFU",
      "Non-invasive energy-based sessions with minimal disruption to routine",
      "Targets areas such as jawline, cheeks, neck and brow region",
      "Clear discussion of expected timelines and maintenance care"
    ]
  },
  {
    slug: "prp-hair-skin",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "PRP for Hair & Skin",
    shortDesc: "Autologous platelet-rich plasma (PRP) clinical sessions tailored for scalp and skin rejuvenation support.",
    overview: "Using your own processed plasma under strict sterile clinical protocols, PRP sessions are offered following doctor consultation to support scalp nourishment or overall skin vitality.",
    img: "assets/img/services/prp-hair-skin.jpg",
    sessionInfo: "Doctor-supervised sterile procedure",
    approach: "Autologous clinical protocol",
    highlights: [
      "Performed under sterile medical protocols by trained clinicians",
      "Available as tailored protocols for scalp support or skin rejuvenation",
      "Individual suitability reviewed thoroughly during medical consultation",
      "Guided post-session care and spaced follow-up scheduling"
    ]
  },
  {
    slug: "hair-fall-control-regrowth",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Hair Fall Control & Hair Regrowth Therapies",
    shortDesc: "Diagnostic scalp assessment and personalised clinical programs to support hair density and scalp health.",
    overview: "Hair thinning and shedding can stem from multiple factors. We start with a detailed scalp and lifestyle evaluation to design an individualised clinical care plan aimed at supporting healthier hair growth.",
    img: "assets/img/services/hair-fall-control-regrowth.jpg",
    sessionInfo: "Scalp evaluation & tailored program",
    approach: "Root-cause clinical assessment",
    highlights: [
      "Comprehensive scalp, follicle and lifestyle consultation",
      "Personalised combination of in-clinic therapies and home care",
      "Designed to support scalp circulation and follicle environment",
      "Regular progress check-ins to refine your care plan"
    ]
  },
  {
    slug: "carbon-laser-facial",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Carbon Laser Facial",
    shortDesc: "Activated carbon mask paired with gentle laser toning to refresh oily, congested or dull-looking skin.",
    overview: "A thin layer of medical-grade carbon lotion is applied and gently targeted with specialized laser energy to help lift surface oil and debris, leaving skin feeling cleaner and smoother.",
    img: "assets/img/services/carbon-laser-facial.jpg",
    sessionInfo: "Non-invasive laser-assisted facial",
    approach: "Pore-refining & oil-balancing care",
    highlights: [
      "Helps cleanse excess oil and refine the appearance of enlarged pores",
      "Comfortable, quick clinic session with minimal downtime",
      "Finished with soothing hydration and broad-spectrum SPF",
      "Suitability confirmed by clinician prior to treatment"
    ]
  },
  {
    slug: "body-contouring-fat-reduction",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "Body Contouring & Fat Reduction",
    shortDesc: "Non-surgical body shaping sessions tailored to complement a healthy, active lifestyle.",
    overview: "Our non-invasive Body Contouring & Fat Reduction consultations assess targeted areas and outline comfortable, clinic-based shaping protocols designed to complement balanced nutrition and movement.",
    img: "assets/img/services/body-contouring-fat-reduction.jpg",
    sessionInfo: "Body assessment & staged sessions",
    approach: "Non-surgical silhouette support",
    highlights: [
      "Personalised area assessment and realistic goal setting",
      "Non-invasive clinic sessions with no surgical recovery time",
      "Can target areas such as abdomen, flanks, arms or thighs",
      "Paired with supportive wellness and lifestyle guidance"
    ]
  },
  {
    slug: "iv-glutathione-vitamin-therapy",
    category: "aesthetic-clinic",
    categoryLabel: "Aesthetic Clinic Services",
    name: "IV Glutathione & Vitamin Therapy",
    shortDesc: "Doctor-screened intravenous hydration, antioxidant and vitamin wellness infusions in a calm clinic lounge.",
    overview: "Administered only after a medical screening and doctor consultation, our IV Glutathione & Vitamin Therapy sessions are tailored to support hydration and antioxidant wellness in a relaxing clinical setting.",
    img: "assets/img/services/iv-glutathione-vitamin-therapy.jpg",
    sessionInfo: "Medical screening & supervised drip",
    approach: "Clinician-monitored wellness care",
    highlights: [
      "Pre-infusion health screening and doctor consultation required",
      "Sterile, clinician-supervised administration in a calm private chair",
      "Tailored vitamin and antioxidant formulations based on wellness goals",
      "Clear hydration and follow-up guidance provided"
    ]
  },

  /* ========================================================================
     CATEGORY 3: SEMI-PERMANENT MAKEUP CENTRE SERVICES (9)
     ======================================================================== */
  {
    slug: "microblading-eyebrows",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Microblading for Eyebrows",
    shortDesc: "Fine, hair-like pigment strokes mapped to your natural brow arch for soft, fuller-looking eyebrows.",
    overview: "Using careful facial symmetry mapping and shade matching, Microblading places delicate hair-like strokes to gently enhance sparse areas while maintaining a soft, natural brow appearance.",
    img: "assets/img/services/microblading-eyebrows.jpg",
    sessionInfo: "Brow mapping & precision session",
    approach: "Sterile single-use pigments",
    highlights: [
      "Custom brow mapping approved by you before pigment application",
      "Shade matched carefully to your natural brow hair and undertone",
      "Sterile, single-use micro-tools and comfort-focused numbing prep",
      "Detailed healing and aftercare instructions provided"
    ]
  },
  {
    slug: "ombre-powder-brows",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Ombre Brows / Powder Brows",
    shortDesc: "Soft, misty gradient brow shading for a gently filled, powder-makeup finish suited to many skin types.",
    overview: "Ombre and Powder Brows create a smooth gradient—lighter and airy at the front of the brow, softly deepening toward the tail—for a neat, polished finish that heals softly.",
    img: "assets/img/services/ombre-powder-brows.jpg",
    sessionInfo: "Custom mapping & gradient shading",
    approach: "Soft powdered definition",
    highlights: [
      "Soft shaded finish ranging from subtle tint to defined makeup look",
      "Often well suited for combination or oilier skin types",
      "Careful symmetry mapping and custom pigment blending",
      "Guided post-session healing and touch-up planning"
    ]
  },
  {
    slug: "lip-blush-pigmentation",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Lip Blush / Lip Pigmentation Correction",
    shortDesc: "Sheer, natural-looking lip tinting and gentle tone-balancing for uneven or darkened lip tones.",
    overview: "Lip Blush softly enhances lip symmetry and colour with a sheer tint, while Lip Pigmentation Correction uses thoughtful colour theory to gently balance uneven or darker lip tones over staged sessions.",
    img: "assets/img/services/lip-blush-pigmentation.jpg",
    sessionInfo: "Shade consultation & gentle tinting",
    approach: "Custom tone-neutralising artistry",
    highlights: [
      "Personalised shade selection from soft nude-pink to warm rose",
      "Staged neutralisation approach for darker or uneven lip tones",
      "Enhances natural lip border definition without a harsh outline",
      "Soothing balm and complete lip-healing aftercare kit guidance"
    ]
  },
  {
    slug: "eyeliner-tattoo",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Eyeliner Tattoo (Upper, Lower, Winged)",
    shortDesc: "Subtle lash-line enhancement or classic upper, lower and softly winged semi-permanent eyeliner.",
    overview: "Designed around your natural eye shape, our Eyeliner Tattoo options range from an ultra-subtle lash-line enhancement to defined upper, lower or gently winged eyeliner for smudge-free definition.",
    img: "assets/img/services/eyeliner-tattoo.jpg",
    sessionInfo: "Eye-shape design & precision lining",
    approach: "Eye-safe sterile technique",
    highlights: [
      "Choice of natural lash-line fill, upper, lower or soft winged styles",
      "Pre-drawn shape previewed and approved before application",
      "Gentle topical comfort prep and strict eye-area hygiene",
      "Clear post-procedure eye-care guidelines"
    ]
  },
  {
    slug: "scalp-micropigmentation",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Scalp Micropigmentation",
    shortDesc: "Micro-stippled pigment impressions designed to create the visual appearance of denser hairlines and parting.",
    overview: "Scalp Micropigmentation uses ultra-fine, follicle-mimicking pigment dots matched to your natural hair shade to visually soften sparse parting lines, thinning areas or scalp visibility.",
    img: "assets/img/services/scalp-micropigmentation.jpg",
    sessionInfo: "Hairline mapping & staged sessions",
    approach: "Natural follicle-dot realism",
    highlights: [
      "Custom pigment tone matched to your natural hair and scalp undertone",
      "Gradual layered sessions for soft, realistic density appearance",
      "Suitable for refining parting lines, crown thinning or hairline framing",
      "Individual consultation and scalp care guidance"
    ]
  },
  {
    slug: "areola-pigmentation",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Areola Pigmentation",
    shortDesc: "Compassionate, private restorative micropigmentation focused on natural-looking colour and symmetry.",
    overview: "Offered in complete privacy with sensitivity and care, Areola Pigmentation uses natural skin-toned pigment blending to gently restore colour harmony and balanced visual symmetry following medical consultation.",
    img: "assets/img/services/areola-pigmentation.jpg",
    sessionInfo: "Private consultation & restorative care",
    approach: "Discreet, compassionate artistry",
    highlights: [
      "Private, unhurried 1-on-1 consultation in a discreet clinical suite",
      "Custom multi-tone pigment blending for natural-looking shading",
      "Strict medical-grade sterility and single-use cartridges",
      "Thoughtful aftercare support and follow-up review"
    ]
  },
  {
    slug: "beauty-spot-mole-creation",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Beauty Spot / Mole Creation",
    shortDesc: "Delicate, natural-toned semi-permanent beauty mark placement customised to flatter your features.",
    overview: "A quick, subtle semi-permanent accent: our specialist maps your preferred placement and blends a soft brown pigment matched to your natural skin undertone for an understated beauty spot.",
    img: "assets/img/services/beauty-spot-mole-creation.jpg",
    sessionInfo: "Placement preview & quick session",
    approach: "Natural undertone pigment match",
    highlights: [
      "Placement previewed visually before application",
      "Soft, natural brown tone blended for your complexion",
      "Quick, gentle session with sterile single-use tools",
      "Simple healing aftercare instructions included"
    ]
  },
  {
    slug: "camouflage-for-scars",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Camouflage for Scars",
    shortDesc: "Skin-tone-matched paramedical micropigmentation to help visually soften matured, lighter scars.",
    overview: "Following evaluation to ensure the scar is fully matured and suitable, our specialist custom-blends skin-matched pigments to gently reduce visual contrast between the scar and surrounding skin.",
    img: "assets/img/services/camouflage-for-scars.jpg",
    sessionInfo: "Scar maturity review & colour match",
    approach: "Custom skin-tone blending",
    highlights: [
      "Consultation to verify scar maturity and treatment suitability",
      "Bespoke pigment mixing calibrated to surrounding skin tone",
      "Layered, conservative sessions for natural-looking blending",
      "Complete healing and sun-protection guidance"
    ]
  },
  {
    slug: "touch-up-correction-sessions",
    category: "semi-permanent-makeup",
    categoryLabel: "Semi-Permanent Makeup Centre",
    name: "Touch-up & Correction Sessions",
    shortDesc: "Scheduled colour boosts, perfecting touch-ups and gentle tone or shape corrections for existing SPMU.",
    overview: "Keep your brows, lips or eyeliner looking fresh and balanced with routine colour-boost touch-ups, or consult our artists regarding thoughtful tone and shape refinement for previously healed work.",
    img: "assets/img/services/touch-up-correction-sessions.jpg",
    sessionInfo: "Healed-work assessment & refresh",
    approach: "Precision colour & shape balance",
    highlights: [
      "Perfecting follow-up sessions after initial healing is complete",
      "Annual colour-refresh visits to maintain soft definition",
      "Assessment and colour-correction planning for faded or uneven work",
      "Honest consultation on what can be safely refined"
    ]
  },

  /* ========================================================================
     CATEGORY 4: NAIL BAR SERVICES (11)
     ======================================================================== */
  {
    slug: "manicure-pedicure",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Manicure & Pedicure",
    shortDesc: "Classic and luxury hand and foot grooming with soaking, shaping, exfoliation, massage and polish.",
    overview: "Unwind in our serene Nail Bar with thorough nail shaping, gentle cuticle tidy, soothing exfoliation, moisturising hand or foot massage and your choice of classic polish or natural buff.",
    img: "assets/img/services/manicure-pedicure.jpg",
    sessionInfo: "Full hand & foot grooming ritual",
    approach: "Sanitised tools & relaxing care",
    highlights: [
      "Warm aromatic soak, gentle exfoliation and nail shaping",
      "Careful cuticle grooming and moisturising massage",
      "Wide palette of neutral, classic and seasonal polish shades",
      "Hospital-grade tool sanitisation between every guest"
    ]
  },
  {
    slug: "gel-nails",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Gel Nails",
    shortDesc: "High-gloss, chip-resistant LED-cured gel polish applied cleanly over natural nails for lasting shine.",
    overview: "Enjoy mirror-like gloss and instant dry time with our Gel Nails service—featuring careful natural-nail prep, thin even colour coats and durable LED curing for neat everyday wear.",
    img: "assets/img/services/gel-nails.jpg",
    sessionInfo: "Prep, gel colour & LED cure",
    approach: "Long-wearing glossy finish",
    highlights: [
      "Clean nail prep and cuticle tidy for smooth colour adhesion",
      "Curated range of earth-tone nudes, pastels and bold classics",
      "Instant LED cure with high-shine, smudge-free finish",
      "Gentle removal guidance to keep natural nails healthy"
    ]
  },
  {
    slug: "acrylic-nails",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Acrylic Nails",
    shortDesc: "Durable, sculpted acrylic overlays and enhancements shaped cleanly to your preferred length and silhouette.",
    overview: "For guests seeking added strength and structured shape, our technicians sculpt balanced, comfortable Acrylic Nails in almond, coffin, square or soft oval silhouettes finished with your chosen colour.",
    img: "assets/img/services/acrylic-nails.jpg",
    sessionInfo: "Custom sculpting & colour finish",
    approach: "Balanced structure & durability",
    highlights: [
      "Tailored shape options: almond, oval, square, squoval or coffin",
      "Smooth apex shaping for durable, natural-feeling comfort",
      "Finished with glossy gel colour or minimalist neutral tones",
      "Scheduled infills available to keep growth neat"
    ]
  },
  {
    slug: "nail-extensions",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Nail Extensions",
    shortDesc: "Custom-fitted soft-gel, builder-gel or sculpted extensions for elegant length and seamless natural balance.",
    overview: "Achieve graceful, uniform nail length tailored to your hands. Our nail artists help you pick the right extension method and length for everyday comfort, bridal events or festive styling.",
    img: "assets/img/services/nail-extensions.jpg",
    sessionInfo: "Custom length & silhouette fitting",
    approach: "Lightweight, seamless finish",
    highlights: [
      "Soft-gel, builder-gel and sculpted extension options available",
      "Length and shape customised to suit your hand proportions",
      "Smooth cuticle blending for an effortless, clean look",
      "Ready to pair with French tips, chrome or custom nail art"
    ]
  },
  {
    slug: "nail-art-custom-designs",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Nail Art & Custom Designs",
    shortDesc: "Hand-painted minimal accents, floral motifs, bridal embellishments and bespoke nail art creations.",
    overview: "Bring your inspiration or collaborate with our nail artists for delicate minimalist lines, botanical accents, pearl or foil details and bridal nail art crafted cleanly on natural nails or extensions.",
    img: "assets/img/services/nail-art-custom-designs.jpg",
    sessionInfo: "Bespoke hand-painted artistry",
    approach: "Minimalist to bridal-ready styles",
    highlights: [
      "Fine hand-painted motifs, subtle swirls, florals and geometric accents",
      "Custom bridal and festive sets matched to your outfit palette",
      "Sealed cleanly with durable high-gloss or velvety matte top coat",
      "Available on natural gel nails or nail extensions"
    ]
  },
  {
    slug: "french-tips",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "French Tips",
    shortDesc: "Timeless sheer-nude base with crisp classic white, micro-French or soft pastel tip lines.",
    overview: "Clean, effortless and universally flattering—choose a traditional crisp white French manicure, ultra-fine micro-French tips or a soft tinted twist over natural nails or extensions.",
    img: "assets/img/services/french-tips.jpg",
    sessionInfo: "Sheer base & crisp smile-line",
    approach: "Timeless, clean elegance",
    highlights: [
      "Flattering sheer nude or soft blush base matched to your skin tone",
      "Classic white, micro-French, double-line or coloured tip variations",
      "Hand-painted cleanly for symmetrical smile lines across every nail",
      "Available in classic polish, gel or over extensions"
    ]
  },
  {
    slug: "nail-repair-strengthening",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Nail Repair & Strengthening",
    shortDesc: "Targeted repair for split or broken nails plus supportive builder-base overlays for fragile natural nails.",
    overview: "Whether you need a single broken nail mended cleanly or gentle strengthening support for thin, peeling natural nails, our Nail Repair & Strengthening service helps restore neat uniformity.",
    img: "assets/img/services/nail-repair-strengthening.jpg",
    sessionInfo: "Individual fix or strengthening overlay",
    approach: "Natural-nail health first",
    highlights: [
      "Clean single-nail silk wrap, gel or extension repair for breaks",
      "Supportive builder-base strengthening overlays for thin or peeling nails",
      "Gentle filing without over-buffing the natural nail plate",
      "Nourishing cuticle and nail-care advice for stronger growth"
    ]
  },
  {
    slug: "cuticle-care",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Cuticle Care",
    shortDesc: "Gentle cuticle softening, tidy grooming and botanical oil nourishment for clean, healthy-looking nail beds.",
    overview: "Keep nail beds neat and comfortable with focused Cuticle Care—softening dry skin, gently removing loose hangnails and sealing moisture with vitamin-rich botanical cuticle oils.",
    img: "assets/img/services/cuticle-care.jpg",
    sessionInfo: "Gentle tidy & oil nourishment",
    approach: "Clean, healthy nail-bed upkeep",
    highlights: [
      "Warm softening soak and careful, gentle cuticle grooming",
      "Clean removal of dry hangnails without irritation",
      "Vitamin-E and botanical oil infusion for supple nail folds",
      "Ideal as a standalone refresh or add-on to any nail service"
    ]
  },
  {
    slug: "nail-spa-treatments",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Nail Spa Treatments",
    shortDesc: "Indulgent exfoliating scrubs, warm paraffin or hydrating masks and relaxing massage for hands and feet.",
    overview: "Elevate routine grooming into a calming wellness ritual. Our Nail Spa Treatments pair aromatic soaks, botanical exfoliation, rich hydrating wraps and unhurried massage for silky-soft hands and feet.",
    img: "assets/img/services/nail-spa-treatments.jpg",
    sessionInfo: "Spa soak, mask & restorative massage",
    approach: "Deep moisture & relaxation",
    highlights: [
      "Botanical soak and gentle sugar or salt exfoliation",
      "Deep-hydrating hand and foot mask with warm towel wrap",
      "Relaxing reflex-inspired forearm, hand, calf and foot massage",
      "Leaves dry skin noticeably softer and deeply comforted"
    ]
  },
  {
    slug: "chrome-cat-eye-glitter-marble",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Chrome, Cat Eye, Glitter, Marble Finishes",
    shortDesc: "Editorial glazed-chrome shimmer, magnetic velvet cat-eye, fine glitter fades and soft stone marble finishes.",
    overview: "Give your manicure a modern luxury twist with pearlescent glazed chrome, dimensional magnetic cat-eye shine, delicate shimmer ombre or organic hand-swirled stone marble nail finishes.",
    img: "assets/img/services/chrome-cat-eye-glitter-marble.jpg",
    sessionInfo: "Special-effect gel & art finishes",
    approach: "High-fashion luminous textures",
    highlights: [
      "Glazed pearl, champagne and mirror-chrome finishes",
      "Dimensional velvet magnetic cat-eye effects in soft or deep tones",
      "Fine glitter gradients and hand-swirled marble accents",
      "Sealed smoothly for lasting luminous sheen"
    ]
  },
  {
    slug: "nail-removal-refilling",
    category: "nail-bar",
    categoryLabel: "Nail Bar Services",
    name: "Nail Removal & Refilling",
    shortDesc: "Safe, damage-conscious gel/extension removal and seamless growth infills to keep nails looking fresh.",
    overview: "Protect your natural nails with proper salon soak-off removal or keep your acrylic and gel extensions looking freshly done with neat growth refilling, reshaping and a fresh colour coat.",
    img: "assets/img/services/nail-removal-refilling.jpg",
    sessionInfo: "Gentle soak-off or seamless infill",
    approach: "Safe natural-nail preservation",
    highlights: [
      "Gentle, patient soak-off and e-file removal without peeling or forcing",
      "Seamless 2–3 week growth refilling and structure rebalancing",
      "Followed by soothing cuticle oil and strengthening buff if removing",
      "Option to refresh into a brand-new colour or nail finish"
    ]
  }
];
