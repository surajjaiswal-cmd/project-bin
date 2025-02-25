
import { defineLive } from "next-sanity";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2023-12-01",
    token: process.env.SANITY_SERVER_TOKEN,
    useCdn: false,
  }),
  serverToken: process.env.SANITY_SERVER_TOKEN,
  browserToken: process.env.SANITY_WRITE_CLIENT,
});
