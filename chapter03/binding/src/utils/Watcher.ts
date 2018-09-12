import { Dep } from './Dep'

export class Watcher {
  private name: any
  private node: any
  private vm: any
  private nodeType: any
  private value: any

  constructor(vm: any, node: any, name: any, nodeType: any) {
    Dep.target = this
    this.name = name
    this.node = node
    this.vm = vm
    this.nodeType = nodeType
    this.update()

    Dep.target = null
  }

  get() {
    this.value = this.vm[this.name]
  }

  update() {
    this.get()
    if (this.nodeType === 'text') {
      this.node.nodeValue = this.value
    }
    if (this.nodeType === 'input') {
      this.node.value = this.value
    }
    if (this.nodeType === 'p') {
      this.node.innerHTML = this.value
    }
  }
}
