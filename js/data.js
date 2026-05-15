// ===== DATA: RECIPES =====
const RECIPES = [
  // ===== РАМЭНЫ =====
  {
    id: 0, category: 'ramen',
    name: "Карри рамэн",
    sub: "на креветочном бульоне • Тунец",
    emoji: "🍛",
    color: "#FF9600",
    progress: 0,
    ingredients: [
      { name: "Лапша (сырая/отварная) пф", big: "140/220 г", small: "70/110 г", bigNum: 140, smallNum: 70 },
      { name: "Тунец пф", big: "40 г", small: "30 г", bigNum: 40, smallNum: 30 },
      { name: "Креветочный бульон пф", big: "260 г", small: "180 г", bigNum: 260, smallNum: 180 },
      { name: "Лук зеленый очищ. пф", big: "15 г", small: "10 г", bigNum: 15, smallNum: 10 },
      { name: "Ростки сои маринованные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Соус Карри пф", big: "40 г", small: "20 г", bigNum: 40, smallNum: 20 },
      { name: "Грибы шиитаке отварные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Яйцо маринованное пф", big: "1 шт", small: "½ шт", bigNum: 1, smallNum: 0.5, unit: "шт" },
      { name: "Кунжут жареный ассорти пф", big: "1 г", small: "½ г", bigNum: 1, smallNum: 0.5 },
      { name: "Масло креветочное", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Нори", big: "¼ шт", small: "¼ шт", bigNum: 0.25, smallNum: 0.25, unit: "шт" },
    ],
    steps: [
      "Развернуть лапшу, отрянуть от муки",
      "Положить в кипящую воду. Отварить 40 сек (до 12 ч хранения) или 2 мин (после 12 ч хранения)",
      "Положить лапшу в центр тарелки",
      "С одного края тарелки положить лук зеленый, ростки сои, грибы шиитаке, яйцо, тунец",
      "Налить соус Карри",
      "Залить кипящим креветочным бульоном",
      "При отдаче: положить нори, посыпать кунжутом",
      "Добавить пф креветочное масло"
    ],
    output: "650 г (бол) / 400 г (мал)"
  },
  {
    id: 1, category: 'ramen',
    name: "Том ям рамэн",
    sub: "на креветочном бульоне • Тунец/Цыпленок/Креветки",
    emoji: "🌶️",
    color: "#FF4B4B",
    progress: 0,
    ingredients: [
      { name: "Лапша (сырая/отварная) пф", big: "140/220 г", small: "70/110 г", bigNum: 140, smallNum: 70 },
      { name: "Тунец/Цыпленок/Креветка пф", big: "40 г / 4 шт", small: "30 г / 2 шт", bigNum: 40, smallNum: 30 },
      { name: "Том ям бульон пф", big: "260 г", small: "180 г", bigNum: 260, smallNum: 180 },
      { name: "Лук зеленый очищ. пф", big: "15 г", small: "10 г", bigNum: 15, smallNum: 10 },
      { name: "Ростки сои маринованные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Грибы шиитаке отварные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Яйцо маринованное пф", big: "1 шт", small: "½ шт", bigNum: 1, smallNum: 0.5, unit: "шт" },
      { name: "Лемонграсс очищ.", big: "1 шт", small: "1 шт", bigNum: 1, smallNum: 1, unit: "шт" },
      { name: "Лист лайм", big: "2 шт", small: "1 шт", bigNum: 2, smallNum: 1, unit: "шт" },
      { name: "Соус том ям пф", big: "40 г", small: "20 г", bigNum: 40, smallNum: 20 },
      { name: "Кунжут жареный ассорти пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Масло креветочное пф", big: "¼", small: "¼", bigNum: 0.25, smallNum: 0.25 },
      { name: "Нори", big: "¼ шт", small: "¼ шт", bigNum: 0.25, smallNum: 0.25, unit: "шт" },
    ],
    steps: [
      "Развернуть лапшу, отрянуть от муки",
      "Положить в кипящую воду. Отварить 40 сек (до 12 ч) или 1 мин (после 12 ч хранения)",
      "Положить лапшу отварную в центр тарелки",
      "С одного края тарелки положить лук зеленый, ростки сои, грибы шиитаке, яйцо, лемонграсс, лист лайма, Тунец/Цыпленок/Креветки",
      "Налить соус том ям",
      "Залить кипящим том ям бульоном",
      "При отдаче: положить нори, посыпать кунжутом",
      "Добавить пф креветочное масло"
    ],
    output: "650 г (бол) / 400 г (мал)"
  },
  {
    id: 2, category: 'ramen',
    name: "Рамэн говяжий",
    sub: "на говяжьем бульоне • Говядина/Цыпленок",
    emoji: "🥩",
    color: "#8B4513",
    progress: 0,
    ingredients: [
      { name: "Лапша (сырая/отварная) пф", big: "140/220 г", small: "70/110 г", bigNum: 140, smallNum: 70 },
      { name: "Говядина/Цыпленок пф", big: "40 г", small: "30 г", bigNum: 40, smallNum: 30 },
      { name: "Бульон говяжий пф", big: "260 г", small: "180 г", bigNum: 260, smallNum: 180 },
      { name: "Кайши для гов. бульона пф", big: "40 г", small: "20 г", bigNum: 40, smallNum: 20 },
      { name: "Лук зеленый очищ. пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Ростки сои маринованные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Грибы шиитаке отварные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Яйцо маринованное пф", big: "1 шт", small: "½ шт", bigNum: 1, smallNum: 0.5, unit: "шт" },
      { name: "Кунжут жареный ассорти пф", big: "1 г", small: "1 г", bigNum: 1, smallNum: 1 },
      { name: "Чесночное масло пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Нори", big: "¼ шт", small: "¼ шт", bigNum: 0.25, smallNum: 0.25, unit: "шт" },
    ],
    steps: [
      "Развернуть лапшу, отрянуть от муки",
      "Положить в кипящую воду. Отварить согласно инструкции: 40 сек (до 12 ч) или 1 мин (после 12 ч)",
      "Положить отварную лапшу в тарелку",
      "Добавить кайши. С одного края тарелки положить лук зеленый, ростки сои, грибы шиитаке, яйцо, говядину/цыпленка",
      "Залить кипящим говяжьим бульоном, слегка перемешать лапшу",
      "При отдаче: положить нори, посыпать кунжутом",
      "Добавить пф чесночное масло"
    ],
    output: "650 г (бол) / 400 г (мал)"
  },
  {
    id: 3, category: 'ramen',
    name: "Рамэн морской",
    sub: "на креветочном бульоне • Креветки/Тунец/Лосось",
    emoji: "🦐",
    color: "#1CB0F6",
    progress: 0,
    ingredients: [
      { name: "Лапша (сырая/отварная) пф", big: "140/220 г", small: "70/110 г", bigNum: 140, smallNum: 70 },
      { name: "Креветка/Тунец/Лосось пф", big: "40 г / 4 шт", small: "30 г / 2 шт", bigNum: 40, smallNum: 30 },
      { name: "Бульон креветочный пф", big: "260 г", small: "180 г", bigNum: 260, smallNum: 180 },
      { name: "Кайши для кр. бульона пф", big: "40 г", small: "15 г", bigNum: 40, smallNum: 15 },
      { name: "Лук зеленый очищ. пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Ростки сои маринованные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Грибы шиитаке отварные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Яйцо маринованное пф", big: "1 шт", small: "½ шт", bigNum: 1, smallNum: 0.5, unit: "шт" },
      { name: "Кунжут жареный ассорти пф", big: "1 г", small: "1 г", bigNum: 1, smallNum: 1 },
      { name: "Масло креветочное пф", big: "¼", small: "¼", bigNum: 0.25, smallNum: 0.25 },
      { name: "Нори", big: "¼ шт", small: "¼ шт", bigNum: 0.25, smallNum: 0.25, unit: "шт" },
    ],
    steps: [
      "Развернуть лапшу, отрянуть от муки",
      "Положить в кипящую воду. Отварить согласно инструкции: 40 сек (до 12 ч) или 1 мин (после 12 ч)",
      "Положить лапшу отварную в центр тарелки",
      "Добавить кайши. С одного края тарелки положить лук зеленый, ростки сои, грибы шиитаке, яйцо, Креветки/Тунец/Лосось",
      "Залить кипящим креветочным бульоном",
      "При отдаче: положить нори, посыпать кунжутом",
      "Добавить пф креветочное масло"
    ],
    output: "650 г (бол) / 400 г (мал)"
  },
  {
    id: 4, category: 'ramen',
    name: "Мисо рамэн",
    sub: "Цыпленок/Тофу",
    emoji: "🫙",
    color: "#CE82FF",
    progress: 0,
    ingredients: [
      { name: "Лапша (сырая/отварная) пф", big: "140/220 г", small: "70/110 г", bigNum: 140, smallNum: 70 },
      { name: "Цыпленок пф / Тофу мар. пф", big: "40 г", small: "30 г", bigNum: 40, smallNum: 30 },
      { name: "Мисо бульон пф", big: "260 г", small: "180 г", bigNum: 260, smallNum: 180 },
      { name: "Вакаме замоч. резаное пф", big: "30 г", small: "15 г", bigNum: 30, smallNum: 15 },
      { name: "Лук зеленый очищ. пф", big: "15 г", small: "10 г", bigNum: 15, smallNum: 10 },
      { name: "Ростки сои маринованные пф", big: "20 г", small: "10 г", bigNum: 20, smallNum: 10 },
      { name: "Кайши говяжий пф", big: "40 г", small: "20 г", bigNum: 40, smallNum: 20 },
      { name: "Грибы шиитаке отварные пф", big: "20 шт", small: "10 шт", bigNum: 20, smallNum: 10, unit: "шт" },
      { name: "Яйцо маринованное пф", big: "1 шт", small: "½ шт", bigNum: 1, smallNum: 0.5, unit: "шт" },
      { name: "Кунжут жареный ассорти пф", big: "1", small: "1", bigNum: 1, smallNum: 1 },
      { name: "Нори", big: "¼ шт", small: "¼ шт", bigNum: 0.25, smallNum: 0.25, unit: "шт" },
    ],
    steps: [
      "Развернуть лапшу, отрянуть от муки",
      "Положить в кипящую воду. Отварить 40 сек (до 12 ч) или 1 мин (после 12 ч хранения)",
      "Положить лапшу отварную в центр тарелки",
      "Добавить кайши говяжий, лук зеленый",
      "С одного края тарелки положить ростки сои, грибы шиитаке, яйцо, вакаме",
      "Залить мисо бульоном кипящим",
      "При отдаче: положить нори, посыпать кунжутом"
    ],
    output: "650 г (бол) / 400 г (мал)"
  },
  {
    id: 5, category: 'ramen',
    name: "Том ям вегетарианский",
    sub: "Тофу • Вегетарианский бульон",
    emoji: "🌿",
    color: "#58CC02",
    progress: 0,
    ingredients: [
      { name: "Лапша (сырая/отварная) пф", big: "140/220 г", small: "70/110 г", bigNum: 140, smallNum: 70 },
      { name: "Бульон том ям вегетарианский", big: "200 г", small: "200 г", bigNum: 200, smallNum: 200 },
      { name: "Лук зеленый очищ. пф", big: "15 г", small: "15 г", bigNum: 15, smallNum: 15 },
      { name: "Ростки сои маринованные пф", big: "20 г", small: "20 г", bigNum: 20, smallNum: 20 },
      { name: "Грибы шиитаке отварные пф", big: "25 г", small: "25 г", bigNum: 25, smallNum: 25 },
      { name: "Яйцо маринованное пф", big: "1 шт", small: "1 шт", bigNum: 1, smallNum: 1, unit: "шт" },
      { name: "Черри", big: "25 г", small: "25 г", bigNum: 25, smallNum: 25 },
      { name: "Тофу маринованный пф", big: "52 г", small: "52 г", bigNum: 52, smallNum: 52 },
      { name: "Молоко кокосовое", big: "35 г", small: "35 г", bigNum: 35, smallNum: 35 },
      { name: "Нори", big: "¼ шт", small: "¼ шт", bigNum: 0.25, smallNum: 0.25, unit: "шт" },
    ],
    steps: [
      "Приготовить вегетарианский том ям бульон: вода 180 г, соль 5 г, аджиномото 3 г, кокосовое молоко 80 г",
      "Развернуть лапшу, отрянуть от муки, отварить",
      "Положить лапшу в центр тарелки",
      "Добавить ростки сои, грибы, черри, тофу, яйцо, лук",
      "Залить горячим вегетарианским том ям бульоном",
      "Добавить кокосовое молоко",
      "При отдаче: положить нори"
    ],
    output: "650 г (бол) / 400 г (мал)"
  },

  // ===== ЗАКУСКИ =====
  {
    id: 6, category: 'snack', single: true,
    name: "Тигровые креветки кацу",
    sub: "Закуска • 4 или 8 шт",
    emoji: "🍤",
    ingredients: [
      { name: "Креветки в панировке пф", amount: "90/180 г (4шт/8шт)", amountNum: 90 },
      { name: "Шпинат мини", amount: "3/6 г", amountNum: 3 },
      { name: "Ростки пф", amount: "10 г", amountNum: 10 },
      { name: "Соус манго-терияки", amount: "30/60 г (соусник)", amountNum: 30 },
      { name: "Кунжут жареный ассорти пф", amount: "1 г", amountNum: 1 },
    ],
    steps: [
      "Креветки в панировке 4 шт обжарить во фритюре согласно инструкции",
      "В тарелку выложить шпинат мини замешанный с проростками сои",
      "Рядом со шпинатом выложить обжаренные креветки, посыпать кунжутом",
      "Соус манго терияки налить в соусник"
    ],
    output: "110/30/3/10/1"
  },
  {
    id: 7, category: 'snack', single: true,
    name: "Цыпленок кацу",
    sub: "Закуска • Курица в панировке",
    emoji: "🍗",
    ingredients: [
      { name: "Курица кацу в панировке пф", amount: "80 г", amountNum: 80 },
      { name: "Шпинат мини", amount: "3 г", amountNum: 3 },
      { name: "Ростки пф", amount: "10 г", amountNum: 10 },
      { name: "Соус манго-терияки", amount: "30 г (соусник)", amountNum: 30 },
      { name: "Кунжут жареный ассорти пф", amount: "1 г", amountNum: 1 },
    ],
    steps: [
      "Пф курицу кацу обжарить во фритюре согласно ТК",
      "Нарезать на 8 кусков",
      "В тарелку выложить шпинат мини замешанный с проростками сои",
      "Рядом со шпинатом выложить курицу кацу, посыпать кунжутом",
      "Соус манго терияки налить в соусник"
    ],
    output: "144 г"
  },
  {
    id: 8, category: 'snack', single: true,
    name: "Нежный сыр тофу (панко)",
    sub: "Закуска • Тофу в сухарях панко",
    emoji: "🧀",
    ingredients: [
      { name: "Тофу кацу в панировке пф", amount: "80 г", amountNum: 80 },
      { name: "Шпинат мини", amount: "3 г", amountNum: 3 },
      { name: "Ростки пф", amount: "10 г", amountNum: 10 },
      { name: "Соус манго-терияки", amount: "30 г (соусник)", amountNum: 30 },
      { name: "Кунжут жареный ассорти пф", amount: "1 г", amountNum: 1 },
    ],
    steps: [
      "Тофу в панировке обжарить согласно инструкции",
      "В тарелку выложить шпинат мини замешанный с проростками сои",
      "Рядом со шпинатом выложить обжаренный тофу, посыпать кунжутом",
      "Соус манго терияки налить в соусник"
    ],
    output: "114 г"
  },
  {
    id: 9, category: 'snack', single: true,
    name: "Курочка Карааге",
    sub: "Закуска • Бедро карааге",
    emoji: "🍖",
    ingredients: [
      { name: "Кура бедро Карааге обжаренная пф", amount: "120 г", amountNum: 120 },
      { name: "Шпинат мини", amount: "3 г", amountNum: 3 },
      { name: "Ростки пф", amount: "10 г", amountNum: 10 },
      { name: "Соус манго-терияки", amount: "30 г (соусник)", amountNum: 30 },
      { name: "Кунжут жареный ассорти пф", amount: "1 г", amountNum: 1 },
    ],
    steps: [
      "Пф карааге прогреть перед подачей во фритюре (убедиться, что готово полностью, сделать контрольный надрез)",
      "В тарелку выложить шпинат мини замешанный с проростками сои",
      "Рядом со шпинатом выложить обжаренную курочку карааге, посыпать кунжутом",
      "Соус манго терияки налить в соусник"
    ],
    output: "164 г"
  },
  {
    id: 10, category: 'snack', single: true,
    name: "Онигири с цыпленком",
    sub: "Закуска • Рис + Кура су-вид",
    emoji: "🍙",
    ingredients: [
      { name: "Рис отварной заправленный пф", amount: "25/25 г", amountNum: 25 },
      { name: "Кура су-вид пф", amount: "30 г", amountNum: 30 },
      { name: "Спайси соус онигири пф", amount: "10 г", amountNum: 10 },
      { name: "Кляр пф", amount: "20 г", amountNum: 20 },
      { name: "Сухари панко", amount: "10 г", amountNum: 10 },
      { name: "Нори", amount: "¼ шт", amountNum: 0.25, unit: "шт" },
    ],
    steps: [
      "В форму для онигири выложить 25 г риса и разровнять по всей площади формы",
      "На рис выложить начинку: 30 г кура су-вид + 10 г соус онигири, разровнять",
      "Выложить второй слой риса 25 г, разровнять, закрыть форму и прижать",
      "Извлечь онигири из формы путём переворачивания",
      "Готовое онигири запанировать в кляре (пф кляр единый) и сухарях панко",
      "Обжарить во фритюре"
    ],
    output: "110 г"
  },
  {
    id: 11, category: 'snack', single: true,
    name: "Онигири с тунцом",
    sub: "Закуска • Рис + Тунец",
    emoji: "🍙",
    ingredients: [
      { name: "Рис отварной заправленный пф", amount: "25/25 г", amountNum: 25 },
      { name: "Тунец пф", amount: "30 г (кубик 0.5×0.5 см)", amountNum: 30 },
      { name: "Спайси соус онигири пф", amount: "10 г", amountNum: 10 },
      { name: "Кляр пф", amount: "20 г", amountNum: 20 },
      { name: "Сухари панко", amount: "10 г", amountNum: 10 },
      { name: "Нори", amount: "¼ шт", amountNum: 0.25, unit: "шт" },
      { name: "Кунжут черный", amount: "3 г", amountNum: 3 },
    ],
    steps: [
      "В форму выложить 25 г риса, разровнять",
      "Начинка: 30 г тунец (кубик 0.5×0.5 см) + 10 г соус онигири",
      "Выложить второй слой риса 25 г, закрыть форму, прижать",
      "Извлечь онигири переворачиванием формы",
      "Запанировать в кляре и смеси сухарей панко + черного кунжута",
      "Обжарить во фритюре"
    ],
    output: "110 г"
  },
  {
    id: 12, category: 'snack', single: true,
    name: "Онигири с лососем",
    sub: "Закуска • Рис + Лосось",
    emoji: "🍙",
    ingredients: [
      { name: "Рис отварной заправленный пф", amount: "25/25 г", amountNum: 25 },
      { name: "Лосось с/с пф", amount: "30 г (кубик 0.5×0.5 см)", amountNum: 30 },
      { name: "Спайси соус онигири пф", amount: "10 г", amountNum: 10 },
      { name: "Кляр пф", amount: "20 г", amountNum: 20 },
      { name: "Сухари панко", amount: "10 г", amountNum: 10 },
      { name: "Нори", amount: "¼ шт", amountNum: 0.25, unit: "шт" },
      { name: "Кунжут белый пф", amount: "3 г", amountNum: 3 },
    ],
    steps: [
      "В форму выложить 25 г риса, разровнять",
      "Начинка: 30 г лосось (кубик 0.5×0.5 см) + 10 г соус онигири",
      "Выложить второй слой риса 25 г, закрыть форму, прижать",
      "Извлечь онигири переворачиванием формы",
      "Запанировать в кляре и смеси сухарей панко + белого кунжута",
      "Обжарить во фритюре"
    ],
    output: "110 г"
  },
  {
    id: 13, category: 'snack', single: true,
    name: "Гедза",
    sub: "Закуска • Свинина/Курица/Креветка",
    emoji: "🥟",
    ingredients: [
      { name: "Гедза в ассортименте (кр./свин./кур.)", amount: "5 шт / 100 г", amountNum: 100 },
      { name: "Соус манго-терияки", amount: "30 г (в соусник)", amountNum: 30 },
      { name: "Масло растительное", amount: "20 г", amountNum: 20 },
      { name: "Кунжут жареный", amount: "1 г", amountNum: 1 },
    ],
    steps: [
      "Гедза отварить в кипящей воде в течение 3 мин",
      "Обжарить на раскалённой сковороде до золотистого цвета с одной стороны",
      "Выложить в тарелку, посыпать кунжутом",
      "Соус манго терияки налить в соусник"
    ],
    output: "130 г"
  },

  // ===== ПОКЕ =====
  {
    id: 14, category: 'poke', single: true,
    name: "Поке: Лосось медово-кунж.",
    sub: "Рис + Лосось • Медово-кунжутный соус",
    emoji: "🍱",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Шпинат мини", amount: "10 г", amountNum: 10 },
      { name: "Здомаме", amount: "20 г", amountNum: 20 },
      { name: "Лосось пф", amount: "40 г (кубик 1.5×1.5)", amountNum: 40 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Чукка", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "40 г", amountNum: 40 },
      { name: "Кунжут белый жар. пф", amount: "2 г", amountNum: 2 },
    ],
    steps: [
      "В центр выложить рис горкой",
      "По кругу выложить шпинат, эдамаме, лосось, ростки, чукку, огурец",
      "Налить соус, посыпать кунжутом"
    ],
    output: "322 г"
  },
  {
    id: 15, category: 'poke', single: true,
    name: "Поке: Тунец острый",
    sub: "Рис + Тунец • Спайси соус",
    emoji: "🐠",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Шпинат мини", amount: "10 г", amountNum: 10 },
      { name: "Здомаме", amount: "20 г", amountNum: 20 },
      { name: "Тунец пф", amount: "40 г (кубик 1.5×1.5)", amountNum: 40 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Чукка", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Соус спайси пф", amount: "40 г", amountNum: 40 },
      { name: "Кунжут черный жар. пф", amount: "2 г", amountNum: 2 },
    ],
    steps: [
      "В центр выложить рис горкой",
      "По кругу выложить шпинат, эдамаме, тунец, ростки, чукку, огурец",
      "Налить соус, посыпать кунжутом"
    ],
    output: "322 г"
  },
  {
    id: 16, category: 'poke', single: true,
    name: "Поке: Креветка темпура",
    sub: "Рис + Креветка • Темпура",
    emoji: "🍤",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Шпинат мини", amount: "10 г", amountNum: 10 },
      { name: "Здомаме", amount: "20 г", amountNum: 20 },
      { name: "Креветка темпура", amount: "4 шт / 80 г", amountNum: 80 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Чукка", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "40 г", amountNum: 40 },
      { name: "Кунжут белый жар. пф", amount: "2 г", amountNum: 2 },
    ],
    steps: [
      "В центр выложить рис горкой",
      "По кругу выложить шпинат, эдамаме, креветку, ростки, чукку, огурец",
      "Налить соус, посыпать кунжутом"
    ],
    output: "332 г"
  },
  {
    id: 17, category: 'poke', single: true,
    name: "Поке: Микс морепродукты",
    sub: "Рис + Лосось + Тунец + Креветка",
    emoji: "🦐",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Шпинат мини", amount: "10 г", amountNum: 10 },
      { name: "Здомаме", amount: "20 г", amountNum: 20 },
      { name: "Лосось пф", amount: "20 г", amountNum: 20 },
      { name: "Тунец пф", amount: "20 г", amountNum: 20 },
      { name: "Креветка с/в", amount: "2 шт / 40 г", amountNum: 40 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Чукка", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "40 г", amountNum: 40 },
      { name: "Кунжут ассорти", amount: "2 г", amountNum: 2 },
    ],
    steps: [
      "В центр выложить рис горкой",
      "По кругу выложить шпинат, эдамаме, лосось, тунец, креветку, ростки, чукку, огурец",
      "Налить соус, посыпать кунжутом"
    ],
    output: "352 г"
  },

  // ===== БОУЛЫ =====
  {
    id: 18, category: 'bowl', single: true,
    name: "Боул: Лосось терияки",
    sub: "Рис + Лосось • Терияки",
    emoji: "🍚",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Лосось пф", amount: "80 г", amountNum: 80 },
      { name: "Брокколи", amount: "40 г", amountNum: 40 },
      { name: "Морковь корейская", amount: "30 г", amountNum: 30 },
      { name: "Бобы эдамаме", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус терияки", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
      { name: "Масло кунжутное", amount: "3 г", amountNum: 3 },
    ],
    steps: [
      "В центр выложить рис",
      "По кругу выложить лосось, брокколи, морковь, эдамаме, огурец",
      "Налить соус терияки, сбрызнуть кунжутным маслом",
      "Посыпать кунжутом"
    ],
    output: "378 г"
  },
  {
    id: 19, category: 'bowl', single: true,
    name: "Боул: Цыпленок карри",
    sub: "Рис + Цыпленок • Карри",
    emoji: "🍛",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Цыпленок пф", amount: "80 г", amountNum: 80 },
      { name: "Брокколи", amount: "40 г", amountNum: 40 },
      { name: "Морковь корейская", amount: "30 г", amountNum: 30 },
      { name: "Бобы эдамаме", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус карри", amount: "40 г", amountNum: 40 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
    ],
    steps: [
      "В центр выложить рис",
      "По кругу выложить цыпленка, брокколи, морковь, эдамаме, огурец",
      "Налить соус карри, посыпать кунжутом"
    ],
    output: "382 г"
  },
  {
    id: 20, category: 'bowl', single: true,
    name: "Боул: Говядина остро",
    sub: "Рис + Говядина • Острый соус",
    emoji: "🌶️",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Говядина пф", amount: "80 г", amountNum: 80 },
      { name: "Брокколи", amount: "40 г", amountNum: 40 },
      { name: "Морковь корейская", amount: "30 г", amountNum: 30 },
      { name: "Бобы эдамаме", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус острый пф", amount: "40 г", amountNum: 40 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
      { name: "Лук зеленый", amount: "5 г", amountNum: 5 },
    ],
    steps: [
      "В центр выложить рис",
      "По кругу выложить говядину, брокколи, морковь, эдамаме, огурец",
      "Налить острый соус, посыпать кунжутом и луком"
    ],
    output: "385 г"
  },
  {
    id: 21, category: 'bowl', single: true,
    name: "Боул: Тофу вегетарианский",
    sub: "Рис + Тофу • Вегетарианский",
    emoji: "🌱",
    ingredients: [
      { name: "Рис пф", amount: "130 г", amountNum: 130 },
      { name: "Тофу маринованный пф", amount: "80 г", amountNum: 80 },
      { name: "Брокколи", amount: "40 г", amountNum: 40 },
      { name: "Морковь корейская", amount: "30 г", amountNum: 30 },
      { name: "Бобы эдамаме", amount: "30 г", amountNum: 30 },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "40 г", amountNum: 40 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
    ],
    steps: [
      "В центр выложить рис",
      "По кругу выложить тофу, брокколи, морковь, эдамаме, огурец",
      "Налить соус, посыпать кунжутом"
    ],
    output: "362 г"
  },

  // ===== ДОНБУРИ =====
  {
    id: 22, category: 'donburi', single: true,
    name: "Донбури: Лосось",
    sub: "Рис + Лосось • Унаги соус",
    emoji: "🍣",
    ingredients: [
      { name: "Рис пф", amount: "150 г", amountNum: 150 },
      { name: "Лосось с/с пф", amount: "100 г", amountNum: 100 },
      { name: "Яйцо маринованное пф", amount: "1 шт", amountNum: 1, unit: "шт" },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус унаги", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
      { name: "Лук зеленый", amount: "5 г", amountNum: 5 },
    ],
    steps: [
      "В тарелку выложить рис",
      "Сверху выложить лосось",
      "Добавить яйцо, огурец",
      "Налить соус унаги, посыпать кунжутом и луком"
    ],
    output: "317 г"
  },
  {
    id: 23, category: 'donburi', single: true,
    name: "Донбури: Тунец",
    sub: "Рис + Тунец • Унаги соус",
    emoji: "🐟",
    ingredients: [
      { name: "Рис пф", amount: "150 г", amountNum: 150 },
      { name: "Тунец пф", amount: "100 г", amountNum: 100 },
      { name: "Яйцо маринованное пф", amount: "1 шт", amountNum: 1, unit: "шт" },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус унаги", amount: "30 г", amountNum: 30 },
      { name: "Кунжут черный", amount: "2 г", amountNum: 2 },
      { name: "Лук зеленый", amount: "5 г", amountNum: 5 },
    ],
    steps: [
      "В тарелку выложить рис",
      "Сверху выложить тунец",
      "Добавить яйцо, огурец",
      "Налить соус унаги, посыпать кунжутом и луком"
    ],
    output: "317 г"
  },
  {
    id: 24, category: 'donburi', single: true,
    name: "Донбури: Цыпленок терияки",
    sub: "Рис + Цыпленок • Терияки",
    emoji: "🍗",
    ingredients: [
      { name: "Рис пф", amount: "150 г", amountNum: 150 },
      { name: "Цыпленок терияки пф", amount: "100 г", amountNum: 100 },
      { name: "Яйцо маринованное пф", amount: "1 шт", amountNum: 1, unit: "шт" },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус терияки", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
      { name: "Лук зеленый", amount: "5 г", amountNum: 5 },
    ],
    steps: [
      "В тарелку выложить рис",
      "Сверху выложить цыпленка терияки",
      "Добавить яйцо, огурец",
      "Налить соус терияки, посыпать кунжутом и луком"
    ],
    output: "317 г"
  },
  {
    id: 25, category: 'donburi', single: true,
    name: "Донбури: Говядина",
    sub: "Рис + Говядина • Унаги соус",
    emoji: "🥩",
    ingredients: [
      { name: "Рис пф", amount: "150 г", amountNum: 150 },
      { name: "Говядина пф", amount: "100 г", amountNum: 100 },
      { name: "Яйцо маринованное пф", amount: "1 шт", amountNum: 1, unit: "шт" },
      { name: "Огурец св. пф", amount: "30 г", amountNum: 30 },
      { name: "Соус унаги", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый", amount: "2 г", amountNum: 2 },
      { name: "Лук зеленый", amount: "5 г", amountNum: 5 },
    ],
    steps: [
      "В тарелку выложить рис",
      "Сверху выложить говядину",
      "Добавить яйцо, огурец",
      "Налить соус унаги, посыпать кунжутом и луком"
    ],
    output: "317 г"
  },

  // ===== САЛАТЫ =====
  {
    id: 26, category: 'salad', single: true,
    name: "Салат: Лосось с авокадо",
    sub: "Лосось + Авокадо • Медово-кунжутный",
    emoji: "🥑",
    ingredients: [
      { name: "Шпинат мини", amount: "40 г", amountNum: 40 },
      { name: "Лосось пф", amount: "40 г (кубик 1.5×1.5)", amountNum: 40 },
      { name: "Авокадо пф", amount: "40 г (кубик 1.5×1.5)", amountNum: 40 },
      { name: "Дайкон пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Черри", amount: "30 г (на 4 части)", amountNum: 30 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Битые огурцы пф", amount: "30 г", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый жар. пф", amount: "2 г", amountNum: 2 },
    ],
    steps: ["В центр выложить шпинат горкой", "По кругу выложить оставшиеся ингредиенты", "Налить соус, посыпать кунжутом"],
    output: "262 г"
  },
  {
    id: 27, category: 'salad', single: true,
    name: "Салат: Тунец с дайконом",
    sub: "Тунец + Дайкон • Медово-кунжутный",
    emoji: "🐠",
    ingredients: [
      { name: "Шпинат мини", amount: "40 г", amountNum: 40 },
      { name: "Тунец пф", amount: "40 г (кубик 1.5×1.5)", amountNum: 40 },
      { name: "Дайкон пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Черри", amount: "30 г (на 4 части)", amountNum: 30 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Битые огурцы пф", amount: "30 г", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый жар. пф", amount: "2 г", amountNum: 2 },
    ],
    steps: ["В центр выложить шпинат горкой", "По кругу выложить оставшиеся ингредиенты", "Налить соус, посыпать кунжутом"],
    output: "222 г"
  },
  {
    id: 28, category: 'salad', single: true,
    name: "Салат: Креветка с эдамаме",
    sub: "Креветка + Эдамаме • Спайси",
    emoji: "🦐",
    ingredients: [
      { name: "Шпинат мини", amount: "40 г", amountNum: 40 },
      { name: "Креветка с/в", amount: "6 шт / 80 г", amountNum: 80 },
      { name: "Эдамаме", amount: "40 г", amountNum: 40 },
      { name: "Дайкон пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Черри", amount: "30 г (на 4 части)", amountNum: 30 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Битые огурцы пф", amount: "30 г", amountNum: 30 },
      { name: "Соус спайси пф", amount: "30 г", amountNum: 30 },
      { name: "Кунжут черный", amount: "2 г", amountNum: 2 },
    ],
    steps: ["В центр выложить шпинат горкой", "По кругу выложить оставшиеся ингредиенты", "Налить соус, посыпать кунжутом"],
    output: "302 г"
  },
  {
    id: 29, category: 'salad', single: true,
    name: "Салат: Тофу вегетарианский",
    sub: "Тофу + Овощи • Медово-кунжутный",
    emoji: "🌿",
    ingredients: [
      { name: "Шпинат мини", amount: "40 г", amountNum: 40 },
      { name: "Тофу маринованный пф", amount: "60 г", amountNum: 60 },
      { name: "Эдамаме", amount: "40 г", amountNum: 40 },
      { name: "Дайкон пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Черри", amount: "30 г (на 4 части)", amountNum: 30 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Битые огурцы пф", amount: "30 г", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "30 г", amountNum: 30 },
      { name: "Кунжут белый жар. пф", amount: "2 г", amountNum: 2 },
    ],
    steps: ["В центр выложить шпинат горкой", "По кругу выложить оставшиеся ингредиенты", "Налить соус, посыпать кунжутом"],
    output: "282 г"
  },
  {
    id: 30, category: 'salad', single: true,
    name: "Салат: Микс морепродукты",
    sub: "Лосось + Тунец + Креветка",
    emoji: "🦞",
    ingredients: [
      { name: "Шпинат мини", amount: "40 г", amountNum: 40 },
      { name: "Лосось пф", amount: "20 г", amountNum: 20 },
      { name: "Тунец пф", amount: "20 г", amountNum: 20 },
      { name: "Креветка с/в", amount: "3 шт / 50 г", amountNum: 50 },
      { name: "Дайкон пф", amount: "30 г (кубик 1.5×1.5)", amountNum: 30 },
      { name: "Черри", amount: "30 г (на 4 части)", amountNum: 30 },
      { name: "Ростки пф", amount: "20 г", amountNum: 20 },
      { name: "Битые огурцы пф", amount: "30 г", amountNum: 30 },
      { name: "Соус медово-кунжутный пф", amount: "30 г", amountNum: 30 },
      { name: "Кунжут ассорти", amount: "2 г", amountNum: 2 },
    ],
    steps: ["В центр выложить шпинат горкой", "По кругу выложить оставшиеся ингредиенты", "Налить соус, посыпать кунжутом"],
    output: "252 г"
  },
];

export { RECIPES };
const SHELF_LIFE = {
  'Рыба и морепродукты': [
    { name: 'Лосось дефрост в вакууме',              hot: '36 ч',   cold: null,       room: null,    note: '' },
    { name: 'Лосось нарезанный 1.5×1.5 см пф',       hot: '36 ч',   cold: null,       room: null,    note: '' },
    { name: 'Креветка тигровая чищеная пф (разморозка)', hot: '48 ч', cold: null,      room: null,    note: '' },
    { name: 'Креветка тигровая пф Заморозок (оттайка)', hot: '48 ч', cold: '15 суток', room: null,   note: '' },
    { name: 'Тигровые креветки в панировке (кацу) пф', hot: '48 ч', cold: null,       room: null,    note: '' },
    { name: 'Тунец филе пф (кубик 1.5×1.5 см)',      hot: '36 ч',   cold: null,       room: null,    note: '' },
    { name: 'Тунец с/м (дефрост)',                    hot: '36 ч',   cold: null,       room: null,    note: '' },
    { name: 'Крабовые палочки после вскрытия',        hot: '72 ч',   cold: 'по ярлычку', room: null,  note: '' },
    { name: 'Панцири креветочные для Биск',           hot: null,     cold: '30 дней',  room: null,    note: '' },
    { name: 'Биск пф',                                hot: '24 ч',   cold: '30 дней',  room: null,    note: '' },
  ],
  'Овощи, зелень, фрукты': [
    { name: 'Чеснок очищенный пф',                   hot: '48 ч',   cold: null,       room: 'по этикетке', note: '' },
    { name: 'Черри резанные пф',                     hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Лук репчатый очищенный пф',             hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Овощи, грибы, фрукты мытые',            hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Зелень обработанная мытая',              hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Нарезанные овощи и фрукты, зелень',     hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Авокадо нарезанный пф',                 hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Лук зеленый нарезанный пф',             hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Лук зеленый мытый',                     hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Грибы Шиитаки отварные пф',             hot: '48 ч',   cold: '10 суток', room: null,    note: '' },
    { name: 'Лист Лайм',                             hot: '12 ч',   cold: null,       room: 'по ярлычку', note: '' },
    { name: 'Лемонграсс',                            hot: '18 ч',   cold: null,       room: 'по ярлычку', note: '' },
    { name: 'Ростки сои маринованные пф',             hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Дайкон нарезанный пф',                  hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Бобы Эдомаме пф',                       hot: '24 ч',   cold: null,       room: null,    note: '' },
    { name: 'Лемонграсс нарезанный пф',              hot: '18 ч',   cold: null,       room: null,    note: '' },
    { name: 'Кинза мытая пф',                        hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Шпинат мини мытый',                     hot: '48 ч',   cold: null,       room: null,    note: '' },
  ],
  'Бульоны': [
    { name: 'Бульон говяжий пф',                     hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
    { name: 'Бульон креветочный пф',                 hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
    { name: 'Мисо бульон пф',                        hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
    { name: 'Бульон сырный пф',                      hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
    { name: 'Бульон том ям пф',                      hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
    { name: 'Матча бульон чай пф',                   hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
    { name: 'Бульон том ям вегетарианский пф',       hot: '48 ч',   cold: '12 ч',     room: null,    note: '' },
  ],
  'ПФ (полуфабрикаты)': [
    { name: 'Заготовки д/супов к Б/Л без бульонов', hot: '6 ч',    cold: '4 ч',      room: null,    note: 'При отдаче залить горячим кипящим бульоном' },
    { name: 'Кайши говяжий пф',                      hot: '24 ч',   cold: '30 суток', room: null,    note: '' },
    { name: 'Кайши креветочный пф',                  hot: '24 ч',   cold: '30 суток', room: null,    note: '' },
    { name: 'Все консервации после вскрытия',         hot: null,     cold: null,       room: '12 ч (до конца смены)', note: '' },
    { name: 'Водоросли ВАКАМЕ (замоченные) пф',       hot: '24 ч',   cold: null,       room: null,    note: '' },
    { name: 'Тесто кляр пф',                         hot: '12 ч',   cold: null,       room: '7 дней', note: '' },
    { name: 'Кунжут жареный пф',                     hot: '24 ч',   cold: null,       room: 'в прикрытом виде', note: '' },
    { name: 'Фунгоза отварная пф',                   hot: '6 ч',    cold: null,       room: null,    note: '' },
    { name: 'Тесто по лапшу пф',                     hot: '12 ч',   cold: null,       room: 'в прикрытом виде', note: '' },
    { name: 'Мука которая после панировки',           hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Лапша сырая нарезная пф',               hot: '48 ч',   cold: '30 дней',  room: '12 ч',  note: '' },
    { name: 'Острое масло чили пф',                  hot: '48 ч',   cold: '30 дней',  room: '12 ч',  note: '' },
    { name: 'Креветочное масло пф',                  hot: '48 ч',   cold: '30 дней',  room: 'в прикрытом виде', note: '' },
    { name: 'Чесночное масло пф',                    hot: '6 ч',    cold: null,       room: null,    note: '' },
    { name: 'Лапша отварная (перед открытием)',       hot: '10 дней', cold: null,      room: null,    note: '' },
    { name: 'Сунгиза пф',                            hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Тофу маринованный пф',                  hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Тофу кацу пф',                          hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Рис заправленный отварной пф',           hot: '24 ч',   cold: null,       room: null,    note: 'В рисоварке' },
    { name: 'Лист лайма в боксе',                    hot: '48 ч',   cold: null,       room: 'по ярлычку', note: '' },
    { name: 'Грибы муэр маринованные пф',            hot: '18 ч',   cold: null,       room: null,    note: '' },
    { name: 'Гриб ледяной маринованный пф',          hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Капуста ким чи пф (ферментация)',        hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Капуста ким чи Готовая (ферментированная)', hot: null,  cold: null,       room: '48 ч',  note: 'Ферментация 2 дня, затем в холодильник' },
    { name: 'Битые огурцы пф',                       hot: '6 дней', cold: null,       room: null,    note: '' },
    { name: 'Маринад на битые огурцы пф',            hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Маринад на капусту ким чи пф',          hot: '72 ч',   cold: null,       room: null,    note: '' },
    { name: 'Онигири в панировке пф (лосось/тунец/цыпленок)', hot: '72 ч', cold: '15 дней', room: null, note: '' },
    { name: 'Манго пробитый в пюре пф',              hot: '24 ч',   cold: null,       room: null,    note: '' },
    { name: 'Гедза в ассортименте после вскрытия',   hot: '72 ч',   cold: '14 дней',  room: null,    note: '' },
  ],
  'Мясо': [
    { name: 'Кура бедро сырая',                      hot: '48 ч',   cold: '15 дней',  room: null,    note: '' },
    { name: 'Курочка карааге обжаренная пф',          hot: '36 ч',   cold: null,       room: null,    note: '' },
    { name: 'Кура су-вид пф',                        hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Говядина отварная пф',                  hot: '48 ч',   cold: '10 суток', room: 'после разморозки', note: '' },
    { name: 'Говядина отварная после разморозки пф', hot: '48 ч',   cold: null,       room: 'после разморозки', note: '' },
    { name: 'Курица Кацу пф',                        hot: '48 ч',   cold: null,       room: null,    note: '' },
    { name: 'Кости говяжьи',                         hot: '24 ч',   cold: '45 суток', room: null,    note: '' },
    { name: 'Говяжий жир пф',                        hot: null,     cold: '30 дней',  room: null,    note: '' },
    { name: 'ЧикенБоллы / КрабБоллы / КреветочныеБоллы пф', hot: 'отварные 48 ч / обжаренные 12 ч', cold: 'сырые 15 дней', room: null, note: '' },
    { name: 'Курица Кацу жареная пф',                hot: null,     cold: null,       room: '2 часа', note: 'В витрине' },
  ],
  'Молочная продукция': [
    { name: 'Молоко кокосовое, молоко, сливки',      hot: '72 ч после вскрытия', cold: null, room: null, note: '' },
  ],
  'Яйца': [
    { name: 'Яйцо сырое',                            hot: null,     cold: '10 суток', room: null,    note: '' },
    { name: 'Яйца вареные маринованные пф (реализация)', hot: '48 ч (12 ч в маринаде)', cold: null, room: null, note: '' },
  ],
};

export { SHELF_LIFE };

// ===== CATEGORIES =====
const CATEGORIES = [
  { key: 'ramen',   label: '🍜 Рамэны' },
  { key: 'snack',   label: '🍤 Закуски' },
  { key: 'poke',    label: '🍱 Поке' },
  { key: 'bowl',    label: '🥣 Боулы' },
  { key: 'donburi', label: '🍛 Донбури' },
  { key: 'salad',   label: '🥗 Салаты' },
];

export { CATEGORIES };
