import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout2() {
	return (
		<>
			<Header
				logoSrc="/images/medicotech.png"
				variant="cs_white_color"
			/>
			<Outlet />
			<Footer />
		</>
	);
}
