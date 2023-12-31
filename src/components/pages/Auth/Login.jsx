import Input from "../../form/Input";
import styles from "./Login.module.css";
import Button from "../../form/Button";
import { Link } from "react-router-dom";

function Login() {
	function handleChange() {}
	function handleSubmit() {}
	return (
		<section className="container-lg mt-3">
			<div className="row justify-content-center">
				<div className="col-sm-10 col-lg-7" id={styles.login_container}>
					<h1 className="mb-3">Login</h1>
					<form onSubmit={handleSubmit} className="row">
						<Input
							type="email"
							text="E-mail"
							name="email"
							placeholder="Informe o seu e-mail"
							handleOnChange={handleChange}
						/>
						<Input
							type="password"
							text="Senha"
							name="password"
							placeholder="Informe a sua senha"
							handleOnChange={handleChange}
						/>
						<Button text="Entrar" type="submit" />
						<div id={styles.register_container}>
							<p>Ainda não é cadastrado?</p>
							<p>
								<Link to="/register">Clique aqui!</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Login;
