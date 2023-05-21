import PropTypes from "prop-types";
import "../../../styles/components/creations/card/card.css";
import TagCardProjetList from "../tag_card_projet_list/tag_card_projet_list";
import Title from "react-vanilla-tilt";

const Card = ({ theme, projet }) => {
	return (
		<Title
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				className={`card card--${projet.imagePrincipalePosition}`}
				style={{ backgroundImage: `url(${projet.imagePrincipale})` }}
			>
				<div className="card__bottom">
					<span className="card__bottom__nom_projet">{projet.nom}</span>
					<div className="card__bottom__etiquette_et_tags">
						<span className="card__bottom__etiquette_et_tags__etiquette">
							{projet.theme}
						</span>
						<TagCardProjetList theme={theme} tags={projet.tags} />
					</div>
				</div>
			</div>
		</Title>
	);
};

Card.propTypes = {
	theme: PropTypes.string.isRequired,
	projet: PropTypes.object.isRequired,
};

Card.defaultProps = {};

export default Card;