# tailwind

*Tailwind CSS* は高度にカスタマイズ可能な低レベルの *CSS フレームワーク*

## 使い方

```html
<div class="md:flex">
  <div class="md:flex-shrink-0">
    <img
      class="rounded-lg md:w-56"
      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      alt="Woman paying for a purchase"
    />
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
      >新たな顧客を見つける</a
    >
    <p class="mt-2 text-gray-600">
      新規事業を立ち上げるのは大変な作業です。
      最初の顧客を見つけるために使用できる5つのアイデアを次に示します。
    </p>
  </div>
</div>
```

このように *class / className* に簡易的に記述できます。
