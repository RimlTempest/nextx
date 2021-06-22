# headless UI

Headless Component とは一般的にはスタイルを持たない Component のことを指し headlessui/react から提供されています。
これは Tailwind Labs によって作成されているため Tailwind と高い親和性を持っています。
TypeScript の strict モードにも対応しているため TypeScript との親和性も高いです。

## 使い方

```TypeScript
import { Transition } from '@headlessui/react'
import { useState } from 'react'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        I will fade in and out
      </Transition>
    </>
  )
}
```

このようにスタイルを細かく設定できます。
