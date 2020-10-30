import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthCard from '../Card';
import './styles.scss';
import { makeLogin } from 'core/utils/request';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        makeLogin(data);
      }
    
    
    return(
        <AuthCard title="Login">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
              <input type="email"
                name="username"
                className="form-control input-base margin-bottom-30"
                placeholder="Email"
                ref={register}
               /> 
              <input type="password"
                name="password"
                className="form-control input-base"
                placeholder="Senha"
                ref={register}
               /> 
               <Link to="/admin/auth/recover" className="login-link-recover">
                Esqueci a senha?
               </Link>
               <div className="login-submit">
                  <ButtonIcon text="Logar"/>
               </div>
               <div className="text-center">
                   <span className="not-registered">
                       Não tem Cadastro?
                   </span>
                   <Link to="/admin/auth/register" className="login-link-register">
                       CADASTRAR
                   </Link>
               </div>
            </form>
        </AuthCard>
    )
}

export default Login;