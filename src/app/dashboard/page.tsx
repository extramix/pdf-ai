import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Dashboard = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  return isAuthenticated() ? (
    <div>
      <p>Welcome {user.email}</p>
    </div>
  ) : (
    <div>
      <p>You are not logged in.</p>
    </div>
  );
};

export default Dashboard;
