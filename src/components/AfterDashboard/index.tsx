import React from 'react';

import './index.scss';

const baseClass = 'after-dashboard';

const AfterDashboard: React.FC = () => {
	return (
		<div className={baseClass}>
			<h4>Join our Discord</h4>
			<p>Every day, developers are actively talking about Payload and helping each other build awesome things in our Discord community. It can be a great resource to learn about what's happening with Payload before anyone else and get quick help straight from the Payload team as well as our community. <a href="https://discord.com/invite/r6sCXqVk3v" target="_blank">Click here to join!</a></p>
			<h4>GraphQL Playground</h4>
			<p>
				Did you know that Payload gives you a complete GraphQL server too? Try the <a
					href="/api/graphql-playground" target="_blank">GraphQL playground</a> for this demo.
			</p>
			<h4>Talk with us</h4>
			<p>
				We're here to help! You can <a href="mailto:info@payloadcms.com?subject=Payload Demo" target="_blank">email
					us</a> with any questions.
			</p>
		</div>
	);
};

export default AfterDashboard;
