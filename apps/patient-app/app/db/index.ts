const entries = new Map<string, string>()
let id = 0
export function insert(value: string) {
  const usedId = `${id}`
  entries.set(usedId, value)
  id++
  return Promise.resolve(usedId)
}

export function get(id: string) {
  return Promise.resolve(entries.get(id))
}

export function update(id: string, value: string) {
  entries.set(id, value)
  return Promise.resolve(entries.get(id))
}

export function remove(key: string) {
  entries.delete(key)
  return Promise.resolve()
}
