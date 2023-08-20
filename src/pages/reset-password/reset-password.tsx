import ResetPasswordForm from '../../components/forms/reset-password/reset-password'
import { Navigate, useLocation, Location } from "react-router-dom";

const ResetPassword = () => {

    const location: Location = useLocation()

    return (location.state === 'forgot'
        ?
        <ResetPasswordForm />
        :
        <Navigate to='/login' />

    );
}

export default ResetPassword;