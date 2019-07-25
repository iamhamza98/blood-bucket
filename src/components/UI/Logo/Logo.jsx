import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../assets/images/blood-logo.png";

const Logo = props => {
	return (
		<div className={styles.Logo} style={{ height: props.height }}>
			<img src={logo} alt="Logo" />
		</div>
	);
};

export default Logo;
