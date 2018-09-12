import { Watcher } from './Watcher'

export class Dep {
  static target: any
  private deps: any[]

  constructor() {
    this.deps = []
  }

  addDep(watcher: Watcher) {
    if (watcher) {
      this.deps.push(watcher)
    }
  }

  notify() {
    this.deps.forEach((watcher: Watcher) => {
      watcher.update()
    })
  }
}
