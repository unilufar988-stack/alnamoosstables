import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import logoAsset from "@/assets/al-namoos-logo.png.asset.json";
import heroAsset from "@/assets/hero.jpg.asset.json";
import coastalAsset from "@/assets/coastal.jpg.asset.json";
import farmOasisAsset from "@/assets/farmoasis.jpg.asset.json";
import familyExpAsset from "@/assets/familyexp.jpg.asset.json";
import swimmingAsset from "@/assets/swimming.jpg.asset.json";
import trekkingAsset from "@/assets/trekking.jpg.asset.json";
import vipAsset from "@/assets/vip.jpg.asset.json";
import combinedAsset from "@/assets/combined.jpg.asset.json";
import combinedFarmRiderAsset from "@/assets/combined-farm-rider.png.asset.json";
import qrAsset from "@/assets/location-map-qr.png.asset.json";

const SITE_TITLE = "Al Namoos Stables | Horse Riding in Qidfa, Fujairah";
const SITE_DESC =
  "Guided horse experiences on Fujairah's east coast — coastal rides, farm & oasis rides, family experiences, horse swimming, mountain trekking and a VIP heritage sunset with Emirati dinner.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Lang = "en" | "ru";

const copy = {
  en: {
    navTours: "Experiences",
    navVisit: "Visit",
    navTerms: "Terms",
    bookButton: "Book a ride",
    heroBadge: "Qidfa, Fujairah · UAE East Coast",
    heroTitle: "Ride · Explore · Be Inspired",
    heroText:
      "Guided horse experiences across Fujairah's raw terrain — from the shoreline of Qidfa to its green farms and the Hajar mountain trails above.",
    introKicker: "The Stables",
    introTitle: "A working stable at the heart of Qidfa.",
    introBody:
      "Al Namoos keeps a small herd of Arabian horses on Fujairah's quiet east coast, where the Hajar mountains fold down to the sea. Every experience is guided, unhurried and matched to your pace — small groups, patient horses, and guides who know every trail by name.",
    introStats: ["7 experiences", "All levels", "Fully guided"],
    toursTitle: "Our experiences",
    toursSub: "All guided · all levels",
    highlightsLabel: "Tour highlights",
    keyLabel: "Key information",
    bookKicker: "Book a Ride",
    bookTitle: "Let's plan your day on the coast.",
    bookBody:
      "Tell us which experience and a date that works. We confirm the same day and meet you at the stable gate.",
    whatsapp: "WhatsApp us",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Qidfa, Fujairah",
    qrLabel: "Scan for location",
    formTitle: "Booking request",
    formNote:
      "Send your details and we will confirm your ride on WhatsApp or by phone.",
    labelName: "Name",
    labelPhone: "Phone",
    labelDate: "Preferred date",
    labelSlot: "Time slot",
    labelExp: "Experience",
    labelGuests: "Guests",
    labelNotes: "Message / notes",
    phName: "Your name",
    phPhone: "+971 5X XXX XXXX",
    phNotes: "Anything we should know? (optional)",
    expPlaceholder: "Select experience",
    slotPlaceholder: "Select time slot",
    bookingExperiences: [
      "Coastal Ride (1 hour)",
      "Farm & Oasis Ride (1 hour)",
      "Family Horse Experience (1 - 1.5 hours)",
      "Horse Swimming Experience (1.5 hours)",
      "Horse Riding & Trekking Tour (2 hours)",
      "Full Combined Tour - Coast, Farm & Nature (2 hours)",
      "VIP Heritage, Sunset & Emirati Dinner (3.5 - 4 hours)",
    ],
    timeSlots: [
      "07:00 AM - 08:00 AM (Early Morning Serenity)",
      "08:30 AM - 09:30 AM (Family Friendly Ride)",
      "09:30 AM - 10:30 AM (Late Morning Ride)",
      "04:30 PM - 05:30 PM (Golden Hour Sunset - Recommended)",
      "05:30 PM - 06:30 PM (Twilight Evening Ride)",
    ],
    whatsappBook: "Book via WhatsApp",
    sendRequest: "Send booking request",
    sending: "Sending...",
    toastSuccess: "Thank you! Your booking request has been sent.",
    toastError: "Something went wrong. Please try again or WhatsApp us.",
    waIntro: "Hello Al Namoos Stables! I would like to book a riding experience:",
    waExp: "Experience: ",
    waDate: "Date: ",
    waSlot: "Time Slot: ",
    waName: "Name: ",
    waPhone: "Phone: ",
    waGuests: "Guests: ",
    waNotes: "Message/Notes: ",
    footerPlace: "Qidfa, Fujairah, United Arab Emirates",
    footerMotto: "Ride · Explore · Be Inspired",
    termsTitle: "Terms & conditions",
    cancellationTitle: "Cancellation Policy",
    cancellationIntro:
      "To avoid cancellation charges, guests are kindly requested to observe the following cancellation terms:",
    cancellationTerms: [
      "Morning activities scheduled between 7:00 AM and 10:30 AM must be cancelled no later than 8:30 PM on the day prior to the activity date.",
      "Afternoon activities scheduled between 4:30 PM and 6:30 PM must be cancelled no later than 8:30 PM on the day prior to the activity date.",
      "VIP Heritage, Sunset & Emirati Dinner must be cancelled at least 24 hours prior to the tour.",
      "Any cancellation received outside the specified cancellation periods, as well as no-shows, will be subject to a 100% cancellation fee, equivalent to the full activity charge.",
    ],
    terms: [
      "Horse allocation: One horse per participant for all individual riding experiences.",
      "Please note: Arabian-breed horses are not included in the riding horse allocation and will not be assigned to guests.",
      "Age requirements: Riding experiences by the sea and in nature are available for guests aged 7 years and above. Children aged 4–11 may take part in supervised arena riding.",
      "Weight limit: Maximum 90 kg per rider, including riding equipment.",
      "Safety: All experiences include supervision by a professional instructor, a safety briefing and a protective helmet.",
      "Disclaimer: All participants complete and sign a liability waiver before the experience begins.",
      "Helmets: Protective helmets are provided and mandatory for all riding activities.",
      "Children: Horses are selected according to the child's age, size and riding experience.",
      "Interaction with horses: All interaction must follow the instructions of the professional team.",
      "Parental supervision: A parent or legal guardian must be present during children's activities.",
      "Weather & sea conditions: All programmes, routes and horse swimming experiences depend on suitable weather, wave and tide conditions. For the safety of guests and horses, the guide may adjust the programme.",
      "Minimum booking: 2 guests.",
    ],
    tours: [
      {
        image: coastalAsset.url,
        tag: "Coast",
        title: "Coastal Ride",
        subtitle: "A peaceful horse ride along the coast",
        duration: "1 hour",
        intro:
          "Enjoy a scenic horseback ride along the coastline of Qidfa, where the sea breeze and the sound of the waves accompany you throughout the journey. A relaxed pace lets you appreciate Fujairah's natural beauty and create unforgettable moments by the sea.",
        highlights: [
          "Horse ride along the coastline",
          "Horse and necessary riding equipment",
          "Professional instructor",
          "Safety briefing and protective helmet",
          "Full assistance throughout the ride",
          "Bottled water and photo opportunities",
        ],
        key: ["1 horse per guest", "Minimum booking — 2 guests"],
      },
      {
        image: farmOasisAsset.url,
        tag: "Farm & Oasis",
        title: "Farm & Oasis Ride",
        subtitle: "A journey through the greenery of Fujairah",
        duration: "1 hour",
        intro:
          "Discover another side of Fujairah with a peaceful horseback ride through the farm. Surrounded by greenery, date palms and natural landscapes, enjoy the tranquil atmosphere and experience the rural beauty of the region.",
        highlights: [
          "Horse ride through the farm and green oasis",
          "Horse and necessary riding equipment",
          "Professional instructor",
          "Safety briefing and protective helmet",
          "Full assistance throughout the ride",
          "Bottled water and photo opportunities",
        ],
        key: ["1 horse per guest", "Minimum booking — 2 guests"],
      },
      {
        image: familyExpAsset.url,
        tag: "Family",
        title: "Family Horse Experience",
        subtitle: "A special introduction to the world of horses",
        duration: "1–1.5 hours",
        intro:
          "A memorable family experience designed to introduce children and parents to the world of horses. Learn about their character and behaviour, discover the basics of horse care and enjoy quality time together in a calm and friendly environment.",
        highlights: [
          "Introduction to the horses",
          "Supervised interaction with the horses",
          "Introduction to basic horse care",
          "Child's riding experience in the arena under instructor supervision",
          "Safety briefing and protective helmet",
          "Photo opportunities",
          "Additional child upon prior request",
        ],
        key: ["Family: 2 adults + 1 child"],
      },
      {
        image: swimmingAsset.url,
        tag: "Sea",
        title: "Horse Swimming Experience",
        subtitle: "A horse ride meets the sea",
        duration: "1.5 hours",
        intro:
          "Continue your coastal ride and experience something truly special — entering the sea together with your horse. The ride along the shore gradually transitions into a refreshing sea experience with the horses, always under the professional supervision of our team.",
        highlights: [
          "Horse ride along the coastline",
          "Sea swimming experience with the horses",
          "Horse and necessary riding equipment",
          "Professional instructor",
          "Safety briefing and protective helmet",
          "Assistance with photography and video",
          "Bottled water",
        ],
        key: [
          "1 horse per guest",
          "Minimum booking — 2 guests",
          "Clothing may get wet — bring a change of clothes and a towel",
          "Subject to suitable weather, sea and safety conditions",
        ],
      },
      {
        image: trekkingAsset.url,
        tag: "Mountains",
        title: "Horse Riding & Trekking Tour",
        subtitle: "From horseback to the Hajar mountains",
        duration: "2 hours",
        intro:
          "Combine horseback riding with a scenic trek through Fujairah's mountain landscapes. The experience begins with a horseback ride before continuing on foot alongside your horse towards a picturesque mountain viewpoint — the landscape from a completely different perspective.",
        highlights: [
          "Scenic horseback ride",
          "Mountain route",
          "Walking trek alongside the horse",
          "Horse and necessary riding equipment",
          "Professional instructor",
          "Safety briefing and protective helmet",
          "Bottled water and photo opportunities",
        ],
        key: ["1 horse per guest", "Minimum booking — 2 guests"],
      },
      {
        image: combinedAsset.url,
        tag: "Combined",
        title: "Full Combined Tour",
        subtitle: "Coast • Farm • Nature",
        duration: "2 hours",
        intro:
          "Discover several sides of Fujairah in one immersive experience. This diverse horseback journey combines the beauty of the coastline with the peaceful atmosphere of a working farm and green oasis, offering a varied adventure across different natural landscapes.",
        highlights: [
          "Guided horseback riding experience",
          "Coastal horseback ride",
          "Farm and green oasis experience",
          "Horse and necessary riding equipment",
          "Professional instructor",
          "Safety briefing and protective helmet",
          "Bottled water and photo opportunities",
        ],
        key: ["1 horse per guest", "Minimum booking — 2 guests"],
      },
      {
        image: vipAsset.url,
        tag: "VIP",
        title: "VIP Heritage, Sunset & Emirati Dinner",
        subtitle: "An exclusive evening in Fujairah",
        duration: "3.5–4 hours",
        intro:
          "Experience the atmosphere of Fujairah at sunset with an exclusive journey combining nature, culture and traditional Emirati hospitality. A premium horseback ride along the coastline at sunset, a unique sea experience with the horses, followed by authentic hospitality and dinner in a private VIP Majlis.",
        highlights: [
          "Private transfer from selected hotels in Dibba, Khorfakkan and Fujairah",
          "Sunset horseback ride along the coastline",
          "Sea swimming experience with the horses in the Arabian Sea",
          "Traditional Emirati hospitality in the VIP Majlis",
          "Freshly prepared hibiscus drink, Arabic coffee and dates",
          "Authentic Emirati dinner",
          "Professional guide and instructor",
          "Horse and riding equipment, including protective helmet",
          "Photo and video assistance from our team",
          "Bottled drinking water",
        ],
        key: [
          "1 horse per guest",
          "Minimum booking — 2 guests",
          "Clothing may get wet — bring a change of clothes and a towel",
        ],
      },
    ],
    info: [
      {
        title: "Where",
        body: "Qidfa, Fujairah — on the east coast of the UAE, between the mountains and the sea.",
      },
      {
        title: "When",
        body: "Rides most days, morning and late afternoon. Coastal rides are best at low tide.",
      },
      {
        title: "What to wear",
        body: "Closed-toe, comfortable footwear and comfortable clothing suitable for horse riding. Horses, equipment, helmets, guide and bottled water are provided.",
      },
    ],
  },
  ru: {
    navTours: "Программы",
    navVisit: "Как добраться",
    navTerms: "Условия",
    bookButton: "Забронировать",
    heroBadge: "Кидфа, Фуджейра · Восточное побережье ОАЭ",
    heroTitle: "Кататься · Открывать · Вдохновляться",
    heroText:
      "Конные программы с гидом по природе Фуджейры — от побережья Кидфы до зелёных ферм и горных троп Хаджара.",
    introKicker: "Конюшня",
    introTitle: "Действующая конюшня в сердце Кидфы.",
    introBody:
      "Al Namoos содержит небольшой табун арабских лошадей на тихом восточном побережье Фуджейры, где горы Хаджар спускаются к морю. Каждая программа проходит с гидом, в спокойном темпе — небольшие группы, терпеливые лошади и проводники, знающие каждую тропу.",
    introStats: ["7 программ", "Любой уровень", "Всегда с гидом"],
    toursTitle: "Наши программы",
    toursSub: "С гидом · любой уровень",
    highlightsLabel: "Что входит",
    keyLabel: "Важная информация",
    bookKicker: "Бронирование",
    bookTitle: "Спланируем ваш день на побережье.",
    bookBody:
      "Напишите, какая программа вам интересна и на какую дату. Мы подтвердим в тот же день и встретим вас у ворот конюшни.",
    whatsapp: "Написать в WhatsApp",
    emailLabel: "Эл. почта",
    locationLabel: "Локация",
    locationValue: "Кидфа, Фуджейра",
    qrLabel: "Сканируйте для маршрута",
    formTitle: "Заявка на бронирование",
    formNote:
      "Отправьте детали, и мы подтвердим вашу прогулку в WhatsApp или по телефону.",
    labelName: "Имя",
    labelPhone: "Телефон",
    labelDate: "Желаемая дата",
    labelSlot: "Время",
    labelExp: "Программа",
    labelGuests: "Гости",
    labelNotes: "Сообщение / примечания",
    phName: "Ваше имя",
    phPhone: "+971 5X XXX XXXX",
    phNotes: "Что нам стоит знать? (необязательно)",
    expPlaceholder: "Выберите программу",
    slotPlaceholder: "Выберите время",
    bookingExperiences: [
      "Прогулка по побережью (1 час)",
      "Прогулка по ферме и оазису (1 час)",
      "Семейный опыт с лошадьми (1 - 1,5 часа)",
      "Плавание с лошадьми (1,5 часа)",
      "Верховая прогулка и треккинг (2 часа)",
      "Комбинированный тур - побережье, ферма и природа (2 часа)",
      "VIP: наследие, закат и эмиратский ужин (3,5 - 4 часа)",
    ],
    timeSlots: [
      "07:00 AM - 08:00 AM (Ранняя тишина утра)",
      "08:30 AM - 09:30 AM (Семейная прогулка)",
      "09:30 AM - 10:30 AM (Позднее утро)",
      "04:30 PM - 05:30 PM (Золотой час на закате — рекомендуется)",
      "05:30 PM - 06:30 PM (Вечерние сумерки)",
    ],
    whatsappBook: "Забронировать через WhatsApp",
    sendRequest: "Отправить заявку",
    sending: "Отправляем...",
    toastSuccess: "Спасибо! Ваша заявка на бронирование отправлена.",
    toastError: "Что-то пошло не так. Попробуйте снова или напишите в WhatsApp.",
    waIntro:
      "Здравствуйте, Al Namoos Stables! Я хочу забронировать конную программу:",
    waExp: "Программа: ",
    waDate: "Дата: ",
    waSlot: "Время: ",
    waName: "Имя: ",
    waPhone: "Телефон: ",
    waGuests: "Гости: ",
    waNotes: "Сообщение/Примечания: ",
    footerPlace: "Кидфа, Фуджейра, Объединённые Арабские Эмираты",
    footerMotto: "Кататься · Открывать · Вдохновляться",
    termsTitle: "Условия участия",
    cancellationTitle: "Правила отмены",
    cancellationIntro:
      "Чтобы избежать платы за отмену, просим гостей соблюдать следующие сроки:",
    cancellationTerms: [
      "Утренние программы с 7:00 до 10:30 необходимо отменить не позднее 20:30 дня, предшествующего дате программы.",
      "Дневные программы с 16:30 до 18:30 необходимо отменить не позднее 20:30 дня, предшествующего дате программы.",
      "VIP-программу «Наследие, закат и эмиратский ужин» необходимо отменить не менее чем за 24 часа до начала тура.",
      "При отмене позже указанных сроков, а также при неявке взимается 100% стоимости программы.",
    ],
    terms: [
      "Лошади: одна лошадь на одного участника во всех индивидуальных программах верховой езды.",
      "Обратите внимание: лошади арабской породы не входят в распределение лошадей для верховой езды и не предоставляются гостям.",
      "Возраст: программы у моря и на природе доступны гостям от 7 лет. Дети 4–11 лет могут кататься в манеже под присмотром инструктора.",
      "Вес: максимум 90 кг на всадника, включая снаряжение.",
      "Безопасность: все программы проходят под наблюдением профессионального инструктора, с инструктажем и защитным шлемом.",
      "Отказ от ответственности: перед началом все участники подписывают соответствующий документ.",
      "Шлемы: предоставляются и обязательны для всех видов верховой езды.",
      "Дети: лошадь подбирается по возрасту, росту и опыту ребёнка.",
      "Общение с лошадьми: только по указаниям и рекомендациям команды.",
      "Присутствие родителей: родитель или опекун должен присутствовать на детских активностях.",
      "Погода и море: все маршруты и купание с лошадьми зависят от погоды, волн и приливов. Ради безопасности гостей и лошадей гид может скорректировать программу.",
      "Минимальное бронирование: 2 гостя.",
    ],
    tours: [
      {
        image: coastalAsset.url,
        tag: "Побережье",
        title: "Прогулка по побережью",
        subtitle: "Спокойная конная прогулка вдоль моря",
        duration: "1 час",
        intro:
          "Живописная конная прогулка вдоль побережья Кидфы, где морской бриз и шум волн сопровождают вас всю дорогу. Спокойный темп позволяет насладиться природой Фуджейры и создать незабываемые моменты у моря.",
        highlights: [
          "Прогулка верхом вдоль побережья",
          "Лошадь и всё необходимое снаряжение",
          "Профессиональный инструктор",
          "Инструктаж по безопасности и защитный шлем",
          "Полное сопровождение на протяжении прогулки",
          "Бутилированная вода и возможности для фото",
        ],
        key: ["Одна лошадь на гостя", "Минимальное бронирование — 2 гостя"],
      },
      {
        image: farmOasisAsset.url,
        tag: "Ферма и оазис",
        title: "Прогулка по ферме и оазису",
        subtitle: "Путешествие по зелени Фуджейры",
        duration: "1 час",
        intro:
          "Откройте другую сторону Фуджейры — спокойная конная прогулка по ферме. В окружении зелени, финиковых пальм и природных пейзажей насладитесь тишиной и сельской красотой региона.",
        highlights: [
          "Прогулка верхом по ферме и зелёному оазису",
          "Лошадь и всё необходимое снаряжение",
          "Профессиональный инструктор",
          "Инструктаж по безопасности и защитный шлем",
          "Полное сопровождение на протяжении прогулки",
          "Бутилированная вода и возможности для фото",
        ],
        key: ["Одна лошадь на гостя", "Минимальное бронирование — 2 гостя"],
      },
      {
        image: familyExpAsset.url,
        tag: "Семейный",
        title: "Семейная программа с лошадьми",
        subtitle: "Особое знакомство с миром лошадей",
        duration: "1–1,5 часа",
        intro:
          "Запоминающаяся семейная программа, знакомящая детей и родителей с миром лошадей. Узнайте об их характере и поведении, основах ухода и проведите время вместе в спокойной и дружелюбной атмосфере.",
        highlights: [
          "Знакомство с лошадьми",
          "Общение с лошадьми под присмотром",
          "Основы ухода за лошадьми",
          "Катание ребёнка в манеже под присмотром инструктора",
          "Инструктаж по безопасности и защитный шлем",
          "Возможности для фото",
          "Дополнительный ребёнок — по предварительному запросу",
        ],
        key: ["Семья: 2 взрослых + 1 ребёнок"],
      },
      {
        image: swimmingAsset.url,
        tag: "Море",
        title: "Купание с лошадьми",
        subtitle: "Когда прогулка встречает море",
        duration: "1,5 часа",
        intro:
          "Продолжите прогулку по побережью и испытайте нечто особенное — вход в море вместе с лошадью. Прогулка вдоль берега плавно переходит в освежающее купание с лошадьми под профессиональным наблюдением нашей команды.",
        highlights: [
          "Прогулка верхом вдоль побережья",
          "Купание с лошадьми в море",
          "Лошадь и всё необходимое снаряжение",
          "Профессиональный инструктор",
          "Инструктаж по безопасности и защитный шлем",
          "Помощь с фото- и видеосъёмкой",
          "Бутилированная вода",
        ],
        key: [
          "Одна лошадь на гостя",
          "Минимальное бронирование — 2 гостя",
          "Одежда может намокнуть — возьмите сменную одежду и полотенце",
          "Зависит от погоды, состояния моря и условий безопасности",
        ],
      },
      {
        image: trekkingAsset.url,
        tag: "Горы",
        title: "Конная прогулка и треккинг",
        subtitle: "От седла к горам Хаджар",
        duration: "2 часа",
        intro:
          "Сочетание верховой езды и живописного похода по горным пейзажам Фуджейры. Программа начинается с прогулки верхом, а затем продолжается пешком рядом с лошадью к живописной смотровой площадке в горах.",
        highlights: [
          "Живописная прогулка верхом",
          "Горный маршрут",
          "Пеший участок рядом с лошадью",
          "Лошадь и всё необходимое снаряжение",
          "Профессиональный инструктор",
          "Инструктаж по безопасности и защитный шлем",
          "Бутилированная вода и возможности для фото",
        ],
        key: ["Одна лошадь на гостя", "Минимальное бронирование — 2 гостя"],
      },
      {
        image: combinedAsset.url,
        tag: "Комбинированный",
        title: "Полный комбинированный тур",
        subtitle: "Побережье • Ферма • Природа",
        duration: "2 часа",
        intro:
          "Откройте сразу несколько сторон Фуджейры в одной программе. Это разнообразное конное путешествие сочетает красоту побережья со спокойной атмосферой действующей фермы и зелёного оазиса.",
        highlights: [
          "Конная программа с гидом",
          "Прогулка вдоль побережья",
          "Ферма и зелёный оазис",
          "Лошадь и всё необходимое снаряжение",
          "Профессиональный инструктор",
          "Инструктаж по безопасности и защитный шлем",
          "Бутилированная вода и возможности для фото",
        ],
        key: ["Одна лошадь на гостя", "Минимальное бронирование — 2 гостя"],
      },
      {
        image: vipAsset.url,
        tag: "VIP",
        title: "VIP: наследие, закат и эмиратский ужин",
        subtitle: "Эксклюзивный вечер в Фуджейре",
        duration: "3,5–4 часа",
        intro:
          "Почувствуйте атмосферу Фуджейры на закате — эксклюзивная программа, объединяющая природу, культуру и традиционное эмиратское гостеприимство. Премиальная прогулка верхом вдоль побережья на закате, купание с лошадьми и ужин в частном VIP-маджлисе.",
        highlights: [
          "Частный трансфер из выбранных отелей Диббы, Хор-Факкана и Фуджейры",
          "Прогулка верхом вдоль побережья на закате",
          "Купание с лошадьми в Аравийском море",
          "Традиционное эмиратское гостеприимство в VIP-маджлисе",
          "Свежий напиток из каркаде, арабский кофе и финики",
          "Аутентичный эмиратский ужин",
          "Профессиональный гид и инструктор",
          "Лошадь и снаряжение, включая защитный шлем",
          "Помощь с фото- и видеосъёмкой",
          "Бутилированная питьевая вода",
        ],
        key: [
          "Одна лошадь на гостя",
          "Минимальное бронирование — 2 гостя",
          "Одежда может намокнуть — возьмите сменную одежду и полотенце",
        ],
      },
    ],
    info: [
      {
        title: "Где",
        body: "Кидфа, Фуджейра — на восточном побережье ОАЭ, между горами и морем.",
      },
      {
        title: "Когда",
        body: "Прогулки почти каждый день, утром и ближе к вечеру. Прогулки по побережью лучше всего во время отлива.",
      },
      {
        title: "Что надеть",
        body: "Закрытая удобная обувь и удобная одежда для верховой езды. Лошади, снаряжение, шлемы, гид и бутилированная вода включены.",
      },
    ],
  },
} as const;

