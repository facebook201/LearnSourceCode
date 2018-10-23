import * as C from './constant'

// 给时间补位 1月份 补位 01 
const padStart = (string, length, pad) => {
  const s = String(string)
  // 判断是否有s 且长度 不能大于参数长度
  if (!s || s.length >= length) return string
  // [undefined, undefined].join('0') '0'
  // '0' + string
  return `${Array((length + 1) - s.length).join(pad)}${string}`
}

const padZoneStr = (negMinuts) => {
  const minutes = Math.abs(negMinuts)
  const hourOffset = Math.floor(minutes / 60)
  const minuteOffset = minutes % 60
  return `${negMinuts <= 0 ? '+' : '-'}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}`
}

const monthDiff = (a, b) => {
  // function from moment.js in order to keep the same result
  const wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month())
  const anchor = a.clone().add(wholeMonthDiff, 'months')
  const c = b - anchor < 0
  const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), 'months')
  return Number(-(wholeMonthDiff + ((b - anchor) / (c ? (anchor - anchor2) : (anchor2 - anchor)))))
}

const absFloor = n => (n < 0 ? Math.ceil(n) || 0 : Math.floor(n))

const prettyUnit = (u) => {
  const special = {
    M: C.M,
    y: C.Y,
    w: C.W,
    d: C.D,
    h: C.H,
    m: C.MIN,
    s: C.S,
    ms: C.MS
  }
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '')
}

const isUndefined = s => s === undefined

export default {
  padStart,
  padZoneStr,
  monthDiff,
  absFloor,
  prettyUnit,
  isUndefined
}