import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter('dateFormat', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})

Vue.filter('textFormat', function (value) {
  const text = value
  if (text.length > 20) {
    return text.slice(0, 20) + '···'
  } else {
    return text
  }
})
