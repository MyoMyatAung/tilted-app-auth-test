import SocialLogin from '../shared/SocialLogin';
import EmailIcon from "../../assets/icons/email-icon.svg";
import LockIcon from "../../assets/icons/lock-icon.svg";
import EyeCloseIcon from "../../assets/icons/eye-close-icon.svg";
import { Link, useNavigate } from 'react-router-dom';
import { API_ENDPOINTS, LocalStorageKeys, RoutesPath } from '../../libs/constants';
import Input from '../shared/form/Input';
import AuthFormBtn from '../shared/form/AuthFormBtn';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInInput, signInSchema } from '../../libs/schemas/auth.schema';
import { ApiClient } from '../../api/client';

interface ResponsePayload {
  accessToken: string;
  refreshToken: string;
}

const SignInForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<SignInInput>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(signInSchema)
  });

  const onSubmit: SubmitHandler<SignInInput> = async (formData) => {
    try {
      const client = new ApiClient(
        { "Content-Type": "application/json" },
        false
      );

      const response = await client.post<ResponsePayload>(
        API_ENDPOINTS.SIGN_IN,
        JSON.stringify(formData)
      );
      localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, response.accessToken);
      localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, response.refreshToken);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 p-6 w-[343px]' noValidate>
      <SocialLogin />
      <div className='flex gap-4 items-center text-neutral-400'>
        <hr className='flex-1 border-neutral-400' />
        <span>or</span>
        <hr className='flex-1 border-neutral-400' />
      </div>
      <Input required register={register} error={errors.email?.message || ""} id='email' name='email' placeholder='Email' type='email' frontIcon={EmailIcon} />
      <Input required register={register} error={errors.password?.message || ""} id='password' name='password' placeholder='*****' type='password' frontIcon={LockIcon} endIcon={EyeCloseIcon} />
      <div className="flex items-center justify-end">
        <h4 className='text-xs text-neutral-0 font-[500] underline'>Forgot Password</h4>
      </div>
      <AuthFormBtn label='Sign In' />
      <h4 className='text-xs text-neutral-400 font-[500] text-center'>Dont have an account? <Link to={`/${RoutesPath.SIGN_UP}`}><span className='text-neutral-0 underline'>Sign up</span></Link></h4>
    </form>
  )
}

export default SignInForm