import React from "react";

export default function Contact() {
	return (
		<div class="contact">
			<form action="/action_page.php">
				<label for="fname">Name</label>
				<input
					type="text"
					id="fname"
					name="fullName"
					placeholder="Your name.."
				/>

				<label for="lname">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your email.."
				/>

				<label for="subject">Message</label>
				<textarea
					id="subject"
					name="subject"
					placeholder="Write something.."
				></textarea>

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
