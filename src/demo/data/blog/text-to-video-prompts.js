const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const textToVideoPromptsData = {
  slug: "text-to-video-prompts",
  productionStatus: "draft",
  seo: {
    title: "Text-to-Video Prompts That Actually Look Good | LazyKiwi",
    description:
      "The exact text-to-video prompt structure for clean, cinematic AI video on the first try. A copy-ready formula, weak-vs-strong examples, and model-specific tips for Sora 2, Veo 3, and Kling.",
  },
  header: {
    breadcrumb: ["Blog", "Creator Playbook"],
    category: "Creator Playbook",
    title: "Text-to-Video Prompts That Actually Look Good",
    excerpt:
      "Most AI video looks generic because the prompt was generic. Here is the prompt anatomy experienced creators rely on (subject, action, setting, camera, lighting, style) to land clean, cinematic results on the first generation.",
    author: { name: "Marcus Tan", role: "Creator Growth Lead", avatar: `${AV}/mt.jpg` },
    date: "June 3, 2026",
    readTime: "6 min read",
    cover: `${ART}/cover.jpg`,
  },
  intro:
    "Text-to-video models are good enough now that the bottleneck has moved from the model to the prompt. Type 'a car driving on a highway' and you get something flat, soft, and forgettable, because the model fills every gap with the statistical average of its training data. That is exactly why so much AI video looks interchangeable. Feed the same model a structured text-to-video prompt and it returns a low-angle tracking shot at golden hour with motion blur and graded color. This guide walks through the anatomy of a strong prompt, hands you a copy-ready formula, contrasts weak versions against strong ones, and covers model-specific tips for Sora 2, Veo 3, and Kling so you burn fewer generations.",
  toc: [
    { id: "why-structure", label: "Why prompt structure matters" },
    { id: "anatomy", label: "The anatomy of a strong video prompt" },
    { id: "formula", label: "The copy-ready formula" },
    { id: "weak-strong", label: "Weak vs. strong examples" },
    { id: "model-tips", label: "Model-specific tips" },
    { id: "mistakes", label: "Common mistakes to avoid" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      id: "why-structure",
      heading: "Why prompt structure matters",
      blocks: [
        { type: "paragraph", text: "A text-to-video model doesn't picture a scene the way a director does. It predicts frames from your words, weighting whatever is most specific. Hand it something vague like 'a woman walking in a city' and it defaults to the most average interpretation it has seen: even framing, flat light, no point of view. The output is technically correct and visually dead, which is the real reason so much AI video looks identical." },
        { type: "paragraph", text: "Structure fixes that by telling the model not only what to show but how to show it. Name a camera move, a lighting condition, and a mood, and you collapse millions of plausible 'average' outputs down to the narrow cinematic slice you actually wanted. Two people on the same model can land worlds apart: one is describing a subject, the other is describing a shot." },
        { type: "statband", items: [{ value: "6", label: "core parts in a complete prompt" }, { value: "1st", label: "try is the goal, fewer re-rolls" }, { value: "5–8s", label: "the sweet spot for one clean shot" }] },
      ],
    },
    {
      id: "anatomy",
      heading: "The anatomy of a strong video prompt",
      blocks: [
        { type: "paragraph", text: "Every prompt that produces clean, cinematic footage is really answering six questions. Flowery language isn't the point; hitting all six clearly is. Picture a shot list compressed into a single sentence." },
        { type: "ordered", items: [
          { title: "Subject", text: "Who or what is on screen, described concretely. 'A weathered fisherman in a yellow raincoat' beats 'a man' because the model now has texture, color, and character to render." },
          { title: "Action", text: "What the subject is doing, as one clear motion. Movement is the thing video does that a still can't, so name it: 'pulling a net over the side of the boat,' not just 'standing.'" },
          { title: "Setting", text: "Where and when. Time of day, location, and weather anchor the scene. 'On a small fishing boat at dawn, fog rolling over the water' hands the model a world to build." },
          { title: "Camera move", text: "How the shot is captured: 'slow dolly-in,' 'low-angle tracking shot,' 'handheld follow,' 'static wide.' This one phrase is the biggest lever you have for a cinematic feel." },
          { title: "Lighting", text: "The light source and its quality: 'golden-hour backlight,' 'soft overcast,' 'neon rim light,' 'harsh midday sun.' Lighting is what separates 'rendered' from 'shot.'" },
          { title: "Style / mood", text: "The overall look and emotional register, like 'cinematic, shot on 35mm, moody and contemplative' or 'bright, hyper-real, energetic.' This ties the whole frame together." },
        ] },
        { type: "image", src: `${ART}/inline-1.jpg`, caption: "Six layers stacked: subject, action, setting, camera, lighting, and style." },
        { type: "tip", title: "Order helps, coverage matters more", text: "Lead with subject and action, then layer in setting, camera, lighting, and style, since most models weight the front of a prompt. What matters most, though, is that all six show up. Missing layers are exactly where the generic AI look creeps back in." },
      ],
    },
    {
      id: "formula",
      heading: "The copy-ready formula",
      blocks: [
        { type: "paragraph", text: "Once the six layers stick, you can write strong prompts almost on autopilot with a fill-in-the-blanks template. Hold yourself to one shot and one continuous motion." },
        { type: "promptbox", label: "The formula", text: "[Camera move] of [subject, specific] [single clear action], [setting + time of day], [lighting], [style / mood], 9:16" },
        { type: "paragraph", text: "Slot your idea into each blank and the prompt is complete. Filled out, it looks like this:" },
        { type: "promptbox", label: "Filled example", text: "Low-angle tracking shot of a red Porsche speeding down a coastal highway, late afternoon with the ocean on the right, warm golden-hour backlight and lens flare, cinematic, shot on 35mm film, 9:16" },
        { type: "pullquote", text: "Write the prompt as a shot description, not a wish. Concrete nouns and named techniques (dolly-in, rim light) carry far more weight than 'beautiful.'", cite: "LazyKiwi creator playbook" },
      ],
    },
    {
      id: "weak-strong",
      heading: "Weak vs. strong examples",
      blocks: [
        { type: "paragraph", text: "Nothing internalizes the formula faster than seeing one idea written badly and then well. The strong versions aren't padded for length; every added word is pulling its weight." },
        { type: "compare", columns: ["Weak prompt", "Strong prompt"], rows: [
          ["A woman walking in a city", "Slow dolly of a young woman in a red coat walking toward camera through a rain-slicked Tokyo alley at dusk, neon backlight, anamorphic, cinematic, 9:16"],
          ["A zombie smoking", "Slow dolly-in on a decaying zombie leaning against a brick wall lighting a cigarette, dim alley at night lit by a flickering neon sign, cold blue rim light, moody horror, shallow depth of field"],
          ["A farmer in a field", "Static wide shot of an aging farmer walking through rows of dry crops at sunset, long shadows and warm dusty haze, soft golden backlight, contemplative documentary mood, shot on film"],
        ] },
        { type: "image", src: `${ART}/inline-2.jpg`, caption: "The structured prompt removes the guesswork: subject, motion, light, and lens are all specified." },
        { type: "tip", title: "Add one motion, not three", text: "Describe the subject doing several things at once and the model blends them into mush. Pick the single most important action and let the camera move carry everything else." },
      ],
    },
    {
      id: "model-tips",
      heading: "Model-specific tips",
      blocks: [
        { type: "paragraph", text: "The formula travels across models, but each flagship rewards slightly different habits. Tuning to whichever one you're on will save you regenerations." },
        { type: "list", items: ["Sora 2 handles complex, multi-beat descriptions and holds up well on physics and continuity. Lean into rich, narrative prose and named camera language, since it follows full cinematic sentences closely rather than keyword lists.", "Veo 3 shines on photorealism and native audio, so describe the soundscape too ('ambient rain, distant traffic') when sound carries the shot. Be explicit about camera moves and lighting and it returns polished, broadcast-grade frames.", "Kling is strong on expressive human motion and dynamic action, and it's great value for fast iteration. Keep prompts on one clear subject and one strong movement; it can drift in crowded scenes, so simplify the setting and let the motion lead."] },
        { type: "stat", value: "1 shot", label: "per prompt, don't pack a whole scene into one clip" },
        { type: "paragraph", text: "Whatever you're running, generate the same prompt twice before you rewrite it. The variation between seeds tells you whether the problem is your prompt or just an unlucky roll." },
      ],
    },
    {
      id: "mistakes",
      heading: "Common mistakes to avoid",
      blocks: [
        { type: "compare", columns: ["Mistake", "Fix"], rows: [
          ["Vague subject ('a person')", "Describe wardrobe, age and defining details"],
          ["No camera direction", "Name a shot type every time"],
          ["Adjective soup ('beautiful, epic')", "Swap vibe words for techniques and nouns"],
          ["Cramming multiple actions", "One clear motion per shot"],
          ["Ignoring lighting", "Specify the light source and quality"],
        ] },
        { type: "image", src: `${ART}/inline-3.jpg`, caption: "Most 'bad AI video' traces back to one of these missing layers." },
        { type: "paragraph", text: "Cut these five and your first-generation hit rate climbs fast. You won't nail a perfect first try every time, but a prompt that's specific enough makes 'good' the likely outcome instead of a lucky one." },
      ],
    },
  ],
  keyTakeaways: {
    title: "Key takeaways",
    points: [
      "Models render whatever is most specific, so vague prompts produce flat, average footage.",
      "A complete prompt covers six parts: subject, action, setting, camera move, lighting, and style/mood.",
      "Use the formula: [camera move] of [subject] [action], [setting], [lighting], [style/mood], 9:16.",
      "Camera direction and lighting are the two biggest levers for a cinematic look.",
      "Tune to the model: Sora 2 for continuity, Veo 3 for photoreal plus audio, Kling for fast single-subject motion.",
    ],
  },
  faq: [
    { question: "How long should a text-to-video prompt be?", answer: "One to two clear sentences that cover all six components. Longer isn't better; past a couple of sentences, models start weighting the front and ignoring the tail. Pack the detail into concrete nouns and named camera and lighting techniques rather than extra clauses." },
    { question: "Why does my AI video look flat and generic?", answer: "Almost always because the prompt is missing camera direction and lighting. Without a named shot type ('low-angle tracking shot') and a light condition ('golden-hour backlight'), the model falls back on even framing and flat light. Add those two and most clips immediately look more intentional." },
    { question: "Should I describe multiple actions in one prompt?", answer: "No. Each clip should be a single shot with one continuous motion. Describe several actions at once and the model blends them into unnatural movement. Generate separate clips for separate actions and stitch them together afterward." },
    { question: "Do I need different prompts for Sora 2, Veo 3, and Kling?", answer: "The core formula works across all three, but each rewards different habits. Sora 2 handles multi-action sequences, Veo 3 benefits from describing sound and photoreal lighting, and Kling does best with one clear subject and one strong movement. Adjust the emphasis, not the underlying structure." },
  ],
  authorBio: {
    name: "Marcus Tan",
    role: "Creator Growth Lead",
    avatar: `${AV}/mt.jpg`,
    bio: "I study what makes short-form content spread and turn it into repeatable playbooks you can run inside the LazyKiwi workbench.",
  },
  bottomCta: {
    title: "Make a sentence into a cinematic shot.",
    description: "Use the prompt formula, pick your model, and generate clean text-to-video that holds up on the first try, all inside LazyKiwi.",
    buttonText: "Try the video generator",
    buttonLink: "/video-generator",
  },
  related: {
    title: "Keep reading",
    posts: [
      { category: "Models", title: "Sora 2 vs. Veo 3: Which Video Model Should You Use?", excerpt: "When each flagship model wins.", readTime: "7 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/vs/cover.jpg", link: "/blog/sora-2-vs-veo-3" },
      { category: "Creator Playbook", title: "How to Make Scroll-Stopping AI Effect Videos for TikTok, Reels & Shorts", excerpt: "Build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
      { category: "Creator Playbook", title: "Turn One Photo Into a Week of Short-Form Content", excerpt: "Multiply one image into many posts.", readTime: "5 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/one-photo/cover.jpg", link: "/blog/one-photo-week-of-content" },
    ],
  },
};
