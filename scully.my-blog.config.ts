import {ScullyConfig} from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'my-blog',
  outDir: './dist/static', // directory for scully build artifacts
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {folder: "./mdfiles"}
    },
  },
};
