import SocialLogin from '../shared/SocialLogin'
import Input from '../shared/form/Input'
import AuthFormBtn from '../shared/form/AuthFormBtn'
import EmailIcon from "../../assets/icons/email-icon.svg";
import PersonIcon from "../../assets/icons/person-icon.svg";
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpInput, signUpSchema } from '../../libs/schemas/auth.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from 'react-router-dom';
import { objectToQueryString } from '../../utils';

const SignUpForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpInput>({
    defaultValues: { email: "", name: "" },
    resolver: zodResolver(signUpSchema)
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpInput> = async (formData) => {
    const q = objectToQueryString(formData);
    navigate(`?${q}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 p-6 w-[343px]' noValidate>
      <h1 className='text-[32px] leading-10 font-[600] text-center mb-8'>Create Account</h1>
      <SocialLogin />
      <div className='flex gap-4 items-center text-neutral-400'>
        <hr className='flex-1 border-neutral-400' />
        <span>or</span>
        <hr className='flex-1 border-neutral-400' />
      </div>
      <Input required register={register} error={errors.name?.message || ""} id='name' name='name' placeholder='Full Name' type='text' frontIcon={PersonIcon} />
      <Input required register={register} error={errors.email?.message || ""} id='email' name='email' placeholder='your@email.com' type='email' frontIcon={EmailIcon} />
      <AuthFormBtn label='Continue' />
    </form>
  )
}

export default SignUpForm