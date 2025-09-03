import { Login } from '../../components/Login/Login';
import { DashboardAdminContainer } from './DashboardAdmin.style';

export function DashboardAdmin() {
  return (
    <DashboardAdminContainer>
      <Login Text={'Admin Dashboard Login'} />
    </DashboardAdminContainer>
  );
}
