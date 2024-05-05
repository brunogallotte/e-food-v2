import { randomBytes } from 'crypto'

export default function FormSuccess() {
  return (
    <div className="flex flex-col text-efood-beige-200">
      <b>Pedido realizado - {randomBytes(2)}</b>

      <div className="mt-4 space-y-6 text-[14px]">
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </div>
    </div>
  )
}
