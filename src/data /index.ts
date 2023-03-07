import { FunctionComponent, SVGProps } from 'react'
import { ReactComponent as Calendar } from '../assets/icons/calendar.svg'
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
    name: 'Online-Min',
    price: '10 000 грн',
    description: [
      'Теоретичний курс навчання - 5000 грн',
      'Практичний курс навчання ( 10 занять з водіння ) - 5000 грн',
      'Паливо (ПММ)',
      'Література (ПДР)',
      'Вільний графік відвідувань',
      'Внесок від 2500 грн.',
    ],
  },
  {
    name: 'Standard',
    price: '12 500 грн',
    description: [
      'Теоретичний курс навчання - 5000 грн',
      'Практичний курс навчання ( 15 занять з водіння ) - 7500 грн',
      'Паливо (ПММ)',
      'Література (ПДР)',
      'Вільний графік відвідувань',
      'Внесок від 2500 грн.',
    ],
  },
  {
    name: 'Plus',
    price: '15 000 грн',
    description: [
      'Теоретичний курс навчання - 5000 грн',
      'Практичний курс навчання ( 20 занять з водіння ) - 10 000 грн',
      'Паливо (ПММ)',
      'Література (ПДР)',
      'Вільний графік відвідувань',
      'Внесок від 2500 грн.',
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
    icon: Calendar,
    position: '1',
    name: 'Час',
    content: 'У вас є можливість підібрати для себе найбільш зручний графік навчання теорії і практичних занять.',
  },
  {
    icon: Coin,
    position: '2',
    name: 'Комфортна вартість',
    content: 'Вибирайте будь-який з пакетів навчання, кожен з яких включає необхідні навички і різні умови.',
  },
  {
    icon: Time,
    position: '3',
    name: 'Графік оплати',
    content: 'Вибирайте день і час лекцій як Вам зручно і комфортно (будній, вихідний, ранок, день, вечір)',
  },
  {
    icon: Book,
    position: '4',
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
    price: '500 грн',
    time: 'за 60 хвилин',
  },
  {
    type: 'Автомат',
    price: '500 грн',
    time: 'за 60 хвилин',
  },
]
