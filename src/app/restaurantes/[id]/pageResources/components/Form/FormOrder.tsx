import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TOrderStep } from '../SidebarCart'
import InputMask from 'react-input-mask'

const formOrderSchema = z.object({
  name: z
    .string({ required_error: 'Digite o seu nome' })
    .min(1, 'Digite o seu nome'),
  address: z
    .string({ required_error: 'Digite o seu endereço' })
    .min(1, 'Digite o seu endereço'),
  city: z
    .string({ required_error: 'Digite a sua cidade' })
    .min(1, 'Digite a sua cidade'),
  zipCode: z
    .string({ required_error: 'Digite o seu CEP' })
    .length(9, 'CEP inválido'),
  number: z.coerce
    .number({ required_error: 'Digite o seu número' })
    .min(1, 'Número inválido'),
})

type TFormOrderSchema = z.infer<typeof formOrderSchema>

type TFormOrderProps = {
  orderStep?: TOrderStep
  handleOrderStep: (step: TOrderStep) => void
}

export default function FormOrder({ handleOrderStep }: TFormOrderProps) {
  const { register, handleSubmit, formState } = useForm<TFormOrderSchema>({
    resolver: zodResolver(formOrderSchema),
  })

  const handleSubmitOrderForm = (data: TFormOrderSchema) => {
    console.log(data)
    handleOrderStep('checkout')
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitOrderForm)}
      className="flex flex-col space-y-2"
    >
      <b className="font-bold text-efood-beige-200">Entrega</b>

      <div className="flex flex-col">
        <label
          className="text-[14px] font-bold text-efood-beige-200"
          htmlFor=""
        >
          Quem irá receber?
        </label>
        <input
          {...register('name')}
          className="mt-2 h-8 bg-efood-beige-200 p-2"
          type="text"
        />
        {formState.errors.name?.message && (
          <p className="text-[12px] text-red-200">
            {formState.errors.name?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-[14px] font-bold text-efood-beige-200"
          htmlFor=""
        >
          Endereço
        </label>
        <input
          {...register('address')}
          className="h-8 bg-efood-beige-200 p-2"
          type="text"
        />
        {formState.errors.address?.message && (
          <p className="text-[12px] text-red-200">
            {formState.errors.address?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-[14px] font-bold text-efood-beige-200"
          htmlFor=""
        >
          Cidade
        </label>
        <input
          {...register('city')}
          className="h-8 bg-efood-beige-200 p-2"
          type="text"
        />
        {formState.errors.city?.message && (
          <p className="text-[12px] text-red-200">
            {formState.errors.city?.message}
          </p>
        )}
      </div>

      <div className="flex w-full gap-8">
        <div className="w-full">
          <label
            className="text-[14px] font-bold text-efood-beige-200"
            htmlFor=""
          >
            CEP
          </label>
          <InputMask
            {...register('zipCode')}
            mask="99999-999"
            className="h-8 w-full bg-efood-beige-200 p-2"
            type="text"
          />
          {formState.errors.zipCode?.message && (
            <p className="text-[12px] text-red-200">
              {formState.errors.zipCode?.message}
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
            {...register('number')}
            className="h-8 w-full bg-efood-beige-200 p-2"
            type="text"
          />
          {formState.errors.number?.message && (
            <p className="text-[12px] text-red-200">
              {formState.errors.number?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col">
        <button
          type="submit"
          disabled={formState.isLoading}
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
