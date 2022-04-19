(function (factory) {
    typeof define === 'function' && define.amd ? define('custom', factory) :
    factory();
})((function () { 'use strict';

    const unlockBtn = document.querySelector(".btn-js");
    const main = document.querySelector(".main");
    const map = document.querySelector(".main__map-js");
    const heartBtn = document.querySelector(".main__map-btn-js");
    const mapGirlsContainer = document.querySelector(".main__map-girls-list-js");
    const profile = document.querySelector(".profile-js");
    const footer = document.querySelector(".footer-js");
    const nextBtn = document.querySelector(".profile__nextBtn-js");
    const stars = profile.querySelectorAll(".star-rating__ico");
    const chatContainer = document.querySelector(".profile__chat-js");
    const signUpBtn = document.querySelector(".header__btnSignUp-js");
    const otherGirlsBtn = document.querySelector(".map_btn-js");
    let cloneForm;
    let countMessage = 0; // const body = document.querySelector(".body");

    const videoCallBtn = document.querySelector(`[id="videocall"]`);
    const chatBtn = document.querySelector(`[id="chat"]`);
    let form = document.querySelector(".form-container-js");
    const header = document.querySelector(".main__header");
    const backBtn = document.querySelector(".header__back-btn-js");
    const rating = document.querySelector(".star-rating__wrap-js");
    const modal = document.querySelector(".modal");
    const modalContainer = document.querySelector(".modal__container-js");
    const btnContainer = modal.querySelector(".modal__buttons-container-js");
    const closeModalBtn = document.querySelector(".js-modal-close-button");
    const messageContainer = document.querySelector(".profile__chat-template-js");
    const input = document.querySelector(".profile__chat-input-js");
    const sendBtn = document.querySelector(".profile__send-btn-js");
    const maxCountGirl = 14;
    let sTime = "";
    const girlMessages = [["Hello, not much.", "I want something new."], ["I had argument with sister, a little angry now.", "Do u know how to keep calm quickly?"], ["Oh, tomorrow my holiday will start.", "I’m planning what to do…any ideas?"], ["Tomorrow my family gathers for family dinner. It seems to be very boring.", "I wonder  if the same situation in all the families??!!"], ["I’m choosing the film to go this weekend.", "What’s on in cinemas now?"], ["Weather ‘s great, finally it’s warm, so I’m sitting on the grass in park.", "Where are u?"], ["Yesterday I watched film in cinema, slept a little.", "Is it only me who sleeps in cinema hall?"], ["Great, doing shopping, forgot shopping list at home.", "Have y been in such stupid situations??"], ["This week I’m having driving test. Trying to memorize these f*king rules.", "Any advice how to manage it?"], ["I have read new book. Can’t stop reading it.", "Do u read something?"], ["Trying to download post in Instagram, having problems with net.", "Do u use Instagram?"], [" Today I went to film, it was so romantic. I even cryed.", "Is it easy for u to communicate with so emotional girls??"], ["I was in cinema with friends and then I played biiliard the first in my life.", "Do u ever played it? It’s rather anxious game)"], ["My dad has operation this week, I’m so worried( is it ok with your relatives?", "nowadays it’s the most important  point."], ["I’m having holidays next week, so it’s time to decide where to go.", "What ‘s the best place you have ever been?"], ["Oh, it’s wonderful. I have gift certificate to spa  this week from work.", "It’s going to be fantastic! Have u ever been to spa?"], ["My colleague advised me  anime. Now I’m watching and feel stupid.", "What can’t be interesting here.? Are u fan of anime?"], ["I’m at the gym, my time to sweat…", "Do u do  any sport?"], ["Hm, today I should go to gym, but I’m so lazy..", "I ‘d rather stay home and lie on the sofa."], ["Oh, I have a little injure after my training. So hurt((", "Have u ever had such injures? What to do to get rid of it?"], ["Hm, in short, now I/m doing shopping, planning to cook smth from tomatoes,", "potatoes, meat/ Do u know any easy recipe?"], ["In a word, now I’m in shopping center, want to buy new dress.", "Will u help me to choose  one?"], ["Good, by the way, I started investments course with colleagues.", "So much new information. Are u interested in sphere of finance?"], ["Well, the thing is I have watched all the serials  that I knew.", "Can u recommend any great series?"], ["Fantastic, I’m lying on the sofa and relaxing after difficult working day.", "How do u relax?"], ["Terrible, I have some problems at work.", "Can u recommend  any good sedative?"], ["In a word, now I’m in shopping center, want to buy new skirt.", "Will u help me to choose  the best?"], ["Awful,I had  big argument with best friend 2 days ago.", "I want to get on well… how to put up with??"], ["Well, weather’s so cold and windy.", "I’m having terrible headache. What’s the weather in your area?"], ["Well, it’s Friday, as a rule we go to pub.", "But I’m ill and lonely at home(( How is your Friday going to be?"], ["Well, the thing is I have watched all the animated films   that I knew.", "Can u recommend any great ones on Netflix?"], ["I’m preparing for test tomorrow…", "How do u think – will I pass or fail?"], ["I’m buying new sport uniform for my trainings.", "It usually increases my motivation. What are your ways to  boost motivation?"], ["I’m in beauty saloon, changing my style.", "Do u prefer natural beaty of girls or lots of makeup?"], ["I’m having foto session soon.", "Can  u advise me  different pauses?"], ["Wonderful, today is day-off. I’m relaxing all days.", "How do u usually spend your days-off?"], ["Wow, have a lot of free time. What to do?", "Can u recommend me something?"], ["Very good, you? Can u describe yourself in 3 words?", "Let’s get to know each other))"], ["Today I had fotosession for my Insta.", "Wil  u help me to choose the bast photo?"], ["I’m walking  with dog and relaxing.", "Do u have pets?"], ["Awful,I had  big argument with mum 3 days ago.", "I want to get on well… how to put up with?? Give me advice…"], ["In general good, but my flatmate has just come,", "so int’s now so comfortable(( do u live alone?"], ["Well, it’s Sunday, as a rule we go to night club.", "But I have enough money for it. So sad((("], ["Good, I’ve just registered here, and so many messages))", "Are u long here??"], ["I have day-off , so lots of free tome.", "How do u prefer to spend free time?"], ["Yesterday I started new hobby – knitting, now looking through lots of blogs and videos.", "Do u have any hobbies?"], ["well, I’ve just registered in this site, and got  lots messages.", "are you registered in many sites? On which?"], ["I’m doing shopping, miss my fave brands – Stradivarius, H&M and so  on.", "Do u have fave brands?"], ["I ‘m planning city break trip for next holiday with friends.", "Do you prefer to travel alone or with friends?"], ["Everything’s excellent. I wonder how did you get here?", "As for me, friend offered me to try this website))"], ["Oh, I ‘m fed up with work, so exhausted.", "Do u like your job? What's your favorite aspect of your job?"], ["Well, today I’m doing foreign passport. I’m eager to travel somewhere…", "Where’s the last place you travelled? What did you do there?"], ["Ah, my sister has her first  working day today.", "I’m a little worried. What was your first job? Did you like it?"], ["Au, I’m a little overweight so I’m going to sports center today.", "Do you have enough time for sport?"], ["Hm, not good. I’, disappointed with job, working place and conditions.", "Don’t know what to do((  are u ok with your work?"], ["Yesterday I read a blogger’s article about relationships… ", "so many strange points… what kind of girls do u like? What’s important for u in girls?"], ["Good, let’s get to know  each other…) if it’s not a secret, what are u looking here?", "Is girl’s appearance important for u?"], ["Well, everything’s ok.", "And you? What qualities do you hate in  people, especially in girls?))"], ["Great, I break up yesterday with boyfriend(( now I’m free.", "Tell me please what traits of character do u  appreciate in girls? As for me, I admire strength,  kindness and generosity))"], ["I’m bored, ill and alone at home.", "Don’t know  what to do… and have a few problems((how do you keep fit?"], ["I’m watching football match with friends in pub.", "Which team do you support? Football, volleyball, basketball?"], ["Awful ,my  landlord changed his plans so I need to leave flat immediately((", "thy to find another one. Do u live alone? Are u happy  with it?"], ["I’m going  to caf? to have a snack.", "Extremely hungry. Do u usually eat in or out?"], ["I’m in the shop, want to choose new shoes.", "What about u – do u prefer special brands or  usual clothes?"], ["Not so good, not so bad. I have stomachache again and stomach flu.", "Recent time I’m think about starting to be vegetarian… What do u think of it?"], ["Great, summer is coming.", "Have u decided where to go on summer holidays?"], ["Fantastic, tomorrow ‘s my birthday.", "How do u spend  birthday?"], ["My friends is organising  a party.", "I ‘m going too. Will u help me to choose outfit?))"], ["Well. Yesterday it was my professional holiday, so I got lots of presents, such as alcohol, chocolate and so on.", "Do u drink alcohol?"], ["Well, I’m ordering new headphones in Ozon.", "What kind of music do you adore?"], ["Great, today I’ve realized my dream –to go to  sport dances.", "Do u like to dance?"], ["I’m going to party next week.", "Do u like loud party or prefer to stay at home?"], ["Now I moved to  new  flat so  looking for new gym.", " What`s your favourite sport?"], ["Exciting! I’m starting to read new book 2021 bestseller.", "Can’t stop. Do u read books?"], ["Bad, I have problems with boss, maybe it’s time to think of future career and change work.", "Do u sometimes think about  career?"], ["Lately I read article about business, crypro currency and another financial news.", "Have u ever thought of starting your own business one day?"], ["My colleague started to study business in Wildberries and said it’s popular now.", "Hope maybe oneday I’ll start my business there…"], ["I’m preparing to summer. Try to be fit.", "How do u keep fit?"], ["My friends is taking  a party and asked me to help.", "Do u have any ideas how to have fun together?"], ["I’m planning my holidays. Want to try extreme sport.", "Have u ever tried extreme?"], ["I’m in shop, buy new sport wear and running shoes for holidays.", "are u fond of sport?"], ["Great, Do u know English well?", "Where did u study it?"], ["Good, and u?", "do u know any foreign languages?"], ["Oh, my laptop has  broken, need to buy new one.", "Can u recommend any nice variants?"], ["I’m going to work by bus and playing phone games.", "Do u play computer games?"], ["I’m great, and u?", "are u new at this site? how is it?"], ["Hm, I’m at work. So boring. Do u like your job?", "If it’s not a secret, what do u do?"], ["I’ve just returned from holidays, from sea.", "And already want to come back. Do u like travelling?"], ["Everything’s ok.", "What are u looking for at this site? "], ["I’m having lunch. So yummy!", "do you prefer to cook at home or go to cafes?"], ["Yesterday I was at cinema, relaxed a little.", "-What was the last film you enjoyed? Do you prefer  horror or romance?"], ["My friend’s having birthday party next weekend, so I’m preparing for it.", "When did you go to night clubs last?"], ["I’m great. I thinh u’re so gentle and calm. Tell me a little about yourself.", "What was your first date like? Did you like it? How did you feel?"], ["I’m not bad. Tell me please how do you keep fit?", "Is girl’ appearance important for u?"], ["Today I’m free – day-off. Do you have enough free time?", "How do you prefer to spend it? Actively or passively?"], ["Ok. I guess you’re amazing person to talk.", "Tell me please about yourself))"], ["I’m well. I wonder what features do you hate in girls?", "Maybe you have unpleasant experience… than I’ll tell u my top 5 features))"], ["Oh, fantastic. I’m at the concert with friends.", "What music do you like? I adore pop and rock))"], ["Great) What are u doing? I’m relaxing.What do you think of this site?", "For me it’s nice, so many chances to find a partner))"], ["In general, I want to go  cinema and have a lot popcorn and cola))", "Do you prefer to watch movies in cinema or watch at home?"], ["I  was  yesterday in night club, now terrible headache.", "Do you know how to get rid of it? "]];
    const girls = [{
      id: 1,
      info: "Esther, 24",
      header: "img/content/esther.jpg",
      avatar: "women3",
      photo: ["img/content/esther1.jpg", "img/content/esther2.jpg", "img/content/esther3.jpg", "img/content/esther4.jpg", "img/content/esther5.jpg", "img/content/esther6.jpg", "img/content/esther7.jpg"]
    }, {
      id: 2,
      info: "Akane, 25",
      header: "img/content/akane.jpg",
      avatar: "women3",
      photo: ["img/content/img5akane.jpg", "img/content/img6akane.jpg", "img/content/img2akane.jpg", "img/content/img3akane.jpg", "img/content/img4akane.jpg"]
    }, {
      id: 3,
      info: "Courtney, 22",
      header: "img/content/courtney.jpg",
      avatar: "women2",
      photo: ["img/content/courtney1.jpg", "img/content/courtney2.jpg", "img/content/courtney3.jpg", "img/content/courtney4.jpg", "img/content/courtney5.jpg"]
    }, {
      id: 4,
      info: "Bessie, 23",
      header: "img/content/bessie.jpg",
      avatar: "women2",
      photo: ["img/content/bessie1.jpg", "img/content/bessie2.jpg", "img/content/bessie3.jpg", "img/content/bessie4.jpg", "img/content/bessie5.jpg"]
    }, {
      id: 5,
      info: "Regina, 32",
      header: "img/content/regina.jpg",
      avatar: "women6",
      photo: ["img/content/regina1.jpg", "img/content/regina2.jpg", "img/content/regina3.jpg", "img/content/regina4.jpg", "img/content/regina5.jpg", "img/content/regina6.jpg", "img/content/regina7.jpg"]
    }, {
      id: 6,
      info: "Tanya, 19",
      header: "img/content/tanya6.jpg",
      avatar: "women6",
      photo: ["img/content/tanya1.jpg", "img/content/tanya2.jpg", "img/content/tanya3.jpg", "img/content/tanya4.jpg", "img/content/tanya5.jpg", "img/content/tanya6.jpg", "img/content/tanya7.jpg"]
    }, {
      id: 7,
      info: "Jane, 30",
      header: "img/content/jane.jpg",
      avatar: "women6",
      photo: ["img/content/jane1.jpg", "img/content/jane2.jpg", "img/content/jane3.jpg", "img/content/jane4.jpg", "img/content/jane5.jpg", "img/content/jane6.jpg", "img/content/jane7.jpg"]
    }, {
      id: 8,
      info: "Gloria, 27",
      header: "img/content/gloria.jpg",
      avatar: "women4",
      photo: ["img/content/gloria1.jpg", "img/content/gloria2.jpg", "img/content/gloria3.jpg", "img/content/gloria4.jpg", "img/content/gloria5.jpg"]
    }, {
      id: 9,
      info: "Mia, 25",
      header: "img/content/mia.jpg",
      avatar: "women6",
      photo: ["img/content/mia1.jpg", "img/content/mia2.jpg", "img/content/mia3.jpg", "img/content/mia4.jpg", "img/content/mia5.jpg"]
    }, {
      id: 10,
      info: "Anna, 18",
      header: "img/content/anna.jpg",
      avatar: "women5",
      photo: ["img/content/anna1.jpg", "img/content/anna2.jpg", "img/content/anna3.jpg", "img/content/anna4.jpg", "img/content/anna5.jpg", "img/content/anna6.jpg", "img/content/anna7.jpg"]
    }, {
      id: 11,
      info: "Kristin, 35",
      header: "img/content/kristin.jpg",
      avatar: "women6",
      photo: ["img/content/kristin1.jpg", "img/content/kristin2.jpg", "img/content/kristin3.jpg", "img/content/kristin4.jpg", "img/content/kristin5.jpg"]
    }, {
      id: 12,
      info: "Azami, 25",
      header: "img/content/azami.jpg",
      avatar: "women5",
      photo: ["img/content/azami1.jpg", "img/content/azami2.jpg", "img/content/azami3.jpg", "img/content/azami4.jpg", "img/content/azami5.jpg", "img/content/azami6.jpg", "img/content/azami7.jpg"]
    }, {
      id: 13,
      info: "Judith, 26",
      header: "img/content/judith.jpg",
      avatar: "women6",
      photo: ["img/content/judith1.jpg", "img/content/judith2.jpg", "img/content/judith3.jpg", "img/content/judith4.jpg", "img/content/judith5.jpg", "img/content/judith6.jpg", "img/content/judith7.jpg"]
    }, {
      id: 14,
      info: "Claire, 18",
      header: "img/content/claire.jpg",
      avatar: "women2",
      photo: ["img/content/claire1.jpg", "img/content/claire2.jpg", "img/content/claire3.jpg", "img/content/claire4.jpg", "img/content/claire5.jpg"]
    }, {
      id: 15,
      info: "Arlene, 21",
      header: "img/content/arlene.jpg",
      avatar: "women3",
      photo: ["img/content/arlene1.jpg", "img/content/arlene2.jpg", "img/content/arlene3.jpg", "img/content/arlene4.jpg", "img/content/arlene5.jpg"]
    }, {
      id: 16,
      info: "Serenity, 19",
      header: "img/content/serenity.jpg",
      avatar: "women3",
      photo: ["img/content/serenity1.jpg", "img/content/serenity2.jpg", "img/content/serenity3.jpg", "img/content/serenity4.jpg", "img/content/serenity5.jpg"]
    }, {
      id: 17,
      info: "Bunko, 29",
      header: "img/content/bunko5.jpg",
      avatar: "women5",
      photo: ["img/content/bunko1.jpg", "img/content/bunko2.jpg", "img/content/bunko3.jpg", "img/content/bunko4.jpg", "img/content/bunko5.jpg"]
    }, {
      id: 18,
      info: "Dai, 21",
      header: "img/content/dai.jpg",
      avatar: "women5",
      photo: ["img/content/dai1.jpg", "img/content/dai2.jpg", "img/content/dai3.jpg", "img/content/dai4.jpg", "img/content/dai5.jpg"]
    }, {
      id: 19,
      info: "Eiko, 29",
      header: "img/content/eiko.jpg",
      avatar: "women4",
      photo: ["img/content/eiko1.jpg", "img/content/eiko2.jpg", "img/content/eiko3.jpg", "img/content/eiko4.jpg", "img/content/eiko5.jpg", "img/content/eiko6.jpg", "img/content/eiko7.jpg"]
    }, {
      id: 20,
      info: "Kali, 32",
      header: "img/content/kali.jpg",
      avatar: "women5",
      photo: ["img/content/kali1.jpg", "img/content/kali2.jpg", "img/content/kali3.jpg", "img/content/kali4.jpg", "img/content/kali5.jpg", "img/content/kali6.jpg", "img/content/kali7.jpg"]
    }, {
      id: 21,
      info: "Zara, 22",
      header: "img/content/zara.jpg",
      avatar: "women6",
      photo: ["img/content/zara1.jpg", "img/content/zara2.jpg", "img/content/zara3.jpg", "img/content/zara4.jpg", "img/content/zara5.jpg"]
    }, {
      id: 22,
      info: "Mira, 30",
      header: "img/content/mira.jpg",
      avatar: "women5",
      photo: ["img/content/mira1.jpg", "img/content/mira2.jpg", "img/content/mira3.jpg", "img/content/mira4.jpg", "img/content/mira5.jpg"]
    }, {
      id: 23,
      info: "Mazie, 27",
      header: "img/content/mazie.jpg",
      avatar: "women5",
      photo: ["img/content/mazie1.jpg", "img/content/mazie2.jpg", "img/content/mazie3.jpg", "img/content/mazie4.jpg", "img/content/mazie5.jpg"]
    }, {
      id: 24,
      info: "Nora, 21",
      header: "img/content/nora.jpg",
      avatar: "women5",
      photo: ["img/content/nora1.jpg", "img/content/nora2.jpg", "img/content/nora3.jpg", "img/content/nora4.jpg", "img/content/nora5.jpg", "img/content/nora6.jpg", "img/content/nora7.jpg"]
    }, {
      id: 25,
      info: "Kamala, 26",
      header: "img/content/kamala.jpg",
      avatar: "women3",
      photo: ["img/content/kamala1.jpg", "img/content/kamala2.jpg", "img/content/kamala3.jpg", "img/content/kamala4.jpg", "img/content/kamala5.jpg"]
    }, {
      id: 26,
      info: "Nori, 29",
      header: "img/content/nori.png",
      avatar: "women4",
      photo: ["img/content/nori1.png", "img/content/nori2.png", "img/content/nori3.png", "img/content/nori4.png", "img/content/nori5.png"]
    }, {
      id: 27,
      info: "Erika, 20",
      header: "img/content/erika.png",
      avatar: "women4",
      photo: ["img/content/erika1.png", "img/content/erika2.png", "img/content/erika3.png", "img/content/erika4.png", "img/content/erika5.png"]
    }, {
      id: 28,
      info: "Kasumi, 25",
      header: "img/content/kasumi.png",
      avatar: "women5",
      photo: ["img/content/kasumi1.png", "img/content/kasumi2.png", "img/content/kasumi3.png", "img/content/kasumi4.png", "img/content/kasumi5.png"]
    }, {
      id: 29,
      info: "Keon, 23",
      header: "img/content/keon.png",
      avatar: "women4",
      photo: ["img/content/keon1.png", "img/content/keon2.png", "img/content/keon3.png", "img/content/keon4.png", "img/content/keon5.png", "img/content/keon6.png", "img/content/keon7.png"]
    }, {
      id: 30,
      info: "Minji, 27",
      header: "img/content/minji.png",
      avatar: "women5",
      photo: ["img/content/minji1.png", "img/content/minji2.png", "img/content/minji3.png", "img/content/minji4.png", "img/content/minji5.png", "img/content/minji6.png", "img/content/minji7.png"]
    }, {
      id: 31,
      info: "Yujin, 32",
      header: "img/content/yujin.png",
      avatar: "women5",
      photo: ["img/content/yujin1.png", "img/content/yujin2.png", "img/content/yujin3.png", "img/content/yujin4.png", "img/content/yujin5.png"]
    }, {
      id: 32,
      info: "jane, 18",
      header: "img/content/jane.png",
      avatar: "women2",
      photo: ["img/content/jane1.png", "img/content/jane2.png", "img/content/jane3.png", "img/content/jane4.png", "img/content/jane5.png"]
    }, {
      id: 33,
      info: "lily, 18",
      header: "img/content/lily.png",
      avatar: "women4",
      photo: ["img/content/lily1.png", "img/content/lily2.png", "img/content/lily3.png", "img/content/lily4.png", "img/content/lily5.png"]
    }, {
      id: 34,
      info: "Alice, 28",
      header: "img/content/alice.png",
      avatar: "women2",
      photo: ["img/content/alice1.png", "img/content/alice2.png", "img/content/alice3.png", "img/content/alice4.png", "img/content/alice5.png"]
    }, {
      id: 35,
      info: "jeong, 24",
      header: "img/content/jeong.png",
      avatar: "women4",
      photo: ["img/content/jeong1.png", "img/content/jeong2.png", "img/content/jeong3.png", "img/content/jeong4.png", "img/content/jeong5.png", "img/content/jeong6.png", "img/content/jeong7.png"]
    }, {
      id: 36,
      info: "Lin, 27",
      header: "img/content/lin.png",
      avatar: "women5",
      photo: ["img/content/lin1.png", "img/content/lin2.png", "img/content/lin3.png", "img/content/lin4.png", "img/content/lin5.png", "img/content/lin6.png", "img/content/lin7.png"]
    }, {
      id: 37,
      info: "Sujin, 27",
      header: "img/content/sujin.png",
      avatar: "women5",
      photo: ["img/content/sujin1.png", "img/content/sujin2.png", "img/content/sujin3.png", "img/content/sujin4.png", "img/content/sujin5.png"]
    }, {
      id: 38,
      info: "Subin, 29",
      header: "img/content/subin.png",
      avatar: "women5",
      photo: ["img/content/subin1.png", "img/content/subin2.png", "img/content/subin3.png", "img/content/subin4.png", "img/content/subin5.png"]
    }, {
      id: 39,
      info: "Jessica, 19",
      header: "img/content/jessica.png",
      avatar: "women5",
      photo: ["img/content/jessica1.png", "img/content/jessica2.png", "img/content/jessica3.png", "img/content/jessica4.png", "img/content/jessica5.png"]
    }, {
      id: 40,
      info: "Lucy, 37",
      header: "img/content/lucy.png",
      avatar: "women6",
      photo: ["img/content/lucy1.png", "img/content/lucy2.png", "img/content/lucy3.png", "img/content/lucy4.png", "img/content/lucy5.png"]
    }, {
      id: 41,
      info: "Sarah, 32",
      header: "img/content/sarah.png",
      avatar: "women4",
      photo: ["img/content/sarah1.png", "img/content/sarah2.png", "img/content/sarah3.png", "img/content/sarah4.png", "img/content/sarah5.png"]
    }, {
      id: 42,
      info: "Tina, 36",
      header: "img/content/tina.png",
      avatar: "women3",
      photo: ["img/content/tina1.png", "img/content/tina2.png", "img/content/tina3.png", "img/content/tina4.png", "img/content/tina5.png"]
    }, {
      id: 43,
      info: "Jisu, 25",
      header: "img/content/jisu7.png",
      avatar: "women5",
      photo: ["img/content/jisu1.png", "img/content/jisu2.png", "img/content/jisu3.png", "img/content/jisu4.png", "img/content/jisu5.png", "img/content/jisu6.png", "img/content/jisu7.png"]
    }, {
      id: 44,
      info: "Crystal, 21",
      header: "img/content/crystal.png",
      avatar: "women4",
      photo: ["img/content/crystal1.png", "img/content/crystal2.png", "img/content/crystal3.png", "img/content/crystal4.png", "img/content/crystal5.png"]
    }, {
      id: 45,
      info: "zoe, 29",
      header: "img/content/zoe.png",
      avatar: "women5",
      photo: ["img/content/zoe1.png", "img/content/zoe2.png", "img/content/zoe3.png", "img/content/zoe4.png", "img/content/zoe5.png", "img/content/zoe6.png", "img/content/zoe7.png"]
    }];

    const closeModal = () => {
      modal.classList.remove("modal_opened");

      if (modalContainer.classList.contains("modal__form_active")) {
        setTimeout(() => {
          modalContainer.classList.remove("modal__form_active");
          document.querySelector(".form-container-js").remove();
        }, 300);
      }
    };

    const openModal = (stars = false) => {
      if (stars) {
        const startContainer = modal.querySelector(".modal__stars-container-js");
        const comment = modal.querySelector(".modal__stars-comment-js");
        const question = modal.querySelector(".modal__stars-question-js");
        let btnVideoCall;
        startContainer.innerHTML = "";
        btnContainer.innerHTML = "";
        comment.textContent = "";
        question.textContent = "";
        modal.classList.add("modal_opened");

        for (let i = 1; i < 6; i++) {
          let div = document.createElement("div");
          div.classList.add("stars");
          div.classList.add(`${i <= stars ? "stars_full" : "stars_empty"}`);
          startContainer.append(div);
        }

        switch (true) {
          case stars == 5:
            comment.textContent = "Wow, you rated me 5 stars!";
            question.textContent = "Do you want to talk to me?";
            let btnMessage = document.createElement("button");
            btnMessage.textContent = "message";
            btnMessage.dataset.id = "message";
            btnMessage.classList.add("btn_red");
            btnContainer.append(btnMessage);
            btnVideoCall = document.createElement("button");
            btnVideoCall.textContent = "Video call";
            btnVideoCall.dataset.id = "video";
            btnVideoCall.classList.add("btn_red");
            btnContainer.append(btnVideoCall);
            break;

          case stars >= 3:
            comment.textContent = `It's strange! I look better in person.`;
            question.textContent = "Do you want to see me?";
            btnVideoCall = document.createElement("button");
            btnVideoCall.textContent = "Video call";
            btnVideoCall.dataset.id = "video";
            btnVideoCall.classList.add("btn_red");
            btnContainer.append(btnVideoCall);
            break;

          case stars >= 1:
            comment.textContent = `Hmm, sad.`;
            question.textContent = "Go to another girl?";
            let yesBtn = document.createElement("button");
            yesBtn.textContent = "yes";
            yesBtn.dataset.id = "yes";
            yesBtn.classList.add("btn_red");
            btnContainer.append(yesBtn);
            let noBtn = document.createElement("button");
            noBtn.textContent = "no";
            noBtn.dataset.id = "no";
            noBtn.classList.add("btn_gray");
            btnContainer.append(noBtn);
            break;

          default:
            return;
        }
      } else {
        modalContainer.classList.add("modal__form_active");
        modal.classList.add("modal_opened");
        modalContainer.append(cloneForm);
      }
    };

    function shuffle(sourceArray) {
      for (var i = 0; i < 12; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }

      return sourceArray.slice(0, maxCountGirl);
    }

    function tgtrimm(str) {
      var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').replace(/\s+/gi, ', ');
      return ars;
    }

    const girlsRandom = shuffle(girls);

    const findGirl = girlId => girlsRandom.find(g => {
      if (g.id == girlId) return g;
    });

    const nextGirl = girlId => {
      let isNext;
      return girlsRandom.find((g, idx) => {
        if (isNext === true) {
          if (idx == maxCountGirl - 1) {
            profile.querySelector(".profile__nextBtn-js").dataset.restart = true;
          }

          return g;
        }

        if (g.id == girlId) {
          isNext = true;
        }
      });
    };

    const resetStars = () => {
      const inputs = rating.querySelectorAll(".star-rating__input");
      inputs.forEach(input => input.checked = false);
    };

    const updateProfile = girl => {
      resetStars();
      let girlCard;
      profile.querySelector(".profile__nextBtn-js").dataset.restart == "true" ? (girlCard = girlsRandom[0], profile.querySelector(".profile__nextBtn-js").dataset.restart = false) : girlCard = girl;
      profile.querySelector(".profile__header-img-js").src = girlCard.header;
      profile.querySelector(".profile__name-js").textContent = girlCard.info;
      profile.querySelector(".profile__nextBtn-js").dataset.girlid = girlCard.id;
      const imgContainer = profile.querySelector(".profile__gallery-js");
      imgContainer.innerHTML = "";
      girlCard.photo.forEach(g => {
        let img = document.createElement("img");
        img.src = g;
        img.alt = girlCard.info;
        imgContainer.append(img);
      });
    };

    unlockBtn.addEventListener("click", () => main.classList.add("main__unvisible"));
    map.addEventListener("click", e => {
      const girl = findGirl(e.target.closest(".main__map-girl-js").id);

      if (girl) {
        updateProfile(girl);
        profile.classList.add("profile_active");
        footer.style.display = "none";
        header.classList.add("header_back");
      }
    });
    heartBtn.addEventListener("click", () => map.classList.add("main__map_active"));
    nextBtn.addEventListener("click", () => {
      const id = profile.querySelector(".profile__nextBtn-js").dataset.girlid;
      const girl = nextGirl(id);
      updateProfile(girl);
    });

    function initGirlsMap(girls) {
      girls.forEach(girl => {
        let girlTemplate = document.querySelector("#girl-avatar");
        let element = girlTemplate.content.cloneNode(true);
        element.querySelector(".main__map-girl").id = girl.id;
        element.querySelector(".main__map-girl-info").textContent = girl.info;
        element.querySelector(".avatar").childNodes[1].href.baseVal = `img/symbols.svg#${girl.avatar}`;
        mapGirlsContainer.append(element);
      });
    }

    const videoCall = () => {
      profile.classList.add("profile_videocall");
      const videoCallContainer = profile.querySelector(".profile__videocall");
      sTime = setTimeout(() => {
        if (videoCallContainer.querySelector(".form-container-js")) {
          form.classList.add("form-container_active");
        } else {
          videoCallContainer.querySelector(".profile__videocall-connecting").after(cloneForm);
          form = document.querySelector(".form-container-js");
          form.classList.add("form-container_active");
        }
      }, 5000);
    };

    const createCloneForm = () => {
      cloneForm = form.cloneNode(true);
      form.remove();
    };

    const chat = () => profile.classList.add("profile_chat");

    videoCallBtn.addEventListener("click", videoCall);
    chatBtn.addEventListener("click", chat);
    backBtn.addEventListener("click", () => {
      if (profile.classList.contains("profile_videocall")) {
        form.classList.remove("form-container_active");
        profile.classList.remove("profile_videocall");
        clearTimeout(sTime);
        return;
      }

      if (profile.classList.contains("profile_chat")) {
        profile.classList.remove("profile_chat");
        document.querySelector(".profile__chat-messages-js").innerHTML = "";
        messageContainer.style.display = "flex";
        chatContainer.querySelector(".form-container-js").remove();
        countMessage = 0;
        return;
      }

      if (profile.classList.contains("profile_active")) {
        profile.classList.remove("profile_active");
        header.classList.remove("header_back");
      }
    });
    closeModalBtn.addEventListener("click", closeModal);
    btnContainer.addEventListener("click", e => {
      const pressBtnId = e.target.closest("button").dataset.id;

      if (pressBtnId) {
        if (pressBtnId === "video") {
          closeModal();
          videoCall();
        }

        if (pressBtnId === "message") {
          closeModal();
          chat();
        }

        if (pressBtnId === "no") {
          closeModal();
        }

        if (pressBtnId === "yes") {
          closeModal();
          profile.classList.remove("profile_active");
          map.classList.add("main__map-other-btn");
        }
      }
    });
    stars.forEach(star => {
      star.addEventListener("click", e => {
        const id = e.target.id;
        openModal(id);
      });
    });

    const checkKeyPress = e => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    const checkPressOverlay = e => {
      if (e.target === modal) {
        closeModal();
      }
    };

    modal.addEventListener("click", e => checkPressOverlay(e));
    document.addEventListener("keydown", checkKeyPress);

    const createMessage = (message, isUser = true) => {
      const name = tgtrimm(document.querySelector('.profile__name-js').textContent);
      const chatContainer = document.querySelector(".profile__chat-messages-js");
      const list = ["girl__message", "girl__message_write"];
      let mesElement;

      if (!isUser) {
        countMessage++;

        if (countMessage == 2) {
          input.setAttribute("disabled", "true");
          sendBtn.setAttribute("disabled", "true");
        }

        mesElement = document.createElement("div");
        let girlWrite = document.createElement('p');
        girlWrite.textContent = `${name} is typing...`;
        girlWrite.classList.add('girl__typing');
        mesElement.append(girlWrite);
        mesElement.classList.add(...list);
        mesElement.dataset.message = countMessage;
        chatContainer.append(mesElement);
        message.forEach((mes, idx) => {
          setTimeout(() => {
            const p = document.createElement("p");
            countMessage == 2 && p.classList.add("blur");
            p.textContent = mes;
            chatContainer.querySelector(`[data-message='${countMessage}']`).append(p);

            if (message.length == idx + 1) {
              chatContainer.querySelector(`[data-message='${countMessage}']`).classList.remove("girl__message_write");

              if (countMessage == 2) {
                chatContainer.append(cloneForm);
              } else {
                sendBtn.removeAttribute("disabled");
                input.removeAttribute("disabled");
                input.focus();
              }
            }
          }, 3000 * (idx + 3));
        });
      }

      if (isUser) {
        mesElement = document.createElement("div");
        mesElement.textContent = message;
        mesElement.classList.add(`user__message`);
        chatContainer.append(mesElement);
        setTimeout(() => {
          mesElement.classList.add("user__message_read");
          setTimeout(() => {
            createMessage(girlMessages[Math.floor(Math.random() * girlMessages.length)], false);
          }, 2000);
        }, 1000);
      }
    };

    otherGirlsBtn.addEventListener("click", () => openModal());
    signUpBtn.addEventListener("click", () => openModal());
    input.addEventListener("keyup", e => {
      if (e.key === "Enter") {
        createMessage(input.value);
        input.value = "";
      }
    });
    sendBtn.addEventListener("click", () => {
      createMessage(input.value);
      input.value = "";
    });
    messageContainer.addEventListener("click", e => {
      const message = e.target.closest("button").textContent;
      messageContainer.style.display = "none";
      createMessage(message);
    });
    initGirlsMap(girlsRandom);

    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", appHeight);
    appHeight();
    createCloneForm();

}));
