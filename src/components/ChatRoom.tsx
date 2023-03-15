import React, { useState } from "react";

const ChatRoom = () => {
	const [userData, setUserData] = useState({
		username: "",
		receivername: "",
		connected: false,
		message: "",
	});

	return (
		<div className="container">
			{userData.connected ? (
				<div></div>
			) : (
				<div className="register"></div>
			)}
		</div>
	);
};

export default ChatRoom;
