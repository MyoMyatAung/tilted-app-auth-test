import React from 'react'
import Input from '../shared/form/Input'
import AuthFormBtn from '../shared/form/AuthFormBtn'
import EyeCloseIcon from "../../assets/icons/eye-close-icon.svg"
import LockIcon from "../../assets/icons/lock-icon.svg"
import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordInput, passwordSchema } from '../../libs/schemas/auth.schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ApiClient } from '../../api/client'
import { API_ENDPOINTS, LocalStorageKeys } from '../../libs/constants'

type Props = {
  name: string,
}

interface ResponsePayload {
  accessToken: string;
  refreshToken: string;
}

const PasswordForm: React.FC<Props> = ({ name }) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordInput>({
    defaultValues: { password: "", confirmPassword: "" },
    resolver: zodResolver(passwordSchema)
  });

  const onSubmit: SubmitHandler<PasswordInput> = async (formData) => {
    console.log({ name, email, ...formData });
    try {
      const client = new ApiClient(
        { "Content-Type": "application/json" },
        false
      );

      const response = await client.post<ResponsePayload>(
        API_ENDPOINTS.SIGN_UP,
        JSON.stringify({name, email, password: formData.password})
      );
      localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, response.accessToken);
      localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, response.refreshToken);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-[32px] leading-10 font-[600] text-center mb-4'><span className='text-primary-main'>Welcome</span> {name}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 p-6 w-[343px]'>
        <p className='text-neutral-400 font-[400] text-sm'>Almost there.</p>
        <div className='flex gap-4 items-center text-neutral-400'>
          <hr className='flex-1 border-neutral-400' />
          <span>or</span>
          <hr className='flex-1 border-neutral-400' />
        </div>
        <Input required register={register} error={errors.password?.message || ""} id='password' name='password' placeholder='********' type='password' frontIcon={LockIcon} endIcon={EyeCloseIcon} />
        <Input required register={register} error={errors.confirmPassword?.message || ""} id='confirmPassword' name='confirmPassword' placeholder='********' type='password' frontIcon={LockIcon} endIcon={EyeCloseIcon} />
        <AuthFormBtn label='Play with Tilted' />
      </form>
    </div>
  )
}

export default PasswordForm