const labelCls =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-gold";
const inputCls =
  "w-full rounded-xl bg-cream/95 px-4 py-3 text-sm text-foreground ring-1 ring-transparent outline-none transition placeholder:text-foreground/50 focus:ring-gold";

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "",
    slot: "",
    exp: "",
    guests: "2",
    notes: "",
  });
  const [sending, setSending] = useState(false);

  const setB = (key: keyof typeof booking, value: string) =>
    setBooking((b) => ({ ...b, [key]: value }));

  const aspect: Record<string, string> = {
    [combinedAsset.url]: "wide",
    [vipAsset.url]: "square",
  };

  const openWhatsApp = () => {
    const lines = [
      t.waIntro,
      `* ${t.waExp}${booking.exp}`,
      `* ${t.waDate}${booking.date}`,
      `* ${t.waSlot}${booking.slot}`,
      `* ${t.waName}${booking.name}`,
      `* ${t.waPhone}${booking.phone}`,
      `* ${t.waGuests}${booking.guests}`,
      `* ${t.waNotes}${booking.notes || "-"}`,
    ];
    window.open(
      `https://wa.me/971527468877?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noreferrer",
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cb430900-c11a-4872-8e62-0e0eb9a210a8",
          subject: `Booking request — ${booking.exp || "Riding experience"}`,
          from_name: "Al Namoos Stables Website",
          name: booking.name,
          phone: booking.phone,
          preferred_date: booking.date,
          time_slot: booking.slot,
          experience: booking.exp,
          guests: booking.guests,
          notes: booking.notes,
        }),
      });
      if (!res.ok) throw new Error(`Web3Forms responded ${res.status}`);
      toast.success(t.toastSuccess);
      setBooking({
        name: "",
        phone: "",
        date: "",
        slot: "",
        exp: "",
        guests: "2",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(t.toastError);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Al Namoos Stables logo"
              className="h-10 w-auto rounded-md"
            />
            <div className="leading-tight">
              <p className="font-display text-lg font-medium tracking-tight">
                Al Namoos Stables
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Qidfa · Fujairah
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#tours" className="transition-colors hover:text-foreground">
              {t.navTours}
            </a>
            <a href="#info" className="transition-colors hover:text-foreground">
              {t.navVisit}
            </a>
            <a href="#terms" className="transition-colors hover:text-foreground">
              {t.navTerms}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div
              className="flex rounded-full ring-1 ring-border"
              role="group"
              aria-label="Language"
            >
              {(["en", "ru"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/971527468877"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest-deep"
            >
              {t.bookButton}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroAsset.url}
          alt="An Arabian horse and rider on the Qidfa beach at sunset"
          className="h-[78vh] min-h-[520px] w-full animate-[drift_20s_ease-in-out_infinite] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2 text-xs font-medium text-forest-deep ring-1 ring-cream/60 backdrop-blur-md animate-[rise_0.9s_ease_both]">
              <span className="size-1.5 rounded-full bg-gold" />
              {t.heroBadge}
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-cream animate-[rise_0.9s_ease_0.15s_both] md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 animate-[rise_0.9s_ease_0.3s_both] md:text-lg">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-2 animate-[rise_0.9s_ease_0.45s_both]">
              {t.tours.slice(0, 4).map((tour) => (
                <a
                  key={tour.title}
                  href="#tours"
                  className="rounded-full bg-cream/15 px-4 py-2 text-sm font-medium text-cream ring-1 ring-cream/30 backdrop-blur-md transition-colors hover:bg-cream/25"
                >
                  {tour.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t.introKicker}
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance">
              {t.introTitle}
            </h2>
          </div>
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border">
            <p className="text-base leading-relaxed text-foreground/80 text-pretty">
              {t.introBody}
            </p>
            <div className="mt-6 flex gap-6 border-t border-border pt-5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {t.introStats.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-10">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            {t.toursTitle}
          </h2>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            {t.toursSub}
          </span>
        </div>
        <div className="mt-10 space-y-8">
          {t.tours.map((tour, idx) => (
            <article
              key={tour.title}
              className="grid overflow-hidden rounded-3xl bg-card ring-1 ring-border md:grid-cols-2"
            >
              {tour.image === combinedAsset.url ? (
                <div
                  className={`grid self-center overflow-hidden ${
                    idx % 2 === 1 ? "md:order-last" : ""
                  }`}
                >
                  <img
                    src={tour.image}
                    alt={`${tour.title} — coast and nature`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <img
                    src={combinedFarmRiderAsset.url}
                    alt={`${tour.title} — farm and oasis ride`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover object-[center_38%]"
                  />
                </div>
              ) : (
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className={`h-64 w-full object-cover md:self-center ${
                    aspect[tour.image] === "square"
                      ? "md:aspect-square md:h-auto"
                      : "md:h-full"
                  } ${idx % 2 === 1 ? "md:order-last" : ""}`}
                />
              )}
              <div className="p-7 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {tour.tag}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
                    {tour.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {tour.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-foreground/70">
                  {tour.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70 text-pretty">
                  {tour.intro}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {t.highlightsLabel}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/70">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {t.keyLabel}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {tour.key.map((k) => (
                    <li
                      key={k}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/70"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practical info */}
      <section id="info" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {t.info.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl bg-secondary p-6 ring-1 ring-border"
            >
              <h3 className="font-display text-lg font-medium">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {i.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16">
        <h2 className="border-b border-border pb-4 font-display text-3xl font-medium tracking-tight">
          {t.termsTitle}
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {t.terms.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-card p-5 text-sm leading-relaxed text-foreground/70 ring-1 ring-border"
            >
              <span className="text-gold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="font-display text-2xl font-medium tracking-tight">
            {t.cancellationTitle}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/70">
            {t.cancellationIntro}
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {t.cancellationTerms.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl bg-card p-5 text-sm leading-relaxed text-foreground/70 ring-1 ring-border"
              >
                <span className="text-gold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
        <div className="overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t.bookKicker}
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-balance">
                {t.bookTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 text-pretty">
                {t.bookBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/971527468877"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold"
              >
                {t.whatsapp}
              </a>
              <a
                href="https://www.instagram.com/alnamoosstables"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/40 transition-colors hover:bg-primary-foreground/10"
              >
                @alnamoosstables
              </a>
            </div>
          </div>

          <form
            method="POST"
            action="https://api.web3forms.com/submit"
            onSubmit={handleSubmit}
            className="mt-10 border-t border-primary-foreground/20 pt-8"
          >
            <input
              type="hidden"
              name="access_key"
              value="cb430900-c11a-4872-8e62-0e0eb9a210a8"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <h3 className="font-display text-2xl font-medium">{t.formTitle}</h3>
            <p className="mt-1 text-sm text-primary-foreground/75">
              {t.formNote}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="bk-name" className={labelCls}>
                  {t.labelName}
                </label>
                <input
                  id="bk-name"
                  name="name"
                  required
                  value={booking.name}
                  onChange={(e) => setB("name", e.target.value)}
                  placeholder={t.phName}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="bk-phone" className={labelCls}>
                  {t.labelPhone}
                </label>
                <input
                  id="bk-phone"
                  name="phone"
                  type="tel"
                  required
                  value={booking.phone}
                  onChange={(e) => setB("phone", e.target.value)}
                  placeholder={t.phPhone}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="bk-date" className={labelCls}>
                  {t.labelDate}
                </label>
                <input
                  id="bk-date"
                  name="preferred_date"
                  type="date"
                  required
                  value={booking.date}
                  onChange={(e) => setB("date", e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="bk-slot" className={labelCls}>
                  {t.labelSlot}
                </label>
                <select
                  id="bk-slot"
                  name="time_slot"
                  required
                  value={booking.slot}
                  onChange={(e) => setB("slot", e.target.value)}
                  className={inputCls}
                >
                  <option value="" disabled>
                    {t.slotPlaceholder}
                  </option>
                  {t.timeSlots.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bk-exp" className={labelCls}>
                  {t.labelExp}
                </label>
                <select
                  id="bk-exp"
                  name="experience"
                  required
                  value={booking.exp}
                  onChange={(e) => setB("exp", e.target.value)}
                  className={inputCls}
                >
                  <option value="" disabled>
                    {t.expPlaceholder}
                  </option>
                  {t.bookingExperiences.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bk-guests" className={labelCls}>
                  {t.labelGuests}
                </label>
                <select
                  id="bk-guests"
                  name="guests"
                  value={booking.guests}
                  onChange={(e) => setB("guests", e.target.value)}
                  className={inputCls}
                >
                  {Array.from({ length: 10 }, (_, i) => String(i + 1)).map(
                    (n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ),
                  )}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="bk-notes" className={labelCls}>
                  {t.labelNotes}
                </label>
                <textarea
                  id="bk-notes"
                  name="notes"
                  rows={3}
                  value={booking.notes}
                  onChange={(e) => setB("notes", e.target.value)}
                  placeholder={t.phNotes}
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openWhatsApp}
                className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold"
              >
                {t.whatsappBook}
              </button>
              <button
                type="submit"
                disabled={sending}
                className="rounded-full bg-primary-foreground/10 px-6 py-3 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/40 transition-colors hover:bg-primary-foreground/20 disabled:opacity-60"
              >
                {sending ? t.sending : t.sendRequest}
              </button>
            </div>
          </form>

          <div className="mt-10 grid gap-6 border-t border-primary-foreground/20 pt-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/alnamoosstables"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm text-primary-foreground/85 underline-offset-4 hover:underline"
              >
                @alnamoosstables
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t.emailLabel}
              </p>
              <a
                href="mailto:alnamoosstable@gmail.com"
                className="mt-2 block break-all text-sm text-primary-foreground/85 underline-offset-4 hover:underline"
              >
                alnamoosstable@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {t.locationLabel}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/85">
                {t.locationValue}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src={qrAsset.url}
                alt={t.qrLabel}
                className="h-24 w-24 rounded-lg bg-cream p-1"
              />
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                {t.qrLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Al Namoos Stables"
              className="h-8 w-auto rounded"
            />
            <span className="font-display text-base font-medium text-foreground">
              Al Namoos Stables
            </span>
          </div>
          <span>{t.footerPlace}</span>
          <span>{t.footerMotto}</span>
        </div>
      </footer>
    </div>
  );
}
