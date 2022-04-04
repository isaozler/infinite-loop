import type { BaseType } from 'd3'
import type { Selection } from 'd3-selection'

export type Select = Selection<any, any, any, any> | undefined

export type TAnimationOptions = {
  index: number
  all: BaseType[] | ArrayLike<BaseType>
  half: number
  i: number
  delay?: number
  hasScaling?: boolean
}

export type TArcClickHandler = {
  innerRadius: number
  startAngle: number
  angleOffset: number
  endAngle: number
  half: number
}
