import React from "react";

export default function About() {
	return (
		<>
			<div className="mywork">
				<h4>
					<a href="https://github.com/sasiacob" target="_blank">
						Github
					</a>
				</h4>

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
						<td>1</td>
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
						<td> 1</td>
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
						<td> 1</td>
						<td> 2</td>
					</tr>
					<tr>
						<td>Google Spreadsheets, Docs, Presentation</td>
						<td> 2</td>
						<td> 4</td>
					</tr>
				</table>

				<table>
					<tr>
						<th colSpan="5">College/Personal Projects</th>
					</tr>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Language(s)</th>
						<th>Platform</th>
						<th>Link</th>
					</tr>
					<tr>
						<td>Personal website (Portfolio)</td>
						<td>
							Personal project, wich gave me substantial knowldege about Web
							development, fron-end, back-end etc
						</td>
						<td>HTMl, CSS, React</td>
						<td>VSCode</td>
						<td>Link</td>
					</tr>
					<tr>
						<td>XOR BackPropagation</td>
						<td>
							College project, in wich I implemented a{" "}
							<b>BackPropagation neural network</b> that is capable to learn the
							XOR function, with 2 entry-units, 1 hidden layer with 2 neurons
							and 1 output.
						</td>
						<td>C#</td>
						<td>Visual Studio</td>
						<td>Link</td>
					</tr>
					<tr>
						<td>Area division BackPropagation</td>
						<td>
							BackPropagation Network wich learns to divide all possible points
							in areas based on entry points wich have defined that areas.{" "}
						</td>
						<td>C#</td>
						<td>Visual Studio</td>
						<td>Link</td>
					</tr>
					<tr>
						<td>K-means Clustering</td>
						<td>
							College project in wich some clusers (random number, random
							position) take all the nearest points, and then move in the centre
							of that points. The algorithm stops when the clusters don't move
							anymore.{" "}
						</td>
						<td>C#</td>
						<td>Visual Studio</td>
						<td>Link</td>
					</tr>
					<tr>
						<td>SOM</td>
						<td>
							Project in wich I implemented a{" "}
							<b> Self Organizing Map artificial neural network (ANN) </b> that
							is trained using unsupervised learging. Each neuron has
							connections with their neighbour and they move towards the centre
							of given points.{" "}
						</td>
						<td>C#</td>
						<td>Visual Studio</td>
						<td>Link</td>
					</tr>
					<tr>
						<td>MPI Matrix </td>
						<td>
							Message Passing Interface project wich multiplies 2 matrices in
							parallel. The algorithm is divided in several processes, wich are
							executed in parallel.{" "}
						</td>
						<td>C / C++)</td>
						<td>Visual Studio</td>
						<td>Link</td>
					</tr>
					<tr>
						<td>Superscalar Architecture Simulator</td>
						<td>
							{" "}
							This project consists in creating a parameterizable simulator wich
							exposes the influence of{" "}
							<b>maximum number of instructions launched capability</b> of the
							cpu on the <b>IR (instruction rate)</b>.{" "}
						</td>
						<td>C#</td>
						<td>Visual Studio</td>
						<td>Link</td>
					</tr>
				</table>
			</div>
		</>
	);
}
