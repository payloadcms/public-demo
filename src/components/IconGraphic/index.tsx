import * as React from 'react';

const css = `
  .graphic-icon path {
    fill: var(--theme-elevation-1000);
  }

  .graphic-icon .version {
    color: var(--theme-elevation-400);
    margin: 0;
    margin-top: 10px;
    text-decoration: underline;
    text-decoration-color: var(--theme-bg);
  }
`;

const PayloadIcon: React.FC = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z"
    />
    <path
      d="M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z"
    />
  </svg>
);

export const Icon:React.FC = () => {
  const [version, setVersion] = React.useState();

  React.useEffect(() => {
    const fetchVersion = async () => {
      const res = await fetch('/api/payload-version');
      if (res.status === 200) {
        const { version } = await res.json();
        console.log(typeof version)
        setVersion(version.replace(/[^0-9.]/g, ''));
      }
    }

    fetchVersion();
  }, []);

  return (
    <React.Fragment>
      <style>
        {css}
      </style>
      <div className="graphic-icon">
        <PayloadIcon />
        {version && <p className="version">v{version}</p>}
      </div>
    </React.Fragment>
  );
}