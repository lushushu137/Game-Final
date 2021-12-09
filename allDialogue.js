export const aliceDialogueMap1 = {
  begin: [
    {
      character: "guest",
      content: "Harder, please.",
      order: 0,
    },
    {
      character: "player",
      content: "Ok.",
      order: 1,
    },
  ],
  next: [
    {
      character: "player",
      content: "You got acnes on your back.",
      order: 2,
    },
    {
      character: "guest",
      content: "Yeah...They are almost everywhere.",
      order: 3,
    },
    {
      character: "player",
      content:
        "Well, at least it means you are young. Do you know they call it 'youth pimple' in China?",
      order: 4,
    },
    {
      character: "guest",
      content: "Whatever. I hate it. My face is ruined.",
      order: 5,
    },
    {
      character: "player",
      content: "It's not that bad.",
      order: 6,
    },
    {
      character: "guest",
      content: "You don't understand.",
      order: 7,
    },
    {
      character: "player",
      content: "",
      order: 8,
      options: {
        choice1: {
          content: "Sorry.",
          coin: 20,
          to: 5,
        },
        choice2: {
          content: "Come on, I've been there.",
          coin: 5,
          to: 6,
        },
      },
    },
    {
      character: "guest",
      content: "There is much you don't know. ",
      order: 9,
    },
  ],
  end: [
    {
      character: "player",
      content: "Finished.",
      order: 10,
    },
    {
      character: "guest",
      content: "Bye. ",
      order: 11,
    },
    {
      character: "player",
      content: "Bye. ",
      order: 12,
    },
  ],
};

export const carolineDialogueMap1 = {
  begin: [
    {
      character: "guest",
      content: "Harder, please.",
      order: 0,
    },
    {
      character: "player",
      content: "Ok.",
      order: 1,
    },
  ],
  next: [
    {
      character: "player",
      content: "Nice tattoo here.",
      order: 2,
    },
    {
      character: "guest",
      content: "Thanks.",
      order: 3,
    },
    {
      character: "player",
      content:
        "You know in Japan, tattoo is not allowed in place like here. They think it scares other guests in the onsen.",
      order: 4,
    },
    {
      character: "guest",
      content: "(laugh) I don't think a rose tattoo can be that scary.",
      order: 5,
    },
    {
      character: "player",
      content: "You are right.",
      order: 6,
    },
    {
      character: "guest",
      content:
        "Well, I wish it could scary away stupid men. They can't stop asking: Is this a souvenir of your ex? Is it because you were hurt by men? They think everything is about guys. Come on.",
      order: 7,
    },
    {
      character: "player",
      content: "",
      order: 8,
      options: {
        choice1: {
          content: "Narcissistic.",
          coin: 20,
          to: 5,
        },
        choice2: {
          content: "Cute.",
          coin: 5,
          to: 6,
        },
      },
    },
    {
      character: "guest",
      content: "True.",
      order: 9,
    },
  ],
  end: [
    {
      character: "player",
      content: "Finished.",
      order: 10,
    },
    {
      character: "guest",
      content: "Bye. ",
      order: 11,
    },
    {
      character: "player",
      content: "Bye. ",
      order: 12,
    },
  ],
};
export const susanDialogueMap1 = {
  begin: [
    {
      character: "guest",
      content: "Harder, please.",
      id: 0,
      to: 1,
    },
    {
      character: "player",
      content: "Ok. Susan",
      id: 1,
      to: 2,
    },
  ],
  next: [
    {
      character: "player",
      content: "How's everything going?",
      id: 2,
      to: 3,
    },
    {
      character: "guest",
      content: "Fantastic. I think my husband is having an affair.",
      id: 3,
      to: 4,
    },
    {
      character: "player",
      content: "Wait, what?",
      id: 4,
      to: 7,
    },
    {
      character: "guest",
      content:
        "Yeah, but no big deal. Our child will go to college next year. We wil divorce without too much worries then.",
      id: 5,
      to: 7,
    },
    {
      character: "player",
      content: "",
      id: 6,
      to: 7,
      options: {
        choice1: {
          content: "Sounds good.",
          coin: 20,
          to: 5,
        },
        choice2: {
          content: "Sounds sad.",
          coin: 5,
          to: 6,
        },
      },
    },
    {
      character: "guest",
      content:
        "'Women explore for eternity in the vast garden of sacrifice.'. Have you heared about this quote?",
      id: 7,
      to: 8,
    },
    {
      character: "player",
      content: "Before Midnight?",
      id: 8,
      to: 9,
    },
    {
      character: "guest",
      content: "You got it. I'm gonna be free.",
      id: 9,
    },
  ],
  end: [
    {
      character: "player",
      content: "Finished.",
      id: 10,
      to: 11,
    },
    {
      character: "guest",
      content: "Bye. ",
      id: 11,
      to: 12,
    },
    {
      character: "player",
      content: "Bye. ",
      id: 12,
    },
  ],
};

export const weiliDialogueMap1 = {
  begin: [
    {
      character: "guest",
      content: "Harder, please.",
    },
    {
      character: "player",
      content: "I definitely will.",
    },
  ],
  next: [
    {
      character: "player",
      content: "You are well-built. ",
    },
    {
      character: "guest",
      content: "I'm a boxer.",
    },
    {
      character: "player",
      content: "Oh, no wonder.",
    },
    {
      character: "guest",
      content:
        "I have contest tomorrow. I need this bath to activate my muscles.",
    },
    {
      character: "player",
      content: "",
      options: {
        choice1: {
          content: "Don't be too nervous. You got this.",
          coin: 5,
        },
        choice2: {
          content: "You are strong and powerful. You got this.",
          coin: 20,
        },
      },
    },
    {
      character: "guest",
      content:
        "Thanks. The opponent is tough. I've practiced for 2 years to beat her down. God knows how much I want to win.",
    },
    {
      character: "player",
      content: "You really put effort into this.",
    },
    {
      character: "guest",
      content: "Of course. I must win.",
    },
  ],
  end: [
    {
      character: "player",
      content: "Finished. Good luck for the contest.",
    },
    {
      character: "guest",
      content: "Thanks. Bye.",
    },
    {
      character: "player",
      content: "Bye.",
    },
  ],
};
