import {Dep} from './Dep'

export function Observe(obj: any, vm: any) {
  Object.keys(obj).forEach(function (key) {
    defineReactive(vm, key, obj[key])
  })
}

function defineReactive(obj: any, key: any, val: any) {
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    get: function () {
      if (Dep.target) {
        dep.addDep(Dep.target)
      }
      return val
    },
    set: function (newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}
