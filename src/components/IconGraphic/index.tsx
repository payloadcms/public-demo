import * as React from 'react';

export const Version: React.FC = () => {
  const [version, setVersion] = React.useState();

  React.useEffect(() => {
    const fetchVersion = async () => {
      const res = await fetch('/api/payload-version');
      if (res.status === 200) {
        const { version } = await res.json();
        setVersion(version);
      }
    }

    fetchVersion();
  }, []);

  return (
    <code style={{
      position: 'absolute',
      bottom: '3px',
      marginLeft: '3px',
      color: 'var(--theme-elevation-400)',
    }}>
      version {version}
    </code>
  );
}