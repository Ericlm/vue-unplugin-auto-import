export function foo(val?: Ref<string>) { // Working with globalThis
  return val
}

export const val: Ref<string> = ref('foo')