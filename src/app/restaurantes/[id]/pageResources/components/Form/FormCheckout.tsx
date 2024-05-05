import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TOrderStep } from '../SidebarCart'

const formCheckoutSchema = z.object({
  nameInCard: z
    .string({ required_error: 'Digite o nome do cartão' })
    .min(1, 'Digite o nome do cartão'),
  yearOfExpiration: z
    .string({
      required_error: 'Digite o ano de expiração do cartão',
    })
    .min(1, 'Digite o ano de expiração do cartão'),
  monthOfExpiration: z
    .string({
      required_error: 'Digite o mês de expiração do cartão',
    })
    .min(1, 'Digite o mês de expiração do cartão'),
  codeOfCard: z.string().length(3, 'Código do cartão inválido'),
  numberInCard: z.coerce
    .string({
      required_error: 'Digite o número do cartão',
    })
    .length(16, 'Número do cartão inválido'),
})

type TFormCheckoutSchema = z.infer<typeof formCheckoutSchema>

type TFormCheckoutProps = {
  orderStep?: TOrderStep
  handleOrderStep: (step: TOrderStep) => void
}

export default function FormCheckout({ handleOrderStep }: TFormCheckoutProps) {
  const { register, handleSubmit, formState } = useForm<TFormCheckoutSchema>({
    resolver: zodResolver(formCheckoutSchema),
  })

  const handleSubmitCheckoutForm = (data: TFormCheckoutSchema) => {
    console.log(data)
    handleOrderStep('success')
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitCheckoutForm)}
      className="flex flex-col space-y-2"
    >
      <b className="font-bold text-efood-beige-200">Entrega</b>

      <div className="flex flex-col">
        <label
          className="text-[14px] font-bold text-efood-beige-200"
          htmlFor=""
        >
          Nome no cartão
        </label>
        <input
          {...register('nameInCard')}
          className="mt-2 h-8 bg-efood-beige-200"
          type="text"
        />
        {formState.errors.nameInCard?.message && (
          <p className="text-[12px] text-red-200">
            {formState.errors.nameInCard?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-[14px] font-bold text-efood-beige-200"
          htmlFor=""
        >
          Numero do cartão
        </label>
        <input
          {...register('numberInCard')}
          className="mt-2 h-8 bg-efood-beige-200"
          type="text"
        />
        {formState.errors.numberInCard?.message && (
          <p className="text-[12px] text-red-200">
            {formState.errors.numberInCard?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-[14px] font-bold text-efood-beige-200"
          htmlFor=""
        >
          CVV
        </label>
        <input
          {...register('codeOfCard')}
          className="mt-2 h-8 bg-efood-beige-200"
          type="text"
        />
        {formState.errors.codeOfCard?.message && (
          <p className="text-[12px] text-red-200">
            {formState.errors.codeOfCard?.message}
          </p>
        )}
      </div>

      <div className="flex w-full gap-8">
        <div className="w-full">
          <label
            className="text-[14px] font-bold text-efood-beige-200"
            htmlFor=""
          >
            Mês de vencimento
          </label>
          <input
            {...register('monthOfExpiration')}
            className="mt-2 h-8 w-full bg-efood-beige-200"
            type="text"
          />
          {formState.errors.monthOfExpiration?.message && (
            <p className="text-[12px] text-red-200">
              {formState.errors.monthOfExpiration?.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <label
            className="text-[14px] font-bold text-efood-beige-200"
            htmlFor=""
          >
            Número
          </label>
          <input
            {...register('yearOfExpiration')}
            className="mt-2 h-8 w-full bg-efood-beige-200"
            type="text"
          />
          {formState.errors.yearOfExpiration?.message && (
            <p className="text-[12px] text-red-200">
              {formState.errors.yearOfExpiration?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col">
        <button
          type="submit"
          className="mt-4 bg-efood-beige-200 font-bold text-efood-red-100"
        >
          Continuar com o pagamento
        </button>
        <button
          onClick={() => handleOrderStep('cart')}
          className="mt-2 bg-efood-beige-200 font-bold text-efood-red-100"
        >
          Voltar para o carrinho
        </button>
      </div>
    </form>
  )
}
