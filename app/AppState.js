import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Snacks } from "./models/Snacks.js"
class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])



  money = 0



  Snacks = [
    new Snacks({ name: 'Oreo', price: '1.50', imgUrl: "https://images.unsplash.com/photo-1634033709885-e761a0ff5634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80" }),
    new Snacks({ name: 'RedBull', price: '2', imgUrl: "https://images.unsplash.com/photo-1570526427001-9d80d114054d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVkYnVsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }),
  ]




  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
