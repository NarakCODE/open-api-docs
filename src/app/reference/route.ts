// app/reference/route.ts
import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    url: 'https://api.api-fiddle.com/v1/public/resources/oas_api_3_1/lu-channaraks-organization-wkn/orange-fox-bzpn',
  },
};

export const GET = ApiReference(config);
