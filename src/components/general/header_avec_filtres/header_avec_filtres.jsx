import PropTypes from "prop-types";
import "../../../styles/components/general/header_avec_filtres/header_avec_filtres.css";
import TagsList from "../../creations/tags_list/tags_list";

const HeaderAvecFiltres = ({ type, theme, visibles, modifierVisibles }) => {
	return (
		<div className="header_avec_filtres">
			<span
				className={`header_avec_filtres__titre header_avec_filtres__titre--${theme} header_avec_filtres__titre--${type}`}
			>
				{type === "Mes créations" ? "Mes créations" : "Mes compétences"}
			</span>
			<TagsList
				theme={theme}
				visibles={visibles}
				modifierVisibles={modifierVisibles}
			/>
		</div>
	);
};

HeaderAvecFiltres.propTypes = {
	type: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
};

export default HeaderAvecFiltres;
