const data = [
    {
        'id': 1,
        'avatar': '../img/pages/Reviews/AnastasiaBorisevich.png',
        'author': 'Анастасия Борисевич',
        'text': 'Спасибо большое за подрамники)) Превосходное качество (есть с чем сравнивать), быстрое изготовление, оперативная доставка и прекрасная цена! Теперь только к Александру за рамками и подрамниками) спасибо ещё раз)',
    },
    {
        'id': 2,
        'avatar': '../img/pages/Reviews/AnnaKhrapunova.png',
        'author': 'Анна Храпунова',
        'text': 'Спасибо, Александр! Рамки получились отличные (как в моём воображении\uD83D\uDE09. ) Качество, оперативность на 10 из 10.',
    },
    {
        'id': 3,
        'avatar': '../img/pages/Reviews/GelyaSukhorukova.png',
        'author': 'Геля Сухорукова',
        'text': 'Спасибо большое за подрамник! Быстро , качественно, приятная цена. Еще раз спасибо!\nУспехов в работе !',
    },
    {
        'id': 4,
        'avatar': '../img/pages/Reviews/ElenaZhiltsova.png',
        'author': 'Елена Жильцова ',
        'text': 'спасибо большое! сегодня получила подрамники. Приятно в руки взять!',
    },
    {
        'id': 5,
        'avatar': '../img/pages/Reviews/NatalyaNaydenova.png',
        'author': 'Наталья Найдёнова',
        'text': 'Заказывала модульные подрамники. Очень довольна! Качество, скорость изготовления, все на высоте. И цена хорошая. Рекомендую мастера!',
    },
    {
        'id': 6,
        'avatar': '../img/pages/Reviews/NataliaDudko.png',
        'author': 'Наталья Дудко',
        'text': 'Заказывала рамки, сказать, что довольна, это ничего не сказать. Я в восторге от качества работы и по цене приемлемо. Качественная обратная связь, быстро, удобно, отличное понимание клиента. Благодарю, буду обращаться.',
    },
    {
        'id': 7,
        'avatar': '../img/pages/Reviews/ElenaAlimova.png',
        'author': 'Елена Алимова',
        'text': 'Сегодня получила подрамники от Александра. Прекрасное качество! А красивые какие!!! Недорого, с доставкой и столько добра душевного!! Спасибо Вам, Александр!',
    },
    {
        'id': 8,
        'avatar': '../img/pages/Reviews/VictorButsyk.png',
        'author': 'Витя Буцык',
        'text': 'Подрамники сделаны на совесть! Спасибо',
    },
];

const cards = document.querySelector( '.feedback__cards' );

cards.innerHTML = data.map( el => {
        return `
     <a href="https://vk.com/topic-122424448_35935184" target="_blank" class="feedback__card card">

                        <div class="card__avatar">
                            <img
                                    src=${ el.avatar }
                                    alt="Аватар пользователя оставившего отзыв"
                            >
                        </div>

                        <div class="card__reviews">
                            <h4 class="card__author">
                                ${ el.author }
                            </h4>

                            <p class="card__text">
                                ${ el.text }
                            </p>
                        </div>
                    </a>
`;
    },
).join( '' )
;

