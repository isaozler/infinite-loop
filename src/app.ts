import { select, arc, easeElasticOut, symbol, symbolTriangle } from 'd3'
import type { Select, TAnimationOptions, TArcClickHandler } from './types'

import data from './data.json'
import colors from './colors.json'

let svg: Select;
let t = 0;
let imageLeft: Select;
let imageRight: Select;
let group1: Select;
let group2: Select;
let group3: Select;
let group4: Select;
const arcEase = (t: number) => easeElasticOut.amplitude(2).period(0.3)(t)

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const config = {
  canvas: {
    width: 800,
    height: 600
  },
  size: +params.size || 6,
  outerRadius: +params.radius || 150,
  arcWidth: +params.width || 20,
  arcGrowSize: +params.grow || 14,
  arcTransitionDelay: +params.duration || 100,
  arcTweenTransitionDuration: 2000,
  colors,
} as {
  canvas: {
    width: number
    height: number
  }
  size: number
  outerRadius: number
  arcWidth: number
  arcGrowSize: number
  arcTransitionDelay: number
  arcTweenTransitionDuration: number
  colors: {
    [key: string]: string[]
  }
}

function main() {
  svg = select('svg')
  appendImagePlaceholders()
  initMainGroup()
  const arr = Array.from({ length: config.size / 2 })
  arr.fill({ half: 1, element: group1 }).forEach(appendArc)
  arr.fill({ half: 2, element: group2 }).forEach(appendArc)
  arr.fill({ half: 3, element: group3 }).forEach(appendArc)
  arr.fill({ half: 4, element: group4 }).forEach(appendArc)
  animateGroups()
}

function appendImagePlaceholders() {
  const imageSize = config.outerRadius - config.arcWidth
  const wrapper = svg
    ?.append('g')
    .classed('images', true)
    .attr('width', config.canvas.width)
    .attr('height', config.canvas.height)
    .attr('transform', `translate(${(config.canvas.width / 2)}, ${(config.canvas.height / 2)})`)
  imageLeft = wrapper
    ?.append('image')
    .classed('image-left', true)
    .attr('width', imageSize)
    .attr('height', imageSize)
    .attr('transform', `translate(${-(config.outerRadius + (imageSize / 2)) + (config.arcWidth / 2)}, ${-imageSize / 2})`)
  imageRight = wrapper
    ?.append('image')
    .classed('image-right', true)
    .attr('width', imageSize)
    .attr('height', imageSize)
    .attr('transform', `translate(${((imageSize / 2)) + (config.arcWidth / 2)}, ${-imageSize / 2})`)
}

function initMainGroup() {
  const wrapper = svg
    ?.append('g')
    .classed('wrapper', true)
    .attr('width', config.canvas.width)
    .attr('height', config.canvas.height)
    .attr('transform', `translate(${config.canvas.width / 2}, ${config.canvas.height / 2})`)
  const translateX = config.outerRadius - (config.arcWidth / 2)
  group1 = wrapper?.append('g').classed('group1', true).attr('transform', `translate(${translateX}, 0)`)
  group2 = wrapper?.append('g').classed('group2', true).attr('transform', `translate(-${translateX}, 0)`)
  group4 = wrapper?.append('g').classed('group4', true).attr('transform', `translate(-${translateX}, 0)`)
  group3 = wrapper?.append('g').classed('group3', true).attr('transform', `translate(${translateX}, 0)`)
}

function appendArc(values: unknown, index: number) {
  const { half, element } = values as { half: number; element: Select }
  const div = Math.PI * 2 / config.size
  const isTransitionSlice = half === 3 && index === (config.size / 2) - 1
  const startAngle = index === 0 ? 0 : ((index) * div)
  const endAngle = (index + 1) * div
  const angleOffset = half < 3 ? -(config.size / 2) * (div / 2) : (config.size / 2) * (div / 2)
  const innerRadius = config.outerRadius - config.arcWidth
  const arcShape = arc()
    .innerRadius(innerRadius)
    .outerRadius(config.outerRadius)
    .startAngle(startAngle + angleOffset)
    .endAngle(endAngle + angleOffset)

  const slice = element?.append('g').classed('slice', true)
  slice
    ?.attr('data-is-transition-slice', isTransitionSlice)
    .on('click', function (e) {
      arcSelectHandler.apply(this, [e, { innerRadius, startAngle, angleOffset, endAngle, half }])
    })
  slice
    ?.append('path')
    .classed('arc', true)
    .attr('d', arcShape)
    .attr('data-json', `${JSON.stringify(data[t] || {})}`)
    .attr('data-is-reversed', half === 3 || half === 1)
    .attr('data-sa', `${startAngle + angleOffset}`)
    .attr('data-ea', `${endAngle + angleOffset}`)
    .attr('fill', config.colors[half][index])
    .style('opacity', 0)

  if (isTransitionSlice) {
    slice
      ?.append('path')
      .classed('triangle', true)
      .attr("transform", `translate(-${config.outerRadius - (config.arcWidth / 2)}, ${(config.arcWidth / -10) + 2})`)
      .attr("d", symbol().type(symbolTriangle).size(config.arcWidth * 4))
      .attr('fill', config.colors[half][index])
      .style('opacity', 0)
  }

  slice
    ?.append('title')
    .text(data[t]?.title || '')

  const iconContainer = (config.arcWidth / 5) * 4
  slice
    ?.append('svg:foreignObject')
    .classed('div-icon', true)
    .attr('width', `${iconContainer}px`)
    .attr('height', `${iconContainer}px`)
    .style('opacity', 0)
    .attr('transform', function (d) {
      const [x, y] = arcShape.centroid(d)
      return `translate(${x - (iconContainer / 2)}, ${y - (iconContainer / 2)})`
    })
    .append('xhtml:body')
    .html(`<i class="las ${data[t]?.icon}"></i>`)

  if (data[t]?.hasAlert) {
    slice
      ?.append('circle')
      .classed('div-notification', true)
      .attr('r', 10)
      .attr('cx', 5)
      .attr('cy', 5)
      .style('opacity', 0)
      .attr('transform', function (d) {
        const [x, y] = arc()
          .innerRadius(innerRadius)
          .outerRadius((2 * config.arcWidth) + (config.outerRadius - 20))
          .startAngle(startAngle + angleOffset)
          .endAngle(endAngle + angleOffset).centroid(d)
        return `translate(${x - 5}, ${y - 5})`
      })
  }

  t++
}

