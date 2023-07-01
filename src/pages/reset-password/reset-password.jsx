import ResetPasswordForm from '../../components/forms/reset-password/reset-password'
import { Navigate, useLocation } from "react-router-dom";

function ResetPassword() {

    const location = useLocation()

    return (location.state === 'forgot'
        ?
        <ResetPasswordForm />
        :
        <Navigate to='/login' />

    );
}

export default ResetPassword;