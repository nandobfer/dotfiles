import { users } from "@prisma/client"

export const passwordTemplate = (user: users) => `
    <div>
        <p>Clique nesse link e insira sua nova senha</p>
        <a href="https://app.mirasuprimentos.com.br/"></a>
    </div>
`
