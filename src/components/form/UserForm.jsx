import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function UserForm({ handleSubmit, userData, btnText }) {
	const [user, setUser] = useState(userData || {});
	const [adress, setAdress] = useState(userData.adress || {});

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}
	function handleChangeAdress(e) {
		setAdress({ ...adress, [e.target.name]: e.target.value });
	}

	const submit = (e) => {
		e.preventDefault();
		user.adress = adress;
		handleSubmit(user);
	};

	// Mascaras de input
	function maskCpf(cpf) {
		cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
		return cpf;
	}
	function maskPhone(phone) {
		phone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
		return phone;
	}
	function maskCep(cep) {
		cep = cep.replace(/^(\d{5})(\d{3})/, "$1-$2");
		return cep;
	}
	return (
		<form onSubmit={submit} className="row">
			<h3>Informe os seus dados:</h3>
			<Input type="text" text="Nome" name="name" handleOnChange={handleChange} placeholder="Informe o seu nome" />
			<Input
				type="text"
				text="CPF"
				name="cpf"
				value={user.cpf ? maskCpf(user.cpf) : ""}
				maxLength="14"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Informe o seu CPF"
			/>
			<Input
				type="tel"
				text="Telefone"
				name="phone"
				value={user.phone ? maskPhone(user.phone) : ""}
				maxLength="15"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Informe o seu telefone"
			/>
			<Input
				type="email"
				text="E-mail"
				name="email"
				value={user.email}
				placeholder="Informe o seu e-mail"
				handleOnChange={handleChange}
			/>
			<Input
				type="password"
				text="Senha"
				name="password"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Informe a sua senha"
			/>
			<Input
				type="password"
				text="Confirmação"
				name="confPassword"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Confirme a senha"
			/>
			<h3>Informe o seu endereço:</h3>
			<Input
				type="text"
				text="CEP"
				name="passcode"
				value={adress.passcode ? maskCep(adress.passcode) : ""}
				maxLength="9"
				classis="col-lg-4"
				handleOnChange={handleChangeAdress}
				placeholder="Informe o CEP"
			/>
			<Input
				type="text"
				text="Endereço"
				name="adressName"
				value={adress.adressName}
				classis="col-lg-10"
				handleOnChange={handleChangeAdress}
				placeholder="Informe o seu endereço"
			/>
			<Input
				type="text"
				text="Nº"
				name="number"
				value={adress.number}
				classis="col-lg-2"
				handleOnChange={handleChangeAdress}
				placeholder="Número"
			/>
			<Input
				type="text"
				text="Complemento"
				name="complement"
				value={adress.complement}
				handleOnChange={handleChangeAdress}
				placeholder="Algum complemento?"
			/>
			<Input
				type="text"
				text="Bairro"
				name="neighborhood"
				value={adress.neighborhood}
				classis="col-lg-5"
				handleOnChange={handleChangeAdress}
				placeholder="Informe o seu bairro"
			/>
			<Input
				type="text"
				text="Cidade"
				name="city"
				value={adress.city}
				classis="col-lg-5"
				handleOnChange={handleChangeAdress}
				placeholder="Informe a sua cidade"
			/>
			<Input
				type="text"
				text="Estado"
				name="state"
				value={adress.state}
				classis="col-lg-2"
				maxLength="2"
				handleOnChange={handleChangeAdress}
				placeholder="UF"
			/>
			<Button text={btnText} type="submit" />
		</form>
	);
}

export default UserForm;