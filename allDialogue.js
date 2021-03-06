export const aliceDialogueMap = {
    begin: [
        {
            character: 'guest',
            content: 'Harder, please.',
            order: 0
        },
        {
            character: 'player',
            content: 'Ok. Alice',
            order: 1
        },
    ],
    next: [
        {
            character: 'player',
            content: 'You got pimples on your back.',
            order: 2
        },
        {
            character: 'guest',
            content: 'Yeah... I hate that.',
            order: 3
        },
        {
            character: 'player',
            content: 'Well, at least it proves you are young enough.',
            order: 4
        },
        {
            character: 'guest',
            content: 'Right, but what is so good about being young? They are not only on my back, they are everywhere. My face, my neck, even my leg.',
            order: 5
        },
        {
            character: 'player',
            content: 'Does that bother you?',
            order: 6
        },
        {
            character: 'guest',
            content: 'Very much. Youth is curse.',
            order: 7
        },
        {
            character: 'player',
            content: '',
            order: 8,
            options:{
                choice1: {
                    content: 'Interesting.',
                    coin: 20,
                    to: 5
                },
                choice2: {
                    content:'Naive.',
                    coin: 5,
                    to:6
                }
            } 
        },
        {
            character: 'guest',
            content: 'There is much you don\'t know. ',
            order: 9
        },
    ],
    end: [
   
   
        {
            character: 'player',
            content: 'Finished.',
            order: 10
        },
        {
            character: 'guest',
            content: 'Bye. ',
            order: 11
        },
        {
            character: 'player',
            content: 'Bye. ',
            order: 12
        },
    ],
}

export const carolineDialogueMap = {
    begin: [
        {
            character: 'guest',
            content: 'Harder, please.',
            order: 0
        },
        {
            character: 'player',
            content: 'Ok.',
            order: 1
        },
    ],
    next: [
        {
            character: 'player',
            content: 'Nice tattoo here.',
            order: 2
        },
        {
            character: 'guest',
            content: 'Thanks.',
            order: 3
        },
        {
            character: 'player',
            content: 'You know in Japan, tattoo is not allowed in place like here. They think it scares other guests in the onsen.',
            order: 4
        },
        {
            character: 'guest',
            content: '(laugh) I don\'t think a rose tattoo can be that scary.',
            order: 5
        },
        {
            character: 'player',
            content: 'You are right.',
            order: 6
        },
        {
            character: 'guest',
            content: 'Well, I wish it could scary away stupid men. They can\'t stop asking: Is this a souvenir of your ex? Is it because you were hurt by men? They think everything is about guys. Come on.',
            order: 7
        },
        {
            character: 'player',
            content: '',
            order: 8, 
            options: {
                choice1: {
                    content: 'Narcissistic.',
                    coin: 20,
                    to: 5
                },
                choice2: {
                    content:'Cute.',
                    coin: 5,
                    to:6
                }
            } 
        },
        {
            character: 'guest',
            content: 'True.',
            order: 9
        },
    ],
    end: [
   
   
        {
            character: 'player',
            content: 'Finished.',
            order: 10
        },
        {
            character: 'guest',
            content: 'Bye. ',
            order: 11
        },
        {
            character: 'player',
            content: 'Bye. ',
            order: 12
        },
    ],
}
export const susanDialogueMap = {
    begin: [
        {
            character: 'guest',
            content: 'Harder, please.',
            id: 0,
            to: 1
        },
        {
            character: 'player',
            content: 'Ok. Susan',
            id: 1,
            to: 2
        },
    ],
    next: [
        {
            character: 'player',
            content: 'How\'s everything going?',
            id: 2,
            to:3,
            
        },
        {
            character: 'guest',
            content: 'Fantastic. I think my husband is having an affair.',
            id: 3,
            to:4,
        },
        {
            character: 'player',
            content: 'Wait, what?',
            id: 4,
            to: 7,
        },
        {
            character: 'guest',
            content: 'Yeah, but no big deal. Our kids will enter the college to year. We can divorce without too much worries then. I\'ve put up with it long enough.',
            id: 5,
            to:7
        },
        {
            character: 'player',
            content: '',
            id: 6,
            to:7,
            options: {
                choice1: {
                    content: 'Sounds good.',
                    coin: 20,
                    to: 5
                },
                choice2: {
                    content:'Sounds sad.',
                    coin: 5,
                    to:6
                }
            } 
        },
        {
            character: 'guest',
            content: 'Meaning of marriage is overestimated. Women at my age all agree with it.',
            id: 7,
            to:8
        },
        {
            character: 'player',
            content: 'Sounds radical. I still can\'t deny the neccesity for marriage now.',
            id: 8,
            to:9
        },
        {
            character: 'guest',
            content: 'You will when you are older.',
            id: 9,
        },
    ],
    end: [
   
   
        {
            character: 'player',
            content: 'Finished.',
            id: 10,
            to:11
        },
        {
            character: 'guest',
            content: 'Bye. ',
            id: 11,
            to:12
        },
        {
            character: 'player',
            content: 'Bye. ',
            id: 12
        },
    ],
}