function arcSelectHandler(this: SVGGElement, _: PointerEvent, options: TArcClickHandler) {
  const { innerRadius, startAngle, angleOffset, endAngle, half } = options
  const slice = select(this)
  const path = slice.select('path')
  const isActive = slice.classed('active')
  const data = JSON.parse(path.attr('data-json') || '')
  const isReversedOrder = half === 3 || half == 1

  resetArcs()

  slice?.classed('active', !isActive)

  if (!isActive) {
    path
      .transition()
      .ease(arcEase)
      .duration(config.arcTweenTransitionDuration)
      .attr('d', (d: any) => {
        const _startAngle = isReversedOrder ? endAngle : startAngle
        const _endAngle = isReversedOrder ? startAngle : endAngle
        return arc()
          .innerRadius(innerRadius)
          .outerRadius(config.outerRadius + config.arcGrowSize)
          .startAngle(_startAngle + angleOffset)
          .endAngle(_endAngle + angleOffset)(d) as any
      })
  }

  imageLeft?.attr('href', null)
  imageRight?.attr('href', null)

  if (data?.src) {
    if (half === 3 || half === 1) {
      imageRight?.attr('href', data.src)
    } else {
      imageLeft?.attr('href', data.src)
    }
  }
}

function resetArcs() {
  svg
    ?.selectAll('.slice')
    .classed('active', false)
    .each(function () {
      const arcElement = select(this).select('.arc')
      let _startAngle = +arcElement.attr('data-sa')
      let _endAngle = +arcElement.attr('data-ea')
      const isReversedOrder = arcElement.attr('data-is-reversed') === "true"
      select(this).classed('active', false)

      arcElement
        .transition()
        .ease(arcEase)
        .duration(config.arcTweenTransitionDuration)
        .attr('d',
          (d: any) => {
            const __startAngle = isReversedOrder ? _endAngle : _startAngle
            const __endAngle = isReversedOrder ? _startAngle : _endAngle
            return arc()
              .innerRadius(config.outerRadius - config.arcWidth)
              .outerRadius(config.outerRadius)
              .startAngle(__startAngle)
              .endAngle(__endAngle)(d) as any
          })
    })
}

function animateGroups() {
  [4, 2, 3, 1].forEach((half, index) => {
    svg
      ?.selectAll('.group' + half)
      .each(function () {
        select(this)
          .selectAll('.slice')
          .each(function (_, i, all) {
            const arcElement = select(this).select('.arc')
            const iconElement = select(this).select('.div-icon')
            const circleElement = select(this).select('.div-notification')

            animateIn(arcElement, { index, all, half, i, hasScaling: true })
            animateIn(iconElement, { index, all, half, i, delay: config.arcTransitionDelay * 10 })
            animateIn(circleElement, { index, all, half, i, delay: config.arcTransitionDelay * 10 })
            select(this).select('.triangle')
              .transition()
              .duration(config.arcTransitionDelay * 2)
              .delay(
                (index * (all.length * config.arcTransitionDelay))
                + ((i - (config.size / 2)) * config.arcTransitionDelay)
                + config.arcTransitionDelay
              )
              .style('opacity', 1)
          })
      })

  })
}


function animateIn(element: Select, options: TAnimationOptions) {
  if (!element) return

  const { index, all, half, delay, hasScaling } = options
  let { i } = options
  const isReversedOrder = half === 3 || half == 1
  const delayValue = (index * (all.length * (config.arcTransitionDelay))) +
    (
      (
      isReversedOrder
        ? i = (all.length - 1) - i
        : i
    )
    * config.arcTransitionDelay
  )

  if (hasScaling) {
    const startAngle = +element.attr('data-sa')
    const endAngle = +element.attr('data-ea')
    let _startAngle = startAngle
    let _endAngle = endAngle

    element.transition()
      .duration(delay || config.arcTransitionDelay * 2)
      .delay(delayValue)
      .attrTween('d', (d: any) => {
        return (t: number) => {
          const diffAngle = endAngle - startAngle
          _startAngle = isReversedOrder ? endAngle : startAngle
          _endAngle = isReversedOrder ? endAngle - (t * diffAngle) : startAngle + (t * diffAngle)
          return arc()
            .innerRadius(config.outerRadius - config.arcWidth)
            .outerRadius(config.outerRadius)
            .startAngle(_startAngle)
            .endAngle(_endAngle)(d) as any
        }
      })
      .attr('data-sa', _startAngle)
      .attr('data-ea', _endAngle)
      .style('opacity', 1)
  } else {
    element.transition()
      .duration(delay || config.arcTransitionDelay * 2)
      .delay(delayValue)
      .style('opacity', 1)
  }
}

main()
