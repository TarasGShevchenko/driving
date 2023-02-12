import { FunctionComponent, SVGProps } from 'react'
import { ReactComponent as Car } from '../assets/icons/car.svg'
import { ReactComponent as Calendar } from '../assets/icons/calendar.svg'
import { ReactComponent as User } from '../assets/icons/user.svg'
import { ReactComponent as Coin } from '../assets/icons/coin.svg'
import { ReactComponent as Time } from '../assets/icons/time.svg'
import { ReactComponent as Book } from '../assets/icons/book.svg'

export type Card = {
  name: string
  price: string
  description: string[]
}

export const cards: Card[] = [
  {
    name: 'Online',
    price: '8 000 грн',
    description: [
      'Теоретичний курс навчання - 3000 грн',
      'Практичний курс навчання ( 10 занять з водіння ) - 5000 грн',
      'Паливо (ПММ)',
      'Медична довідка водія',
      'Література (ПДР)',
      'Вільний графік відвідувань',
      'Внесок від 1500 грн.',
    ],
  },
  {
    name: 'Standard',
    price: '11 000 грн',
    description: [
      'Теоретичний курс навчання - 4000 грн',
      'Практичний курс навчання ( 15 занять з водіння ) - 7000 грн',
      'Паливо (ПММ)',
      'Медична довідка водія',
      'Література (ПДР)',
      'Вільний графік відвідувань',
      'Внесок від 2000 грн.',
    ],
  },
  {
    name: 'Plus',
    price: '13 000 грн',
    description: [
      'Теоретичний курс навчання - 4000 грн',
      'Практичний курс навчання ( 20 занять з водіння ) - 9000 грн',
      'Паливо (ПММ)',
      'Медична довідка водія',
      'Література (ПДР)',
      'Вільний графік відвідувань',
      'Внесок від 2000 грн.',
    ],
  },
]

export type AdvantagesItem = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  position: string
  name: string
  content: string
}

export const advantages: AdvantagesItem[] = [
  {
    icon: Car,
    position: '1',
    name: 'Автомобіль',
    content:
      'Ви можете вибрати будь-який автомобіль з нашого автопарку з механічною або автоматичною коробкою передач.',
  },
  {
    icon: Calendar,
    position: '2',
    name: 'Час',
    content: 'У вас є можливість підібрати для себе найбільш зручний графік навчання теорії і практичних занять.',
  },
  {
    icon: User,
    position: '3',
    name: 'Інструктори водіння',
    content: 'Всі наші інструктори мають високий рівень підготовки. Всі професіонали до ваших послуг!',
  },
  {
    icon: Coin,
    position: '4',
    name: 'Комфортна вартість',
    content: 'Вибирайте будь-який з пакетів навчання, кожен з яких включає необхідні навички і різні умови.',
  },
  {
    icon: Time,
    position: '5',
    name: 'Графік оплати',
    content: 'Вибирайте день і час лекцій як Вам зручно і комфортно (будній, вихідний, ранок, день, вечір)',
  },
  {
    icon: Book,
    position: '6',
    name: 'Література та ресурси',
    content:
      'Купуючи будь-який з пакетів навчання ви отримуєте в подарунок книги та доступи до ресурсів. Якими вони будуть-вибирати вам!',
  },
]

export type IndividuallyType = {
  type: string
  price: string
  time: string
}

export const individuals: IndividuallyType[] = [
  {
    type: 'Механіка',
    price: '600 грн',
    time: 'за 60 хвилин',
  },
  {
    type: 'Автомат',
    price: '600 грн',
    time: 'за 60 хвилин',
  },
]
