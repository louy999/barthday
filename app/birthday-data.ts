export type StoryLayout = "image-left" | "image-right" | "cinematic";

export type LetterMoment = {
  id: number;
  text: string;
  image: string;
  imageAlt: string;
  layout: StoryLayout;
};

export const heroImage =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=2200&q=88";

export const endingImage =
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=2200&q=88";

// Replace these image URLs and edit the matching text here; the animation/layout stays reusable.
export const letterMoments: LetterMoment[] = [
  {
    id: 1,
    text: "لا أعرف من أين أبدأ، ولا كيف يمكن للكلمات أن تصف شيئًا عجز قلبي عن فهمه أحيانًا. ❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929635/IMG_7859_mfl8eo.jpg",
    imageAlt: "A couple celebrating together at an outdoor wedding",
    layout: "image-left",
  },
  {
    id: 2,
    text: "كل ما أعرفه أن وجودك في حياتي لم يكن يومًا شيئًا عابرًا، وأنك لم تكوني مجرد شخص التقيت به في طريق الحياة. بل كنتِ من الأشياء القليلة التي جعلت لهذا الطريق معنى. ❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929633/IMG_7858_yfdojx.jpg",
    imageAlt: "Golden wildflowers reaching toward the sunlight",
    layout: "image-right",
  },
  {
    id: 3,
    text: "ربما لم أُحسن التعبير في كثير من المرات، وربما أخطأت حين صمتُّ في الوقت الذي كان يجب أن أتكلم فيه. أو ابتعدت حين كان كل ما تحتاجينه أن أكون بجانبك. 🥺❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929635/IMG_7860_kcukgc.jpg",
    imageAlt: "One person offering a comforting hand on another's shoulder",
    layout: "image-left",
  },
  {
    id: 4,
    text: "لكن هناك حقيقة واحدة لم تتغير يومًا، وهي أن مكانتك في قلبي لم تكن مرتبطة بوقت جميل، ولا بظروف مناسبة، ولا حتى بما كان بيننا من خلاف أو اتفاق. ❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929635/IMG_7859_mfl8eo.jpg",
    imageAlt: "A rose in warm light",
    layout: "cinematic",
  },
  {
    id: 5,
    text: "أتعلمين؟\n\nبعض الأشخاص لا نحتاج إلى رؤيتهم كل يوم حتى نشعر بوجودهم، ولا نحتاج إلى سماع أصواتهم حتى نشتاق إليهم. يكفي أن يمر شيء يشبههم أمامنا، حتى نجد قلوبنا قد ذهبت إليهم دون استئذان. 🥹❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929635/IMG_7857_xgv8q6.jpg",
    imageAlt: "Wedding rings resting among pale flowers",
    layout: "image-right",
  },
  {
    id: 6,
    text: "أنا لا أعدك بحياة خالية من الاختلاف، ولا أدّعي أنني الرجل الذي لا يخطئ. لكنني أعدك أن مشاعري تجاهك لم تكن يومًا لعبة، وأنني حين اخترتك في قلبي لم أكن أبحث عن لحظة جميلة، بل كنت أتمنى حكاية تستحق أن تُروى مهما طال الزمن. ❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929632/IMG_7862_ceh9gc.jpg",
    imageAlt: "A bride holding her bouquet in soft evening light",
    layout: "image-left",
  },
  {
    id: 7,
    text: "فإن سألتِ يومًا ماذا كنتِ بالنسبة لي، فقولي لنفسك إنك كنتِ تلك الصدفة التي تمنيت لو أنني قابلتها مبكرًا، والوجه الذي لا يشبه أحدًا، والحكاية التي لا أريد لنهايتها أن تُكتب. 🥹❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929632/IMG_7861_jgnhtk.jpg",
    imageAlt: "A wedding dress and a bouquet of blush flowers",
    layout: "image-right",
  },
  {
    id: 8,
    text: "فبعض الحب لا تقيسه الايام ولا تنهيه المسافات لانه ببساطة يسكن في القلب لا في الظروف ❤️",
    image:
      "https://res.cloudinary.com/djtp5oepp/image/upload/v1794929634/IMG_7856_ohkyog.jpg",
    imageAlt: "Golden light falling over a quiet landscape",
    layout: "cinematic",
  },
];
