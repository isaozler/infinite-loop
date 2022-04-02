import { select, arc, easeElasticOut } from 'd3'
import type { Selection } from 'd3-selection'
import data from './data.json'
import colors from './colors.json'

type Select = Selection<any, any, any, any> | undefined

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
  arcTransitionDelay: 100,
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
  const startAngle = index === 0 ? 0 : ((index) * div)
  const endAngle = (index + 1) * div
  const angleOffset = half < 3 ? -(config.size / 2) * (div / 2) : (config.size / 2) * (div / 2)
  const innerRadius = config.outerRadius - config.arcWidth
  const arcShape = arc()
    .innerRadius(innerRadius)
    .outerRadius(config.outerRadius)
    .startAngle(startAngle + angleOffset)
    .endAngle(endAngle + angleOffset)

  const path = element
    ?.append('path')
    .classed('arc', true)
    .attr('d', arcShape)
    .attr('data-json', `${JSON.stringify(data[t] || {})}`)
    .attr('data-sa', `${startAngle + angleOffset}`)
    .attr('data-ea', `${endAngle + angleOffset}`)
    .attr('fill', config.colors[half][index])
    .style('opacity', 0)
    .style('transform', 'scale(1.2)')
    .on('click', function () {
      const isActive = select(this).classed('active')
      const _innerRadius = (isActive ? 0 : 20) + innerRadius
      const _outerRadius = (isActive ? 0 : 20) + config.outerRadius
      const _startAngle = startAngle + (!isActive ? angleOffset + 0.05 : angleOffset)
      const _endAngle = endAngle + (!isActive ? angleOffset - 0.05 : angleOffset)
      const data = JSON.parse(select(this).attr('data-json') || "")

      resetArcs()

      select(this)
        .classed('active', !isActive)
        .transition()
        .ease(arcEase)
        .duration(config.arcTweenTransitionDuration)
        .attr('d',
          arc()
            .innerRadius(_innerRadius)
            .outerRadius(_outerRadius)
            .startAngle(_startAngle)
            .endAngle(_endAngle) as any)

      imageLeft?.attr('href', null)
      imageRight?.attr('href', null)

      if (data?.src) {
        if (half === 3 || half === 1) {
          imageRight?.attr('href', data.src)
        } else {
          imageLeft?.attr('href', data.src)
        }
      }
    })

  path?.append('title').text(data[t++]?.title || '')
}

function resetArcs() {
  svg?.selectAll('.arc').classed('active', false).each(function () {
    const _startAngle = +select(this).attr('data-sa')
    const _endAngle = +select(this).attr('data-ea')

    select(this)
      .classed('active', false)
      .transition()
      .ease(arcEase)
      .duration(config.arcTweenTransitionDuration)
      .attr('d',
        arc()
          .innerRadius(config.outerRadius - config.arcWidth)
          .outerRadius(config.outerRadius)
          .startAngle(_startAngle)
          .endAngle(_endAngle) as any)
  })
}

function animateGroups() {
  [4, 2, 3, 1].forEach((half, index) => {
    svg
      ?.selectAll('.group' + half)
      .each(function () {
        const arcs = select(this)
          .selectAll('.arc')
          .each(function (_, i, all) {
            select(this)
              .transition()
              .duration(config.arcTransitionDelay * 2)
              .delay(
                (index * (all.length * (config.arcTransitionDelay))) +
                (
                  (
                    half === 3 || half == 1
                      ? i = (all.length - 1) - i
                      : i
                  )
                  * config.arcTransitionDelay
                )
              )
              .style('opacity', 1)
              .style('transform', 'scale(1)')
          })
      })

  })
}

main()
