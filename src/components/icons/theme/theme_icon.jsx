import PropTypes from "prop-types";
import "../../../styles/components/icons/theme/theme_icon.css";

const ThemeIcon = ({ theme, setTheme }) => {
	function changeTheme() {
		if (theme === "sombre") {
			setTheme("clair");
			localStorage.setItem("theme", "clair");
		} else if (theme === "clair") {
			setTheme("sombre");
			localStorage.setItem("theme", "sombre");
		}
	}
	return (
		<div className="theme_icon" onClick={changeTheme}>
			{theme === "sombre" ? (
				<svg
					width="39"
					height="39"
					viewBox="0 0 39 39"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.1428 19.3061C12.1428 15.1358 15.5235 11.7551 19.6938 11.7551C23.8641 11.7551 27.2449 15.1358 27.2449 19.3061C27.2449 23.4764 23.8641 26.8571 19.6938 26.8571C15.5235 26.8571 12.1428 23.4764 12.1428 19.3061Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19.6939 0.428574C20.7365 0.428574 21.5817 1.27376 21.5817 2.31633V6.09184C21.5817 7.13441 20.7365 7.97959 19.6939 7.97959C18.6513 7.97959 17.8062 7.13441 17.8062 6.09184V2.31633C17.8062 1.27376 18.6513 0.428574 19.6939 0.428574Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M34.2429 4.75699C34.9801 5.49422 34.9801 6.68947 34.2429 7.42669L30.4674 11.2022C29.7302 11.9394 28.5349 11.9394 27.7977 11.2022C27.0606 10.465 27.0606 9.26973 27.7977 8.5325L31.5733 4.75699C32.3104 4.01978 33.5058 4.01978 34.2429 4.75699Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M31.0205 19.3061C31.0205 18.2635 31.8657 17.4184 32.9083 17.4184H36.6838C37.7264 17.4184 38.5715 18.2635 38.5715 19.3061C38.5715 20.3487 37.7264 21.1939 36.6838 21.1939H32.9083C31.8657 21.1939 31.0205 20.3487 31.0205 19.3061Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M27.7977 27.4101C28.5349 26.6729 29.7302 26.6729 30.4674 27.4101L34.2429 31.1856C34.9801 31.9227 34.9801 33.1181 34.2429 33.8552C33.5058 34.5924 32.3104 34.5924 31.5733 33.8552L27.7977 30.0797C27.0606 29.3426 27.0606 28.1472 27.7977 27.4101Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19.6939 30.6327C20.7365 30.6327 21.5817 31.4778 21.5817 32.5204V36.2959C21.5817 37.3385 20.7365 38.1837 19.6939 38.1837C18.6513 38.1837 17.8062 37.3385 17.8062 36.2959V32.5204C17.8062 31.4778 18.6513 30.6327 19.6939 30.6327Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.5899 27.4101C12.3271 28.1472 12.3271 29.3426 11.5899 30.0797L7.8144 33.8552C7.07718 34.5924 5.88193 34.5924 5.1447 33.8552C4.4075 33.1181 4.4075 31.9227 5.1447 31.1856L8.92021 27.4101C9.65744 26.6729 10.8527 26.6729 11.5899 27.4101Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0.816406 19.3061C0.816406 18.2635 1.66159 17.4184 2.70416 17.4184H6.47967C7.52224 17.4184 8.36743 18.2635 8.36743 19.3061C8.36743 20.3487 7.52224 21.1939 6.47967 21.1939H2.70416C1.66159 21.1939 0.816406 20.3487 0.816406 19.3061Z"
					/>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5.1447 4.75699C5.88193 4.01978 7.07718 4.01978 7.8144 4.75699L11.5899 8.5325C12.3271 9.26973 12.3271 10.465 11.5899 11.2022C10.8527 11.9394 9.65744 11.9394 8.92021 11.2022L5.1447 7.42669C4.4075 6.68947 4.4075 5.49422 5.1447 4.75699Z"
					/>
				</svg>
			) : (
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className={`theme_icon--${theme}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19.9569 35.9912C13.8298 35.9912 8.50029 32.5341 5.80049 27.4692C18.2032 28.5215 28.5233 18.235 27.4711 5.80027C32.534 8.50007 35.9914 13.8299 35.9914 19.957C35.9914 28.798 28.7979 35.9912 19.9569 35.9912ZM27.0293 1.21707C24.8058 0.375561 23.0627 2.85142 23.425 5.20109C25.0252 15.5776 15.6146 25.063 5.19904 23.4326C2.85024 23.0649 0.375342 24.8055 1.21671 27.029C4.06087 34.5455 11.3149 40 19.9569 40C31.0267 40 40 31.0268 40 19.957C40 11.311 34.5428 4.06057 27.0293 1.21707Z"
					/>
				</svg>
			)}
		</div>
	);
};

ThemeIcon.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

export default ThemeIcon;
