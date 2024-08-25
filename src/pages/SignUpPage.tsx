import { useEffect, useState } from "react";
import PasswordForm from "../components/sign-up/PasswordForm";
import SignUpForm from "../components/sign-up/SignUpForm";
import WelcomeGamingContent from "../components/sign-up/WelcomeGamingContent";
import { useSearchParams } from "react-router-dom";

const SignUpPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [displayPasswordForm, setDisplayPasswordForm] = useState(false);
  useEffect(() => {
    if (!!name) {
      setDisplayPasswordForm(prev => !!name);
    }
  }, [name])

  return (
    <div className="flex items-center min-h-screen bg-grid-pattern bg-no-repeat overflow-x-hidden">
      <div className="py-9 px-4 flex-1 flex items-center justify-center">
        {!displayPasswordForm && <SignUpForm />}
        {(displayPasswordForm && !!name) && <PasswordForm name={name} />}
      </div>
      <WelcomeGamingContent />
    </div>
  )
}

export default SignUpPage