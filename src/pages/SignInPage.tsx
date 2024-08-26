import Container from "../components/shared/Container"
import AboutUsContent from "../components/sign-in/AboutUsContent"
import FooterContent from "../components/sign-in/FooterContent"
import HeadingContent from "../components/sign-in/HeadingContent"
import HowItWorkContent from "../components/sign-in/HowItWorkContent"
import LearnMoreContent from "../components/sign-in/LearnMoreContent"
import Logo from "../components/sign-in/Logo"
import OverLayImages from "../components/sign-in/OverLayImages"
import SignInForm from "../components/sign-in/SignInForm"
import { useAuthRouteWrapper } from "../hooks/useCheckAuth"


const SignInPage = () => {
  useAuthRouteWrapper();

  return (
    <div className="relative min-h-screen bg-grid-pattern bg-no-repeat overflow-x-hidden">
      <OverLayImages />
      <div className="pt-[49px]">
        <Logo />
      </div>
      <div className="mt-5">
        <Container classes="flex flex-col gap-6 items-center">
          <HeadingContent />
          <section className="mt-4 pb-12">
            <SignInForm />
          </section>
          <HowItWorkContent />
          <LearnMoreContent />
          <AboutUsContent />
          <FooterContent />
        </Container>
      </div>
    </div>
  )
}

export default SignInPage