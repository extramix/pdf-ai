import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const SignIn = async () => {
  // const { getUser, isAuthenticated } = getKindeServerSession();
  // const user = await getUser();
  return (
    <>
      <div>
        <p>Welcome! Sign-in before using our services.</p>
      </div>
    </>
  );
};

export default SignIn;
