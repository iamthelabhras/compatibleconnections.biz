import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  /* Custom components can be placed here.  See: https://github.com/portabletext/to-html#customizing-components for more details about syntx & setup.*/
  types: {
    image: ({value}) => `<img src="${urlForImage(value).url()}" />`,
  }
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}