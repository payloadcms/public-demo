import type { Payload } from 'payload'

export const revalidate = async (args: {
  collection: string
  payload: Payload
  slug: string
}): Promise<void> => {
  const { collection, payload, slug } = args

  try {
    const res = await fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.REVALIDATION_KEY}&collection=${collection}&slug=${slug}`,
    )

    if (res.ok) {
      payload.logger.info(`Revalidated page '${slug}' in collection '${collection}'`)
    } else {
      payload.logger.error(
        { res },
        `Error revalidating page '${slug}' in collection '${collection}'`,
      )
    }
  } catch (err: unknown) {
    payload.logger.error(
      { err },
      `Error hitting revalidate route for page '${slug}' in collection '${collection}'`,
    )
  }
}
