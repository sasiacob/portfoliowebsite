import React from "react";

export default function Contact() {
	return (
		<>
			<div class="my-container home-container contact">
				<h1> Contact me...</h1>

				<form action="/action_page.php">
					<div>
						<label for="fname">Name</label>
						<input
							type="text"
							id="fname"
							name="fullName"
							placeholder="Your name.."
							required
						/>
					</div>
					<div>
						<label for="lname">
							Email <br />
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email.."
							required
						/>
					</div>
					<div>
						<label for="subject">Message</label>
						<textarea
							id="subject"
							name="subject"
							placeholder="Your message..."
							required
						></textarea>
					</div>

					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	);
}
