import { Help } from "./styles";

interface Props {
	close: () => void;
}

export const HelpModal = ({close}: Props) => {


	return (
		<Help className="help">
			<span onClick={close} id="close">X</span>
			<ul>
				<li>
					Clique em ✔️ ou 🇹 para alternar entre tarefa e texto simples.
				</li>
				<li>
					Clique em <span>+</span> ou tecle enter para adicionar o evento.
				</li>
				<li>
					Você pode mover os itens com o mouse para organizar.
				</li>
				<li>
					Você pode fechar o site e seu trabalho continuará aqui.
				</li>
			</ul>
		</Help>
	);
}