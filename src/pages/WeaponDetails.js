import React from "react";
import { useParams } from "react-router";

export default function WeaponDetails() {
	const { name } = useParams();
	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
}
