import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile() {
	return (
		<section className="container-lg mt-lg-3 mt-0" id={styles.container}>
			<div className="row justify-content-center">
				<div className="col-12 col-lg-10 mt-3 mb-3" id={styles.profile_container}>
					<h3>Bem vindo Bruno</h3>
				</div>
				<div className="col-12 col-lg-10 mt-3">
					<div className="accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#admCollapse"
									aria-expanded="false"
									aria-controls="admCollapse">
									Administrativo
								</button>
							</h2>
							<div
								id="admCollapse"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<div className="row">
										<button></button>
									</div>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo">
									Pedidos
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<strong>This is the second item's accordion body.</strong> It is hidden by default,
									until the collapse plugin adds the appropriate classes that we use to style each
									element. These classes control the overall appearance, as well as the showing and
									hiding via CSS transitions. You can modify any of this with custom CSS or overriding
									our default variables. It's also worth noting that just about any HTML can go within
									the <code>.accordion-body</code>, though the transition does limit overflow.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne">
									Meus Dados
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<strong>This is the first item's accordion body.</strong> It is shown by default,
									until the collapse plugin adds the appropriate classes that we use to style each
									element. These classes control the overall appearance, as well as the showing and
									hiding via CSS transitions. You can modify any of this with custom CSS or overriding
									our default variables. It's also worth noting that just about any HTML can go within
									the <code>.accordion-body</code>, though the transition does limit overflow.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree">
									Favoritos
								</button>
							</h2>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<strong>This is the third item's accordion body.</strong> It is hidden by default,
									until the collapse plugin adds the appropriate classes that we use to style each
									element. These classes control the overall appearance, as well as the showing and
									hiding via CSS transitions. You can modify any of this with custom CSS or overriding
									our default variables. It's also worth noting that just about any HTML can go within
									the <code>.accordion-body</code>, though the transition does limit overflow.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Profile;
