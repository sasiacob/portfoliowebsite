import React from "react";

export default function About() {
	return (
		<>
			<div className="my-container about-container">
				<h1>
					<a href="https://github.com/sasiacob" target="_blank">
						Github
					</a>
				</h1>

				<table>
					<tr>
						<th colSpan="3"> Skill matrix</th>
					</tr>
					<tr>
						<th>Tech</th>
						<th>Yrs used</th>
						<th>Level</th>
					</tr>
					<tr>
						<td>ReactJs</td>
						<td>{"<1"}</td>
						<td>2</td>
					</tr>
					<tr>
						<td> C# .NET Core</td>
						<td> 1</td>
						<td> 2</td>
					</tr>
					<tr>
						<td> C# .NET</td>
						<td> 3</td>
						<td> 3</td>
					</tr>
					<tr>
						<td>HTML</td>
						<td> 3</td>
						<td> 3</td>
					</tr>
					<tr>
						<td>CSS</td>
						<td> 3</td>
						<td> 2.5</td>
					</tr>
					<tr>
						<td>Javascript</td>
						<td> {"<1"}</td>
						<td> 2</td>
					</tr>
					<tr>
						<td>SQL</td>
						<td> 2</td>
						<td> 2.5</td>
					</tr>
					<tr>
						<td>ML</td>
						<td> 1</td>
						<td> 2</td>
					</tr>
					<tr>
						<td>C++</td>
						<td> 3</td>
						<td> 2</td>
					</tr>
					<tr>
						<td>Git</td>
						<td> {"<1"}</td>
						<td> 2</td>
					</tr>
					<tr>
						<td>Google Spreadsheets, Docs, Presentation</td>
						<td> 2</td>
						<td> 4</td>
					</tr>
				</table>

				<h1>College/Personal Projects</h1>

				<article>
					<p>
						<strong>Name: </strong> Personal website (Portfolio)
					</p>
					<p>
						<strong>Description: </strong> Personal project, wich gave me
						substantial knowldege about Web development, fron-end, back-end etc
					</p>
					<p>
						<strong>Language(s): </strong> HTMl, CSS, React
					</p>
					<p>
						<strong>Platform: </strong> VSCode
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>

				<article>
					<p>
						<strong>Name: </strong> XOR BackPropagation
					</p>
					<p>
						<strong>Description: </strong> College project, in wich I
						implemented a <b>BackPropagation neural network</b> that is capable
						to learn the XOR function, with 2 entry-units, 1 hidden layer with 2
						neurons and 1 output.
					</p>
					<p>
						<strong>Language(s): </strong> C#
					</p>
					<p>
						<strong>Platform: </strong> Visual Studio
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>
				<article>
					<p>
						<strong>Name: </strong> Area division BackPropagation
					</p>
					<p>
						<strong>Description: </strong> BackPropagation Network wich learns
						to divide all possible points in areas based on entry points wich
						have defined that areas.{" "}
					</p>
					<p>
						<strong>Language(s): </strong> C#
					</p>
					<p>
						<strong>Platform: </strong> Visual Studio
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>
				<article>
					<p>
						<strong>Name: </strong> K-means Clustering
					</p>
					<p>
						<strong>Description: </strong> College project in wich some clusers
						(random number, random position) take all the nearest points, and
						then move in the centre of that points. The algorithm stops when the
						clusters don't move anymore.{" "}
					</p>
					<p>
						<strong>Language(s): </strong> C#
					</p>
					<p>
						<strong>Platform: </strong> Visual Studio
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>
				<article>
					<p>
						<strong>Name: </strong> SOM
					</p>
					<p>
						<strong>Description: </strong> Project in wich I implemented a{" "}
						<b> Self Organizing Map artificial neural network (ANN) </b> that is
						trained using unsupervised learging. Each neuron has connections
						with their neighbour and they move towards the centre of given
						points.{" "}
					</p>
					<p>
						<strong>Language(s): </strong> C#
					</p>
					<p>
						<strong>Platform: </strong> Visual Studio
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>
				<article>
					<p>
						<strong>Name: </strong> MPI Matrix
					</p>
					<p>
						<strong>Description: </strong> Message Passing Interface project
						wich multiplies 2 matrices in parallel. The algorithm is divided in
						several processes, wich are executed in parallel.{" "}
					</p>
					<p>
						<strong>Language(s): </strong> C / C++)
					</p>
					<p>
						<strong>Platform: </strong> Visual Studio
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>
				<article>
					<p>
						<strong>Name: </strong> Superscalar Architecture Simulator
					</p>
					<p>
						<strong>Description: </strong> This project consists in creating a
						parameterizable simulator wich exposes the influence of{" "}
						<b>maximum number of instructions launched capability</b> of the cpu
						on the <b>IR (instruction rate)</b>.{" "}
					</p>
					<p>
						<strong>Language(s): </strong> C#
					</p>
					<p>
						<strong>Platform: </strong> Visual Studio
					</p>
					<p>
						<strong>Link:</strong> Link
					</p>
				</article>
			</div>
		</>
	);
}
