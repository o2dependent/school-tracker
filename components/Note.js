import React from 'react';

export default function Note({ body }) {
	return (
		<article>
			<h4>Title</h4>
			<p>{body}</p>
		</article>
	);
}
