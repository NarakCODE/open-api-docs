// app/reference/route.ts
import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    url: './public/openapi.ymal',
  },
};

export const GET = ApiReference(config);
