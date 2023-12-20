export const stressAnxiety: {
  questions: TQuestion[];
  answers?: {
    [key: string]: [];
  };
} = {
  questions: [
    {
      type: "twoColumnsArrow",
      name: "age",
      label: "What’s your age?",
      options: [
        { label: "18-21", score: 1 },
        { label: "22-25", score: 1 },
        { label: "26-30", score: 1 },
        { label: "31-35", score: 1 },
        { label: "36-40", score: 1 },
        { label: "41-45", score: 1 },
        { label: "46-50", score: 1 },
        { label: "51-55", score: 1 },
        { label: "56+", score: 1 },
      ],
      img: "/images/bean_in_heart.webp",
    },
    {
      type: "rectangleMultiple",
      name: "most_time_feel",
      label: "“Most of the time I feel”",
      options: [
        { label: "Happy", score: 1 },
        { label: "Sad", score: 1 },
        { label: "Depressed", score: 1 },
        { label: "Anxious", score: 1 },
      ],
      img: "/images/bean_in_heart.webp",
    },
    {
      type: "rectangleMultiple",
      name: "often_notice",
      label: "“I notice that I often”",
      options: [
        { label: "Overthink and over plan", score: 1 },
        { label: "Struggle with making decisions", score: 1 },
        { label: "Feel anxious in social situations", score: 1 },
        { label: "Other", score: 1 },
      ],
      img: "/images/bean_in_heart.webp",
    },
    {
      type: "plainText",
      label: "We live in a fast-paced, overwhelming world.",
      img: "/images/bean_in_heart.webp",
      payload: {
        tips: "It’s natural to feel like things are getting too heavy sometimes – we’ve all been there!",
        content:
          "By evaluating your condition based on the answers you provide in this quiz – we’ll be able to craft an action plan to help you back to a happier and healthier self.",
      },
    },
    {
      type: "squareMultiple",
      name: "perform_regularly",
      label: "Which of these healthy activities do you perform regularly?",
      options: [
        {
          label: "Exercise or yoga",
          img: "/images/bean_in_heart.webp",
          score: 1,
        },
        {
          label: "Going for daily walks",
          img: "/images/bean_in_heart.webp",
          score: 1,
        },
        { label: "Meditation", img: "/images/bean_in_heart.webp", score: 1 },
        {
          label: "Spending time with a close friend",
          img: "/images/bean_in_heart.webp",
          score: 1,
        },
        {
          label: "Taking time off work",
          img: "/images/bean_in_heart.webp",
          score: 1,
        },
        {
          label: "Playing/walking with my pet",
          img: "/images/bean_in_heart.webp",
          score: 1,
        },
        { label: "Other", img: "/images/bean_in_heart.webp", score: 1 },
      ],
      img: "/images/bean_in_heart.webp",
    },
    {
      type: "comment",
      label: "I finally said goodbye to my low self-esteem",
      img: "/images/bean_in_heart.webp",
      payload: {
        userInfo: "Lindsay R., 31",
        content:
          "Stress had pretty much taken over my life at one point. I was waking up feeling tired, dreading what was to come. I think I was just ignoring the signs for a while – but looking back they were all there. The tiredness, the lack of sleep, the constant feeling of being on edge.<br/><br/>Thankfully, I discovered Sensa, and since then, I’m entirely on the road to recovery. It didn’t change my life overnight, nothing can – what it did do, however, is give me the tools I needed to start working on myself and understand why I felt like I did.<br/><br/>Sensa also taught me how to keep focused on the here and now; even when I’m in a bad mood, it’s a great reminder to be centered and present.",
      },
    },
  ],
};
