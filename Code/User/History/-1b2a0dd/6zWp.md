# burgos-masks
#### hooks for custom number, cpf, cnpj, cardnumber, currency, cep and phone masks

##### useNumberMask
returns a mask that allows only numbers with configurable params. Options are all optional.

```ts
interface Options {
    limit?: number
    allowDecimal?: boolean ## defaults false
    allowLeadingZeroes?: boolean ## defaults false
    prefix?: string
    suffix?: string
    allowNegative?: boolean ## defaults false
    decimalLimit?: number ## defaults 2
}
```

```jsx
import { useNumberMask } from 'burgos-masks'

export const App = () => {
    const mask = useNumberMask({allowDecimal: true}) ## allows decimal
}
```

##### useCardNumberMask
returns a card number formated mask

```jsx
import { useCardNumberMask } from 'burgos-masks'

export const App = () => {
    const mask = useCardNumberMask() ## "0000 0000 0000 0000"
}
```

##### useCepMask
returns a CEP formated mask

```jsx
import { useCepMask } from 'burgos-masks'

export const App = () => {
    const mask = useCepMask() ## "00.000-000"
}
```

##### useCnpjMask
returns a CNPJ formated mask

```jsx
import { useCnpjMask } from 'burgos-masks'

export const App = () => {
    const mask = useCnpjMask() ## "00.000.000/000-00"
}
```

##### useCpfMask
returns a CPF formated mask

```jsx
import { useCpfMask } from 'burgos-masks'

export const App = () => {
    const mask = useCpfMask() ## "000.000.000-00"
}

##### useDocumentMask
returns a Document formated mask

```jsx
import { useDocumentMask } from 'burgos-masks'

export const App = () => {
    const mask = useDocumentMask()
}
```

##### useCurrencyMask
returns a currency formated mask

```jsx
import { useCurrencyMask } from 'burgos-masks'

export const App = () => {
    const mask = useCurrencyMask() ## "R$ 0,00"
}
```

##### usePhoneMask
returns a phone formated mask

```jsx
import { usePhoneMask } from 'burgos-masks'

export const App = () => {
    const mask = usePhoneMask() ## "(00) 0 0000-0000"
}
```