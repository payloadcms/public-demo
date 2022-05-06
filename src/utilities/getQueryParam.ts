import qs from 'qs'

const getQueryParam = (param: string) => () => {
  if (typeof window !== 'undefined') {
    return qs.parse(window.location.search)?.[param] as string;
  }
  return null;
}

export default getQueryParam;