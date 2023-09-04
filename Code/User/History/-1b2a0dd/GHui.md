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

##### useCepNumberMask
returns a CEP formated mask

```jsx
import { useCepNumberMask } from 'burgos-masks'

export const App = () => {
    const mask = useCepNumberMask() ## "00.000-000"
}
```

##### useCnpjNumberMask
returns a CNPJ formated mask

```jsx
import { useCnpjNumberMask } from 'burgos-masks'

export const App = () => {
    const mask = useCnpjNumberMask() ## "00.000.000/000-00"
}
```

##### useCpfMask
returns a CPF formated mask

```jsx
import { useCpfNumberMask } from 'burgos-masks'

export const App = () => {
    const mask = useCpfNumberMask() ## "000.000.000-00"
}

##### useDocumentMask
returns a Document formated mask

```jsx
import { useDocumentNumberMask } from 'burgos-masks'

export const App = () => {
    const mask = useDocumentNumberMask() ## "000.000.000-00"
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