/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useForm } from 'payload/components/forms';
import './index.scss';

const Breadcrumbs: React.FC = () => {
	const { getDataByPath } = useForm();

	const breadcrumbs = getDataByPath('breadcrumbs');

	if (Array.isArray(breadcrumbs) && breadcrumbs?.length > 0) {
		const url = `${process.env.PAYLOAD_PUBLIC_APP_URL}${breadcrumbs?.[breadcrumbs.length - 1]?.url}`;

		return (
			<div className="payload__breadcrumbs">
				<strong>URL:</strong>
				&nbsp;&nbsp;
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{url}
				</a>
			</div>
		);
	}

	return null;
};

export default Breadcrumbs;
