import React from 'react';
import { Banner, Check } from 'payload/components';

import './index.scss';

const baseClass = 'before-dashboard';

const BeforeDashboard: React.FC = () => {
	return (
		<div className={baseClass}>
			<Banner type="success">
				<Check />
				<strong>Payload is completely free and open-source.</strong> If you like what we're doing, <a href="https://github.com/payloadcms/payload" target="_blank">leave us a star on GitHub!</a>
			</Banner>
		</div>
	);
};

export default BeforeDashboard;
